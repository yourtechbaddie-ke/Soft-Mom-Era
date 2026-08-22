/* =========================================================
   SOFT MOM ERA — STAGE 4
   Replit-ready Aura API server
   ========================================================= */

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

function json(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function body(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", chunk => {
      raw += chunk;
      if (raw.length > 100000) {
        req.destroy();
        reject(new Error("Request too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function safeFile(urlPath) {
  const requested = urlPath === "/" ? "/index.html" : urlPath;
  const resolved = path.normalize(path.join(ROOT, requested));
  return resolved.startsWith(ROOT) ? resolved : null;
}

async function callModel(messages) {
  const apiKey = process.env.AURA_API_KEY || process.env.OPENAI_API_KEY;
  const endpoint = process.env.AURA_API_URL || "https://api.openai.com/v1/chat/completions";
  const model = process.env.AURA_MODEL || "gpt-4o-mini";

  if (!apiKey) {
    return {
      content: "Aura is connected to the Soft Mom Era interface, but the AI provider has not been configured yet. Add the required Replit secret before enabling live responses.",
      configured: false
    };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.4,
      max_tokens: 700
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Aura provider error:", response.status, detail.slice(0, 500));
    throw new Error("AI provider request failed");
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("AI provider returned no message");
  }

  return { content, configured: true };
}

async function handleAura(req, res) {
  try {
    const payload = await body(req);
    const messages = Array.isArray(payload.messages) ? payload.messages : [];

    if (messages.length === 0 || messages.length > 20) {
      return json(res, 400, { error: "Provide between 1 and 20 conversation messages." });
    }

    const normalized = messages
      .filter(item => item && ["user", "assistant"].includes(item.role))
      .map(item => ({
        role: item.role === "assistant" ? "assistant" : "user",
        content: String(item.content || "").slice(0, 4000)
      }));

    if (!normalized.length) {
      return json(res, 400, { error: "No valid conversation messages were provided." });
    }

    const system = `You are Aura, the gentle AI companion inside Soft Mom Era.\nSlogan: Finding Peace in Chaos.\n\nProvide warm, educational, non-judgmental support for mothers. Do not diagnose, prescribe, provide individualized medication dosing, or replace qualified healthcare, mental-health or emergency professionals. If a situation appears urgent or dangerous, tell the user to seek appropriate urgent professional help. Prefer authoritative sources when discussing health. Never invent citations. Viral creator content is for topic inspiration, not medical evidence.`;

    const result = await callModel([
      { role: "system", content: system },
      ...normalized
    ]);

    return json(res, 200, {
      message: result.content,
      configured: result.configured,
      disclaimer: "Educational information only; not a diagnosis or substitute for professional care."
    });
  } catch (error) {
    console.error(error);
    return json(res, 500, {
      error: "Aura is temporarily unavailable. Please try again or seek professional support when appropriate."
    });
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (req.method === "GET" && url.pathname === "/api/health") {
    return json(res, 200, {
      app: "Soft Mom Era",
      slogan: "Finding Peace in Chaos",
      aura: "ready",
      configured: Boolean(process.env.AURA_API_KEY || process.env.OPENAI_API_KEY)
    });
  }

  if (req.method === "POST" && url.pathname === "/api/aura") {
    return handleAura(req, res);
  }

  if (req.method !== "GET" && req.method !== "HEAD") {
    return json(res, 405, { error: "Method not allowed" });
  }

  const file = safeFile(url.pathname);
  if (!file || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    return json(res, 404, { error: "Not found" });
  }

  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, {
    "Content-Type": MIME[ext] || "application/octet-stream",
    "X-Content-Type-Options": "nosniff"
  });

  if (req.method === "HEAD") return res.end();
  fs.createReadStream(file).pipe(res);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Soft Mom Era running on port ${PORT}`);
});
