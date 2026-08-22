# Soft Mom Era — Stage 4

## Aura AI foundation

**Brand:** Soft Mom Era  
**Slogan:** Finding Peace in Chaos

Stage 4 creates the production-oriented foundation for Aura without exposing provider credentials in the browser.

### Added

- `server.js` — Replit-ready Node server with `/api/aura` and `/api/health` endpoints.
- `data/aura-safety.js` — urgent/high-risk phrase detection and escalation messaging.
- `data/aura-prompts.js` — Aura personality, system policy and starter questions.
- `.env.example` — safe environment-variable template; contains no secrets.

### Replit setup

Add the following secrets in Replit Secrets:

- `AURA_API_KEY` — the API key for the selected AI provider.
- `AURA_API_URL` — optional OpenAI-compatible endpoint.
- `AURA_MODEL` — model supported by the provider.

Do **not** place a real API key in `app.js`, `aura.html`, `data/*.js`, GitHub or any public frontend file.

### Safety model

Aura is an educational assistant. It must not diagnose, prescribe, provide individualized medication dosing or act as an emergency service. High-risk and urgent questions should be escalated to appropriate professional care.

### Creator research

TikTok and YouTube creators may be researched for content themes, user questions and formats. Their posts should not be copied into the product. Health claims must be checked against authoritative sources before being used in Aura or the Mom Library.

### Not yet enabled

The existing `aura.html` UI still needs to be connected to `/api/aura`. That integration is the next implementation step. This separation keeps the provider key server-side and makes the Replit deployment safer.
