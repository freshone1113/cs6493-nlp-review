const notebooks = window.NLP_NOTEBOOK || [];

const STORAGE_KEY = "cs6493-study-progress-v1";
const state = {
  query: "",
  mode: "all",
  progress: loadProgress(),
  drillIndex: 0,
};

const atlasNav = document.querySelector("#atlas-nav");
const sidebarToggle = document.querySelector("#sidebar-toggle");
const searchInput = document.querySelector("#atlas-search");
const modeButtons = [...document.querySelectorAll("[data-mode]")];
const notebookList = document.querySelector("#notebook-list");
const atlasCount = document.querySelector("#atlas-count");
const atlasEmpty = document.querySelector("#atlas-empty");
const completionRate = document.querySelector("#completion-rate");
const completionBar = document.querySelector("#completion-bar");
const nextAction = document.querySelector("#next-action");

const drillSource = document.querySelector("#drill-source");
const drillQuestion = document.querySelector("#drill-question");
const drillHint = document.querySelector("#drill-hint");
const drillAnswer = document.querySelector("#drill-answer");
const revealAnswer = document.querySelector("#reveal-answer");
const shuffleCard = document.querySelector("#shuffle-card");
const composeAnswer = document.querySelector("#compose-answer");
const composedAnswer = document.querySelector("#composed-answer");

const drills = [
  {
    source: "Module 1",
    question: "解释 NLP / NLU / NLG 的区别，并各给一个例子。",
    hint: "先说共同点：都属于 NLP；再用 input -> output 区分。",
    answer:
      "NLP is the broader field. NLU maps natural language to structured information, such as classification, NER, QA, intent detection, or slot filling. NLG generates natural language from information, source text, or context, such as MT, summarization, and dialogue generation. A strong answer states input, output, and one concrete example.",
  },
  {
    source: "Module 2 / HW1",
    question: "为什么 n-gram model 很难泛化到 novel sequence？",
    hint: "三件事一起写：exact count、V^n、Markov assumption。",
    answer:
      "n-gram models rely on observed frequency counts of exact contexts. Even if individual words are known, a new combination may be unseen and get zero or unreliable probability. As n grows, possible combinations grow roughly as |V|^n, causing sparsity and storage cost. The Markov assumption also limits context to the previous n-1 tokens, so long-range dependencies are difficult to capture.",
  },
  {
    source: "Module 3",
    question: "ELMo 相比 Word2Vec/GloVe 解决了什么问题？",
    hint: "关键词：static embedding、polysemy、contextualized representation。",
    answer:
      "Word2Vec and GloVe assign one static vector to each word, so the same word receives the same representation in all sentences. This cannot distinguish polysemy, such as bank in river bank and bank account. ELMo uses a deep bidirectional LSTM to produce context-dependent representations, allowing the vector to change with the sentence context.",
  },
  {
    source: "Module 4 / HW2",
    question: "Attention 里的 Q、K、V 分别是什么？mask 应该放在 softmax 前还是后？",
    hint: "Q/K 用来匹配，V 用来取内容；mask before softmax。",
    answer:
      "Query represents what the current token is looking for. Key represents matching features of candidate positions. Value contains the information to aggregate. Attention computes QK^T, normalizes scores with softmax, and returns a weighted sum of V. Masking should be applied before softmax by assigning forbidden positions -infinity, so their final probability becomes zero.",
  },
  {
    source: "Module 5 / Final",
    question: "设计一个任务型 COVID Reporting Bot，要写哪些模块？",
    hint: "系统题按 pipeline 写，不要只写 NLU。",
    answer:
      "Use NLU for domain classification, intent detection, and slot filling. Dialogue State Tracking stores collected and missing information. Dialogue Policy decides whether to ask follow-up questions, confirm, correct, or call an API. Backend/API validates and submits the report. NLG generates the user-facing response. Evaluation can include intent accuracy, slot F1, task success rate, average turns, and user satisfaction.",
  },
  {
    source: "Module 6",
    question: "RAG 为什么能减少 hallucination？LoRA 为什么参数高效？",
    hint: "RAG 接外部证据；LoRA 冻结原权重，只训练低秩更新。",
    answer:
      "RAG retrieves relevant external documents and places them into the model context before generation, grounding answers in evidence beyond parametric memory. This can reduce hallucination, although retrieval quality matters. LoRA freezes the original model weights and trains low-rank update matrices Delta W = BA, so far fewer parameters, gradients, and optimizer states are needed than full fine-tuning.",
  },
];

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function inlineFormat(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
}

function renderMarkdown(markdown) {
  const lines = markdown.split("\n");
  const html = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const code = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) {
        code.push(lines[i]);
        i += 1;
      }
      html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      i += 1;
      continue;
    }

    if (/^#{3,4}\s+/.test(line)) {
      const level = line.startsWith("####") ? "h5" : "h4";
      html.push(`<${level}>${inlineFormat(line.replace(/^#{3,4}\s+/, ""))}</${level}>`);
      i += 1;
      continue;
    }

    if (line.startsWith("|") && lines[i + 1]?.startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i += 1;
      }
      html.push(renderTable(tableLines));
      continue;
    }

    if (/^-\s+/.test(line) || /^-\s+\[[ x]\]/i.test(line)) {
      const items = [];
      while (i < lines.length && /^-\s+/.test(lines[i])) {
        const checked = /^-\s+\[[x]\]/i.test(lines[i]);
        const text = lines[i].replace(/^-\s+(\[[ x]\]\s*)?/i, "");
        items.push(`<li>${checked ? "<span class=\"check-dot\">✓</span>" : ""}${inlineFormat(text)}</li>`);
        i += 1;
      }
      html.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(`<li>${inlineFormat(lines[i].replace(/^\d+\.\s+/, ""))}</li>`);
        i += 1;
      }
      html.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    if (line.startsWith(">")) {
      const quote = [];
      while (i < lines.length && lines[i].startsWith(">")) {
        quote.push(lines[i].replace(/^>\s?/, ""));
        i += 1;
      }
      html.push(`<blockquote>${inlineFormat(quote.join(" "))}</blockquote>`);
      continue;
    }

    const paragraph = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("```") &&
      !/^#{3,4}\s+/.test(lines[i]) &&
      !lines[i].startsWith("|") &&
      !/^-|\d+\.\s+/.test(lines[i]) &&
      !lines[i].startsWith(">")
    ) {
      paragraph.push(lines[i]);
      i += 1;
    }
    html.push(`<p>${inlineFormat(paragraph.join(" "))}</p>`);
  }

  return html.join("");
}

function renderTable(lines) {
  const rows = lines
    .filter((line) => !/^\|\s*-/.test(line))
    .map((line) =>
      line
        .split("|")
        .slice(1, -1)
        .map((cell) => inlineFormat(cell.trim())),
    );

  if (!rows.length) {
    return "";
  }

  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${rows[0].map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>
        <tbody>${rows
          .slice(1)
          .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
          .join("")}</tbody>
      </table>
    </div>
  `;
}

function sectionKey(notebook, section) {
  return `${notebook.id}:${section.id}`;
}

function isMarked(notebook, section) {
  return Boolean(state.progress[sectionKey(notebook, section)]);
}

function isExamSection(notebook, section) {
  const text = `${notebook.title} ${section.title} ${section.body}`.toLowerCase();
  return /考试|重点|模板|高频|必背|hw|final|bleu|mask|q\/k|qkv|rag|lora|negative sampling|beam/.test(text);
}

function sectionMatchesMode(notebook, section) {
  if (state.mode === "all") {
    return true;
  }
  if (state.mode === "foundation") {
    return ["map", "m1", "m2", "m3"].includes(notebook.id);
  }
  if (state.mode === "exam") {
    return isExamSection(notebook, section);
  }
  if (state.mode === "marked") {
    return isMarked(notebook, section);
  }
  return true;
}

function sectionMatchesQuery(notebook, section) {
  const query = normalize(state.query);
  if (!query) {
    return true;
  }
  return normalize(`${notebook.fullTitle} ${notebook.type} ${section.title} ${section.summary} ${section.body}`).includes(query);
}

function getVisibleSections(notebook) {
  return notebook.sections.filter(
    (section) => sectionMatchesMode(notebook, section) && sectionMatchesQuery(notebook, section),
  );
}

function renderNav() {
  atlasNav.replaceChildren(
    ...notebooks.map((notebook) => {
      const anchor = document.createElement("a");
      anchor.href = `#note-${notebook.id}`;
      anchor.dataset.navLabel = notebook.number;
      anchor.innerHTML = `<span>${notebook.number}</span><strong>${notebook.title}</strong>`;
      return anchor;
    }),
  );
}

function renderAtlas() {
  const fragments = [];
  let visibleCount = 0;

  for (const notebook of notebooks) {
    const sections = getVisibleSections(notebook);
    visibleCount += sections.length;
    if (!sections.length) {
      continue;
    }

    const article = document.createElement("article");
    article.className = "notebook-panel";
    article.id = `note-${notebook.id}`;
    article.innerHTML = `
      <div class="notebook-head">
        <div>
          <span>${notebook.number} · ${notebook.type}</span>
          <h3>${notebook.title}</h3>
          <p>${notebook.summary}</p>
        </div>
        <a class="button button-secondary" href="${notebook.sourceHref}">打开 Markdown</a>
      </div>
      <div class="keyword-row">
        ${notebook.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}
      </div>
      <div class="section-stack">
        ${sections.map((section) => renderSection(notebook, section)).join("")}
      </div>
    `;
    fragments.push(article);
  }

  notebookList.replaceChildren(...fragments);
  atlasCount.textContent = `${visibleCount} / ${notebooks.reduce((sum, item) => sum + item.sectionCount, 0)} 个知识章节`;
  atlasEmpty.hidden = visibleCount > 0;
  updateProgress();
}

function renderSection(notebook, section) {
  const marked = isMarked(notebook, section);
  const key = sectionKey(notebook, section);
  const summary = section.summary || "打开后阅读原笔记内容，并尝试用 Definition -> Why -> How -> Example -> Limitation 复述。";
  return `
    <details class="knowledge-row" data-section-key="${key}">
      <summary>
        <span class="section-index">${notebook.number}</span>
        <span class="section-copy">
          <strong>${section.title}</strong>
          <small>${escapeHtml(summary)}</small>
        </span>
        <button
          class="mark-button ${marked ? "is-marked" : ""}"
          type="button"
          data-mark="${key}"
          aria-pressed="${marked}"
        >${marked ? "已掌握" : "标记"}</button>
      </summary>
      <div class="knowledge-content">
        <div class="memory-lane">
          <span>考场表达</span>
          <p>${buildExamFrame(notebook, section)}</p>
        </div>
        ${renderMarkdown(section.body)}
      </div>
    </details>
  `;
}

function buildExamFrame(notebook, section) {
  if (isExamSection(notebook, section)) {
    return "先写定义或题型要求，再写关键步骤，最后补一个例子、局限或评价指标。闭卷时优先保证结构完整。";
  }
  if (notebook.id === "m4") {
    return "架构题优先写 motivation，再写数据流和维度/位置关系，最后说明优势或限制。";
  }
  if (notebook.id === "m5") {
    return "任务题要写 input、output、model/component 和 metric；系统题必须写完整 pipeline。";
  }
  if (notebook.id === "m6") {
    return "LLM 应用题先说明模型缺陷，再写对应增强方法解决什么问题。";
  }
  return "用 Definition -> Why needed -> How it works -> Example -> Limitation/Evaluation 组织答案。";
}

function updateProgress() {
  const total = notebooks.reduce((sum, item) => sum + item.sectionCount, 0);
  const completed = Object.values(state.progress).filter(Boolean).length;
  const rate = total ? Math.round((completed / total) * 100) : 0;
  completionRate.textContent = `${rate}%`;
  completionBar.style.width = `${rate}%`;
  document.querySelector("#stat-modules").textContent = notebooks.length;
  document.querySelector("#stat-sections").textContent = total;
  document.querySelector("#stat-points").textContent = notebooks.reduce((sum, item) => sum + item.wordCount, 0).toLocaleString("zh-CN");

  const firstUnfinished = notebooks
    .flatMap((notebook) => notebook.sections.map((section) => ({ notebook, section })))
    .find(({ notebook, section }) => !isMarked(notebook, section));

  nextAction.innerHTML = firstUnfinished
    ? `<span>Next</span><a href="#note-${firstUnfinished.notebook.id}">${firstUnfinished.notebook.number} · ${firstUnfinished.section.title}</a>`
    : `<span>Ready</span><strong>所有章节都已标记，可以进入闭卷默写。</strong>`;
}

function renderDrill() {
  const item = drills[state.drillIndex % drills.length];
  drillSource.textContent = item.source;
  drillQuestion.textContent = item.question;
  drillHint.textContent = item.hint;
  drillAnswer.innerHTML = `<p>${item.answer}</p>`;
  drillAnswer.hidden = true;
  revealAnswer.textContent = "显示答案结构";
}

function setSidebarCollapsed(collapsed) {
  document.body.classList.toggle("sidebar-collapsed", collapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  sidebarToggle.querySelector(".sidebar-toggle-text").textContent = collapsed ? "展开" : "收起";
}

function bindEvents() {
  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderAtlas();
  });

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      renderAtlas();
    });
  });

  sidebarToggle.addEventListener("click", () => {
    setSidebarCollapsed(!document.body.classList.contains("sidebar-collapsed"));
  });

  notebookList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mark]");
    if (!button) {
      return;
    }
    event.preventDefault();
    const key = button.dataset.mark;
    state.progress[key] = !state.progress[key];
    if (!state.progress[key]) {
      delete state.progress[key];
    }
    saveProgress();
    renderAtlas();
  });

  revealAnswer.addEventListener("click", () => {
    drillAnswer.hidden = !drillAnswer.hidden;
    revealAnswer.textContent = drillAnswer.hidden ? "显示答案结构" : "收起答案结构";
  });

  shuffleCard.addEventListener("click", () => {
    state.drillIndex = (state.drillIndex + 1) % drills.length;
    renderDrill();
  });

  composeAnswer.addEventListener("click", () => {
    const values = [...document.querySelectorAll("[data-template]")].map((field) => ({
      label: field.dataset.template,
      value: field.value.trim() || "[待补充]",
    }));
    composedAnswer.textContent = values.map((item) => `${item.label.toUpperCase()}: ${item.value}`).join("\n\n");
  });

  document.querySelectorAll("[data-tool]").forEach((button) => {
    button.addEventListener("click", () => runTool(button.dataset.tool));
  });
}

function runTool(tool) {
  if (tool === "ngram") {
    const tokens = document.querySelector("#ngram-sentence").value.trim().split(/\s+/).filter(Boolean);
    const n = Number(document.querySelector("#ngram-n").value);
    const target = document.querySelector("#ngram-target").value.trim();
    const grams = [];
    for (let i = 0; i <= tokens.length - n; i += 1) {
      const gram = tokens.slice(i, i + n);
      if (!target || gram[gram.length - 1] === target) {
        grams.push(`(${gram.join(", ")})`);
      }
    }
    document.querySelector("#ngram-output").textContent = grams.length
      ? grams.join("\n")
      : "没有符合条件的 n-gram。注意：目标词默认匹配最后一个位置。";
  }

  if (tool === "params") {
    const vocab = Number(document.querySelector("#vocab-size").value);
    const dim = Number(document.querySelector("#embed-dim").value);
    const params = vocab * dim;
    document.querySelector("#params-output").textContent = `parameters = |V| × d\n= ${vocab.toLocaleString()} × ${dim.toLocaleString()}\n= ${params.toLocaleString()}`;
  }

  if (tool === "bp") {
    const candidate = Number(document.querySelector("#cand-len").value);
    const reference = Number(document.querySelector("#ref-len").value);
    const bp = candidate > reference ? 1 : Math.exp(1 - reference / candidate);
    document.querySelector("#bp-output").textContent = `BP = ${candidate > reference ? "1" : "exp(1 - r/c)"}\nc = ${candidate}, r = ${reference}\nBP ≈ ${bp.toFixed(4)}`;
  }

  if (tool === "mask") {
    const size = Number(document.querySelector("#mask-size").value);
    const rows = Array.from({ length: size }, (_, row) =>
      Array.from({ length: size }, (_, col) => (col <= row ? "0" : "-∞")).join("\t"),
    );
    document.querySelector("#mask-output").textContent = rows.join("\n");
  }
}

renderNav();
renderAtlas();
renderDrill();
bindEvents();
runTool("ngram");
runTool("params");
runTool("bp");
runTool("mask");
