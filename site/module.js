const modules = window.NLP_REVIEW_MODULES;
const params = new URLSearchParams(window.location.search);
const moduleId = params.get("id") || "m1";
const currentIndex = Math.max(0, modules.findIndex((item) => item.id === moduleId));
const current = modules[currentIndex] || modules[0];
const sidebarToggle = document.querySelector("#sidebar-toggle");
const notebook = (window.NLP_NOTEBOOK || []).find((item) => item.id === current.id);

document.title = `${current.title} | CS6493 NLP Final Review`;

if (notebook) {
  current.sections = notebook.sections.map((section) => ({
    id: section.id,
    title: section.title,
    summary: section.summary,
    rawBody: section.body,
    keywords: section.keywords || [],
  }));
  current.sourceHref = notebook.sourceHref;
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
  const lines = String(markdown || "").split("\n");
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
      html.push(renderMarkdownTable(tableLines));
      continue;
    }

    if (/^-\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^-\s+/.test(lines[i])) {
        items.push(`<li>${inlineFormat(lines[i].replace(/^-\s+/, ""))}</li>`);
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

function renderMarkdownTable(lines) {
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

const SECTION_EXAM_NOTES = {
  m1: {
    overview: {
      source: "L1 / Tutorial 1 / Final concept question",
      question: "What is NLP and why does an NLP system need preprocessing?",
      answer:
        "NLP is a branch of AI that enables computers to process, understand, manipulate, and generate natural language. Raw text cannot be directly used by most models because it is an unstructured string with ambiguity, variable length, punctuation, rare words, and task-specific noise. A typical system first preprocesses text, tokenizes it into units, maps tokens into vocabulary IDs, builds tensors or feature vectors, and then feeds them into a model. This pipeline makes language data computable and allows the system to be evaluated with task-specific metrics such as accuracy, F1, BLEU, or perplexity.",
      pitfall: "不要只写 NLP = understand language；至少补充 process/generate、一个任务例子和 preprocessing 的原因。",
    },
    tasks: {
      source: "L1 / L12 / Final concept question",
      question: "Explain the difference between NLU and NLG with examples.",
      answer:
        "NLU focuses on understanding text and converting natural language into labels, spans, entities, intents, slots, or other structured information. Examples include sentiment classification, named entity recognition, question answering, and intent detection. NLG focuses on generating natural language from structured data, source text, or dialogue context. Examples include machine translation, summarization, paraphrasing, and dialogue generation. In an exam answer, state the input-output form: NLU maps text to structure; NLG maps information or context to text.",
      pitfall: "不要把 QA、MT、dialogue 全部混成一类；必须说明输入和输出。",
    },
    preprocess: {
      source: "Tutorial 1 / HW2 padding-style question",
      question: "Why do we need tokenization, vocabulary IDs, padding, and masks?",
      answer:
        "Tokenization splits text into words, characters, or subwords so the model has discrete units to process. Vocabulary mapping converts each token into an integer ID, because neural models operate on numbers rather than raw strings. Padding makes sequences in a batch have the same length, so they can be stored in a rectangular tensor and processed efficiently by matrix operations. Masks are needed because padding tokens are artificial; attention masks or loss masks tell the model not to attend to or learn from those positions. Without masks, the model may treat padding as real content and produce biased representations.",
      pitfall: "Padding 不是为了增加信息，而是为了 batch shape；mask 才是排除 padding 的关键。",
    },
    "exam-template": {
      source: "Final answer format",
      question: "How should a preprocessing/pipeline answer be written?",
      answer:
        "Use the chain Raw text -> preprocessing -> tokenization -> vocabulary/indexing -> representation -> model -> output -> evaluation. For each step, write one function and one example. For sentiment classification, raw review text is normalized, tokenized, mapped to token IDs, converted into embeddings or features, passed into a classifier, and evaluated using accuracy or F1. If the question asks about modern models, mention subword tokenization and attention masks; if it asks about traditional models, mention BOW or TF-IDF.",
      pitfall: "系统流程题一定要写 evaluation，否则答案像只描述了前处理，没有完整系统。",
    },
  },
  m2: {
    lm: {
      source: "L2 / Tutorial 2 / Final concept question",
      question: "What is a language model?",
      answer:
        "A language model assigns probabilities to sequences of words or tokens. By the chain rule, the probability of a sentence can be decomposed into a product of conditional probabilities, where each word is predicted from its previous context. It can also be interpreted as a next-word predictor. For example, given 'the students opened their ___', the model should assign high probability to plausible next words such as 'books'. Language models are the foundation of generation, autocomplete, machine translation, and modern GPT-style models.",
      pitfall: "不要只写 predict next word；要补充 sequence probability 和 chain rule。",
    },
    ngram: {
      source: "HW1 n-gram listing/probability question",
      question: "How does an n-gram model estimate sentence probability?",
      answer:
        "An n-gram model approximates the full history with a fixed-length context. A bigram model estimates P(w_t | w_{t-1}); a trigram model estimates P(w_t | w_{t-2}, w_{t-1}). The probability is estimated from corpus counts, such as P(books | their) = count(their books) / count(their). In homework-style questions, first tokenize the sentence, list the required bigrams or trigrams, and then use the appropriate count ratio. The key is to show the context length and not accidentally condition on the full sentence.",
      pitfall: "bigram 的条件只看前 1 个词；trigram 只看前 2 个词。",
    },
    limitations: {
      source: "HW1 / Final n-gram limitation question",
      question: "Why do n-gram models fail to generalize well?",
      answer:
        "n-gram models rely on observed frequency counts. Even if individual words are known, an unseen combination may receive zero or unreliable probability. As n increases, the number of possible n-grams grows exponentially with vocabulary size, causing sparsity and the curse of dimensionality. The Markov assumption also restricts the model to a fixed short context, so it cannot capture long-range dependencies such as pronoun reference or subject-verb agreement across clauses. Smoothing can reduce zero probabilities but does not solve semantic generalization.",
      pitfall: "要同时写 sparsity、V^n 增长和 long-range dependency，不能只写数据少。",
    },
    neural: {
      source: "Tutorial 2 / HW1 neural LM code question",
      question: "Why do neural language models improve over count-based n-grams?",
      answer:
        "Neural language models represent tokens with dense embeddings and use neural networks to predict the next word. Unlike count tables, embeddings allow parameter sharing: similar words can have similar vectors, so the model can generalize to combinations not explicitly seen in training. In a tutorial code question, the input context is converted to token IDs, looked up in an embedding table, passed through a model, and optimized with cross-entropy loss. RNN-based LMs additionally maintain a hidden state over time, while LSTM gates help preserve longer dependencies.",
      pitfall: "embedding table 参数量是 vocab_size × embedding_dim；不要和 one-hot 向量维度混淆。",
    },
  },
  m3: {
    "one-hot": {
      source: "HW1 one-hot/parameter question",
      question: "Why is one-hot representation limited?",
      answer:
        "A one-hot vector represents each word as a high-dimensional sparse vector with exactly one active position. Different words are orthogonal, so their dot product is zero regardless of semantic relation. Therefore, one-hot cannot represent that cat and dog are more similar than cat and run, nor can it capture morphological relations such as run and runs. It also becomes memory-inefficient when the vocabulary is large. In HW-style calculation, if the vocabulary size is 50,000 and the embedding dimension is 128, the embedding table has 50,000 × 128 = 6,400,000 parameters. The key distinction is that one-hot identifies a word, while embedding learns a dense semantic representation for that word.",
      pitfall: "不要说 one-hot 不能训练；问题在于稀疏、高维、无法表达相似性。",
    },
    distributional: {
      source: "Final reference distributional hypothesis question",
      question: "What is the distributional hypothesis?",
      answer:
        "The distributional hypothesis states that words occurring in similar contexts tend to have similar meanings. It motivates word embedding methods such as Word2Vec and GloVe, which learn vectors from co-occurrence or prediction patterns in large corpora. For example, hotel and motel may appear in similar contexts such as 'book a ___', so their vectors should be close. This hypothesis is important because it turns semantic similarity into a learnable statistical pattern.",
      pitfall: "答案要连接到 Word2Vec/GloVe，不能只背一句 slogan。",
    },
    word2vec: {
      source: "HW1 Word2Vec / CBOW vs Skip-gram",
      question: "Compare CBOW and Skip-gram.",
      answer:
        "CBOW predicts the center word from surrounding context words, while Skip-gram predicts surrounding context words from the center word. For the sentence 'The students opened their books', if the center word is opened and the window size is 2, CBOW uses [The, students, their, books] to predict opened. Skip-gram uses opened to predict each surrounding context word. CBOW is usually faster and works well for frequent words because it averages context information. Skip-gram can be more effective for rare words and fine-grained semantic relationships because it creates multiple training pairs for each center word. In exam answers, always state the direction of prediction: context -> center for CBOW, center -> context for Skip-gram.",
      pitfall: "最常见扣分是把 CBOW 和 Skip-gram 的输入/目标写反。",
    },
    negative: {
      source: "HW1 / Final reference Skip-gram optimization",
      question: "Why is Skip-gram slow and how does negative sampling help?",
      answer:
        "The original Skip-gram objective uses a softmax over the entire vocabulary to compute the probability of a context word. This has O(V) cost per training step, which is expensive for large vocabularies. Negative sampling replaces the full softmax with a binary classification objective: the model distinguishes one positive context word from K sampled negative words. This reduces computation from depending on the whole vocabulary to depending on a small number of samples, making training feasible at scale.",
      pitfall: "要写 full softmax over vocabulary 和 O(V)，再写 binary classification with K negatives。",
    },
    contextual: {
      source: "Final reference ELMo question",
      question: "What problem does ELMo solve compared with Word2Vec/GloVe?",
      answer:
        "Word2Vec and GloVe produce one static vector for each word, so they cannot distinguish polysemy. The word bank receives the same vector in 'river bank' and 'bank account'. ELMo uses a deep bidirectional LSTM to generate context-dependent word representations, so the vector for a word changes according to the sentence. This allows ELMo to capture different meanings of the same surface word in different contexts. A strong exam answer should explicitly contrast static embedding versus contextualized embedding, then give the bank example and state that contextual information changes the representation.",
      pitfall: "关键词是 contextualized embedding；不要只写 ELMo uses LSTM。",
    },
  },
  m4: {
    attention: {
      source: "L4 / Final Transformer question",
      question: "Why do we need attention and Transformer?",
      answer:
        "RNNs process tokens sequentially, so computation at time t depends on previous hidden states. This limits parallelism and makes long-distance dependencies hard to preserve. Attention lets a model directly compare the current position with other positions and decide which information is relevant. Transformer replaces recurrence with self-attention, allowing every token to directly attend to every other token in a constant number of layers and enabling parallel computation across sequence positions.",
      pitfall: "必须同时写 parallelism 和 long-range dependency。",
    },
    qkv: {
      source: "HW2 attention/QKV question",
      question: "What are Q, K, and V in attention?",
      answer:
        "The query represents what information the current position is looking for. Keys represent features used to match each candidate position. Values contain the information that will be aggregated. The model computes similarity between Q and K, normalizes the scores with softmax to obtain attention weights, and returns a weighted sum of V. In scaled dot-product attention, the scores are divided by sqrt(d_k) to avoid overly large dot products and unstable softmax.",
      pitfall: "Q/K 是匹配用，V 是取内容用；不要把三者解释成同一个向量。",
    },
    mask: {
      source: "HW2 masking question",
      question: "When and why should masking be applied?",
      answer:
        "Masking should be applied before softmax by assigning forbidden positions a very negative logit such as -infinity. After softmax, those positions receive probability 0 and the remaining valid positions are normalized to sum to 1. Padding masks prevent the model from attending to padding tokens. Causal masks prevent decoder-style generation models from seeing future tokens. If masking is applied after softmax without renormalization, the distribution no longer sums to 1.",
      pitfall: "考试常问 softmax 前还是后；答案是 softmax 前。",
    },
    transformer: {
      source: "L4 / L12 architecture question",
      question: "What are the main parts of Transformer?",
      answer:
        "A Transformer encoder layer usually contains self-attention, add & norm, feed-forward network, and another add & norm. The encoder turns input tokens into contextual representations. A decoder layer includes masked self-attention, encoder-decoder attention, and feed-forward networks, generating output autoregressively. Multi-head attention runs several attention heads in parallel so different heads can learn different relations such as syntactic dependency, local phrase structure, or long-distance reference.",
      pitfall: "Decoder 生成时是 autoregressive，所以需要 causal mask。",
    },
    "bert-gpt": {
      source: "Final BERT vs GPT question",
      question: "Compare BERT and GPT.",
      answer:
        "BERT is based on the Transformer encoder and learns bidirectional contextual representations, commonly through masked language modeling. It is well suited for understanding tasks such as classification, NER, QA, and NLI. GPT is based on the Transformer decoder and is trained autoregressively to predict the next token from previous tokens. It is more suitable for generation, dialogue, continuation, and prompting-based interaction. The key contrast is encoder/bidirectional/understanding versus decoder/causal/generation.",
      pitfall: "不要只写 BERT 用于理解、GPT 用于生成；要补架构和训练目标。",
    },
  },
  m5: {
    "nlu-nlg": {
      source: "Tutorial 4/5/6 / L5-L6",
      question: "How do common NLP tasks differ in input, output, and metrics?",
      answer:
        "Text classification maps a text into a label and is evaluated with accuracy, precision, recall, or F1. Extractive QA takes a question and context passage and outputs an answer span, often evaluated with exact match and F1. Machine translation maps a source-language sentence to a target-language sentence and may use BLEU as an automatic metric. Dialogue systems take conversation context and user intent, then produce actions or responses; task-oriented systems are evaluated with task success rate, slot F1, average turns, and user satisfaction.",
      pitfall: "任务题不要只列名字；要写 input -> output -> metric。",
    },
    decoding: {
      source: "HW2 greedy vs beam search",
      question: "Compare greedy search and beam search.",
      answer:
        "Greedy search selects the token with the highest probability at each decoding step. It is fast and simple, but because it commits to local decisions, it may miss a better global sequence. Beam search keeps the top k partial hypotheses at each step, expands them, and selects the best completed sequence according to accumulated probability or score. Beam search usually improves generation quality but requires more computation and memory than greedy search.",
      pitfall: "要写 local optimum 和 top-k hypotheses。",
    },
    bleu: {
      source: "HW2 BLEU calculation",
      question: "How do you compute BLEU?",
      answer:
        "First tokenize the candidate and reference translations. Then compute clipped n-gram precisions P1, P2, P3, and P4, where each candidate n-gram count is clipped by the maximum count in references. Next compute the brevity penalty, which penalizes candidates that are too short. Finally plug the values into BLEU = BP × exp(sum w_n log P_n), often with equal weights. If any high-order precision is zero and no smoothing is used, BLEU may become zero.",
      pitfall: "BLEU 不是普通 precision；必须写 clipped precision 和 brevity penalty。",
    },
    dialogue: {
      source: "Final reference COVID Reporting Bot",
      question: "Design a task-oriented COVID reporting chatbot.",
      answer:
        "Start with NLU. Domain classification decides whether the utterance is COVID reporting, general health inquiry, appointment booking, or unrelated. Intent detection identifies actions such as report_positive_result, report_negative_result, update_report, or ask_reporting_policy. Slot filling extracts required fields such as patient name, ID/passport, test result, test date, and phone number. Dialogue State Tracking stores collected and missing slots. Dialogue Policy decides whether to ask a follow-up question, confirm information, correct a slot, or call the backend API. NLG generates the user-facing response. Evaluation should include intent accuracy, slot F1, task success rate, average turns, and user satisfaction.",
      pitfall: "系统设计题一定要写 DST、Policy、Backend/API 和 Evaluation，不能只写 NLU。",
    },
  },
  m6: {
    llm: {
      source: "L7 / L12",
      question: "What is an LLM and how is it different from a smaller LM?",
      answer:
        "A large language model is a Transformer-based language model trained on large-scale corpora with many parameters. Compared with small language models, LLMs usually require much more compute and memory but can handle more diverse and complex tasks such as generation, QA, summarization, code, reasoning, and tool use. The common paradigm is pretraining on broad text followed by fine-tuning, prompting, alignment, or retrieval/tool augmentation for downstream tasks.",
      pitfall: "不要只用参数量定义 LLM；要写能力、成本和使用范式。",
    },
    prompt: {
      source: "Tutorial 8 / Prompting question",
      question: "Why can prompting reduce task adaptation cost?",
      answer:
        "Prompting adapts a pretrained model through input design rather than updating model parameters. A prompt may include an instruction, context, examples, question, output format, and constraints. This reduces cost because no full fine-tuning is required for every task. Chain-of-thought prompting encourages intermediate reasoning steps and can improve performance on multi-step reasoning tasks, but it is not guaranteed to be correct and should be evaluated.",
      pitfall: "Prompting 是输入设计，不是训练参数；CoT 不能神化。",
    },
    alignment: {
      source: "L8 / Alignment concept question",
      question: "Why is alignment needed?",
      answer:
        "Pretrained LLMs learn to predict text, but this objective does not guarantee helpful, harmless, truthful, or instruction-following behavior. Alignment aims to make model outputs better match human preferences, safety constraints, and task goals. A common pipeline is supervised fine-tuning followed by preference learning or RLHF, where human preference data is used to train a reward model and optimize the policy. Alignment reduces undesirable outputs but does not remove all hallucinations or safety risks.",
      pitfall: "Alignment 不是让模型知识更多，而是让输出更符合偏好和约束。",
    },
    peft: {
      source: "Tutorial 10 / LoRA question",
      question: "Why is LoRA parameter-efficient?",
      answer:
        "Full fine-tuning updates all model parameters, which is expensive for large models because training memory includes weights, gradients, optimizer states, and activations. LoRA freezes the original weight matrix and learns a low-rank update, usually written as Delta W = B A where rank r is small. Only the low-rank matrices are trained, so the number of trainable parameters and optimizer states is much smaller. Different tasks can store different LoRA adapters, and the update can often be merged into the original weights for inference.",
      pitfall: "关键词：freeze original model、low-rank update、fewer trainable parameters。",
    },
    "agent-rag": {
      source: "Tutorial 9 / RAG and Agent question",
      question: "Why can RAG reduce hallucination, and what does an agent contain?",
      answer:
        "RAG retrieves relevant external documents before generation and provides them as context to the LLM. This helps because the model is grounded in retrieved evidence rather than relying only on parametric memory, which may be outdated or incomplete. A typical RAG pipeline includes document loading, chunking, embedding, vector database indexing, retrieval, and generation. An LLM agent extends the model with planning, tool use, memory, workflow control, and reflection/evaluation so it can decide actions and interact with external systems.",
      pitfall: "RAG 的效果依赖 retrieval quality、chunking 和 context construction。",
    },
  },
  exam: {
    strategy: {
      source: "Final strategy",
      question: "How should final exam answers be structured?",
      answer:
        "For concept questions, use Definition -> Why needed -> How it works -> Example -> Limitation/Evaluation. For comparison questions, first state the shared goal, then compare architecture, input-output behavior, training objective, strengths, and limitations. For calculation questions, show intermediate steps and formulas. For system design questions, write the full pipeline from input to model components to evaluation metrics.",
      pitfall: "闭卷题最怕散答；先写结构，再填关键词。",
    },
    hw1: {
      source: "HW1",
      question: "What should be reviewed from HW1?",
      answer:
        "HW1 connects representation and language modeling. You should be able to compute embedding table parameters as |V| × d, list bigrams/trigrams from a tokenized sentence, explain n-gram sparsity and Markov assumption limitations, understand neural LM training samples, and explain why Skip-gram full softmax is slow and how negative sampling accelerates training.",
      pitfall: "HW1 的题经常要求手算或列步骤，答案不要只写概念。",
    },
    hw2: {
      source: "HW2",
      question: "What should be reviewed from HW2?",
      answer:
        "HW2 focuses on sequence batching, decoding, evaluation, and attention. You should explain padding and masks, compare greedy and beam search, compute BLEU with clipped n-gram precision and brevity penalty, analyze Q/K/V and attention symmetry when W_Q = W_K, and explain causal masking. These topics often combine conceptual explanation with small calculations.",
      pitfall: "BLEU、mask、beam search 都要写过程，不要只给结论。",
    },
    "final-reference": {
      source: "Final reference",
      question: "Which final-reference questions are highest priority?",
      answer:
        "The highest-priority final reference topics are task-oriented dialogue system design, distributional hypothesis, ELMo versus static embeddings, and Skip-gram optimization. These are likely to test whether you can connect concepts to systems and examples. For dialogue systems, write NLU, DST, policy, backend/API, NLG, and evaluation. For embedding questions, always mention the problem solved and one concrete example.",
      pitfall: "不要把期末参考题当成背诵题；它们通常要求解释动机和系统链路。",
    },
  },
};

function getAccent(filter) {
  const accents = {
    basic: "#54d5d0",
    tasks: "#f1b84b",
    llm: "#7ccf82",
    exam: "#ff7d67",
  };
  return accents[filter] || "#54d5d0";
}

function renderSidebar() {
  const nav = document.querySelector("#module-sidebar-nav");
  const sectionLinks = current.sections
    .map(
      (section, index) => `
        <a class="sub-nav-link" href="#${section.id}" data-nav-label="${index + 1}">
          <span>${index + 1}</span><strong>${section.title.replace(/^\d+\.\s*/, "")}</strong>
        </a>
      `,
    )
    .join("");

  nav.innerHTML = `
    <a href="./index.html" data-nav-label="首页"><span>H</span><strong>返回首页</strong></a>
    <a class="module-nav-link is-current" href="#module-hero" data-nav-label="${current.shortTitle}">
      <span>${current.number}</span><strong>${current.shortTitle}</strong>
    </a>
    <a href="#study-plan" data-nav-label="路径"><span>P</span><strong>学习路径</strong></a>
    ${sectionLinks}
    <div class="sidebar-divider"></div>
    <a href="#practice" data-nav-label="题目"><span>Q</span><strong>题目归档</strong></a>
    <a href="#template" data-nav-label="模板"><span>A</span><strong>答题模板</strong></a>
    <a href="#self-check" data-nav-label="自测"><span>T</span><strong>考前自测</strong></a>
  `;
}

function renderHero() {
  const hero = document.querySelector("#module-hero");
  hero.style.setProperty("--card-accent", getAccent(current.filter));
  hero.innerHTML = `
    <div class="module-hero-copy">
      <p class="eyebrow">Module ${current.number} · ${current.type}</p>
      <h1>${current.title}</h1>
      <p class="hero-lede">${current.summary}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="#content">阅读知识点</a>
        <a class="button button-secondary" href="#practice">查看题目</a>
      </div>
    </div>
    <div class="module-map">
      <span>Review Route</span>
      <strong>${current.route}</strong>
      <ul>
        ${current.examFocus.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;
}

function getOrientationCards() {
  return [
    {
      label: "学习目标",
      title: "学完后你应该会什么",
      text: current.summary,
      items: current.examFocus,
    },
    {
      label: "学习顺序",
      title: "从 0 开始的阅读路径",
      text: "先读直觉，再看公式或表格，最后用题目模板把答案说完整。",
      items: current.sections.slice(0, 5).map((section) => section.title.replace(/^\d+\.\s*/, "")),
    },
    {
      label: "考试产出",
      title: "最后要能写出的答案",
      text: current.practice.template,
      items: ["定义清楚", "动机明确", "机制分步", "例子具体", "局限或评价不漏"],
    },
  ];
}

function renderOrientation() {
  const container = document.querySelector("#module-orientation");
  container.innerHTML = getOrientationCards()
    .map(
      (card) => `
        <article class="orientation-card">
          <span>${card.label}</span>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
          <ul>${card.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

function renderSectionContent(section) {
  if (section.rawBody) {
    const examNote = getExamNote(section);
    return `
      <div class="exam-note">
        <div class="exam-note-head">
          <span>${examNote.source}</span>
          <strong>对应题目：${examNote.question}</strong>
        </div>
        <p>${examNote.answer}</p>
        <small>扣分点：${examNote.pitfall}</small>
      </div>
      ${renderMarkdown(section.rawBody)}
    `;
  }

  const parts = [];

  if (section.body) {
    parts.push(section.body.map((item) => `<p>${item}</p>`).join(""));
  }

  if (section.bullets) {
    parts.push(`<ul>${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`);
  }

  if (section.table) {
    parts.push(`
      <div class="table-wrap">
        <table>
          <thead>
            <tr>${section.table.headers.map((header) => `<th>${header}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${section.table.rows
              .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
              .join("")}
          </tbody>
        </table>
      </div>
    `);
  }

  if (section.code) {
    parts.push(`<pre><code>${section.code}</code></pre>`);
  }

  const examNote = getExamNote(section);
  if (examNote) {
    parts.push(`
      <div class="exam-note">
        <div class="exam-note-head">
          <span>${examNote.source}</span>
          <strong>对应题目：${examNote.question}</strong>
        </div>
        <p>${examNote.answer}</p>
        <small>扣分点：${examNote.pitfall}</small>
      </div>
    `);
  }

  return parts.join("");
}

function buildFallbackExamNote(section) {
  const keyPoints = section.rawBody
    ? [section.summary || ""]
    : [
        ...(section.body || []),
        ...(section.bullets || []),
        ...(section.table ? [`表格要点：${section.table.headers.join(" / ")}`] : []),
      ];

  return {
    source: current.sources.join(" / "),
    question: `Explain ${section.title.replace(/^\d+\.\s*/, "")} in an exam answer.`,
    answer:
      keyPoints.join(" ") ||
      `This knowledge point belongs to ${current.title}. In an exam answer, define the concept first, explain why it is needed, describe how it works, and connect it to one task or example from the course.`,
    pitfall: "不要只背关键词；至少写出定义、动机、机制和一个例子。",
  };
}

function getExamNote(section) {
  return SECTION_EXAM_NOTES[current.id]?.[section.id] || buildFallbackExamNote(section);
}

function renderSections() {
  const list = document.querySelector("#section-list");
  document.querySelector("#module-source").textContent = current.sources.join(" / ");
  list.replaceChildren(
    ...current.sections.map((section) => {
      const article = document.createElement("article");
      article.className = "note-section";
      article.id = section.id;
      article.innerHTML = `<h3>${section.title}</h3>${renderSectionContent(section)}`;
      return article;
    }),
  );
}

function renderPracticeGroup(title, items) {
  return `
    <article class="practice-group">
      <h4>${title}</h4>
      <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function renderPractice() {
  document.querySelector("#module-practice").innerHTML = `
    ${renderPracticeGroup("Tutorial 题目", current.practice.tutorial)}
    ${renderPracticeGroup("作业题目", current.practice.homework)}
    ${renderPracticeGroup("期末题目", current.practice.final)}
  `;
  document.querySelector("#module-template").innerHTML = `
    <span>Use this structure in exam answers</span>
    <p>${current.practice.template}</p>
  `;
}

function renderSelfCheck() {
  const notes = current.sections.map((section) => ({
    section,
    note: getExamNote(section),
  }));

  document.querySelector("#self-check-list").innerHTML = notes
    .map(
      ({ section, note }, index) => `
        <details class="check-card">
          <summary>
            <span>${index + 1}</span>
            <strong>${note.question}</strong>
          </summary>
          <div>
            <p>${note.answer}</p>
            <small>检查点：${note.pitfall}</small>
            <a href="#${section.id}">回到知识点</a>
          </div>
        </details>
      `,
    )
    .join("");
}

function renderPager() {
  const prev = modules[currentIndex - 1];
  const next = modules[currentIndex + 1];
  const pager = document.querySelector("#module-pager");
  pager.innerHTML = `
    ${prev ? `<a class="button button-secondary" href="module.html?id=${prev.id}">上一模块：${prev.shortTitle}</a>` : "<span></span>"}
    ${next ? `<a class="button button-primary" href="module.html?id=${next.id}">下一模块：${next.shortTitle}</a>` : "<span></span>"}
  `;
}

function setSidebarCollapsed(collapsed) {
  document.body.classList.toggle("sidebar-collapsed", collapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  sidebarToggle.querySelector(".sidebar-toggle-text").textContent = collapsed ? "展开" : "收起";
}

sidebarToggle.addEventListener("click", () => {
  setSidebarCollapsed(!document.body.classList.contains("sidebar-collapsed"));
});

renderSidebar();
renderHero();
renderOrientation();
renderSections();
renderPractice();
renderSelfCheck();
renderPager();
