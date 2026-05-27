import { readFileSync, writeFileSync } from "node:fs";
import { basename, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;

const files = [
  "00_学习地图_考试信息与复习路线.md",
  "01_Module1_NLP入门与文本预处理.md",
  "02_Module2_语言模型与n-gram_RNN_LSTM.md",
  "03_Module3_词表示_Word2Vec_GloVe_ELMo.md",
  "04_Module4_Transformer_BERT_GPT.md",
  "05_Module5_NLU_NLG任务_分类_QA_MT_对话_BLEU.md",
  "06_Module6_LLM_Prompt_Alignment_Agent_RAG_PEFT.md",
  "07_作业与期末题型_答题模板.md",
];

const labels = {
  "00_学习地图_考试信息与复习路线.md": { id: "map", number: "00", type: "Map" },
  "01_Module1_NLP入门与文本预处理.md": { id: "m1", number: "01", type: "Basics" },
  "02_Module2_语言模型与n-gram_RNN_LSTM.md": { id: "m2", number: "02", type: "Language Model" },
  "03_Module3_词表示_Word2Vec_GloVe_ELMo.md": { id: "m3", number: "03", type: "Representation" },
  "04_Module4_Transformer_BERT_GPT.md": { id: "m4", number: "04", type: "Architecture" },
  "05_Module5_NLU_NLG任务_分类_QA_MT_对话_BLEU.md": { id: "m5", number: "05", type: "Tasks" },
  "06_Module6_LLM_Prompt_Alignment_Agent_RAG_PEFT.md": { id: "m6", number: "06", type: "LLM" },
  "07_作业与期末题型_答题模板.md": { id: "exam", number: "07", type: "Exam" },
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[`*_#[\]()]/g, "")
    .replace(/[：:/.+→×]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);
}

function firstParagraph(lines) {
  const paragraphs = [];
  let buffer = [];
  let inCode = false;

  for (const line of lines) {
    if (line.startsWith("```")) {
      inCode = !inCode;
      continue;
    }
    if (inCode || line.startsWith("#") || line.startsWith("|") || line.startsWith("- ") || /^\d+\.\s/.test(line)) {
      continue;
    }
    if (!line.trim()) {
      if (buffer.length) {
        paragraphs.push(buffer.join(" "));
        buffer = [];
      }
      continue;
    }
    buffer.push(line.trim());
  }
  if (buffer.length) {
    paragraphs.push(buffer.join(" "));
  }
  return paragraphs.find((paragraph) => paragraph.length > 18) || paragraphs[0] || "";
}

function extractKeywords(text) {
  const dictionary = [
    "NLP",
    "NLU",
    "NLG",
    "Tokenization",
    "Vocabulary",
    "Padding",
    "BOW",
    "TF-IDF",
    "Language Model",
    "n-gram",
    "Markov",
    "Smoothing",
    "RNN",
    "LSTM",
    "Perplexity",
    "one-hot",
    "Embedding",
    "Word2Vec",
    "CBOW",
    "Skip-gram",
    "Negative Sampling",
    "GloVe",
    "ELMo",
    "Attention",
    "Q",
    "K",
    "V",
    "Transformer",
    "BERT",
    "GPT",
    "Mask",
    "BLEU",
    "Beam Search",
    "Dialogue",
    "Prompt",
    "CoT",
    "Alignment",
    "Agent",
    "RAG",
    "PEFT",
    "LoRA",
  ];
  return dictionary.filter((keyword) => text.toLowerCase().includes(keyword.toLowerCase())).slice(0, 8);
}

function parseMarkdown(file) {
  const raw = readFileSync(join(root, file), "utf8").replace(/\r\n/g, "\n");
  const lines = raw.split("\n");
  const h1 = lines.find((line) => line.startsWith("# "))?.replace(/^#\s+/, "").trim() || basename(file, ".md");
  const sections = [];
  let current = null;
  let inCode = false;

  function closeSection() {
    if (!current) {
      return;
    }
    current.body = current.lines.join("\n").trim();
    current.summary = firstParagraph(current.lines);
    current.keywords = extractKeywords(`${current.title}\n${current.body}`);
    delete current.lines;
    sections.push(current);
  }

  for (const line of lines) {
    if (line.startsWith("```")) {
      inCode = !inCode;
    }

    if (!inCode && /^##\s+/.test(line)) {
      closeSection();
      const title = line.replace(/^##\s+/, "").trim();
      current = {
        id: slugify(title) || `section-${sections.length + 1}`,
        title,
        level: 2,
        lines: [],
      };
      continue;
    }

    if (current) {
      current.lines.push(line);
    }
  }
  closeSection();

  const meta = labels[file];
  const fullText = raw.replace(/^#.*$/m, "").trim();
  return {
    ...meta,
    file,
    sourceHref: `../${file}`,
    title: h1.replace(/^Module\s+\d+：/, ""),
    fullTitle: h1,
    summary: firstParagraph(lines),
    keywords: extractKeywords(raw),
    sections,
    wordCount: raw.replace(/\s+/g, "").length,
    sectionCount: sections.length,
    searchText: `${h1}\n${fullText}`.toLowerCase(),
  };
}

const notebooks = files.map(parseMarkdown);
const output = `window.NLP_NOTEBOOK = ${JSON.stringify(notebooks, null, 2)};\n`;
writeFileSync(new URL("notes-data.js", import.meta.url), output, "utf8");

console.log(`Built notes-data.js with ${notebooks.length} notebooks and ${notebooks.reduce((sum, item) => sum + item.sectionCount, 0)} sections.`);
