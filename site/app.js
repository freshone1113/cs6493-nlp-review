const modules = window.NLP_REVIEW_MODULES;

const state = {
  query: "",
  filter: "all",
};

const searchInput = document.querySelector("#module-search");
const moduleGrid = document.querySelector("#module-grid");
const chapterList = document.querySelector("#chapter-list");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const sidebarToggle = document.querySelector("#sidebar-toggle");
const sidebarNav = document.querySelector(".sidebar-nav");

function normalize(value) {
  return value.toLowerCase().trim();
}

function moduleMatches(item) {
  const query = normalize(state.query);
  const passesFilter = state.filter === "all" || item.filter === state.filter;

  if (!passesFilter) {
    return false;
  }

  if (!query) {
    return true;
  }

  const searchable = [
    item.number,
    item.type,
    item.title,
    item.summary,
    item.priority,
    item.route,
    ...item.sources,
    ...item.topics,
    ...item.examFocus,
    ...item.sections.flatMap((section) => [
      section.title,
      ...(section.body || []),
      ...(section.bullets || []),
    ]),
    ...item.practice.tutorial,
    ...item.practice.homework,
    ...item.practice.final,
    item.practice.template,
  ]
    .join(" ")
    .toLowerCase();

  return searchable.includes(query);
}

function createModuleCard(item) {
  const article = document.createElement("article");
  article.className = "module-card";
  article.id = `module-${item.id}`;
  article.style.setProperty("--card-accent", getAccent(item.filter));
  article.innerHTML = `
    <div class="module-kicker">
      <span class="module-type">${item.type}</span>
      <span>Module ${item.number}</span>
    </div>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <ul class="topic-list">
      ${item.topics.map((topic) => `<li>${topic}</li>`).join("")}
    </ul>
    <div class="source-row">
      ${item.sources.map((source) => `<span>${source}</span>`).join("")}
    </div>
    <div class="module-actions">
      <a href="${item.href}">进入模块 -></a>
      <strong class="priority">${item.priority}</strong>
    </div>
  `;
  return article;
}

function createPracticeList(title, items) {
  return `
    <div class="practice-group">
      <h4>${title}</h4>
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

function createChapterPanel(item) {
  const article = document.createElement("article");
  article.className = "chapter-panel";
  article.id = `module-${item.id}`;
  article.style.setProperty("--card-accent", getAccent(item.filter));
  article.innerHTML = `
    <div class="chapter-head">
      <div>
        <span class="chapter-index">Module ${item.number}</span>
        <h3>${item.title}</h3>
      </div>
      <a class="button button-secondary" href="${item.href}">进入模块子页</a>
    </div>
    <div class="chapter-practice-grid">
      ${createPracticeList("Tutorial 题目", item.practice.tutorial)}
      ${createPracticeList("作业题目", item.practice.homework)}
      ${createPracticeList("期末题目", item.practice.final)}
    </div>
    <div class="template-box">
      <span>Answer Template</span>
      <p>${item.practice.template}</p>
    </div>
  `;
  return article;
}

function getAccent(filter) {
  const accents = {
    basic: "#54d5d0",
    tasks: "#f1b84b",
    llm: "#7ccf82",
    exam: "#ff7d67",
  };
  return accents[filter] || "#54d5d0";
}

function renderHomeSidebar() {
  const links = [
    { href: "#top", label: "首页", code: "00" },
    { href: "#routes", label: "复习路线", code: "R" },
    ...modules.map((item) => ({
      href: item.href,
      label: item.shortTitle,
      code: item.number,
    })),
  ];

  sidebarNav.replaceChildren(
    ...links.map((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.dataset.navLabel = link.label;
      anchor.innerHTML = `<span>${link.code}</span><strong>${link.label}</strong>`;
      return anchor;
    }),
  );
}

function renderModules() {
  const visibleModules = modules.filter(moduleMatches);
  moduleGrid.replaceChildren(...visibleModules.map(createModuleCard));
  resultCount.textContent = `${visibleModules.length} / ${modules.length} 个条目`;
  emptyState.hidden = visibleModules.length > 0;
  attachCardMotion();
  attachModuleTransitions();
}

function renderChapters() {
  if (!chapterList) {
    return;
  }
  chapterList.replaceChildren(...modules.map(createChapterPanel));
}

function setSidebarCollapsed(collapsed) {
  document.body.classList.toggle("sidebar-collapsed", collapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  sidebarToggle.querySelector(".sidebar-toggle-text").textContent = collapsed ? "展开" : "收起";
}

function attachCardMotion() {
  document.querySelectorAll(".module-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    });
  });
}

function attachModuleTransitions() {
  document.querySelectorAll('a[href^="module.html"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      event.preventDefault();
      const target = link.getAttribute("href");
      document.body.classList.add("is-navigating-module");
      setTimeout(() => {
        window.location.href = target;
      }, 360);
    });
  });
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderModules();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderModules();
  });
});

sidebarToggle.addEventListener("click", () => {
  setSidebarCollapsed(!document.body.classList.contains("sidebar-collapsed"));
});

renderHomeSidebar();
renderModules();
renderChapters();
attachModuleTransitions();
