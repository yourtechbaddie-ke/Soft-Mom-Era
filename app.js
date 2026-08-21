const app = document.getElementById("app");

const navButtons = [
  ...document.querySelectorAll(".bottom-nav button")
];


function navigate(route) {
  history.pushState(
    { route },
    "",
    `#${route}`
  );

  render(route);
}


function card(item) {
  const [
    title,
    icon,
    desc,
    route
  ] = item;

  return `
    <button
      class="card card-button"
      data-route="${route}"
    >
      <div class="icon">${icon}</div>

      <h3>${title}</h3>

      <p>${desc}</p>
    </button>
  `;
}


function renderHome() {
  const d = SOFT_MOM_DATA.home;

  app.innerHTML = `
    <section class="hero">
      <div class="kicker">
        Soft Mom Era
      </div>

      <h1>
        ${d.title}
      </h1>

      <p>
        ${d.subtitle}
      </p>

      <button
        class="aura-top"
        data-route="aura"
      >
        Talk to Aura AI ✦
      </button>
    </section>

    <section class="section">
      <div class="page-head">
        <h2>For you, mama</h2>

        <p>
          Start wherever you need softness today.
        </p>
      </div>

      <div class="grid">
        ${d.featured.map(card).join("")}
      </div>
    </section>

    <section class="section">
      <div class="card">
        <span class="kicker">
          A little reminder
        </span>

        <h2>
          You are allowed to care for yourself too.
        </h2>

        <p>
          Soft Mom Era is designed to support
          the mother as a whole person —
          not only the roles she carries.
        </p>
      </div>
    </section>
  `;
}


function renderCollection(route) {
  const d = SOFT_MOM_DATA[route];

  app.innerHTML = `
    <section class="page-head">
      <span class="kicker">
        Soft Mom Era
      </span>

      <h1>
        ${d.title}
      </h1>

      <p>
        ${d.subtitle}
      </p>
    </section>

    <div class="grid">
      ${d.items.map(card).join("")}
    </div>
  `;
}


function renderTopic(key) {
  const d = TOPICS[key];

  if (!d) {
    return renderHome();
  }

  app.innerHTML = `
    <button
      class="back"
      data-route="home"
    >
      ← Back
    </button>

    <section class="page-head">
      <span class="kicker">
        Explore
      </span>

      <h1>
        ${d.title}
      </h1>

      <p>
        ${d.description}
      </p>
    </section>

    <div class="topic-list">
      ${d.topics
        .map(
          topic => `
            <article class="topic">
              <strong>
                ${topic}
              </strong>

              <p>
                Coming soon:
                curated guidance,
                practical tools and
                age/stage-aware support.
              </p>
            </article>
          `
        )
        .join("")}
    </div>

    <section class="section card">
      <h3>
        Trusted source categories
      </h3>

      <p>
        These topics are intended to be
        backed by reviewed information from
        recognized health and
        child-development organizations.
      </p>

      ${d.sources
        .map(
          source =>
            `<span class="pill">${source}</span>`
        )
        .join("")}
    </section>
  `;
}


function renderAura() {
  app.innerHTML = `
    <section class="page-head">
      <span class="kicker">
        Your gentle AI companion
      </span>

      <h1>
        Ask Aura ✦
      </h1>

      <p>
        Ask about your cycle,
        postpartum recovery,
        your baby, your children,
        parenting, nutrition and
        everyday mom life.
      </p>
    </section>

    <section class="aura-panel">
      <div
        class="messages"
        id="messages"
      >
        <div class="message aura">
          <strong>Aura ✦</strong>
          <br>

          Hi mama.
          What can I help you
          understand today?
        </div>
      </div>

      <form
        class="aura-form"
        id="auraForm"
      >
        <input
          id="auraInput"
          autocomplete="off"
          placeholder="Ask Aura a question..."
        />

        <button>
          Ask
        </button>
      </form>

      <p class="disclaimer">
        Aura is an educational assistant
        in this starter. It should not
        diagnose, prescribe, or replace
        a qualified healthcare professional.

        Production answers should use
        a vetted source library and
        safety escalation system.
      </p>
    </section>
  `;

  document
    .getElementById("auraForm")
    .addEventListener(
      "submit",
      handleAura
    );
}


function handleAura(event) {
  event.preventDefault();

  const input =
    document.getElementById("auraInput");

  const text =
    input.value.trim();

  if (!text) {
    return;
  }

  const messages =
    document.getElementById("messages");

  messages.insertAdjacentHTML(
    "beforeend",
    `
      <div class="message user">
        ${escapeHtml(text)}
      </div>
    `
  );

  const reply =
    demoAuraReply(text);

  messages.insertAdjacentHTML(
    "beforeend",
    `
      <div class="message aura">
        <strong>Aura ✦</strong>
        <br>
        ${reply}
      </div>
    `
  );

  input.value = "";

  messages.scrollTop =
    messages.scrollHeight;
}


function demoAuraReply(text) {
  const t =
    text.toLowerCase();

  if (
    /bleed|heavy bleeding|chest pain|breath|faint|self harm|suicide|unresponsive|seizure/
      .test(t)
  ) {
    return `
      This may need urgent professional
      assessment. Please seek immediate
      medical care rather than relying
      on an AI answer.

      In the production app, Aura should
      show the user's region-specific
      emergency options here.
    `;
  }

  if (
    /period|cycle|ovulat|pms/.test(t)
  ) {
    return `
      Cycle symptoms can vary from
      person to person.

      In the production version, Aura
      should use your logged cycle data
      plus reviewed women's-health sources,
      explain possible patterns without
      diagnosing, and tell you when a
      clinician should review persistent
      or unusual symptoms.
    `;
  }

  if (
    /baby|newborn|infant|breastfeed|formula/
      .test(t)
  ) {
    return `
      For babies, age and feeding method
      matter a lot.

      In production, Aura should ask
      the minimum necessary clarifying
      questions, use pediatric sources,
      and highlight warning signs that
      need professional care.
    `;
  }

  if (
    /postpartum|c-section|cesarean|birth recovery/
      .test(t)
  ) {
    return `
      Postpartum recovery is individual
      and can involve physical and
      emotional changes.

      Aura should tailor educational
      guidance to time since birth and
      birth type, while clearly separating
      normal recovery information from
      symptoms that need clinical assessment.
    `;
  }

  if (
    /toddler|child|kid|teen|tantrum|school/
      .test(t)
  ) {
    return `
      Children's needs change quickly
      with age.

      Aura should use age-specific
      developmental and parenting
      guidance, focus on practical
      next steps, and flag situations
      where a pediatric professional
      should be involved.
    `;
  }

  return `
    I can help you explore this.

    For the production version, Aura
    should answer from a curated,
    source-aware knowledge base and
    show the sources used, the date
    they were reviewed, and any safety
    or care-seeking guidance.
  `;
}


function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,

    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]
  );
}


function render(route) {
  navButtons.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.route === route
    );
  });

  if (route === "home") {
    return renderHome();
  }

  if (
    route === "me" ||
    route === "kids" ||
    route === "library"
  ) {
    return renderCollection(route);
  }

  if (route === "aura") {
    return renderAura();
  }

  return renderTopic(route);
}


document.addEventListener(
  "click",
  event => {
    const target =
      event.target.closest(
        "[data-route]"
      );

    if (!target) {
      return;
    }

    const route =
      target.dataset.route;

    if (route) {
      navigate(route);
    }
  }
);


window.addEventListener(
  "popstate",
  () => {
    render(
      location.hash.slice(1) ||
      "home"
    );
  }
);


render(
  location.hash.slice(1) ||
  "home"
);