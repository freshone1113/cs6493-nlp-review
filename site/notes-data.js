window.NLP_NOTEBOOK = [
  {
    "id": "map",
    "number": "00",
    "type": "Map",
    "file": "00_学习地图_考试信息与复习路线.md",
    "sourceHref": "../00_学习地图_考试信息与复习路线.md",
    "title": "CS6493 NLP 从 0 到通过考试：学习地图",
    "fullTitle": "CS6493 NLP 从 0 到通过考试：学习地图",
    "summary": "你的背景是计算机专业硕士，但没有系统学过 NLP。因此复习目标不是“把所有论文细节背下来”，而是建立一条可考试、可做题、可解释的知识链：",
    "keywords": [
      "NLP",
      "NLU",
      "NLG",
      "Tokenization",
      "Vocabulary",
      "BOW",
      "TF-IDF",
      "Language Model"
    ],
    "sections": [
      {
        "id": "1-你现在的起点与目标",
        "title": "1. 你现在的起点与目标",
        "level": 2,
        "body": "你的背景是计算机专业硕士，但没有系统学过 NLP。因此复习目标不是“把所有论文细节背下来”，而是建立一条可考试、可做题、可解释的知识链：\n\n> 文本如何变成数字 → 模型如何建模语言 → 模型如何理解/生成文本 → Transformer/LLM 为什么有效 → 如何用 prompt、alignment、agent、RAG、PEFT 解决现实问题。\n\n这门课的主线非常清晰：\n\n1. **Basics**：NLP 基础、语言模型、词向量。\n2. **Tasks**：NLU 与 NLG，包括文本分类、问答、机器翻译、对话系统。\n3. **Large Language Models**：Transformer、BERT/GPT、prompting、alignment、LLM agents、efficient fine-tuning、RAG。",
        "summary": "你的背景是计算机专业硕士，但没有系统学过 NLP。因此复习目标不是“把所有论文细节背下来”，而是建立一条可考试、可做题、可解释的知识链：",
        "keywords": [
          "NLP",
          "NLU",
          "NLG",
          "Language Model",
          "K",
          "Transformer",
          "BERT",
          "GPT"
        ]
      },
      {
        "id": "2-basic-info-课程结构与考试权重",
        "title": "2. Basic Info：课程结构与考试权重",
        "level": 2,
        "body": "### 2.1 课程组成\n\n课程资料包括：\n\n| 类型 | 文件 | 用途 |\n|---|---|---|\n| Lecture | L1–L12 | 主线知识与考试概念来源 |\n| Tutorial | week1, 2, 4, 5, 6, 8, 9, 10 | 代码实现与应用理解 |\n| Homework | HW1, HW2 + solution | 题型、计算题、代码题、解释题训练 |\n| Final reference | 期末题目参考.docx | 期末问答题风格参考 |\n\n### 2.2 课程考核\n\n- Continuous assessment：60%\n  - 两次个人作业：每次 15%\n  - Group project：30%\n- Final exam：40%\n\n你当前目标是通过考试，因此复习优先级应是：\n\n> 期末参考题 + Course Review + HW1/HW2 题型 > Lecture 核心公式与概念 > Tutorial 代码理解。",
        "summary": "- 两次个人作业：每次 15% - Group project：30%",
        "keywords": [
          "K",
          "V"
        ]
      },
      {
        "id": "3-全课程知识模块划分",
        "title": "3. 全课程知识模块划分",
        "level": 2,
        "body": "我将课程拆成 6 个 module。每个 module 都对应一份独立笔记。\n\n| Module | 覆盖文件 | 你需要掌握什么 | 考试常见问法 |\n|---|---|---|---|\n| Module 1：NLP 入门与文本预处理 | L1, L12, Tutorial 1 | NLP 是什么、任务类型、tokenization、BOW、TF-IDF | “NLP 包含哪些任务？”“文本如何变成模型输入？” |\n| Module 2：语言模型 | L2, L12, Tutorial 2, HW1 | LM 定义、链式法则、n-gram、RNN/LSTM、perplexity | “解释 n-gram 的稀疏问题”“为什么 Markov assumption 有局限？” |\n| Module 3：词表示与词向量 | L3, L12, HW1, 期末题目参考 | one-hot、distributional hypothesis、word2vec、CBOW、Skip-gram、negative sampling、GloVe、ELMo | “为什么 one-hot 不好？”“ELMo 相比 word2vec 解决什么问题？” |\n| Module 4：Transformer 与预训练模型 | L4, L12, HW2 | Attention、self-attention、multi-head、mask、BERT、GPT | “解释 Q/K/V”“为什么 Transformer 比 RNN 更适合长距离依赖？” |\n| Module 5：经典 NLP 任务 | L5, L6, Tutorial 4/5/6, HW2, 期末题目参考 | 文本分类、QA、MT、dialogue、BLEU、beam search | “设计任务型对话系统”“解释 greedy vs beam search”“计算 BLEU” |\n| Module 6：LLM 高级主题 | L7–L11, Tutorial 8/9/10 | LLM、prompt、CoT、alignment、agent、RAG、efficient training、LoRA/PEFT | “RAG 为什么能减少 hallucination？”“LoRA 为什么省参数？” |",
        "summary": "我将课程拆成 6 个 module。每个 module 都对应一份独立笔记。",
        "keywords": [
          "NLP",
          "Tokenization",
          "BOW",
          "TF-IDF",
          "n-gram",
          "Markov",
          "RNN",
          "LSTM"
        ]
      },
      {
        "id": "4-推荐学习顺序",
        "title": "4. 推荐学习顺序",
        "level": 2,
        "body": "不要按照 lecture 顺序机械学。对小白更合适的顺序是：\n\n### Step 1：先学“文本怎么进模型”\n\n对应：Module 1 + Module 2 前半。\n\n你要先明白：模型不能直接读文字，只能读数字。所以要经历：\n\n```text\n原始文本 → tokenization → vocabulary/index → vector representation → model → output\n```\n\n### Step 2：再学“词怎么表示”\n\n对应：Module 3。\n\n这是 NLP 的核心过渡：\n\n```text\none-hot：每个词只是一个离散 ID\nword embedding：词被表示成能表达相似性的 dense vector\ncontextual embedding：同一个词在不同语境下有不同向量\n```\n\n### Step 3：再学“句子怎么建模”\n\n对应：Module 2 后半 + Module 4。\n\n你要理解模型演进：\n\n```text\nn-gram → RNN → LSTM → Attention → Transformer → BERT/GPT\n```\n\n### Step 4：再学“模型做什么任务”\n\n对应：Module 5。\n\n把任务分为两类：\n\n```text\nNLU：理解文本 → 分类、抽取、问答、意图识别、槽位填充\nNLG：生成文本 → 翻译、摘要、对话、长文本生成\n```\n\n### Step 5：最后学“LLM 如何被使用和增强”\n\n对应：Module 6。\n\n核心是：LLM 本身很强，但有缺陷，所以需要：\n\n```text\nPrompting：不用改参数，通过输入引导模型\nAlignment：让模型更符合人类偏好和安全要求\nPEFT/LoRA：低成本适配模型\nAgent：让模型会规划、调用工具、执行任务\nRAG：让模型接外部知识，减少幻觉\n```",
        "summary": "不要按照 lecture 顺序机械学。对小白更合适的顺序是：",
        "keywords": [
          "NLP",
          "NLU",
          "NLG",
          "Tokenization",
          "Vocabulary",
          "n-gram",
          "RNN",
          "LSTM"
        ]
      },
      {
        "id": "5-考试导向-你必须会的-12-类题",
        "title": "5. 考试导向：你必须会的 12 类题",
        "level": 2,
        "body": "### 5.1 概念解释题\n\n必须能用 3–5 句话解释：\n\n- NLP / NLU / NLG\n- Language Model\n- n-gram / Markov assumption / sparsity\n- one-hot / word embedding / contextual embedding\n- distributional hypothesis\n- attention / self-attention / QKV\n- Transformer / BERT / GPT\n- prompt / CoT / alignment\n- agent / tool use / memory / planning\n- RAG / vector database / retrieval\n- PEFT / LoRA\n\n### 5.2 对比题\n\n常见对比：\n\n| 对比 | 关键差异 |\n|---|---|\n| one-hot vs embedding | 离散高维稀疏 vs 低维稠密可表达相似性 |\n| word2vec vs ELMo | 静态词向量 vs 上下文相关词向量 |\n| CBOW vs Skip-gram | 上下文预测中心词 vs 中心词预测上下文 |\n| RNN/LSTM vs Transformer | 顺序计算 vs 并行 self-attention |\n| BERT vs GPT | encoder 双向理解 vs decoder 自回归生成 |\n| greedy vs beam search | 局部最优 vs 保留多个候选 |\n| prompt vs fine-tuning vs RAG | 输入引导 vs 改模型参数 vs 接外部知识 |\n\n### 5.3 计算题\n\n必须练到能手算：\n\n- one-hot 向量与 dot product\n- embedding table 参数量：`|V| × d`\n- n-gram 列举与概率估计\n- attention score / softmax / weighted sum\n- causal mask 矩阵\n- BLEU 的 n-gram precision 与 brevity penalty\n- greedy decoding 与 beam search 路径概率\n- LLM 训练内存估计：weights + gradients + optimizer states + activations\n\n### 5.4 系统设计题\n\n典型是“设计一个任务型对话系统”。标准答题结构：\n\n```text\n1. NLU：domain classification, intent detection, slot filling\n2. Dialogue State Tracking：维护已经收集的信息\n3. Dialogue Policy：决定下一步问什么/确认什么/调用什么 API\n4. NLG：生成自然语言回复\n5. Backend/API：提交表单或查询数据库\n6. Evaluation：intent accuracy, slot F1, task success rate, user satisfaction\n```",
        "summary": "典型是“设计一个任务型对话系统”。标准答题结构：",
        "keywords": [
          "NLP",
          "NLU",
          "NLG",
          "BOW",
          "Language Model",
          "n-gram",
          "Markov",
          "RNN"
        ]
      },
      {
        "id": "6-复习计划",
        "title": "6. 复习计划",
        "level": 2,
        "body": "### 7 天压缩版\n\n| Day | 内容 | 目标 |\n|---|---|---|\n| Day 1 | Module 1–2 | 会解释 LM/n-gram/perplexity |\n| Day 2 | Module 3 | 会解释 one-hot、word2vec、ELMo、negative sampling |\n| Day 3 | Module 4 | 会解释 attention、Transformer、BERT/GPT |\n| Day 4 | Module 5 NLU | 会做分类、QA、dialogue system 题 |\n| Day 5 | Module 5 NLG | 会做 MT、beam search、BLEU 题 |\n| Day 6 | Module 6 | 会解释 prompting、alignment、agent、RAG、LoRA |\n| Day 7 | HW + final reference | 套用答题模板，查漏补缺 |\n\n### 14 天稳妥版\n\n前 7 天学笔记，后 7 天做题：\n\n- Day 1–2：Module 1–2\n- Day 3–4：Module 3\n- Day 5–6：Module 4\n- Day 7–8：Module 5\n- Day 9–10：Module 6\n- Day 11：HW1\n- Day 12：HW2\n- Day 13：期末参考题\n- Day 14：闭卷默写所有核心概念与公式",
        "summary": "前 7 天学笔记，后 7 天做题：",
        "keywords": [
          "NLU",
          "NLG",
          "n-gram",
          "Perplexity",
          "one-hot",
          "Word2Vec",
          "Negative Sampling",
          "ELMo"
        ]
      },
      {
        "id": "7-最终检查清单",
        "title": "7. 最终检查清单",
        "level": 2,
        "body": "考试前你应该能不看资料回答：\n\n- [ ] NLP、NLU、NLG 的区别。\n- [ ] 为什么 one-hot 不能表达语义相似性。\n- [ ] n-gram 为什么会有 sparsity 和 long-range dependency 问题。\n- [ ] word2vec 的 CBOW 和 Skip-gram 分别在预测什么。\n- [ ] negative sampling 为什么能加速 Skip-gram。\n- [ ] ELMo 为什么叫 contextualized embedding。\n- [ ] attention 的 Q/K/V 分别是什么。\n- [ ] Transformer 为什么比 RNN 更容易并行。\n- [ ] BERT 和 GPT 架构、训练目标、用途的区别。\n- [ ] greedy search 和 beam search 的区别。\n- [ ] BLEU 怎么计算。\n- [ ] 任务型对话系统的模块链路。\n- [ ] prompt learning、CoT、alignment 的作用。\n- [ ] Agent 的 planning/tool/memory/workflow。\n- [ ] RAG 的 indexing/retrieval/generation 流程。\n- [ ] LoRA/PEFT 为什么能减少训练成本。",
        "summary": "考试前你应该能不看资料回答：",
        "keywords": [
          "NLP",
          "NLU",
          "NLG",
          "BOW",
          "n-gram",
          "RNN",
          "one-hot",
          "Embedding"
        ]
      }
    ],
    "wordCount": 4427,
    "sectionCount": 7,
    "searchText": "cs6493 nlp 从 0 到通过考试：学习地图\n## 1. 你现在的起点与目标\n\n你的背景是计算机专业硕士，但没有系统学过 nlp。因此复习目标不是“把所有论文细节背下来”，而是建立一条可考试、可做题、可解释的知识链：\n\n> 文本如何变成数字 → 模型如何建模语言 → 模型如何理解/生成文本 → transformer/llm 为什么有效 → 如何用 prompt、alignment、agent、rag、peft 解决现实问题。\n\n这门课的主线非常清晰：\n\n1. **basics**：nlp 基础、语言模型、词向量。\n2. **tasks**：nlu 与 nlg，包括文本分类、问答、机器翻译、对话系统。\n3. **large language models**：transformer、bert/gpt、prompting、alignment、llm agents、efficient fine-tuning、rag。\n\n## 2. basic info：课程结构与考试权重\n\n### 2.1 课程组成\n\n课程资料包括：\n\n| 类型 | 文件 | 用途 |\n|---|---|---|\n| lecture | l1–l12 | 主线知识与考试概念来源 |\n| tutorial | week1, 2, 4, 5, 6, 8, 9, 10 | 代码实现与应用理解 |\n| homework | hw1, hw2 + solution | 题型、计算题、代码题、解释题训练 |\n| final reference | 期末题目参考.docx | 期末问答题风格参考 |\n\n### 2.2 课程考核\n\n- continuous assessment：60%\n  - 两次个人作业：每次 15%\n  - group project：30%\n- final exam：40%\n\n你当前目标是通过考试，因此复习优先级应是：\n\n> 期末参考题 + course review + hw1/hw2 题型 > lecture 核心公式与概念 > tutorial 代码理解。\n\n## 3. 全课程知识模块划分\n\n我将课程拆成 6 个 module。每个 module 都对应一份独立笔记。\n\n| module | 覆盖文件 | 你需要掌握什么 | 考试常见问法 |\n|---|---|---|---|\n| module 1：nlp 入门与文本预处理 | l1, l12, tutorial 1 | nlp 是什么、任务类型、tokenization、bow、tf-idf | “nlp 包含哪些任务？”“文本如何变成模型输入？” |\n| module 2：语言模型 | l2, l12, tutorial 2, hw1 | lm 定义、链式法则、n-gram、rnn/lstm、perplexity | “解释 n-gram 的稀疏问题”“为什么 markov assumption 有局限？” |\n| module 3：词表示与词向量 | l3, l12, hw1, 期末题目参考 | one-hot、distributional hypothesis、word2vec、cbow、skip-gram、negative sampling、glove、elmo | “为什么 one-hot 不好？”“elmo 相比 word2vec 解决什么问题？” |\n| module 4：transformer 与预训练模型 | l4, l12, hw2 | attention、self-attention、multi-head、mask、bert、gpt | “解释 q/k/v”“为什么 transformer 比 rnn 更适合长距离依赖？” |\n| module 5：经典 nlp 任务 | l5, l6, tutorial 4/5/6, hw2, 期末题目参考 | 文本分类、qa、mt、dialogue、bleu、beam search | “设计任务型对话系统”“解释 greedy vs beam search”“计算 bleu” |\n| module 6：llm 高级主题 | l7–l11, tutorial 8/9/10 | llm、prompt、cot、alignment、agent、rag、efficient training、lora/peft | “rag 为什么能减少 hallucination？”“lora 为什么省参数？” |\n\n## 4. 推荐学习顺序\n\n不要按照 lecture 顺序机械学。对小白更合适的顺序是：\n\n### step 1：先学“文本怎么进模型”\n\n对应：module 1 + module 2 前半。\n\n你要先明白：模型不能直接读文字，只能读数字。所以要经历：\n\n```text\n原始文本 → tokenization → vocabulary/index → vector representation → model → output\n```\n\n### step 2：再学“词怎么表示”\n\n对应：module 3。\n\n这是 nlp 的核心过渡：\n\n```text\none-hot：每个词只是一个离散 id\nword embedding：词被表示成能表达相似性的 dense vector\ncontextual embedding：同一个词在不同语境下有不同向量\n```\n\n### step 3：再学“句子怎么建模”\n\n对应：module 2 后半 + module 4。\n\n你要理解模型演进：\n\n```text\nn-gram → rnn → lstm → attention → transformer → bert/gpt\n```\n\n### step 4：再学“模型做什么任务”\n\n对应：module 5。\n\n把任务分为两类：\n\n```text\nnlu：理解文本 → 分类、抽取、问答、意图识别、槽位填充\nnlg：生成文本 → 翻译、摘要、对话、长文本生成\n```\n\n### step 5：最后学“llm 如何被使用和增强”\n\n对应：module 6。\n\n核心是：llm 本身很强，但有缺陷，所以需要：\n\n```text\nprompting：不用改参数，通过输入引导模型\nalignment：让模型更符合人类偏好和安全要求\npeft/lora：低成本适配模型\nagent：让模型会规划、调用工具、执行任务\nrag：让模型接外部知识，减少幻觉\n```\n\n## 5. 考试导向：你必须会的 12 类题\n\n### 5.1 概念解释题\n\n必须能用 3–5 句话解释：\n\n- nlp / nlu / nlg\n- language model\n- n-gram / markov assumption / sparsity\n- one-hot / word embedding / contextual embedding\n- distributional hypothesis\n- attention / self-attention / qkv\n- transformer / bert / gpt\n- prompt / cot / alignment\n- agent / tool use / memory / planning\n- rag / vector database / retrieval\n- peft / lora\n\n### 5.2 对比题\n\n常见对比：\n\n| 对比 | 关键差异 |\n|---|---|\n| one-hot vs embedding | 离散高维稀疏 vs 低维稠密可表达相似性 |\n| word2vec vs elmo | 静态词向量 vs 上下文相关词向量 |\n| cbow vs skip-gram | 上下文预测中心词 vs 中心词预测上下文 |\n| rnn/lstm vs transformer | 顺序计算 vs 并行 self-attention |\n| bert vs gpt | encoder 双向理解 vs decoder 自回归生成 |\n| greedy vs beam search | 局部最优 vs 保留多个候选 |\n| prompt vs fine-tuning vs rag | 输入引导 vs 改模型参数 vs 接外部知识 |\n\n### 5.3 计算题\n\n必须练到能手算：\n\n- one-hot 向量与 dot product\n- embedding table 参数量：`|v| × d`\n- n-gram 列举与概率估计\n- attention score / softmax / weighted sum\n- causal mask 矩阵\n- bleu 的 n-gram precision 与 brevity penalty\n- greedy decoding 与 beam search 路径概率\n- llm 训练内存估计：weights + gradients + optimizer states + activations\n\n### 5.4 系统设计题\n\n典型是“设计一个任务型对话系统”。标准答题结构：\n\n```text\n1. nlu：domain classification, intent detection, slot filling\n2. dialogue state tracking：维护已经收集的信息\n3. dialogue policy：决定下一步问什么/确认什么/调用什么 api\n4. nlg：生成自然语言回复\n5. backend/api：提交表单或查询数据库\n6. evaluation：intent accuracy, slot f1, task success rate, user satisfaction\n```\n\n## 6. 复习计划\n\n### 7 天压缩版\n\n| day | 内容 | 目标 |\n|---|---|---|\n| day 1 | module 1–2 | 会解释 lm/n-gram/perplexity |\n| day 2 | module 3 | 会解释 one-hot、word2vec、elmo、negative sampling |\n| day 3 | module 4 | 会解释 attention、transformer、bert/gpt |\n| day 4 | module 5 nlu | 会做分类、qa、dialogue system 题 |\n| day 5 | module 5 nlg | 会做 mt、beam search、bleu 题 |\n| day 6 | module 6 | 会解释 prompting、alignment、agent、rag、lora |\n| day 7 | hw + final reference | 套用答题模板，查漏补缺 |\n\n### 14 天稳妥版\n\n前 7 天学笔记，后 7 天做题：\n\n- day 1–2：module 1–2\n- day 3–4：module 3\n- day 5–6：module 4\n- day 7–8：module 5\n- day 9–10：module 6\n- day 11：hw1\n- day 12：hw2\n- day 13：期末参考题\n- day 14：闭卷默写所有核心概念与公式\n\n## 7. 最终检查清单\n\n考试前你应该能不看资料回答：\n\n- [ ] nlp、nlu、nlg 的区别。\n- [ ] 为什么 one-hot 不能表达语义相似性。\n- [ ] n-gram 为什么会有 sparsity 和 long-range dependency 问题。\n- [ ] word2vec 的 cbow 和 skip-gram 分别在预测什么。\n- [ ] negative sampling 为什么能加速 skip-gram。\n- [ ] elmo 为什么叫 contextualized embedding。\n- [ ] attention 的 q/k/v 分别是什么。\n- [ ] transformer 为什么比 rnn 更容易并行。\n- [ ] bert 和 gpt 架构、训练目标、用途的区别。\n- [ ] greedy search 和 beam search 的区别。\n- [ ] bleu 怎么计算。\n- [ ] 任务型对话系统的模块链路。\n- [ ] prompt learning、cot、alignment 的作用。\n- [ ] agent 的 planning/tool/memory/workflow。\n- [ ] rag 的 indexing/retrieval/generation 流程。\n- [ ] lora/peft 为什么能减少训练成本。"
  },
  {
    "id": "m1",
    "number": "01",
    "type": "Basics",
    "file": "01_Module1_NLP入门与文本预处理.md",
    "sourceHref": "../01_Module1_NLP入门与文本预处理.md",
    "title": "NLP 入门与文本预处理",
    "fullTitle": "Module 1：NLP 入门与文本预处理",
    "summary": "Natural Language Processing，简称 NLP，是人工智能的一个分支，目标是让计算机能够学习、处理、理解和生成自然语言，从而与人类交互。",
    "keywords": [
      "NLP",
      "NLU",
      "NLG",
      "Tokenization",
      "Vocabulary",
      "Padding",
      "BOW",
      "TF-IDF"
    ],
    "sections": [
      {
        "id": "1-nlp-是什么",
        "title": "1. NLP 是什么",
        "level": 2,
        "body": "Natural Language Processing，简称 NLP，是人工智能的一个分支，目标是让计算机能够学习、处理、理解和生成自然语言，从而与人类交互。\n\n自然语言包括人平时说和写的语言，例如英文、中文、日文、聊天消息、新闻、论文、搜索 query、客服对话等。\n\nNLP 的难点在于：语言不是单纯的字符序列。语言有多层结构：\n\n```text\n字符/音素 → 词 → 短语 → 句子 → 篇章 → 语义 → 语用/上下文\n```\n\n例如：\n\n```text\nI saw her duck.\n```\n\n这句话可能表示：\n\n1. 我看见她低头躲避。\n2. 我看见了她的鸭子。\n\n这说明 NLP 不只是“查字典”，而是要结合语法、语义、上下文和世界知识。",
        "summary": "Natural Language Processing，简称 NLP，是人工智能的一个分支，目标是让计算机能够学习、处理、理解和生成自然语言，从而与人类交互。",
        "keywords": [
          "NLP",
          "Q",
          "K"
        ]
      },
      {
        "id": "2-nlp-的典型任务",
        "title": "2. NLP 的典型任务",
        "level": 2,
        "body": "NLP 任务可以粗略分成两类：\n\n### 2.1 NLU：Natural Language Understanding\n\nNLU 是“理解文本”，把自然语言变成结构化信息。\n\n常见任务：\n\n| 任务 | 输入 | 输出 | 例子 |\n|---|---|---|---|\n| Text classification | 文本 | 类别 | 判断评论是 positive/negative |\n| Intent detection | 用户话语 | 意图 | “我要订机票” → booking_ticket |\n| Slot filling | 用户话语 | 槽位 | “明天去北京” → date=明天, destination=北京 |\n| Named Entity Recognition | 文本 | 实体 | “Apple is in California” → Apple=ORG, California=LOC |\n| Question Answering | 问题 + 文档 | 答案 | 从文章中抽取答案 |\n| Natural Language Inference | 两句话 | entail/contradict/neutral | 判断一句话是否推出另一句话 |\n\n### 2.2 NLG：Natural Language Generation\n\nNLG 是“生成文本”，从结构化信息、源文本或上下文生成自然语言。\n\n常见任务：\n\n| 任务 | 输入 | 输出 | 例子 |\n|---|---|---|---|\n| Machine Translation | 源语言句子 | 目标语言句子 | English → Chinese |\n| Summarization | 长文本 | 摘要 | 新闻摘要 |\n| Dialogue generation | 对话上下文 | 回复 | Chatbot |\n| Paraphrasing | 原句 | 改写句 | 同义改写 |\n| Report generation | 数据/表格 | 报告 | 医学影像报告生成 |",
        "summary": "NLU 是“理解文本”，把自然语言变成结构化信息。",
        "keywords": [
          "NLP",
          "NLU",
          "NLG",
          "Q",
          "K",
          "V",
          "Dialogue"
        ]
      },
      {
        "id": "3-nlp-系统的基本流程",
        "title": "3. NLP 系统的基本流程",
        "level": 2,
        "body": "传统 NLP 系统通常可以理解为：\n\n```text\nRaw text\n→ preprocessing\n→ feature/vector representation\n→ model\n→ prediction/generation\n→ evaluation\n```\n\n例如做 sentiment analysis：\n\n```text\n“I really like this movie!”\n→ tokenize: [I, really, like, this, movie]\n→ vectorize: 词向量/TF-IDF/BERT embedding\n→ classifier\n→ positive\n```",
        "summary": "例如做 sentiment analysis：",
        "keywords": [
          "NLP",
          "TF-IDF",
          "Embedding",
          "K",
          "V",
          "BERT"
        ]
      },
      {
        "id": "4-文本预处理",
        "title": "4. 文本预处理",
        "level": 2,
        "body": "### 4.1 Tokenization\n\nTokenization 是把文本切分成 token 的过程。Token 可以是：\n\n- word：`I love NLP` → `[I, love, NLP]`\n- character：`NLP` → `[N, L, P]`\n- subword：`unbelievable` → `[un, ##believ, ##able]`\n\n为什么 tokenization 重要？因为模型处理的是 token ID，不是原始字符串。\n\n```text\n文本 → token → token ID → embedding → 模型\n```\n\n### 4.2 Vocabulary 与 index\n\n模型通常会维护一个 vocabulary，把 token 映射成数字。\n\n例如：\n\n```text\nI      → 4\nlike   → 7\ncats   → 10\nand    → 17\ndogs   → 11\n```\n\n句子：\n\n```text\nI like cats and dogs\n```\n\n转换为：\n\n```text\n[4, 7, 10, 17, 11]\n```\n\n### 4.3 Padding\n\n神经网络训练时通常按 batch 输入。一个 batch 中的句子长度可能不同，但矩阵运算要求形状一致，所以需要 padding。\n\n例如：\n\n```text\nSentence 1: [4, 7, 10, 17, 11]\nSentence 2: [5, 8, 12, 13, 17, 18, 19, 20]\n```\n\n最长长度为 8，则句子 1 右侧补 0：\n\n```text\n[4, 7, 10, 17, 11, 0, 0, 0]\n```\n\npadding 位置通常要配合 attention mask，让模型不要把 padding 当成真实词。\n\n### 4.4 Stop words removal\n\nStop words 是高频但信息量较低的词，例如：\n\n```text\nthe, a, an, is, are, of\n```\n\n在传统方法中，有时会去除 stop words。但在 BERT/GPT 等模型中，通常不随意去除，因为这些模型可能利用功能词理解句法关系。\n\n### 4.5 Stemming 与 Lemmatization\n\n这两个操作都用于把词还原到更基础形式。\n\n| 方法 | 解释 | 例子 |\n|---|---|---|\n| Stemming | 粗暴截断词缀 | studies → studi |\n| Lemmatization | 根据词典和词性还原 | studies → study |\n\n### 4.6 Bag-of-Words\n\nBag-of-Words，简称 BOW，把文本表示成词频向量，不考虑顺序。\n\n例如 vocabulary：\n\n```text\n[cat, dog, run]\n```\n\n句子：\n\n```text\ncat dog cat\n```\n\nBOW 表示：\n\n```text\n[2, 1, 0]\n```\n\n缺点：丢失顺序。\n\n```text\nDog bites man.\nMan bites dog.\n```\n\nBOW 可能非常相似，但语义不同。\n\n### 4.7 TF-IDF\n\nTF-IDF 用来衡量一个词对文档的重要性。\n\n核心思想：\n\n```text\n一个词在当前文档出现多 → 重要性上升\n一个词在所有文档都常见 → 重要性下降\n```\n\n公式直觉：\n\n```text\nTF-IDF = Term Frequency × Inverse Document Frequency\n```\n\n- TF：词在当前文档中的频率。\n- IDF：词在整个语料中越少见，权重越高。\n\nTF-IDF 常用于传统文本分类、信息检索、baseline 模型。",
        "summary": "Tokenization 是把文本切分成 token 的过程。Token 可以是：",
        "keywords": [
          "NLP",
          "Tokenization",
          "Vocabulary",
          "Padding",
          "BOW",
          "TF-IDF",
          "Embedding",
          "Attention"
        ]
      },
      {
        "id": "5-从传统-nlp-到神经-nlp",
        "title": "5. 从传统 NLP 到神经 NLP",
        "level": 2,
        "body": "传统 NLP 常见流程：\n\n```text\n文本 → 人工特征/TF-IDF → 传统分类器（Naive Bayes/SVM/Logistic Regression）\n```\n\n神经 NLP 常见流程：\n\n```text\n文本 → token ID → embedding → neural model（RNN/CNN/Transformer）→ output\n```\n\n大模型时代的流程：\n\n```text\n文本 + prompt → pretrained LLM → output\n```",
        "summary": "传统 NLP 常见流程：",
        "keywords": [
          "NLP",
          "TF-IDF",
          "RNN",
          "Embedding",
          "K",
          "V",
          "Transformer",
          "Prompt"
        ]
      },
      {
        "id": "6-本模块考试重点",
        "title": "6. 本模块考试重点",
        "level": 2,
        "body": "### 6.1 必背概念\n\n- NLP 是让计算机处理自然语言的 AI 分支。\n- NLU 是理解/抽取意义；NLG 是生成自然语言。\n- Tokenization 是把文本切成 token。\n- Padding 是为了让同 batch 的输入等长。\n- BOW/TF-IDF 是传统向量化方法。\n\n### 6.2 常见问法\n\n**问题：NLU 和 NLG 有什么区别？**\n\n答题模板：\n\n```text\nNLU focuses on understanding and extracting meaning from natural language input, such as text classification, intent detection, slot filling, and question answering. NLG focuses on generating fluent and meaningful text, such as machine translation, summarization, and dialogue generation. In short, NLU maps text to structured meaning, while NLG maps meaning/context to text.\n```\n\n**问题：为什么 padding 后还需要 mask？**\n\n答题模板：\n\n```text\nPadding makes sequences in a batch have the same length for efficient matrix operations. However, padded tokens are not real linguistic content. Therefore, an attention mask is used to prevent the model from attending to or learning from padding positions.\n```",
        "summary": "**问题：NLU 和 NLG 有什么区别？**",
        "keywords": [
          "NLP",
          "NLU",
          "NLG",
          "Tokenization",
          "Padding",
          "BOW",
          "TF-IDF",
          "Attention"
        ]
      }
    ],
    "wordCount": 3620,
    "sectionCount": 6,
    "searchText": "module 1：nlp 入门与文本预处理\n## 1. nlp 是什么\n\nnatural language processing，简称 nlp，是人工智能的一个分支，目标是让计算机能够学习、处理、理解和生成自然语言，从而与人类交互。\n\n自然语言包括人平时说和写的语言，例如英文、中文、日文、聊天消息、新闻、论文、搜索 query、客服对话等。\n\nnlp 的难点在于：语言不是单纯的字符序列。语言有多层结构：\n\n```text\n字符/音素 → 词 → 短语 → 句子 → 篇章 → 语义 → 语用/上下文\n```\n\n例如：\n\n```text\ni saw her duck.\n```\n\n这句话可能表示：\n\n1. 我看见她低头躲避。\n2. 我看见了她的鸭子。\n\n这说明 nlp 不只是“查字典”，而是要结合语法、语义、上下文和世界知识。\n\n## 2. nlp 的典型任务\n\nnlp 任务可以粗略分成两类：\n\n### 2.1 nlu：natural language understanding\n\nnlu 是“理解文本”，把自然语言变成结构化信息。\n\n常见任务：\n\n| 任务 | 输入 | 输出 | 例子 |\n|---|---|---|---|\n| text classification | 文本 | 类别 | 判断评论是 positive/negative |\n| intent detection | 用户话语 | 意图 | “我要订机票” → booking_ticket |\n| slot filling | 用户话语 | 槽位 | “明天去北京” → date=明天, destination=北京 |\n| named entity recognition | 文本 | 实体 | “apple is in california” → apple=org, california=loc |\n| question answering | 问题 + 文档 | 答案 | 从文章中抽取答案 |\n| natural language inference | 两句话 | entail/contradict/neutral | 判断一句话是否推出另一句话 |\n\n### 2.2 nlg：natural language generation\n\nnlg 是“生成文本”，从结构化信息、源文本或上下文生成自然语言。\n\n常见任务：\n\n| 任务 | 输入 | 输出 | 例子 |\n|---|---|---|---|\n| machine translation | 源语言句子 | 目标语言句子 | english → chinese |\n| summarization | 长文本 | 摘要 | 新闻摘要 |\n| dialogue generation | 对话上下文 | 回复 | chatbot |\n| paraphrasing | 原句 | 改写句 | 同义改写 |\n| report generation | 数据/表格 | 报告 | 医学影像报告生成 |\n\n## 3. nlp 系统的基本流程\n\n传统 nlp 系统通常可以理解为：\n\n```text\nraw text\n→ preprocessing\n→ feature/vector representation\n→ model\n→ prediction/generation\n→ evaluation\n```\n\n例如做 sentiment analysis：\n\n```text\n“i really like this movie!”\n→ tokenize: [i, really, like, this, movie]\n→ vectorize: 词向量/tf-idf/bert embedding\n→ classifier\n→ positive\n```\n\n## 4. 文本预处理\n\n### 4.1 tokenization\n\ntokenization 是把文本切分成 token 的过程。token 可以是：\n\n- word：`i love nlp` → `[i, love, nlp]`\n- character：`nlp` → `[n, l, p]`\n- subword：`unbelievable` → `[un, ##believ, ##able]`\n\n为什么 tokenization 重要？因为模型处理的是 token id，不是原始字符串。\n\n```text\n文本 → token → token id → embedding → 模型\n```\n\n### 4.2 vocabulary 与 index\n\n模型通常会维护一个 vocabulary，把 token 映射成数字。\n\n例如：\n\n```text\ni      → 4\nlike   → 7\ncats   → 10\nand    → 17\ndogs   → 11\n```\n\n句子：\n\n```text\ni like cats and dogs\n```\n\n转换为：\n\n```text\n[4, 7, 10, 17, 11]\n```\n\n### 4.3 padding\n\n神经网络训练时通常按 batch 输入。一个 batch 中的句子长度可能不同，但矩阵运算要求形状一致，所以需要 padding。\n\n例如：\n\n```text\nsentence 1: [4, 7, 10, 17, 11]\nsentence 2: [5, 8, 12, 13, 17, 18, 19, 20]\n```\n\n最长长度为 8，则句子 1 右侧补 0：\n\n```text\n[4, 7, 10, 17, 11, 0, 0, 0]\n```\n\npadding 位置通常要配合 attention mask，让模型不要把 padding 当成真实词。\n\n### 4.4 stop words removal\n\nstop words 是高频但信息量较低的词，例如：\n\n```text\nthe, a, an, is, are, of\n```\n\n在传统方法中，有时会去除 stop words。但在 bert/gpt 等模型中，通常不随意去除，因为这些模型可能利用功能词理解句法关系。\n\n### 4.5 stemming 与 lemmatization\n\n这两个操作都用于把词还原到更基础形式。\n\n| 方法 | 解释 | 例子 |\n|---|---|---|\n| stemming | 粗暴截断词缀 | studies → studi |\n| lemmatization | 根据词典和词性还原 | studies → study |\n\n### 4.6 bag-of-words\n\nbag-of-words，简称 bow，把文本表示成词频向量，不考虑顺序。\n\n例如 vocabulary：\n\n```text\n[cat, dog, run]\n```\n\n句子：\n\n```text\ncat dog cat\n```\n\nbow 表示：\n\n```text\n[2, 1, 0]\n```\n\n缺点：丢失顺序。\n\n```text\ndog bites man.\nman bites dog.\n```\n\nbow 可能非常相似，但语义不同。\n\n### 4.7 tf-idf\n\ntf-idf 用来衡量一个词对文档的重要性。\n\n核心思想：\n\n```text\n一个词在当前文档出现多 → 重要性上升\n一个词在所有文档都常见 → 重要性下降\n```\n\n公式直觉：\n\n```text\ntf-idf = term frequency × inverse document frequency\n```\n\n- tf：词在当前文档中的频率。\n- idf：词在整个语料中越少见，权重越高。\n\ntf-idf 常用于传统文本分类、信息检索、baseline 模型。\n\n## 5. 从传统 nlp 到神经 nlp\n\n传统 nlp 常见流程：\n\n```text\n文本 → 人工特征/tf-idf → 传统分类器（naive bayes/svm/logistic regression）\n```\n\n神经 nlp 常见流程：\n\n```text\n文本 → token id → embedding → neural model（rnn/cnn/transformer）→ output\n```\n\n大模型时代的流程：\n\n```text\n文本 + prompt → pretrained llm → output\n```\n\n## 6. 本模块考试重点\n\n### 6.1 必背概念\n\n- nlp 是让计算机处理自然语言的 ai 分支。\n- nlu 是理解/抽取意义；nlg 是生成自然语言。\n- tokenization 是把文本切成 token。\n- padding 是为了让同 batch 的输入等长。\n- bow/tf-idf 是传统向量化方法。\n\n### 6.2 常见问法\n\n**问题：nlu 和 nlg 有什么区别？**\n\n答题模板：\n\n```text\nnlu focuses on understanding and extracting meaning from natural language input, such as text classification, intent detection, slot filling, and question answering. nlg focuses on generating fluent and meaningful text, such as machine translation, summarization, and dialogue generation. in short, nlu maps text to structured meaning, while nlg maps meaning/context to text.\n```\n\n**问题：为什么 padding 后还需要 mask？**\n\n答题模板：\n\n```text\npadding makes sequences in a batch have the same length for efficient matrix operations. however, padded tokens are not real linguistic content. therefore, an attention mask is used to prevent the model from attending to or learning from padding positions.\n```"
  },
  {
    "id": "m2",
    "number": "02",
    "type": "Language Model",
    "file": "02_Module2_语言模型与n-gram_RNN_LSTM.md",
    "sourceHref": "../02_Module2_语言模型与n-gram_RNN_LSTM.md",
    "title": "语言模型、n-gram、RNN/LSTM",
    "fullTitle": "Module 2：语言模型、n-gram、RNN/LSTM",
    "summary": "Language Model，简称 LM，是对词序列分配概率的模型。",
    "keywords": [
      "NLP",
      "Vocabulary",
      "Language Model",
      "n-gram",
      "Markov",
      "Smoothing",
      "RNN",
      "LSTM"
    ],
    "sections": [
      {
        "id": "1-什么是-language-model",
        "title": "1. 什么是 Language Model",
        "level": 2,
        "body": "Language Model，简称 LM，是对词序列分配概率的模型。\n\n给定一个长度为 T 的词序列：\n\n```text\nx(1), x(2), ..., x(T)\n```\n\n语言模型会给整个序列分配概率：\n\n```text\nP(x(1), x(2), ..., x(T))\n```\n\n直觉上，它判断一句话“像不像自然语言”。\n\n例如：\n\n```text\nNLP is about how machines understand natural languages.\n```\n\n比下面这句更自然：\n\n```text\nmachines NLP about languages understand how is natural process.\n```\n\n语言模型也可以理解为“预测下一个词”：\n\n```text\nthe students opened their ____\n```\n\n模型要预测下一个词可能是：\n\n```text\nbooks / laptops / exams / minds\n```",
        "summary": "Language Model，简称 LM，是对词序列分配概率的模型。",
        "keywords": [
          "NLP",
          "Language Model",
          "K"
        ]
      },
      {
        "id": "2-链式法则-把句子概率拆成条件概率",
        "title": "2. 链式法则：把句子概率拆成条件概率",
        "level": 2,
        "body": "根据概率链式法则：\n\n```text\nP(w1, w2, ..., wT)\n= P(w1) × P(w2 | w1) × P(w3 | w1, w2) × ... × P(wT | w1, ..., wT-1)\n```\n\n一般写作：\n\n```text\nP(S) = ∏ P(wt | w1, ..., wt-1)\n```\n\n这表示：一句话的概率可以拆成每个词在前面历史下出现的概率。\n\n问题是：完整历史太长，组合空间太大，无法可靠估计。",
        "summary": "这表示：一句话的概率可以拆成每个词在前面历史下出现的概率。",
        "keywords": []
      },
      {
        "id": "3-n-gram-模型",
        "title": "3. n-gram 模型",
        "level": 2,
        "body": "n-gram 使用 Markov assumption：预测当前词时，不看完整历史，只看前 n-1 个词。\n\n```text\nP(wt | w1, ..., wt-1) ≈ P(wt | wt-n+1, ..., wt-1)\n```\n\n### 3.1 unigram / bigram / trigram\n\n句子：\n\n```text\nthe students opened their books\n```\n\n| 类型 | 示例 |\n|---|---|\n| unigram | the, students, opened, their, books |\n| bigram | the students, students opened, opened their, their books |\n| trigram | the students opened, students opened their, opened their books |\n\n### 3.2 n-gram 概率估计\n\nbigram 例子：\n\n```text\nP(books | their) = count(their books) / count(their)\n```\n\ntrigram 例子：\n\n```text\nP(books | opened their) = count(opened their books) / count(opened their)\n```",
        "summary": "n-gram 使用 Markov assumption：预测当前词时，不看完整历史，只看前 n-1 个词。",
        "keywords": [
          "n-gram",
          "Markov",
          "K",
          "V"
        ]
      },
      {
        "id": "4-n-gram-的三个核心问题",
        "title": "4. n-gram 的三个核心问题",
        "level": 2,
        "body": "### 4.1 Sparsity：稀疏问题\n\n词表很大时，可能出现大量没见过的组合。\n\n例如训练语料中见过：\n\n```text\nstudying NLP\n```\n\n但没见过：\n\n```text\nstudying AI\n```\n\n即使 `studying` 和 `AI` 都是已知词，n-gram 也可能给这个组合 0 概率。\n\n### 4.2 Curse of dimensionality：维度灾难\n\n如果词表大小是 V，那么可能的 n-gram 数量约为：\n\n```text\nV^n\n```\n\n当 n 增大，组合空间指数增长。即使语料很大，大部分 n-gram 仍然不会出现。\n\n### 4.3 Long-range dependency：长距离依赖问题\n\nn-gram 只能看有限窗口，难以捕捉远距离信息。\n\n例子：\n\n```text\nThe key that opened the box was rusty because it had been in the attic for years.\n```\n\n要判断 `it` 指什么，可能需要更长上下文。trigram 或 4-gram 很难解决。",
        "summary": "词表很大时，可能出现大量没见过的组合。",
        "keywords": [
          "NLP",
          "n-gram",
          "K",
          "V"
        ]
      },
      {
        "id": "5-smoothing",
        "title": "5. Smoothing",
        "level": 2,
        "body": "为了解决未出现 n-gram 概率为 0 的问题，可以使用 smoothing。\n\n最简单的是 add-one smoothing：\n\n```text\nP(w | context) = (count(context, w) + 1) / (count(context) + |V|)\n```\n\n直觉：给所有可能词都加一点概率，避免 0。\n\n但 smoothing 只是缓解问题，不能真正理解语义或泛化到新组合。",
        "summary": "为了解决未出现 n-gram 概率为 0 的问题，可以使用 smoothing。",
        "keywords": [
          "n-gram",
          "Smoothing",
          "V"
        ]
      },
      {
        "id": "6-neural-language-model",
        "title": "6. Neural Language Model",
        "level": 2,
        "body": "神经语言模型用 embedding 和神经网络预测下一个词。\n\n基本流程：\n\n```text\n前几个词 → word embeddings → neural network → softmax over vocabulary → next word probability\n```\n\n例如 4-gram neural LM：\n\n```text\n(I, am, taking) → CS6493\n(am, taking, CS6493) → this\n(taking, CS6493, this) → semester\n```\n\n### 6.1 Embedding layer\n\n输入是 token ID，embedding layer 把每个 token ID 查表变成 dense vector。\n\n如果：\n\n```text\nvocab_size = 50,000\nembedding_dim = 128\n```\n\nembedding table 参数量是：\n\n```text\n50,000 × 128 = 6,400,000\n```\n\n### 6.2 Softmax 输出\n\n模型最后输出 vocabulary 中每个词作为下一个词的概率。\n\n```text\nP(next_word | context)\n```\n\n训练目标通常是最大化真实下一个词的概率，等价于最小化 cross-entropy loss。",
        "summary": "神经语言模型用 embedding 和神经网络预测下一个词。",
        "keywords": [
          "Vocabulary",
          "Language Model",
          "Embedding",
          "K",
          "V"
        ]
      },
      {
        "id": "7-rnn-based-language-model",
        "title": "7. RNN-based Language Model",
        "level": 2,
        "body": "RNN 用隐藏状态逐步处理序列：\n\n```text\nh_t = f(x_t, h_{t-1})\n```\n\n其中：\n\n- `x_t`：当前词的 embedding\n- `h_t`：当前隐藏状态，理论上包含前面历史信息\n\nRNN 的优点：\n\n- 可以处理任意长度输入。\n- 模型参数不随序列长度增加。\n- 同一组参数在每个时间步共享。\n\nRNN 的问题：\n\n- 顺序计算，难以并行。\n- 长距离依赖难学。\n- 容易出现 vanishing/exploding gradient。",
        "summary": "RNN 用隐藏状态逐步处理序列：",
        "keywords": [
          "Language Model",
          "RNN",
          "Embedding",
          "V"
        ]
      },
      {
        "id": "8-lstm",
        "title": "8. LSTM",
        "level": 2,
        "body": "LSTM 是一种特殊 RNN，用门控机制缓解梯度消失问题。\n\n它有几个关键门：\n\n| 组件 | 作用 |\n|---|---|\n| input gate | 决定当前输入写入多少 |\n| forget gate | 决定旧记忆保留多少 |\n| output gate | 决定输出多少隐藏状态 |\n| cell state | 长期记忆通道 |\n\n直觉：普通 RNN 每一步都把历史混在一起，LSTM 增加了“记忆开关”，可以选择保留或遗忘信息。",
        "summary": "LSTM 是一种特殊 RNN，用门控机制缓解梯度消失问题。",
        "keywords": [
          "RNN",
          "LSTM"
        ]
      },
      {
        "id": "9-perplexity",
        "title": "9. Perplexity",
        "level": 2,
        "body": "Perplexity 是语言模型的标准评价指标。\n\n直觉：模型面对每个位置时平均有多少个“困惑的候选词”。\n\n- perplexity 越低，模型越好。\n- 如果模型对真实文本给出更高概率，则 perplexity 更低。\n\n与 cross-entropy loss 的关系：\n\n```text\nperplexity = exp(cross_entropy)\n```",
        "summary": "Perplexity 是语言模型的标准评价指标。",
        "keywords": [
          "Perplexity"
        ]
      },
      {
        "id": "10-本模块考试重点",
        "title": "10. 本模块考试重点",
        "level": 2,
        "body": "### 10.1 必背概念\n\n- LM 是对词序列分配概率的模型，也可看作预测下一个词。\n- n-gram 使用 Markov assumption，只看前 n-1 个词。\n- n-gram 的主要问题：sparsity、无法泛化、长距离依赖弱。\n- RNN 通过 hidden state 建模序列，但难并行且有长依赖问题。\n- LSTM 用 gating mechanism 缓解 vanishing gradient。\n- Perplexity 越低越好。\n\n### 10.2 高频答题模板\n\n**问题：为什么 n-gram 不能很好泛化到 novel sequences？**\n\n```text\nn-gram models estimate probabilities from observed co-occurrence counts. If a sequence has not appeared in the training corpus, the model may assign zero or very low probability even if all individual words are known. Since n-gram models do not learn semantic or compositional representations, they cannot generalize well to novel but meaningful word combinations.\n```\n\n**问题：Markov assumption 的局限是什么？**\n\n```text\nThe Markov assumption approximates the next-word probability using only the previous n-1 words. This reduces computational cost, but it prevents the model from using long-distance context. Therefore, it fails in cases requiring discourse-level information, coreference resolution, or dependencies across long spans.\n```\n\n**问题：为什么需要 neural language models？**\n\n```text\nNeural language models learn dense representations of words and contexts, allowing them to share statistical strength across similar words and contexts. Compared with count-based n-gram models, they can generalize better to unseen sequences and capture richer semantic patterns.\n```",
        "summary": "**问题：为什么 n-gram 不能很好泛化到 novel sequences？**",
        "keywords": [
          "Language Model",
          "n-gram",
          "Markov",
          "RNN",
          "LSTM",
          "Perplexity",
          "Q",
          "K"
        ]
      }
    ],
    "wordCount": 4059,
    "sectionCount": 10,
    "searchText": "module 2：语言模型、n-gram、rnn/lstm\n## 1. 什么是 language model\n\nlanguage model，简称 lm，是对词序列分配概率的模型。\n\n给定一个长度为 t 的词序列：\n\n```text\nx(1), x(2), ..., x(t)\n```\n\n语言模型会给整个序列分配概率：\n\n```text\np(x(1), x(2), ..., x(t))\n```\n\n直觉上，它判断一句话“像不像自然语言”。\n\n例如：\n\n```text\nnlp is about how machines understand natural languages.\n```\n\n比下面这句更自然：\n\n```text\nmachines nlp about languages understand how is natural process.\n```\n\n语言模型也可以理解为“预测下一个词”：\n\n```text\nthe students opened their ____\n```\n\n模型要预测下一个词可能是：\n\n```text\nbooks / laptops / exams / minds\n```\n\n## 2. 链式法则：把句子概率拆成条件概率\n\n根据概率链式法则：\n\n```text\np(w1, w2, ..., wt)\n= p(w1) × p(w2 | w1) × p(w3 | w1, w2) × ... × p(wt | w1, ..., wt-1)\n```\n\n一般写作：\n\n```text\np(s) = ∏ p(wt | w1, ..., wt-1)\n```\n\n这表示：一句话的概率可以拆成每个词在前面历史下出现的概率。\n\n问题是：完整历史太长，组合空间太大，无法可靠估计。\n\n## 3. n-gram 模型\n\nn-gram 使用 markov assumption：预测当前词时，不看完整历史，只看前 n-1 个词。\n\n```text\np(wt | w1, ..., wt-1) ≈ p(wt | wt-n+1, ..., wt-1)\n```\n\n### 3.1 unigram / bigram / trigram\n\n句子：\n\n```text\nthe students opened their books\n```\n\n| 类型 | 示例 |\n|---|---|\n| unigram | the, students, opened, their, books |\n| bigram | the students, students opened, opened their, their books |\n| trigram | the students opened, students opened their, opened their books |\n\n### 3.2 n-gram 概率估计\n\nbigram 例子：\n\n```text\np(books | their) = count(their books) / count(their)\n```\n\ntrigram 例子：\n\n```text\np(books | opened their) = count(opened their books) / count(opened their)\n```\n\n## 4. n-gram 的三个核心问题\n\n### 4.1 sparsity：稀疏问题\n\n词表很大时，可能出现大量没见过的组合。\n\n例如训练语料中见过：\n\n```text\nstudying nlp\n```\n\n但没见过：\n\n```text\nstudying ai\n```\n\n即使 `studying` 和 `ai` 都是已知词，n-gram 也可能给这个组合 0 概率。\n\n### 4.2 curse of dimensionality：维度灾难\n\n如果词表大小是 v，那么可能的 n-gram 数量约为：\n\n```text\nv^n\n```\n\n当 n 增大，组合空间指数增长。即使语料很大，大部分 n-gram 仍然不会出现。\n\n### 4.3 long-range dependency：长距离依赖问题\n\nn-gram 只能看有限窗口，难以捕捉远距离信息。\n\n例子：\n\n```text\nthe key that opened the box was rusty because it had been in the attic for years.\n```\n\n要判断 `it` 指什么，可能需要更长上下文。trigram 或 4-gram 很难解决。\n\n## 5. smoothing\n\n为了解决未出现 n-gram 概率为 0 的问题，可以使用 smoothing。\n\n最简单的是 add-one smoothing：\n\n```text\np(w | context) = (count(context, w) + 1) / (count(context) + |v|)\n```\n\n直觉：给所有可能词都加一点概率，避免 0。\n\n但 smoothing 只是缓解问题，不能真正理解语义或泛化到新组合。\n\n## 6. neural language model\n\n神经语言模型用 embedding 和神经网络预测下一个词。\n\n基本流程：\n\n```text\n前几个词 → word embeddings → neural network → softmax over vocabulary → next word probability\n```\n\n例如 4-gram neural lm：\n\n```text\n(i, am, taking) → cs6493\n(am, taking, cs6493) → this\n(taking, cs6493, this) → semester\n```\n\n### 6.1 embedding layer\n\n输入是 token id，embedding layer 把每个 token id 查表变成 dense vector。\n\n如果：\n\n```text\nvocab_size = 50,000\nembedding_dim = 128\n```\n\nembedding table 参数量是：\n\n```text\n50,000 × 128 = 6,400,000\n```\n\n### 6.2 softmax 输出\n\n模型最后输出 vocabulary 中每个词作为下一个词的概率。\n\n```text\np(next_word | context)\n```\n\n训练目标通常是最大化真实下一个词的概率，等价于最小化 cross-entropy loss。\n\n## 7. rnn-based language model\n\nrnn 用隐藏状态逐步处理序列：\n\n```text\nh_t = f(x_t, h_{t-1})\n```\n\n其中：\n\n- `x_t`：当前词的 embedding\n- `h_t`：当前隐藏状态，理论上包含前面历史信息\n\nrnn 的优点：\n\n- 可以处理任意长度输入。\n- 模型参数不随序列长度增加。\n- 同一组参数在每个时间步共享。\n\nrnn 的问题：\n\n- 顺序计算，难以并行。\n- 长距离依赖难学。\n- 容易出现 vanishing/exploding gradient。\n\n## 8. lstm\n\nlstm 是一种特殊 rnn，用门控机制缓解梯度消失问题。\n\n它有几个关键门：\n\n| 组件 | 作用 |\n|---|---|\n| input gate | 决定当前输入写入多少 |\n| forget gate | 决定旧记忆保留多少 |\n| output gate | 决定输出多少隐藏状态 |\n| cell state | 长期记忆通道 |\n\n直觉：普通 rnn 每一步都把历史混在一起，lstm 增加了“记忆开关”，可以选择保留或遗忘信息。\n\n## 9. perplexity\n\nperplexity 是语言模型的标准评价指标。\n\n直觉：模型面对每个位置时平均有多少个“困惑的候选词”。\n\n- perplexity 越低，模型越好。\n- 如果模型对真实文本给出更高概率，则 perplexity 更低。\n\n与 cross-entropy loss 的关系：\n\n```text\nperplexity = exp(cross_entropy)\n```\n\n## 10. 本模块考试重点\n\n### 10.1 必背概念\n\n- lm 是对词序列分配概率的模型，也可看作预测下一个词。\n- n-gram 使用 markov assumption，只看前 n-1 个词。\n- n-gram 的主要问题：sparsity、无法泛化、长距离依赖弱。\n- rnn 通过 hidden state 建模序列，但难并行且有长依赖问题。\n- lstm 用 gating mechanism 缓解 vanishing gradient。\n- perplexity 越低越好。\n\n### 10.2 高频答题模板\n\n**问题：为什么 n-gram 不能很好泛化到 novel sequences？**\n\n```text\nn-gram models estimate probabilities from observed co-occurrence counts. if a sequence has not appeared in the training corpus, the model may assign zero or very low probability even if all individual words are known. since n-gram models do not learn semantic or compositional representations, they cannot generalize well to novel but meaningful word combinations.\n```\n\n**问题：markov assumption 的局限是什么？**\n\n```text\nthe markov assumption approximates the next-word probability using only the previous n-1 words. this reduces computational cost, but it prevents the model from using long-distance context. therefore, it fails in cases requiring discourse-level information, coreference resolution, or dependencies across long spans.\n```\n\n**问题：为什么需要 neural language models？**\n\n```text\nneural language models learn dense representations of words and contexts, allowing them to share statistical strength across similar words and contexts. compared with count-based n-gram models, they can generalize better to unseen sequences and capture richer semantic patterns.\n```"
  },
  {
    "id": "m3",
    "number": "03",
    "type": "Representation",
    "file": "03_Module3_词表示_Word2Vec_GloVe_ELMo.md",
    "sourceHref": "../03_Module3_词表示_Word2Vec_GloVe_ELMo.md",
    "title": "词表示、Word2Vec、GloVe、ELMo",
    "fullTitle": "Module 3：词表示、Word2Vec、GloVe、ELMo",
    "summary": "模型不能直接理解单词，需要把词表示成数字。",
    "keywords": [
      "Vocabulary",
      "BOW",
      "LSTM",
      "one-hot",
      "Embedding",
      "Word2Vec",
      "CBOW",
      "Skip-gram"
    ],
    "sections": [
      {
        "id": "1-为什么要学习词表示",
        "title": "1. 为什么要学习词表示",
        "level": 2,
        "body": "模型不能直接理解单词，需要把词表示成数字。\n\n最简单的方式是 one-hot，但 one-hot 有严重局限。词向量的核心目标是：\n\n> 用一个 dense vector 表示每个词，并让语义相似的词在向量空间中距离更近。",
        "summary": "模型不能直接理解单词，需要把词表示成数字。",
        "keywords": [
          "one-hot",
          "V"
        ]
      },
      {
        "id": "2-one-hot-encoding",
        "title": "2. One-hot Encoding",
        "level": 2,
        "body": "假设 vocabulary 为：\n\n```text\nV = {cat, dog, run, runs}\n```\n\n按字典序排列：\n\n```text\ncat, dog, run, runs\n```\n\none-hot 表示为：\n\n```text\ncat  = [1, 0, 0, 0]\ndog  = [0, 1, 0, 0]\nrun  = [0, 0, 1, 0]\nruns = [0, 0, 0, 1]\n```\n\n### 2.1 one-hot 的问题\n\n#### 问题 1：所有不同词都正交\n\n任意两个不同词的 dot product 都是 0：\n\n```text\ncat · dog = 0\nrun · runs = 0\n```\n\n这意味着 one-hot 看不出：\n\n```text\ncat 和 dog 比 cat 和 run 更相似\nrun 和 runs 有形态关系\n```\n\n#### 问题 2：维度过高且稀疏\n\n如果词表有 50,000 个词，每个 one-hot 向量就是 50,000 维，只有一个位置是 1。\n\n#### 问题 3：不能表达语义和形态关系\n\n`run` 和 `runs` 在语言上明显相关，但 one-hot 完全看不出来。",
        "summary": "任意两个不同词的 dot product 都是 0：",
        "keywords": [
          "Vocabulary",
          "one-hot",
          "V"
        ]
      },
      {
        "id": "3-distributional-hypothesis",
        "title": "3. Distributional Hypothesis",
        "level": 2,
        "body": "Distributional hypothesis 是现代词向量的理论基础。\n\n核心思想：\n\n```text\nWords that occur in similar contexts tend to have similar meanings.\n```\n\n也就是：\n\n```text\nYou shall know a word by the company it keeps.\n```\n\n如果两个词经常出现在相似上下文里，它们可能语义相近。\n\n例如：\n\n```text\nI booked a hotel.\nI booked a motel.\n```\n\n`hotel` 和 `motel` 的上下文类似，所以它们的向量应该接近。",
        "summary": "Distributional hypothesis 是现代词向量的理论基础。",
        "keywords": [
          "K",
          "V"
        ]
      },
      {
        "id": "4-word-embedding",
        "title": "4. Word Embedding",
        "level": 2,
        "body": "Word embedding 是词的低维稠密向量表示。\n\n例如：\n\n```text\nbanking = [0.286, 0.792, -0.177, ..., 0.271]\n```\n\n特点：\n\n- 低维：通常 50、100、300、768 维。\n- 稠密：大部分位置都有非零值。\n- 可学习：通过语料训练得到。\n- 可计算相似度：可以用 cosine similarity 衡量词语相似性。",
        "summary": "Word embedding 是词的低维稠密向量表示。",
        "keywords": [
          "Embedding",
          "K"
        ]
      },
      {
        "id": "5-word2vec",
        "title": "5. Word2Vec",
        "level": 2,
        "body": "Word2Vec 是学习词向量的经典框架。\n\n核心思想：\n\n```text\n一个词的意义由它周围的词决定。\n```\n\nWord2Vec 有两种训练方式：\n\n| 方法 | 输入 | 目标 |\n|---|---|---|\n| CBOW | 上下文词 | 预测中心词 |\n| Skip-gram | 中心词 | 预测上下文词 |",
        "summary": "Word2Vec 是学习词向量的经典框架。",
        "keywords": [
          "BOW",
          "Word2Vec",
          "CBOW",
          "Skip-gram",
          "K",
          "V"
        ]
      },
      {
        "id": "6-cbow",
        "title": "6. CBOW",
        "level": 2,
        "body": "CBOW：Continuous Bag-of-Words。\n\n任务：给定上下文词，预测中心词。\n\n例子：\n\n```text\nThe students opened their books\n```\n\n如果窗口大小为 2，中心词是 `opened`：\n\n```text\ncontext = [The, students, their, books]\ntarget = opened\n```\n\nCBOW 通常训练更快，对高频词效果较好。",
        "summary": "CBOW：Continuous Bag-of-Words。",
        "keywords": [
          "BOW",
          "CBOW",
          "K"
        ]
      },
      {
        "id": "7-skip-gram",
        "title": "7. Skip-gram",
        "level": 2,
        "body": "Skip-gram 的方向相反：给定中心词，预测周围上下文词。\n\n例子：\n\n```text\ncenter = opened\ncontext = [The, students, their, books]\n```\n\nSkip-gram 的目标是最大化：\n\n```text\nP(context words | center word)\n```\n\n更正式地说，在每个位置 t，对于中心词 `w_t`，预测窗口内的上下文词 `w_{t+j}`。",
        "summary": "Skip-gram 的方向相反：给定中心词，预测周围上下文词。",
        "keywords": [
          "Skip-gram",
          "K"
        ]
      },
      {
        "id": "8-为什么-skip-gram-训练慢",
        "title": "8. 为什么 Skip-gram 训练慢",
        "level": 2,
        "body": "Skip-gram 原始 softmax 需要对整个 vocabulary 归一化。\n\n如果词表大小为 V，每次更新都要计算：\n\n```text\nP(w_o | w_i) = exp(u_o^T v_i) / Σ exp(u_w^T v_i)\n```\n\n分母要对所有词求和，复杂度是：\n\n```text\nO(V)\n```\n\n当词表有 100,000 个词时，每一步都非常慢。",
        "summary": "Skip-gram 原始 softmax 需要对整个 vocabulary 归一化。",
        "keywords": [
          "Vocabulary",
          "Skip-gram",
          "K",
          "V"
        ]
      },
      {
        "id": "9-negative-sampling",
        "title": "9. Negative Sampling",
        "level": 2,
        "body": "Negative sampling 是加速 Word2Vec 的重要方法。\n\n它不再对全词表做 softmax，而是每次只训练：\n\n```text\n1 个正样本：真实上下文词\nK 个负样本：随机采样出来的非上下文词\n```\n\n目标：\n\n- 让中心词和真实上下文词向量更接近。\n- 让中心词和负样本词向量更远。\n\n直觉例子：\n\n```text\ncenter = banking\npositive context = crisis\nnegative samples = banana, table, swimming, ...\n```\n\n模型学习：`banking` 应该和 `crisis` 更相关，而不是和 `banana` 更相关。\n\n### 9.1 negative sampling 的优点\n\n- 每步只更新少数词，复杂度从 `O(V)` 降到约 `O(K)`。\n- 适合大词表。\n- 对 frequent words 和低维向量效果较好。",
        "summary": "Negative sampling 是加速 Word2Vec 的重要方法。",
        "keywords": [
          "Word2Vec",
          "Negative Sampling",
          "Q",
          "K",
          "V"
        ]
      },
      {
        "id": "10-hierarchical-softmax",
        "title": "10. Hierarchical Softmax",
        "level": 2,
        "body": "Hierarchical softmax 用一棵二叉树表示词表。预测一个词时，不需要对所有词做 softmax，而是沿树路径做一系列二分类。\n\n优点：\n\n- 复杂度约为 `O(log V)`。\n- 对低频词可能更友好。",
        "summary": "Hierarchical softmax 用一棵二叉树表示词表。预测一个词时，不需要对所有词做 softmax，而是沿树路径做一系列二分类。",
        "keywords": [
          "V"
        ]
      },
      {
        "id": "11-glove",
        "title": "11. GloVe",
        "level": 2,
        "body": "GloVe：Global Vectors for Word Representation。\n\n它结合了两种思想：\n\n| 方法 | 关注点 |\n|---|---|\n| LSA | 全局共现统计 |\n| Word2Vec | 局部上下文预测 |\n\nGloVe 通过构建全局词共现矩阵，学习词向量。\n\n直觉：如果两个词和其他词的共现模式相似，那么它们语义相似。",
        "summary": "GloVe：Global Vectors for Word Representation。",
        "keywords": [
          "Word2Vec",
          "GloVe",
          "V"
        ]
      },
      {
        "id": "12-context-independent-vs-contextualized-embeddings",
        "title": "12. Context-independent vs Contextualized Embeddings",
        "level": 2,
        "body": "### 12.1 静态词向量的问题\n\nWord2Vec 和 GloVe 都是 context-independent embedding。\n\n也就是说，每个词只有一个固定向量。\n\n问题：无法处理多义词。\n\n例如：\n\n```text\nopen a bank account\nsit on the river bank\n```\n\n`bank` 在两句话中含义不同，但 Word2Vec/GloVe 给它同一个向量。\n\n### 12.2 ELMo\n\nELMo 是 contextualized word embedding。\n\n它使用双向 LSTM，根据整句话上下文动态生成词向量。\n\n所以：\n\n```text\nbank in “bank account”\nbank in “river bank”\n```\n\n会得到不同表示。\n\nELMo 解决的关键问题：\n\n> 同一个词在不同上下文中可能有不同含义，静态词向量无法区分，而 contextualized embedding 可以根据上下文动态调整表示。",
        "summary": "Word2Vec 和 GloVe 都是 context-independent embedding。",
        "keywords": [
          "LSTM",
          "Embedding",
          "Word2Vec",
          "GloVe",
          "ELMo",
          "K",
          "V"
        ]
      },
      {
        "id": "13-本模块考试重点",
        "title": "13. 本模块考试重点",
        "level": 2,
        "body": "### 13.1 必背概念\n\n- one-hot 是高维稀疏离散表示，不能表达词语相似性。\n- distributional hypothesis：相似上下文中的词语倾向于有相似含义。\n- word embedding 是低维稠密向量。\n- CBOW：上下文预测中心词。\n- Skip-gram：中心词预测上下文。\n- negative sampling 用少量负样本近似全词表 softmax。\n- GloVe 基于全局共现矩阵。\n- ELMo 是上下文相关词向量，解决多义词问题。\n\n### 13.2 高频答题模板\n\n**问题：为什么 one-hot 不能表示语义相似性？**\n\n```text\nOne-hot vectors treat each word as an independent discrete symbol. Any two distinct words have dot product zero and are equally distant, so the representation cannot reflect semantic, syntactic, or morphological similarity. For example, cat and dog are more related than cat and run, but one-hot encoding cannot capture this difference.\n```\n\n**问题：Distributional hypothesis 是什么？**\n\n```text\nThe distributional hypothesis states that words occurring in similar contexts tend to have similar meanings. It is the basis of many word embedding methods, because word meaning can be learned from co-occurrence patterns in large corpora.\n```\n\n**问题：为什么 Skip-gram 训练慢，如何优化？**\n\n```text\nThe original Skip-gram model uses a softmax over the entire vocabulary to compute the probability of context words. This requires O(V) computation per training step, which is expensive for large vocabularies. Negative sampling improves efficiency by updating only one positive context word and K sampled negative words, reducing the cost to approximately O(K).\n```\n\n**问题：ELMo 相比 Word2Vec/GloVe 解决了什么问题？**\n\n```text\nWord2Vec and GloVe assign one static vector to each word, so they cannot distinguish different meanings of polysemous words. ELMo uses a deep bidirectional LSTM to generate context-dependent embeddings, so the same word can have different representations in different contexts.\n```",
        "summary": "**问题：为什么 one-hot 不能表示语义相似性？**",
        "keywords": [
          "Vocabulary",
          "BOW",
          "LSTM",
          "one-hot",
          "Embedding",
          "Word2Vec",
          "CBOW",
          "Skip-gram"
        ]
      }
    ],
    "wordCount": 4270,
    "sectionCount": 13,
    "searchText": "module 3：词表示、word2vec、glove、elmo\n## 1. 为什么要学习词表示\n\n模型不能直接理解单词，需要把词表示成数字。\n\n最简单的方式是 one-hot，但 one-hot 有严重局限。词向量的核心目标是：\n\n> 用一个 dense vector 表示每个词，并让语义相似的词在向量空间中距离更近。\n\n## 2. one-hot encoding\n\n假设 vocabulary 为：\n\n```text\nv = {cat, dog, run, runs}\n```\n\n按字典序排列：\n\n```text\ncat, dog, run, runs\n```\n\none-hot 表示为：\n\n```text\ncat  = [1, 0, 0, 0]\ndog  = [0, 1, 0, 0]\nrun  = [0, 0, 1, 0]\nruns = [0, 0, 0, 1]\n```\n\n### 2.1 one-hot 的问题\n\n#### 问题 1：所有不同词都正交\n\n任意两个不同词的 dot product 都是 0：\n\n```text\ncat · dog = 0\nrun · runs = 0\n```\n\n这意味着 one-hot 看不出：\n\n```text\ncat 和 dog 比 cat 和 run 更相似\nrun 和 runs 有形态关系\n```\n\n#### 问题 2：维度过高且稀疏\n\n如果词表有 50,000 个词，每个 one-hot 向量就是 50,000 维，只有一个位置是 1。\n\n#### 问题 3：不能表达语义和形态关系\n\n`run` 和 `runs` 在语言上明显相关，但 one-hot 完全看不出来。\n\n## 3. distributional hypothesis\n\ndistributional hypothesis 是现代词向量的理论基础。\n\n核心思想：\n\n```text\nwords that occur in similar contexts tend to have similar meanings.\n```\n\n也就是：\n\n```text\nyou shall know a word by the company it keeps.\n```\n\n如果两个词经常出现在相似上下文里，它们可能语义相近。\n\n例如：\n\n```text\ni booked a hotel.\ni booked a motel.\n```\n\n`hotel` 和 `motel` 的上下文类似，所以它们的向量应该接近。\n\n## 4. word embedding\n\nword embedding 是词的低维稠密向量表示。\n\n例如：\n\n```text\nbanking = [0.286, 0.792, -0.177, ..., 0.271]\n```\n\n特点：\n\n- 低维：通常 50、100、300、768 维。\n- 稠密：大部分位置都有非零值。\n- 可学习：通过语料训练得到。\n- 可计算相似度：可以用 cosine similarity 衡量词语相似性。\n\n## 5. word2vec\n\nword2vec 是学习词向量的经典框架。\n\n核心思想：\n\n```text\n一个词的意义由它周围的词决定。\n```\n\nword2vec 有两种训练方式：\n\n| 方法 | 输入 | 目标 |\n|---|---|---|\n| cbow | 上下文词 | 预测中心词 |\n| skip-gram | 中心词 | 预测上下文词 |\n\n## 6. cbow\n\ncbow：continuous bag-of-words。\n\n任务：给定上下文词，预测中心词。\n\n例子：\n\n```text\nthe students opened their books\n```\n\n如果窗口大小为 2，中心词是 `opened`：\n\n```text\ncontext = [the, students, their, books]\ntarget = opened\n```\n\ncbow 通常训练更快，对高频词效果较好。\n\n## 7. skip-gram\n\nskip-gram 的方向相反：给定中心词，预测周围上下文词。\n\n例子：\n\n```text\ncenter = opened\ncontext = [the, students, their, books]\n```\n\nskip-gram 的目标是最大化：\n\n```text\np(context words | center word)\n```\n\n更正式地说，在每个位置 t，对于中心词 `w_t`，预测窗口内的上下文词 `w_{t+j}`。\n\n## 8. 为什么 skip-gram 训练慢\n\nskip-gram 原始 softmax 需要对整个 vocabulary 归一化。\n\n如果词表大小为 v，每次更新都要计算：\n\n```text\np(w_o | w_i) = exp(u_o^t v_i) / σ exp(u_w^t v_i)\n```\n\n分母要对所有词求和，复杂度是：\n\n```text\no(v)\n```\n\n当词表有 100,000 个词时，每一步都非常慢。\n\n## 9. negative sampling\n\nnegative sampling 是加速 word2vec 的重要方法。\n\n它不再对全词表做 softmax，而是每次只训练：\n\n```text\n1 个正样本：真实上下文词\nk 个负样本：随机采样出来的非上下文词\n```\n\n目标：\n\n- 让中心词和真实上下文词向量更接近。\n- 让中心词和负样本词向量更远。\n\n直觉例子：\n\n```text\ncenter = banking\npositive context = crisis\nnegative samples = banana, table, swimming, ...\n```\n\n模型学习：`banking` 应该和 `crisis` 更相关，而不是和 `banana` 更相关。\n\n### 9.1 negative sampling 的优点\n\n- 每步只更新少数词，复杂度从 `o(v)` 降到约 `o(k)`。\n- 适合大词表。\n- 对 frequent words 和低维向量效果较好。\n\n## 10. hierarchical softmax\n\nhierarchical softmax 用一棵二叉树表示词表。预测一个词时，不需要对所有词做 softmax，而是沿树路径做一系列二分类。\n\n优点：\n\n- 复杂度约为 `o(log v)`。\n- 对低频词可能更友好。\n\n## 11. glove\n\nglove：global vectors for word representation。\n\n它结合了两种思想：\n\n| 方法 | 关注点 |\n|---|---|\n| lsa | 全局共现统计 |\n| word2vec | 局部上下文预测 |\n\nglove 通过构建全局词共现矩阵，学习词向量。\n\n直觉：如果两个词和其他词的共现模式相似，那么它们语义相似。\n\n## 12. context-independent vs contextualized embeddings\n\n### 12.1 静态词向量的问题\n\nword2vec 和 glove 都是 context-independent embedding。\n\n也就是说，每个词只有一个固定向量。\n\n问题：无法处理多义词。\n\n例如：\n\n```text\nopen a bank account\nsit on the river bank\n```\n\n`bank` 在两句话中含义不同，但 word2vec/glove 给它同一个向量。\n\n### 12.2 elmo\n\nelmo 是 contextualized word embedding。\n\n它使用双向 lstm，根据整句话上下文动态生成词向量。\n\n所以：\n\n```text\nbank in “bank account”\nbank in “river bank”\n```\n\n会得到不同表示。\n\nelmo 解决的关键问题：\n\n> 同一个词在不同上下文中可能有不同含义，静态词向量无法区分，而 contextualized embedding 可以根据上下文动态调整表示。\n\n## 13. 本模块考试重点\n\n### 13.1 必背概念\n\n- one-hot 是高维稀疏离散表示，不能表达词语相似性。\n- distributional hypothesis：相似上下文中的词语倾向于有相似含义。\n- word embedding 是低维稠密向量。\n- cbow：上下文预测中心词。\n- skip-gram：中心词预测上下文。\n- negative sampling 用少量负样本近似全词表 softmax。\n- glove 基于全局共现矩阵。\n- elmo 是上下文相关词向量，解决多义词问题。\n\n### 13.2 高频答题模板\n\n**问题：为什么 one-hot 不能表示语义相似性？**\n\n```text\none-hot vectors treat each word as an independent discrete symbol. any two distinct words have dot product zero and are equally distant, so the representation cannot reflect semantic, syntactic, or morphological similarity. for example, cat and dog are more related than cat and run, but one-hot encoding cannot capture this difference.\n```\n\n**问题：distributional hypothesis 是什么？**\n\n```text\nthe distributional hypothesis states that words occurring in similar contexts tend to have similar meanings. it is the basis of many word embedding methods, because word meaning can be learned from co-occurrence patterns in large corpora.\n```\n\n**问题：为什么 skip-gram 训练慢，如何优化？**\n\n```text\nthe original skip-gram model uses a softmax over the entire vocabulary to compute the probability of context words. this requires o(v) computation per training step, which is expensive for large vocabularies. negative sampling improves efficiency by updating only one positive context word and k sampled negative words, reducing the cost to approximately o(k).\n```\n\n**问题：elmo 相比 word2vec/glove 解决了什么问题？**\n\n```text\nword2vec and glove assign one static vector to each word, so they cannot distinguish different meanings of polysemous words. elmo uses a deep bidirectional lstm to generate context-dependent embeddings, so the same word can have different representations in different contexts.\n```"
  },
  {
    "id": "m4",
    "number": "04",
    "type": "Architecture",
    "file": "04_Module4_Transformer_BERT_GPT.md",
    "sourceHref": "../04_Module4_Transformer_BERT_GPT.md",
    "title": "Attention、Transformer、BERT、GPT",
    "fullTitle": "Module 4：Attention、Transformer、BERT、GPT",
    "summary": "> 不再依赖递归结构，而是用 self-attention 让序列中任意两个位置直接建立联系。",
    "keywords": [
      "NLU",
      "NLG",
      "Padding",
      "Language Model",
      "RNN",
      "LSTM",
      "Attention",
      "Q"
    ],
    "sections": [
      {
        "id": "1-为什么需要-attention-和-transformer",
        "title": "1. 为什么需要 Attention 和 Transformer",
        "level": 2,
        "body": "RNN/LSTM 的问题：\n\n1. **顺序计算**：必须一个 token 一个 token 处理，难以并行。\n2. **长距离依赖弱**：早期信息经过很多步传递，容易丢失。\n3. **表示融合能力有限**：双向 RNN 虽然能看左右上下文，但相比 Transformer 表达能力弱。\n\nTransformer 的核心思想：\n\n> 不再依赖递归结构，而是用 self-attention 让序列中任意两个位置直接建立联系。",
        "summary": "> 不再依赖递归结构，而是用 self-attention 让序列中任意两个位置直接建立联系。",
        "keywords": [
          "RNN",
          "LSTM",
          "Attention",
          "K",
          "Transformer"
        ]
      },
      {
        "id": "2-attention-的直觉",
        "title": "2. Attention 的直觉",
        "level": 2,
        "body": "Attention 就是：在处理当前信息时，模型决定应该重点看哪些其他信息。\n\n机器翻译例子：\n\n```text\nsource: he hit me with a pie\ntarget: il m'a entarté\n```\n\n生成目标语言某个词时，模型应该关注源句中最相关的词，而不是把整句压缩成一个固定向量。",
        "summary": "Attention 就是：在处理当前信息时，模型决定应该重点看哪些其他信息。",
        "keywords": [
          "Attention"
        ]
      },
      {
        "id": "3-q、k、v-是什么",
        "title": "3. Q、K、V 是什么",
        "level": 2,
        "body": "Attention 输入包括：\n\n| 符号 | 名称 | 作用 |\n|---|---|---|\n| Q | Query | 当前要查询什么信息 |\n| K | Key | 每个位置提供的“索引/匹配特征” |\n| V | Value | 每个位置真正要被取出的内容 |\n\n类比搜索系统：\n\n```text\nQuery：你输入的搜索词\nKey：文档的索引特征\nValue：文档内容\n```\n\n模型先用 Q 和 K 计算相关性，再根据相关性对 V 加权求和。",
        "summary": "模型先用 Q 和 K 计算相关性，再根据相关性对 V 加权求和。",
        "keywords": [
          "Attention",
          "Q",
          "K",
          "V"
        ]
      },
      {
        "id": "4-attention-计算步骤",
        "title": "4. Attention 计算步骤",
        "level": 2,
        "body": "给定 query `q`，以及一组 key-value pairs：\n\n```text\n(k1, v1), (k2, v2), ..., (kL, vL)\n```\n\n### Step 1：计算相似度\n\n```text\ns_i = similarity(q, k_i)\n```\n\n常见相似度：\n\n- additive attention\n- multiplicative attention\n- dot-product attention\n- scaled dot-product attention\n\n### Step 2：softmax 归一化\n\n```text\na_i = softmax(s_i)\n```\n\n得到 attention distribution，满足：\n\n```text\nΣ a_i = 1\n```\n\n### Step 3：对 value 加权求和\n\n```text\nz = Σ a_i v_i\n```\n\n`z` 就是 attention output/context vector。",
        "summary": "给定 query `q`，以及一组 key-value pairs：",
        "keywords": [
          "Attention",
          "Q",
          "K",
          "V"
        ]
      },
      {
        "id": "5-scaled-dot-product-attention",
        "title": "5. Scaled Dot-Product Attention",
        "level": 2,
        "body": "Transformer 使用 scaled dot-product attention：\n\n```text\nAttention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V\n```\n\n为什么除以 `sqrt(d_k)`？\n\n当维度较大时，dot product 的数值可能很大，softmax 会变得过于尖锐，梯度不稳定。除以 `sqrt(d_k)` 可以缓解这个问题。",
        "summary": "Transformer 使用 scaled dot-product attention：",
        "keywords": [
          "Attention",
          "Q",
          "K",
          "V",
          "Transformer"
        ]
      },
      {
        "id": "6-self-attention",
        "title": "6. Self-Attention",
        "level": 2,
        "body": "Self-attention 指 Q、K、V 都来自同一个输入序列。\n\n输入：\n\n```text\nX = [x1, x2, ..., xn]\n```\n\n通过不同参数矩阵得到：\n\n```text\nQ = XW_Q\nK = XW_K\nV = XW_V\n```\n\n每个 token 都可以关注其他 token。\n\n例如句子：\n\n```text\nThe animal didn't cross the street because it was too tired.\n```\n\n处理 `it` 时，self-attention 可以直接关注 `animal`。",
        "summary": "Self-attention 指 Q、K、V 都来自同一个输入序列。",
        "keywords": [
          "Attention",
          "Q",
          "K",
          "V"
        ]
      },
      {
        "id": "7-为什么-q、k、v-不应强行相同",
        "title": "7. 为什么 Q、K、V 不应强行相同",
        "level": 2,
        "body": "如果设定：\n\n```text\nW_Q = W_K\n```\n\n则：\n\n```text\nQ = XW\nK = XW\nS = QK^T = (XW)(XW)^T\n```\n\n这个 score matrix 会是对称的：\n\n```text\nS_ij = S_ji\n```\n\n这会限制模型表达方向性关系。语言中很多关系是非对称的，例如：\n\n```text\nsubject → verb\nmodifier → head\nprevious token → next token\n```\n\n如果进一步强行 `V = K`，模型就无法区分：\n\n- 用什么特征来匹配位置（key）\n- 从该位置取出什么信息（value）\n\n这会降低表达能力。",
        "summary": "这个 score matrix 会是对称的：",
        "keywords": [
          "Q",
          "K",
          "V"
        ]
      },
      {
        "id": "8-masking",
        "title": "8. Masking",
        "level": 2,
        "body": "### 8.1 Padding Mask\n\npadding token 不是真实内容，不能让模型关注它。\n\n### 8.2 Causal Mask\n\n在生成任务中，模型预测当前位置时不能看未来 token。\n\n长度为 4 的 causal mask 可以写成：\n\n```text\n[ 0, -∞, -∞, -∞ ]\n[ 0,  0, -∞, -∞ ]\n[ 0,  0,  0, -∞ ]\n[ 0,  0,  0,  0 ]\n```\n\nmask 要在 softmax 前加到 logits 上，使被禁止位置的概率变成 0。\n\n如果 softmax 后再 mask，需要重新归一化，否则概率和不为 1。",
        "summary": "padding token 不是真实内容，不能让模型关注它。",
        "keywords": [
          "Padding",
          "K",
          "Mask"
        ]
      },
      {
        "id": "9-multi-head-attention",
        "title": "9. Multi-Head Attention",
        "level": 2,
        "body": "Multi-head attention 是并行做多组 attention。\n\n直觉：不同 head 可以关注不同关系。\n\n例如：\n\n- head 1 关注主谓关系。\n- head 2 关注代词指代。\n- head 3 关注局部短语。\n- head 4 关注长距离依赖。\n\n最后把多个 head 的输出拼接起来，再线性变换。",
        "summary": "Multi-head attention 是并行做多组 attention。",
        "keywords": [
          "Attention"
        ]
      },
      {
        "id": "10-transformer-架构",
        "title": "10. Transformer 架构",
        "level": 2,
        "body": "Transformer 是 encoder-decoder 架构。\n\n### 10.1 Encoder\n\nEncoder 把输入序列变成 contextual representations。\n\n每层通常包括：\n\n```text\nself-attention\n→ add & norm\n→ feed-forward network\n→ add & norm\n```\n\n### 10.2 Decoder\n\nDecoder 生成输出序列，每次生成一个 token。\n\n每层通常包括：\n\n```text\nmasked self-attention\n→ encoder-decoder attention\n→ feed-forward network\n```\n\nDecoder 是 autoregressive 的：生成当前 token 时依赖前面已经生成的 token。",
        "summary": "Transformer 是 encoder-decoder 架构。",
        "keywords": [
          "Attention",
          "K",
          "V",
          "Transformer",
          "Mask"
        ]
      },
      {
        "id": "11-positional-encoding",
        "title": "11. Positional Encoding",
        "level": 2,
        "body": "Transformer 没有 RNN 的顺序结构，所以需要显式加入位置信息。\n\nPositional encoding 告诉模型：\n\n```text\n这个 token 是第几个位置\n```\n\n否则 self-attention 本身不天然知道词序。",
        "summary": "Transformer 没有 RNN 的顺序结构，所以需要显式加入位置信息。",
        "keywords": [
          "RNN",
          "Attention",
          "K",
          "Transformer"
        ]
      },
      {
        "id": "12-bert",
        "title": "12. BERT",
        "level": 2,
        "body": "BERT：Bidirectional Encoder Representations from Transformers。\n\n特点：\n\n- 使用 Transformer encoder。\n- 双向上下文理解。\n- 适合 NLU 任务。\n\n### 12.1 BERT 的预训练任务\n\n常见包括：\n\n1. Masked Language Modeling：随机 mask 一些 token，让模型预测被 mask 的词。\n2. Next Sentence Prediction：判断两个句子是否相邻。\n\n### 12.2 BERT 适合的任务\n\n- 文本分类\n- NER\n- QA\n- NLI\n- 句子匹配",
        "summary": "BERT：Bidirectional Encoder Representations from Transformers。",
        "keywords": [
          "NLU",
          "Language Model",
          "Q",
          "K",
          "Transformer",
          "BERT",
          "Mask"
        ]
      },
      {
        "id": "13-gpt",
        "title": "13. GPT",
        "level": 2,
        "body": "GPT：Generative Pre-trained Transformer。\n\n特点：\n\n- 使用 Transformer decoder。\n- 自回归生成。\n- 适合文本生成。\n\n训练目标：\n\n```text\npredict next token\n```\n\n即：\n\n```text\nP(w_t | w_1, ..., w_{t-1})\n```\n\n### 13.1 GPT 适合的任务\n\n- 续写\n- 对话\n- 代码生成\n- 摘要\n- 翻译\n- reasoning with prompting",
        "summary": "GPT：Generative Pre-trained Transformer。",
        "keywords": [
          "K",
          "V",
          "Transformer",
          "GPT",
          "Prompt"
        ]
      },
      {
        "id": "14-bert-vs-gpt",
        "title": "14. BERT vs GPT",
        "level": 2,
        "body": "| 维度 | BERT | GPT |\n|---|---|---|\n| 架构 | Transformer encoder | Transformer decoder |\n| 上下文 | 双向 | 单向/因果 |\n| 训练目标 | masked token prediction | next token prediction |\n| 强项 | 理解、分类、抽取 | 生成、对话、续写 |\n| 典型任务 | NLU | NLG / LLM interaction |",
        "summary": "",
        "keywords": [
          "NLU",
          "NLG",
          "K",
          "V",
          "Transformer",
          "BERT",
          "GPT",
          "Mask"
        ]
      },
      {
        "id": "15-本模块考试重点",
        "title": "15. 本模块考试重点",
        "level": 2,
        "body": "### 15.1 必背概念\n\n- Attention = query 与 key 匹配，对 value 加权求和。\n- Self-attention 中 Q/K/V 来自同一序列。\n- Scaled dot-product attention 公式必须会写。\n- Mask 要在 softmax 前做。\n- Transformer 用 self-attention 替代 RNN，实现并行和长距离依赖建模。\n- BERT 是 encoder-based，适合理解。\n- GPT 是 decoder-based，适合生成。\n\n### 15.2 高频答题模板\n\n**问题：Attention 的 Q/K/V 分别是什么？**\n\n```text\nIn attention, the query represents what information the current position is looking for, the keys represent features used to match each candidate position, and the values contain the information to be aggregated. The model computes similarity between queries and keys, normalizes the scores into attention weights, and then returns a weighted sum of values.\n```\n\n**问题：为什么 Transformer 比 RNN 更适合并行和长距离依赖？**\n\n```text\nRNNs process tokens sequentially, so computation at time t depends on previous hidden states. This limits parallelism and makes long-range dependencies hard to preserve. Transformer uses self-attention, where each token can directly attend to every other token in a constant number of layers, enabling parallel computation and better modeling of long-distance relations.\n```\n\n**问题：BERT 和 GPT 的区别？**\n\n```text\nBERT is based on the Transformer encoder and learns bidirectional contextual representations, usually through masked language modeling, so it is well-suited for NLU tasks. GPT is based on the Transformer decoder and is trained autoregressively to predict the next token, making it more suitable for text generation and dialogue.\n```",
        "summary": "**问题：Attention 的 Q/K/V 分别是什么？**",
        "keywords": [
          "NLU",
          "Language Model",
          "RNN",
          "Attention",
          "Q",
          "K",
          "V",
          "Transformer"
        ]
      }
    ],
    "wordCount": 4485,
    "sectionCount": 15,
    "searchText": "module 4：attention、transformer、bert、gpt\n## 1. 为什么需要 attention 和 transformer\n\nrnn/lstm 的问题：\n\n1. **顺序计算**：必须一个 token 一个 token 处理，难以并行。\n2. **长距离依赖弱**：早期信息经过很多步传递，容易丢失。\n3. **表示融合能力有限**：双向 rnn 虽然能看左右上下文，但相比 transformer 表达能力弱。\n\ntransformer 的核心思想：\n\n> 不再依赖递归结构，而是用 self-attention 让序列中任意两个位置直接建立联系。\n\n## 2. attention 的直觉\n\nattention 就是：在处理当前信息时，模型决定应该重点看哪些其他信息。\n\n机器翻译例子：\n\n```text\nsource: he hit me with a pie\ntarget: il m'a entarté\n```\n\n生成目标语言某个词时，模型应该关注源句中最相关的词，而不是把整句压缩成一个固定向量。\n\n## 3. q、k、v 是什么\n\nattention 输入包括：\n\n| 符号 | 名称 | 作用 |\n|---|---|---|\n| q | query | 当前要查询什么信息 |\n| k | key | 每个位置提供的“索引/匹配特征” |\n| v | value | 每个位置真正要被取出的内容 |\n\n类比搜索系统：\n\n```text\nquery：你输入的搜索词\nkey：文档的索引特征\nvalue：文档内容\n```\n\n模型先用 q 和 k 计算相关性，再根据相关性对 v 加权求和。\n\n## 4. attention 计算步骤\n\n给定 query `q`，以及一组 key-value pairs：\n\n```text\n(k1, v1), (k2, v2), ..., (kl, vl)\n```\n\n### step 1：计算相似度\n\n```text\ns_i = similarity(q, k_i)\n```\n\n常见相似度：\n\n- additive attention\n- multiplicative attention\n- dot-product attention\n- scaled dot-product attention\n\n### step 2：softmax 归一化\n\n```text\na_i = softmax(s_i)\n```\n\n得到 attention distribution，满足：\n\n```text\nσ a_i = 1\n```\n\n### step 3：对 value 加权求和\n\n```text\nz = σ a_i v_i\n```\n\n`z` 就是 attention output/context vector。\n\n## 5. scaled dot-product attention\n\ntransformer 使用 scaled dot-product attention：\n\n```text\nattention(q, k, v) = softmax(qk^t / sqrt(d_k)) v\n```\n\n为什么除以 `sqrt(d_k)`？\n\n当维度较大时，dot product 的数值可能很大，softmax 会变得过于尖锐，梯度不稳定。除以 `sqrt(d_k)` 可以缓解这个问题。\n\n## 6. self-attention\n\nself-attention 指 q、k、v 都来自同一个输入序列。\n\n输入：\n\n```text\nx = [x1, x2, ..., xn]\n```\n\n通过不同参数矩阵得到：\n\n```text\nq = xw_q\nk = xw_k\nv = xw_v\n```\n\n每个 token 都可以关注其他 token。\n\n例如句子：\n\n```text\nthe animal didn't cross the street because it was too tired.\n```\n\n处理 `it` 时，self-attention 可以直接关注 `animal`。\n\n## 7. 为什么 q、k、v 不应强行相同\n\n如果设定：\n\n```text\nw_q = w_k\n```\n\n则：\n\n```text\nq = xw\nk = xw\ns = qk^t = (xw)(xw)^t\n```\n\n这个 score matrix 会是对称的：\n\n```text\ns_ij = s_ji\n```\n\n这会限制模型表达方向性关系。语言中很多关系是非对称的，例如：\n\n```text\nsubject → verb\nmodifier → head\nprevious token → next token\n```\n\n如果进一步强行 `v = k`，模型就无法区分：\n\n- 用什么特征来匹配位置（key）\n- 从该位置取出什么信息（value）\n\n这会降低表达能力。\n\n## 8. masking\n\n### 8.1 padding mask\n\npadding token 不是真实内容，不能让模型关注它。\n\n### 8.2 causal mask\n\n在生成任务中，模型预测当前位置时不能看未来 token。\n\n长度为 4 的 causal mask 可以写成：\n\n```text\n[ 0, -∞, -∞, -∞ ]\n[ 0,  0, -∞, -∞ ]\n[ 0,  0,  0, -∞ ]\n[ 0,  0,  0,  0 ]\n```\n\nmask 要在 softmax 前加到 logits 上，使被禁止位置的概率变成 0。\n\n如果 softmax 后再 mask，需要重新归一化，否则概率和不为 1。\n\n## 9. multi-head attention\n\nmulti-head attention 是并行做多组 attention。\n\n直觉：不同 head 可以关注不同关系。\n\n例如：\n\n- head 1 关注主谓关系。\n- head 2 关注代词指代。\n- head 3 关注局部短语。\n- head 4 关注长距离依赖。\n\n最后把多个 head 的输出拼接起来，再线性变换。\n\n## 10. transformer 架构\n\ntransformer 是 encoder-decoder 架构。\n\n### 10.1 encoder\n\nencoder 把输入序列变成 contextual representations。\n\n每层通常包括：\n\n```text\nself-attention\n→ add & norm\n→ feed-forward network\n→ add & norm\n```\n\n### 10.2 decoder\n\ndecoder 生成输出序列，每次生成一个 token。\n\n每层通常包括：\n\n```text\nmasked self-attention\n→ encoder-decoder attention\n→ feed-forward network\n```\n\ndecoder 是 autoregressive 的：生成当前 token 时依赖前面已经生成的 token。\n\n## 11. positional encoding\n\ntransformer 没有 rnn 的顺序结构，所以需要显式加入位置信息。\n\npositional encoding 告诉模型：\n\n```text\n这个 token 是第几个位置\n```\n\n否则 self-attention 本身不天然知道词序。\n\n## 12. bert\n\nbert：bidirectional encoder representations from transformers。\n\n特点：\n\n- 使用 transformer encoder。\n- 双向上下文理解。\n- 适合 nlu 任务。\n\n### 12.1 bert 的预训练任务\n\n常见包括：\n\n1. masked language modeling：随机 mask 一些 token，让模型预测被 mask 的词。\n2. next sentence prediction：判断两个句子是否相邻。\n\n### 12.2 bert 适合的任务\n\n- 文本分类\n- ner\n- qa\n- nli\n- 句子匹配\n\n## 13. gpt\n\ngpt：generative pre-trained transformer。\n\n特点：\n\n- 使用 transformer decoder。\n- 自回归生成。\n- 适合文本生成。\n\n训练目标：\n\n```text\npredict next token\n```\n\n即：\n\n```text\np(w_t | w_1, ..., w_{t-1})\n```\n\n### 13.1 gpt 适合的任务\n\n- 续写\n- 对话\n- 代码生成\n- 摘要\n- 翻译\n- reasoning with prompting\n\n## 14. bert vs gpt\n\n| 维度 | bert | gpt |\n|---|---|---|\n| 架构 | transformer encoder | transformer decoder |\n| 上下文 | 双向 | 单向/因果 |\n| 训练目标 | masked token prediction | next token prediction |\n| 强项 | 理解、分类、抽取 | 生成、对话、续写 |\n| 典型任务 | nlu | nlg / llm interaction |\n\n## 15. 本模块考试重点\n\n### 15.1 必背概念\n\n- attention = query 与 key 匹配，对 value 加权求和。\n- self-attention 中 q/k/v 来自同一序列。\n- scaled dot-product attention 公式必须会写。\n- mask 要在 softmax 前做。\n- transformer 用 self-attention 替代 rnn，实现并行和长距离依赖建模。\n- bert 是 encoder-based，适合理解。\n- gpt 是 decoder-based，适合生成。\n\n### 15.2 高频答题模板\n\n**问题：attention 的 q/k/v 分别是什么？**\n\n```text\nin attention, the query represents what information the current position is looking for, the keys represent features used to match each candidate position, and the values contain the information to be aggregated. the model computes similarity between queries and keys, normalizes the scores into attention weights, and then returns a weighted sum of values.\n```\n\n**问题：为什么 transformer 比 rnn 更适合并行和长距离依赖？**\n\n```text\nrnns process tokens sequentially, so computation at time t depends on previous hidden states. this limits parallelism and makes long-range dependencies hard to preserve. transformer uses self-attention, where each token can directly attend to every other token in a constant number of layers, enabling parallel computation and better modeling of long-distance relations.\n```\n\n**问题：bert 和 gpt 的区别？**\n\n```text\nbert is based on the transformer encoder and learns bidirectional contextual representations, usually through masked language modeling, so it is well-suited for nlu tasks. gpt is based on the transformer decoder and is trained autoregressively to predict the next token, making it more suitable for text generation and dialogue.\n```"
  },
  {
    "id": "m5",
    "number": "05",
    "type": "Tasks",
    "file": "05_Module5_NLU_NLG任务_分类_QA_MT_对话_BLEU.md",
    "sourceHref": "../05_Module5_NLU_NLG任务_分类_QA_MT_对话_BLEU.md",
    "title": "NLU/NLG 任务、文本分类、问答、机器翻译、对话系统、BLEU",
    "fullTitle": "Module 5：NLU/NLG 任务、文本分类、问答、机器翻译、对话系统、BLEU",
    "summary": "Text classification 是把文本分配到类别。",
    "keywords": [
      "NLP",
      "NLU",
      "NLG",
      "Tokenization",
      "BOW",
      "TF-IDF",
      "Language Model",
      "n-gram"
    ],
    "sections": [
      {
        "id": "1-nlu-vs-nlg",
        "title": "1. NLU vs NLG",
        "level": 2,
        "body": "NLP 任务可分为：\n\n```text\nNLU：理解语言，把文本变成结构化结果\nNLG：生成语言，把信息变成自然语言文本\n```\n\n| 类型 | 目标 | 例子 |\n|---|---|---|\n| NLU | extract/understand meaning | text classification, QA, NER, intent detection |\n| NLG | generate fluent text | machine translation, summarization, dialogue generation |",
        "summary": "NLP 任务可分为：",
        "keywords": [
          "NLP",
          "NLU",
          "NLG",
          "Q",
          "V",
          "Dialogue"
        ]
      },
      {
        "id": "2-text-classification",
        "title": "2. Text Classification",
        "level": 2,
        "body": "Text classification 是把文本分配到类别。\n\n形式化表示：\n\n```text\nh: D → C\n```\n\n其中：\n\n- `D`：文本数据集合。\n- `C`：类别集合。\n- `h`：分类器/模型。\n\n### 2.1 常见任务\n\n| 任务 | 类别例子 |\n|---|---|\n| spam detection | spam / not spam |\n| sentiment analysis | positive / negative / neutral |\n| news categorization | sports / finance / entertainment |\n| intent classification | purchase / cancel / refund |\n| content moderation | safe / harmful / illegal |\n| topic analysis | customer support / price / usability |\n\n### 2.2 分类类型\n\n| 类型 | 解释 | 例子 |\n|---|---|---|\n| Binary classification | 两类中选一类 | spam vs legitimate |\n| Single-label multi-class | 多类中只能选一类 | news category |\n| Multi-label classification | 一个样本可属于多个类 | 文章标签：AI + healthcare |\n| Ordinal classification | 类别有顺序 | 1–5 星评分 |\n\n### 2.3 Hard vs Soft Classification\n\n- Hard classification：直接输出类别。\n- Soft classification：输出每个类别的概率/置信度。\n\n例如：\n\n```text\npositive: 0.82\nneutral: 0.11\nnegative: 0.07\n```",
        "summary": "Text classification 是把文本分配到类别。",
        "keywords": [
          "V"
        ]
      },
      {
        "id": "3-text-classification-方法",
        "title": "3. Text Classification 方法",
        "level": 2,
        "body": "### 3.1 传统方法\n\n```text\npreprocessing → TF-IDF/BOW → classifier\n```\n\n常见分类器：\n\n- Naive Bayes\n- Logistic Regression\n- SVM\n\n### 3.2 神经方法\n\n```text\ntokenization → embedding → neural network → softmax\n```\n\n常见模型：\n\n- CNN\n- RNN/LSTM\n- BERT fine-tuning\n\n### 3.3 BERT fine-tuning\n\n通常使用 `[CLS]` token 的表示做分类：\n\n```text\n[CLS] sentence tokens [SEP]\n→ BERT\n→ h_[CLS]\n→ classification head\n→ label\n```",
        "summary": "通常使用 `[CLS]` token 的表示做分类：",
        "keywords": [
          "Tokenization",
          "BOW",
          "TF-IDF",
          "RNN",
          "LSTM",
          "Embedding",
          "K",
          "V"
        ]
      },
      {
        "id": "4-question-answering",
        "title": "4. Question Answering",
        "level": 2,
        "body": "QA 是给定问题，输出答案。\n\n### 4.1 Extractive QA\n\n答案是从 passage 中抽取的一段连续文本。\n\n例如：\n\n```text\nPassage: Paris is the capital of France.\nQuestion: What is the capital of France?\nAnswer: Paris\n```\n\n### 4.2 SQuAD\n\nSQuAD 是经典阅读理解 benchmark。\n\n特点：\n\n- 基于真实文章。\n- 问题由人类编写。\n- 答案通常是 passage 中的 span。\n\nSQuAD 2.0 增加了 unanswerable questions，模型还需要判断“文档中没有答案”。\n\n### 4.3 QA 评价指标\n\n常见：\n\n- Exact Match：预测答案是否与标准答案完全一致。\n- F1：预测答案与标准答案 token overlap 的 F1。",
        "summary": "答案是从 passage 中抽取的一段连续文本。",
        "keywords": [
          "Q",
          "K",
          "V"
        ]
      },
      {
        "id": "5-machine-translation",
        "title": "5. Machine Translation",
        "level": 2,
        "body": "Machine Translation，简称 MT，是把源语言句子翻译成目标语言句子。\n\n```text\nx = source sentence\ny = target sentence\n```\n\n目标：\n\n```text\nfind y that maximizes P(y | x)\n```\n\n### 5.1 MT 发展阶段\n\n```text\nRule-based MT → Example-based MT → Statistical MT → Neural MT\n```\n\n### 5.2 Statistical MT 与 alignment\n\n统计机器翻译中，alignment 表示源语言词和目标语言词之间的对应关系。\n\nalignment 可能很复杂：\n\n- one-to-one\n- one-to-many\n- many-to-one\n- many-to-many\n- some words have no counterpart",
        "summary": "Machine Translation，简称 MT，是把源语言句子翻译成目标语言句子。",
        "keywords": [
          "V",
          "Alignment"
        ]
      },
      {
        "id": "6-neural-machine-translation",
        "title": "6. Neural Machine Translation",
        "level": 2,
        "body": "NMT 通常使用 seq2seq encoder-decoder 架构。\n\n### 6.1 Seq2seq\n\n```text\nsource sentence → encoder → hidden representation → decoder → target sentence\n```\n\nEncoder 读入源语言句子，Decoder 逐步生成目标语言句子。\n\n### 6.2 Conditional Language Model\n\nNMT 可以看作 conditional language model：\n\n```text\nP(y | x) = P(y1 | x) × P(y2 | y1, x) × ... × P(yT | y1...yT-1, x)\n```\n\n它是 language model，因为 decoder 在预测下一个目标词；它是 conditional，因为预测依赖源句 x。",
        "summary": "NMT 通常使用 seq2seq encoder-decoder 架构。",
        "keywords": [
          "Language Model",
          "Q"
        ]
      },
      {
        "id": "7-decoding-greedy-search-与-beam-search",
        "title": "7. Decoding：Greedy Search 与 Beam Search",
        "level": 2,
        "body": "训练后，模型会给每一步生成的 token 分配概率。Decoding 的任务是找到最终输出序列。\n\n### 7.1 Greedy Search\n\n每一步都选择概率最高的 token。\n\n优点：快。\n\n缺点：局部最优，不能回头。\n\n例如：\n\n```text\nStep 1 选了 yes，后面可能导致整体概率不高。\n```\n\n### 7.2 Exhaustive Search\n\n枚举所有可能输出序列。\n\n如果词表大小是 V，序列长度是 T，复杂度约为：\n\n```text\nO(V^T)\n```\n\n不可行。\n\n### 7.3 Beam Search\n\nBeam search 每一步保留 top-k 个部分候选。\n\n```text\nk = beam size\n```\n\n流程：\n\n1. 第一步保留概率最高的 k 个 token。\n2. 扩展每个候选。\n3. 计算累计概率。\n4. 继续保留 top-k。\n5. 直到生成结束符。\n\n优点：比 greedy 更可能找到全局更优序列。\n\n缺点：计算更慢，k 太大也不一定更好。",
        "summary": "训练后，模型会给每一步生成的 token 分配概率。Decoding 的任务是找到最终输出序列。",
        "keywords": [
          "K",
          "V",
          "Beam Search"
        ]
      },
      {
        "id": "8-bleu",
        "title": "8. BLEU",
        "level": 2,
        "body": "BLEU 是机器翻译常用自动评价指标。\n\n核心思想：比较 candidate translation 和 reference translation 的 n-gram overlap。\n\n公式：\n\n```text\nBLEU = BP × exp(Σ w_n log P_n)\n```\n\n其中：\n\n- `P_n`：n-gram precision。\n- `w_n`：权重，通常均匀。\n- `BP`：brevity penalty，惩罚过短翻译。\n\n### 8.1 n-gram precision\n\n如果 candidate 的 unigram 有 9 个，其中 8 个出现在 reference 中：\n\n```text\nP1 = 8/9\n```\n\n同理可以计算 bigram、trigram、4-gram precision。\n\n### 8.2 Brevity Penalty\n\n如果 candidate 长度 c 小于 reference 长度 r，则惩罚：\n\n```text\nBP = exp(1 - r/c)\n```\n\n如果 `c >= r`：\n\n```text\nBP = 1\n```\n\n### 8.3 BLEU 的局限\n\n- 只看 n-gram overlap，不真正理解语义。\n- 对同义改写不友好。\n- 句子级 BLEU 不稳定，更适合 corpus-level。",
        "summary": "BLEU 是机器翻译常用自动评价指标。",
        "keywords": [
          "n-gram",
          "V",
          "BLEU"
        ]
      },
      {
        "id": "9-dialogue-system",
        "title": "9. Dialogue System",
        "level": 2,
        "body": "Dialogue system 分为：\n\n| 类型 | 目标 | 例子 |\n|---|---|---|\n| Task-oriented dialogue | 完成任务 | 订票、报修、COVID 上报 |\n| Chitchat dialogue | 开放聊天 | 日常闲聊 |",
        "summary": "Dialogue system 分为：",
        "keywords": [
          "K",
          "V",
          "Dialogue"
        ]
      },
      {
        "id": "10-任务型对话系统标准模块",
        "title": "10. 任务型对话系统标准模块",
        "level": 2,
        "body": "一个 task-oriented dialogue system 通常包括：\n\n```text\nUser utterance\n→ NLU\n→ Dialogue State Tracking\n→ Dialogue Policy\n→ Backend/API\n→ NLG\n→ System response\n```\n\n### 10.1 NLU\n\nNLU 包括：\n\n1. Domain classification：判断领域。\n2. Intent detection：判断用户意图。\n3. Slot filling：抽取关键信息。\n\n以 COVID Reporting Bot 为例：\n\n| NLU 子任务 | 示例 |\n|---|---|\n| Domain classification | COVID reporting / general inquiry / appointment |\n| Intent detection | report_positive_test / update_info / ask_policy |\n| Slot filling | name, HKID, test_date, test_result, phone_number |\n\n### 10.2 Dialogue State Tracking\n\n维护当前已经收集到的信息。\n\n例如：\n\n```text\nname = Chan Tai Man\ntest_result = positive\ntest_date = missing\nphone_number = missing\n```\n\n### 10.3 Dialogue Policy\n\n决定下一步做什么：\n\n- 如果槽位缺失，继续追问。\n- 如果信息齐全，确认信息。\n- 如果用户确认，调用后端提交。\n- 如果用户修改，更新 state。\n\n### 10.4 NLG\n\n把系统动作转成自然语言。\n\n例如：\n\n```text\n请问你的检测日期是哪一天？\n```\n\n或者：\n\n```text\n我已经收到你的阳性检测上报信息，请确认手机号是否为 xxxx。\n```\n\n### 10.5 Backend/API\n\n调用外部系统完成提交、查询、验证。",
        "summary": "一个 task-oriented dialogue system 通常包括：",
        "keywords": [
          "NLU",
          "NLG",
          "Q",
          "K",
          "V",
          "Dialogue"
        ]
      },
      {
        "id": "11-对话系统评价指标",
        "title": "11. 对话系统评价指标",
        "level": 2,
        "body": "| 指标 | 含义 |\n|---|---|\n| Intent accuracy | 意图识别准确率 |\n| Slot F1 | 槽位抽取效果 |\n| Task success rate | 是否成功完成任务 |\n| Dialogue turns | 完成任务所需轮数，越少通常越高效 |\n| User satisfaction | 用户满意度 |\n| API call accuracy | 后端调用是否正确 |",
        "summary": "",
        "keywords": [
          "K",
          "Dialogue"
        ]
      },
      {
        "id": "12-本模块考试重点",
        "title": "12. 本模块考试重点",
        "level": 2,
        "body": "### 12.1 必背概念\n\n- NLU 是理解，NLG 是生成。\n- 文本分类包括 binary、single-label multi-class、multi-label、ordinal。\n- Extractive QA 答案来自 passage span。\n- NMT 是 conditional language model。\n- Greedy search 局部最优；beam search 保留多个候选。\n- BLEU 基于 n-gram precision 和 brevity penalty。\n- 任务型对话系统包括 NLU、DST、Policy、NLG、API。\n\n### 12.2 高频答题模板\n\n**问题：Greedy search 和 beam search 区别？**\n\n```text\nGreedy search selects the most probable token at each step, so it is fast but may miss the globally best sequence because early decisions cannot be revised. Beam search keeps the top k partial hypotheses at each step and expands them, which increases the chance of finding a sequence with higher overall probability.\n```\n\n**问题：如何设计 COVID reporting chatbot？**\n\n```text\nThe system first performs NLU, including domain classification to identify whether the user is in the COVID reporting domain, intent detection to determine actions such as reporting a positive result, and slot filling to extract fields such as name, ID, test date, test result, and phone number. Then dialogue state tracking maintains collected and missing slots, dialogue policy decides whether to ask follow-up questions or submit the report, backend APIs validate and store the report, and NLG generates natural responses to guide the user. The system can be evaluated by intent accuracy, slot F1, task success rate, and average dialogue turns.\n```\n\n**问题：BLEU 是什么？**\n\n```text\nBLEU is an automatic evaluation metric for machine translation. It measures n-gram precision between the candidate translation and one or more reference translations, combined with a brevity penalty to discourage overly short outputs. Higher BLEU usually indicates closer lexical overlap with references, but it may not fully capture semantic equivalence.\n```",
        "summary": "**问题：Greedy search 和 beam search 区别？**",
        "keywords": [
          "NLU",
          "NLG",
          "Language Model",
          "n-gram",
          "Q",
          "K",
          "V",
          "BLEU"
        ]
      }
    ],
    "wordCount": 5959,
    "sectionCount": 12,
    "searchText": "module 5：nlu/nlg 任务、文本分类、问答、机器翻译、对话系统、bleu\n## 1. nlu vs nlg\n\nnlp 任务可分为：\n\n```text\nnlu：理解语言，把文本变成结构化结果\nnlg：生成语言，把信息变成自然语言文本\n```\n\n| 类型 | 目标 | 例子 |\n|---|---|---|\n| nlu | extract/understand meaning | text classification, qa, ner, intent detection |\n| nlg | generate fluent text | machine translation, summarization, dialogue generation |\n\n## 2. text classification\n\ntext classification 是把文本分配到类别。\n\n形式化表示：\n\n```text\nh: d → c\n```\n\n其中：\n\n- `d`：文本数据集合。\n- `c`：类别集合。\n- `h`：分类器/模型。\n\n### 2.1 常见任务\n\n| 任务 | 类别例子 |\n|---|---|\n| spam detection | spam / not spam |\n| sentiment analysis | positive / negative / neutral |\n| news categorization | sports / finance / entertainment |\n| intent classification | purchase / cancel / refund |\n| content moderation | safe / harmful / illegal |\n| topic analysis | customer support / price / usability |\n\n### 2.2 分类类型\n\n| 类型 | 解释 | 例子 |\n|---|---|---|\n| binary classification | 两类中选一类 | spam vs legitimate |\n| single-label multi-class | 多类中只能选一类 | news category |\n| multi-label classification | 一个样本可属于多个类 | 文章标签：ai + healthcare |\n| ordinal classification | 类别有顺序 | 1–5 星评分 |\n\n### 2.3 hard vs soft classification\n\n- hard classification：直接输出类别。\n- soft classification：输出每个类别的概率/置信度。\n\n例如：\n\n```text\npositive: 0.82\nneutral: 0.11\nnegative: 0.07\n```\n\n## 3. text classification 方法\n\n### 3.1 传统方法\n\n```text\npreprocessing → tf-idf/bow → classifier\n```\n\n常见分类器：\n\n- naive bayes\n- logistic regression\n- svm\n\n### 3.2 神经方法\n\n```text\ntokenization → embedding → neural network → softmax\n```\n\n常见模型：\n\n- cnn\n- rnn/lstm\n- bert fine-tuning\n\n### 3.3 bert fine-tuning\n\n通常使用 `[cls]` token 的表示做分类：\n\n```text\n[cls] sentence tokens [sep]\n→ bert\n→ h_[cls]\n→ classification head\n→ label\n```\n\n## 4. question answering\n\nqa 是给定问题，输出答案。\n\n### 4.1 extractive qa\n\n答案是从 passage 中抽取的一段连续文本。\n\n例如：\n\n```text\npassage: paris is the capital of france.\nquestion: what is the capital of france?\nanswer: paris\n```\n\n### 4.2 squad\n\nsquad 是经典阅读理解 benchmark。\n\n特点：\n\n- 基于真实文章。\n- 问题由人类编写。\n- 答案通常是 passage 中的 span。\n\nsquad 2.0 增加了 unanswerable questions，模型还需要判断“文档中没有答案”。\n\n### 4.3 qa 评价指标\n\n常见：\n\n- exact match：预测答案是否与标准答案完全一致。\n- f1：预测答案与标准答案 token overlap 的 f1。\n\n## 5. machine translation\n\nmachine translation，简称 mt，是把源语言句子翻译成目标语言句子。\n\n```text\nx = source sentence\ny = target sentence\n```\n\n目标：\n\n```text\nfind y that maximizes p(y | x)\n```\n\n### 5.1 mt 发展阶段\n\n```text\nrule-based mt → example-based mt → statistical mt → neural mt\n```\n\n### 5.2 statistical mt 与 alignment\n\n统计机器翻译中，alignment 表示源语言词和目标语言词之间的对应关系。\n\nalignment 可能很复杂：\n\n- one-to-one\n- one-to-many\n- many-to-one\n- many-to-many\n- some words have no counterpart\n\n## 6. neural machine translation\n\nnmt 通常使用 seq2seq encoder-decoder 架构。\n\n### 6.1 seq2seq\n\n```text\nsource sentence → encoder → hidden representation → decoder → target sentence\n```\n\nencoder 读入源语言句子，decoder 逐步生成目标语言句子。\n\n### 6.2 conditional language model\n\nnmt 可以看作 conditional language model：\n\n```text\np(y | x) = p(y1 | x) × p(y2 | y1, x) × ... × p(yt | y1...yt-1, x)\n```\n\n它是 language model，因为 decoder 在预测下一个目标词；它是 conditional，因为预测依赖源句 x。\n\n## 7. decoding：greedy search 与 beam search\n\n训练后，模型会给每一步生成的 token 分配概率。decoding 的任务是找到最终输出序列。\n\n### 7.1 greedy search\n\n每一步都选择概率最高的 token。\n\n优点：快。\n\n缺点：局部最优，不能回头。\n\n例如：\n\n```text\nstep 1 选了 yes，后面可能导致整体概率不高。\n```\n\n### 7.2 exhaustive search\n\n枚举所有可能输出序列。\n\n如果词表大小是 v，序列长度是 t，复杂度约为：\n\n```text\no(v^t)\n```\n\n不可行。\n\n### 7.3 beam search\n\nbeam search 每一步保留 top-k 个部分候选。\n\n```text\nk = beam size\n```\n\n流程：\n\n1. 第一步保留概率最高的 k 个 token。\n2. 扩展每个候选。\n3. 计算累计概率。\n4. 继续保留 top-k。\n5. 直到生成结束符。\n\n优点：比 greedy 更可能找到全局更优序列。\n\n缺点：计算更慢，k 太大也不一定更好。\n\n## 8. bleu\n\nbleu 是机器翻译常用自动评价指标。\n\n核心思想：比较 candidate translation 和 reference translation 的 n-gram overlap。\n\n公式：\n\n```text\nbleu = bp × exp(σ w_n log p_n)\n```\n\n其中：\n\n- `p_n`：n-gram precision。\n- `w_n`：权重，通常均匀。\n- `bp`：brevity penalty，惩罚过短翻译。\n\n### 8.1 n-gram precision\n\n如果 candidate 的 unigram 有 9 个，其中 8 个出现在 reference 中：\n\n```text\np1 = 8/9\n```\n\n同理可以计算 bigram、trigram、4-gram precision。\n\n### 8.2 brevity penalty\n\n如果 candidate 长度 c 小于 reference 长度 r，则惩罚：\n\n```text\nbp = exp(1 - r/c)\n```\n\n如果 `c >= r`：\n\n```text\nbp = 1\n```\n\n### 8.3 bleu 的局限\n\n- 只看 n-gram overlap，不真正理解语义。\n- 对同义改写不友好。\n- 句子级 bleu 不稳定，更适合 corpus-level。\n\n## 9. dialogue system\n\ndialogue system 分为：\n\n| 类型 | 目标 | 例子 |\n|---|---|---|\n| task-oriented dialogue | 完成任务 | 订票、报修、covid 上报 |\n| chitchat dialogue | 开放聊天 | 日常闲聊 |\n\n## 10. 任务型对话系统标准模块\n\n一个 task-oriented dialogue system 通常包括：\n\n```text\nuser utterance\n→ nlu\n→ dialogue state tracking\n→ dialogue policy\n→ backend/api\n→ nlg\n→ system response\n```\n\n### 10.1 nlu\n\nnlu 包括：\n\n1. domain classification：判断领域。\n2. intent detection：判断用户意图。\n3. slot filling：抽取关键信息。\n\n以 covid reporting bot 为例：\n\n| nlu 子任务 | 示例 |\n|---|---|\n| domain classification | covid reporting / general inquiry / appointment |\n| intent detection | report_positive_test / update_info / ask_policy |\n| slot filling | name, hkid, test_date, test_result, phone_number |\n\n### 10.2 dialogue state tracking\n\n维护当前已经收集到的信息。\n\n例如：\n\n```text\nname = chan tai man\ntest_result = positive\ntest_date = missing\nphone_number = missing\n```\n\n### 10.3 dialogue policy\n\n决定下一步做什么：\n\n- 如果槽位缺失，继续追问。\n- 如果信息齐全，确认信息。\n- 如果用户确认，调用后端提交。\n- 如果用户修改，更新 state。\n\n### 10.4 nlg\n\n把系统动作转成自然语言。\n\n例如：\n\n```text\n请问你的检测日期是哪一天？\n```\n\n或者：\n\n```text\n我已经收到你的阳性检测上报信息，请确认手机号是否为 xxxx。\n```\n\n### 10.5 backend/api\n\n调用外部系统完成提交、查询、验证。\n\n## 11. 对话系统评价指标\n\n| 指标 | 含义 |\n|---|---|\n| intent accuracy | 意图识别准确率 |\n| slot f1 | 槽位抽取效果 |\n| task success rate | 是否成功完成任务 |\n| dialogue turns | 完成任务所需轮数，越少通常越高效 |\n| user satisfaction | 用户满意度 |\n| api call accuracy | 后端调用是否正确 |\n\n## 12. 本模块考试重点\n\n### 12.1 必背概念\n\n- nlu 是理解，nlg 是生成。\n- 文本分类包括 binary、single-label multi-class、multi-label、ordinal。\n- extractive qa 答案来自 passage span。\n- nmt 是 conditional language model。\n- greedy search 局部最优；beam search 保留多个候选。\n- bleu 基于 n-gram precision 和 brevity penalty。\n- 任务型对话系统包括 nlu、dst、policy、nlg、api。\n\n### 12.2 高频答题模板\n\n**问题：greedy search 和 beam search 区别？**\n\n```text\ngreedy search selects the most probable token at each step, so it is fast but may miss the globally best sequence because early decisions cannot be revised. beam search keeps the top k partial hypotheses at each step and expands them, which increases the chance of finding a sequence with higher overall probability.\n```\n\n**问题：如何设计 covid reporting chatbot？**\n\n```text\nthe system first performs nlu, including domain classification to identify whether the user is in the covid reporting domain, intent detection to determine actions such as reporting a positive result, and slot filling to extract fields such as name, id, test date, test result, and phone number. then dialogue state tracking maintains collected and missing slots, dialogue policy decides whether to ask follow-up questions or submit the report, backend apis validate and store the report, and nlg generates natural responses to guide the user. the system can be evaluated by intent accuracy, slot f1, task success rate, and average dialogue turns.\n```\n\n**问题：bleu 是什么？**\n\n```text\nbleu is an automatic evaluation metric for machine translation. it measures n-gram precision between the candidate translation and one or more reference translations, combined with a brevity penalty to discourage overly short outputs. higher bleu usually indicates closer lexical overlap with references, but it may not fully capture semantic equivalence.\n```"
  },
  {
    "id": "m6",
    "number": "06",
    "type": "LLM",
    "file": "06_Module6_LLM_Prompt_Alignment_Agent_RAG_PEFT.md",
    "sourceHref": "../06_Module6_LLM_Prompt_Alignment_Agent_RAG_PEFT.md",
    "title": "LLM、Prompting、Alignment、Agent、RAG、Efficient Training、PEFT/LoRA",
    "fullTitle": "Module 6：LLM、Prompting、Alignment、Agent、RAG、Efficient Training、PEFT/LoRA",
    "summary": "Large Language Models，简称 LLM，是在大规模语料上训练的大型语言模型，通常基于 Transformer 架构，参数量可达数十亿到数千亿。",
    "keywords": [
      "TF-IDF",
      "Language Model",
      "Embedding",
      "Q",
      "K",
      "V",
      "Transformer",
      "BERT"
    ],
    "sections": [
      {
        "id": "1-large-language-models-是什么",
        "title": "1. Large Language Models 是什么",
        "level": 2,
        "body": "Large Language Models，简称 LLM，是在大规模语料上训练的大型语言模型，通常基于 Transformer 架构，参数量可达数十亿到数千亿。\n\nLLM 的能力包括：\n\n- 文本生成\n- 问答\n- 翻译\n- 摘要\n- 代码生成\n- 数学推理\n- 对话\n- 工具调用",
        "summary": "Large Language Models，简称 LLM，是在大规模语料上训练的大型语言模型，通常基于 Transformer 架构，参数量可达数十亿到数千亿。",
        "keywords": [
          "Language Model",
          "Transformer"
        ]
      },
      {
        "id": "2-slm-vs-llm",
        "title": "2. SLM vs LLM",
        "level": 2,
        "body": "| 维度 | Small Language Models | Large Language Models |\n|---|---|---|\n| 参数规模 | 较小，可能百万到千万级 | 可达数十亿/数千亿 |\n| 计算需求 | 较低 | 很高，需要 GPU 集群 |\n| 能力 | 适合简单任务 | 可处理复杂、多样任务 |\n| 部署 | 更容易本地部署 | 部署成本高 |\n| 训练 | 较快 | 可能需要数周或数月 |",
        "summary": "",
        "keywords": [
          "Language Model",
          "V"
        ]
      },
      {
        "id": "3-pretraining-finetuning-paradigm",
        "title": "3. Pretraining-Finetuning Paradigm",
        "level": 2,
        "body": "传统大模型使用流程：\n\n```text\nPretraining → Fine-tuning → Downstream task\n```\n\n### 3.1 Pretraining\n\n在大规模语料上学习通用语言能力。\n\n例如：\n\n- BERT：masked language modeling。\n- GPT：next token prediction。\n\n### 3.2 Fine-tuning\n\n在特定任务数据上继续训练，让模型适配任务。\n\n例如：\n\n```text\nBERT + sentiment dataset → sentiment classifier\n```\n\n问题：大模型参数太多，fine-tuning 成本高。",
        "summary": "在特定任务数据上继续训练，让模型适配任务。",
        "keywords": [
          "Language Model",
          "K",
          "BERT",
          "GPT",
          "Mask"
        ]
      },
      {
        "id": "4-prompt-learning",
        "title": "4. Prompt Learning",
        "level": 2,
        "body": "Prompting 的核心思想：\n\n> 不改模型参数，而是通过设计输入，让预训练模型完成任务。\n\n例如情感分类：\n\n```text\nReview: No reason to watch.\nPrompt: It was ____.\n```\n\n模型如果更可能填 `terrible`，说明负面；如果更可能填 `great`，说明正面。\n\n### 4.1 Prompt 组成\n\n一个 prompt 可以包括：\n\n- instruction\n- context\n- examples/demonstrations\n- question\n- output format\n- constraints\n\n### 4.2 Prompt shape\n\n| 类型 | 解释 | 例子 |\n|---|---|---|\n| Cloze prompt | 填空 | It was [MASK]. |\n| Prefix prompt | 续写 | Translate English to French: ... |\n\n### 4.3 Manual prompt engineering\n\n人工设计模板，简单但依赖经验。\n\n问题：\n\n- 很耗时。\n- 很难找到最优 prompt。\n- 模型对 prompt wording 很敏感。\n\n### 4.4 Automated prompt search\n\n自动寻找 prompt，包括：\n\n- discrete prompt：自然语言 token 组成的 prompt。\n- continuous/soft prompt：在 embedding 空间学习 prompt，不一定可读。",
        "summary": "> 不改模型参数，而是通过设计输入，让预训练模型完成任务。",
        "keywords": [
          "Embedding",
          "Q",
          "K",
          "V",
          "Mask",
          "Prompt"
        ]
      },
      {
        "id": "5-chain-of-thought-prompting",
        "title": "5. Chain-of-Thought Prompting",
        "level": 2,
        "body": "CoT prompting 让模型先生成中间推理步骤，再给答案。\n\n适合：\n\n- 数学题\n- 多步推理\n- 常识推理\n- 复杂问答\n\n常见形式：\n\n```text\nLet's think step by step.\n```\n\n优势：\n\n- 把复杂问题拆成多个步骤。\n- 提升多步推理表现。\n\n注意：考试答题中可以解释 CoT 的作用，但不要把 CoT 神化。它是 prompting strategy，不保证总是正确。",
        "summary": "CoT prompting 让模型先生成中间推理步骤，再给答案。",
        "keywords": [
          "K",
          "Prompt",
          "CoT"
        ]
      },
      {
        "id": "6-alignment",
        "title": "6. Alignment",
        "level": 2,
        "body": "Alignment 的目标是让 LLM 输出更符合人类偏好、安全要求和任务目标。\n\n常见流程：\n\n```text\nPretraining → Supervised Fine-tuning → Preference Learning / RLHF\n```\n\n### 6.1 为什么需要 Alignment\n\n未对齐模型可能：\n\n- 胡编事实。\n- 输出有害内容。\n- 不遵循指令。\n- 回复不符合用户偏好。\n\n### 6.2 RLHF 直觉\n\nRLHF：Reinforcement Learning from Human Feedback。\n\n基本流程：\n\n1. 收集人类偏好数据。\n2. 训练 reward model。\n3. 用强化学习优化模型，使输出更符合 reward。",
        "summary": "Alignment 的目标是让 LLM 输出更符合人类偏好、安全要求和任务目标。",
        "keywords": [
          "K",
          "V",
          "Alignment"
        ]
      },
      {
        "id": "7-efficient-training-of-llms",
        "title": "7. Efficient Training of LLMs",
        "level": 2,
        "body": "大模型训练难点是内存和计算成本。\n\n### 7.1 训练内存花在哪里\n\n对于参数量为 Ψ 的模型，fp16 训练中可能包括：\n\n| 项 | 内存 |\n|---|---|\n| fp16 model weights | 2Ψ |\n| fp16 gradients | 2Ψ |\n| fp32 master weights | 4Ψ |\n| Adam momentum | 4Ψ |\n| Adam variance | 4Ψ |\n| 合计 | 16Ψ |\n\n此外还有 activation memory。\n\nActivation memory 与以下因素有关：\n\n```text\nlayers × hidden dimension × sequence length × batch size\n```\n\n所以即使模型权重看起来能放进 GPU，训练时仍可能 OOM。\n\n### 7.2 Model Parallelism\n\n把模型切到多个 GPU 上。\n\n方式：\n\n- Naive model parallelism：按层切分。\n- Pipeline parallelism / GPipe：把 batch 切成 micro-batches，减少 GPU 空闲。\n- Tensor parallelism：把矩阵/tensor 切分到多个 GPU。\n\n### 7.3 Data Parallelism\n\n每个 GPU 存一份模型副本，处理不同 batch 数据，然后同步梯度。\n\n优点：简单常用。\n\n问题：模型本身太大时，每张 GPU 都放不下一整份模型。",
        "summary": "对于参数量为 Ψ 的模型，fp16 训练中可能包括：",
        "keywords": [
          "Q",
          "V"
        ]
      },
      {
        "id": "8-parameter-efficient-fine-tuning",
        "title": "8. Parameter-Efficient Fine-Tuning",
        "level": 2,
        "body": "PEFT 的目标：\n\n> 不更新全部模型参数，只训练少量新增或选择性参数，以低成本适配下游任务。\n\n常见方法：\n\n- Adapter tuning\n- Prefix tuning\n- Prompt tuning\n- LoRA",
        "summary": "> 不更新全部模型参数，只训练少量新增或选择性参数，以低成本适配下游任务。",
        "keywords": [
          "Prompt",
          "PEFT",
          "LoRA"
        ]
      },
      {
        "id": "9-lora",
        "title": "9. LoRA",
        "level": 2,
        "body": "LoRA：Low-Rank Adaptation。\n\n核心思想：冻结原模型权重，只训练一个低秩增量矩阵。\n\n原本要学习权重更新：\n\n```text\nW' = W + ΔW\n```\n\nLoRA 把 `ΔW` 分解为两个小矩阵：\n\n```text\nΔW = BA\n```\n\n其中 rank r 很小。\n\n优点：\n\n- 训练参数少。\n- 显存占用低。\n- 可以为不同任务保存不同 LoRA adapter。\n- 推理时可以合并回原权重。",
        "summary": "LoRA：Low-Rank Adaptation。",
        "keywords": [
          "K",
          "LoRA"
        ]
      },
      {
        "id": "10-llm-agents",
        "title": "10. LLM Agents",
        "level": 2,
        "body": "Agent 是能与环境交互、做决策并采取行动的系统。\n\nLLM agent 是以 LLM 为核心智能的 agent。\n\n### 10.1 Agent 的核心能力\n\n| 能力 | 解释 |\n|---|---|\n| Planning | 把用户目标拆成步骤 |\n| Tool use | 选择并调用外部工具 |\n| Memory | 存储、检索、更新过去信息 |\n| Workflow | 用预设流程组织模型和工具 |\n| Reflection/Evaluation | 检查结果并改进 |\n\n### 10.2 Agent 为什么有用\n\n普通 LLM 的限制：\n\n- hallucination\n- 知识不准确或过时\n- 不会真正执行外部动作\n- 可解释性不足\n- 能力受限于输入输出文本\n\nAgent 通过规划、工具、外部环境反馈扩展能力。\n\n### 10.3 ReAct\n\nReAct 结合 reasoning 和 acting。\n\n典型循环：\n\n```text\nThought → Action → Observation → Thought → Action → Observation → Final Answer\n```\n\n它让模型边思考边调用工具，并根据工具返回结果调整下一步。",
        "summary": "Agent 是能与环境交互、做决策并采取行动的系统。",
        "keywords": [
          "K",
          "V",
          "Agent"
        ]
      },
      {
        "id": "11-rag",
        "title": "11. RAG",
        "level": 2,
        "body": "RAG：Retrieval-Augmented Generation。\n\n核心思想：\n\n> 生成答案前，先从外部知识库检索相关信息，再把检索结果提供给 LLM 生成回答。\n\n基本流程：\n\n```text\nUser query\n→ Retriever\n→ Relevant documents\n→ Prompt with context\n→ LLM generator\n→ Answer\n```",
        "summary": "RAG：Retrieval-Augmented Generation。",
        "keywords": [
          "Q",
          "V",
          "Prompt",
          "RAG"
        ]
      },
      {
        "id": "12-为什么需要-rag",
        "title": "12. 为什么需要 RAG",
        "level": 2,
        "body": "LLM 的问题：\n\n- 训练知识可能过时。\n- 对长尾知识掌握不准。\n- 可能 hallucinate。\n- 针对私有知识重新训练成本高。\n\nRAG 的优势：\n\n| 问题 | RAG 如何解决 |\n|---|---|\n| 知识过时 | 检索最新外部文档 |\n| 长尾知识 | 接入领域知识库 |\n| 幻觉 | 用检索内容 grounding |\n| 成本高 | 不必重新训练模型 |\n| 可追溯 | 可返回 source/chunk |",
        "summary": "LLM 的问题：",
        "keywords": [
          "K",
          "RAG"
        ]
      },
      {
        "id": "13-rag-architecture",
        "title": "13. RAG Architecture",
        "level": 2,
        "body": "RAG 通常包括：\n\n```text\nDocuments\n→ Loader\n→ Splitter\n→ Embedding model\n→ Vector database / index\n→ Retriever\n→ Post-processing / reranking\n→ LLM generator\n```\n\n### 13.1 Document loading\n\n加载文档：PDF、网页、数据库、文本文件等。\n\n### 13.2 Chunking\n\n把文档切成小块。\n\n原因：\n\n- LLM context window 有限制。\n- 小 chunk 更容易精准匹配。\n\n### 13.3 Embedding\n\n把 query 和 document chunks 转成向量。\n\n可用方法：\n\n- TF-IDF\n- BM25\n- BERT embedding\n- GPT embedding\n\n### 13.4 Vector Database\n\n向量数据库存储 embedding，并支持相似度检索。\n\n常见索引方法：\n\n- LSH\n- Product Quantization\n- HNSW graph\n\n### 13.5 Retrieval\n\n给定 query embedding，找最相似的 chunks。\n\n### 13.6 Generation\n\n把检索到的上下文和问题一起放进 prompt，让 LLM 回答。",
        "summary": "加载文档：PDF、网页、数据库、文本文件等。",
        "keywords": [
          "TF-IDF",
          "Embedding",
          "Q",
          "K",
          "V",
          "BERT",
          "GPT",
          "Prompt"
        ]
      },
      {
        "id": "14-rag-vs-prompt-engineering-vs-fine-tuning",
        "title": "14. RAG vs Prompt Engineering vs Fine-tuning",
        "level": 2,
        "body": "| 方法 | 是否改模型参数 | 是否需要外部知识 | 适合场景 |\n|---|---|---|---|\n| Prompt engineering | 否 | 低 | 调整输出格式、简单任务引导 |\n| Fine-tuning | 是 | 不一定 | 学任务风格或行为模式 |\n| RAG | 否或少量 | 高 | 需要最新、私有、可追溯知识 |",
        "summary": "",
        "keywords": [
          "V",
          "Prompt",
          "RAG"
        ]
      },
      {
        "id": "15-本模块考试重点",
        "title": "15. 本模块考试重点",
        "level": 2,
        "body": "### 15.1 必背概念\n\n- Prompting 用输入引导模型，不更新参数。\n- CoT 让模型显式生成中间推理步骤。\n- Alignment 让模型更符合人类偏好与安全要求。\n- LLM 训练内存包括 weights、gradients、optimizer states、activations。\n- PEFT/LoRA 用少量参数适配大模型。\n- Agent = LLM + planning + tools + memory + feedback。\n- RAG = retrieval + generation，用外部知识增强 LLM。\n\n### 15.2 高频答题模板\n\n**问题：为什么 prompting 可以降低使用成本？**\n\n```text\nPrompting reformulates downstream tasks into the same format as language modeling. The pretrained model can often be kept frozen, and task information is provided through natural language instructions, templates, or demonstrations. Therefore, prompting avoids training task-specific parameters and is especially useful in few-shot settings.\n```\n\n**问题：RAG 为什么能减少 hallucination？**\n\n```text\nRAG reduces hallucination by grounding the model's generation in retrieved external documents. Instead of relying only on the model's parametric memory, it first retrieves relevant and up-to-date evidence from a knowledge base, then conditions the generation on that evidence. This improves factuality, traceability, and domain adaptability without full retraining.\n```\n\n**问题：LoRA 为什么参数高效？**\n\n```text\nLoRA freezes the original pretrained weights and learns only a low-rank update to selected weight matrices. Instead of training the full weight matrix, it decomposes the update into two much smaller matrices, which greatly reduces trainable parameters, memory usage, and storage cost while still allowing task adaptation.\n```\n\n**问题：LLM agent 包含哪些模块？**\n\n```text\nAn LLM agent typically includes planning, tool use, memory, and workflow control. Planning decomposes a user goal into steps, tool use allows the agent to interact with external systems, memory stores and retrieves past information, and workflow defines how LLM calls and tools are orchestrated. These components allow LLMs to go beyond text generation and perform real-world tasks.\n```",
        "summary": "**问题：为什么 prompting 可以降低使用成本？**",
        "keywords": [
          "Language Model",
          "K",
          "V",
          "Prompt",
          "CoT",
          "Alignment",
          "Agent",
          "RAG"
        ]
      }
    ],
    "wordCount": 5782,
    "sectionCount": 15,
    "searchText": "module 6：llm、prompting、alignment、agent、rag、efficient training、peft/lora\n## 1. large language models 是什么\n\nlarge language models，简称 llm，是在大规模语料上训练的大型语言模型，通常基于 transformer 架构，参数量可达数十亿到数千亿。\n\nllm 的能力包括：\n\n- 文本生成\n- 问答\n- 翻译\n- 摘要\n- 代码生成\n- 数学推理\n- 对话\n- 工具调用\n\n## 2. slm vs llm\n\n| 维度 | small language models | large language models |\n|---|---|---|\n| 参数规模 | 较小，可能百万到千万级 | 可达数十亿/数千亿 |\n| 计算需求 | 较低 | 很高，需要 gpu 集群 |\n| 能力 | 适合简单任务 | 可处理复杂、多样任务 |\n| 部署 | 更容易本地部署 | 部署成本高 |\n| 训练 | 较快 | 可能需要数周或数月 |\n\n## 3. pretraining-finetuning paradigm\n\n传统大模型使用流程：\n\n```text\npretraining → fine-tuning → downstream task\n```\n\n### 3.1 pretraining\n\n在大规模语料上学习通用语言能力。\n\n例如：\n\n- bert：masked language modeling。\n- gpt：next token prediction。\n\n### 3.2 fine-tuning\n\n在特定任务数据上继续训练，让模型适配任务。\n\n例如：\n\n```text\nbert + sentiment dataset → sentiment classifier\n```\n\n问题：大模型参数太多，fine-tuning 成本高。\n\n## 4. prompt learning\n\nprompting 的核心思想：\n\n> 不改模型参数，而是通过设计输入，让预训练模型完成任务。\n\n例如情感分类：\n\n```text\nreview: no reason to watch.\nprompt: it was ____.\n```\n\n模型如果更可能填 `terrible`，说明负面；如果更可能填 `great`，说明正面。\n\n### 4.1 prompt 组成\n\n一个 prompt 可以包括：\n\n- instruction\n- context\n- examples/demonstrations\n- question\n- output format\n- constraints\n\n### 4.2 prompt shape\n\n| 类型 | 解释 | 例子 |\n|---|---|---|\n| cloze prompt | 填空 | it was [mask]. |\n| prefix prompt | 续写 | translate english to french: ... |\n\n### 4.3 manual prompt engineering\n\n人工设计模板，简单但依赖经验。\n\n问题：\n\n- 很耗时。\n- 很难找到最优 prompt。\n- 模型对 prompt wording 很敏感。\n\n### 4.4 automated prompt search\n\n自动寻找 prompt，包括：\n\n- discrete prompt：自然语言 token 组成的 prompt。\n- continuous/soft prompt：在 embedding 空间学习 prompt，不一定可读。\n\n## 5. chain-of-thought prompting\n\ncot prompting 让模型先生成中间推理步骤，再给答案。\n\n适合：\n\n- 数学题\n- 多步推理\n- 常识推理\n- 复杂问答\n\n常见形式：\n\n```text\nlet's think step by step.\n```\n\n优势：\n\n- 把复杂问题拆成多个步骤。\n- 提升多步推理表现。\n\n注意：考试答题中可以解释 cot 的作用，但不要把 cot 神化。它是 prompting strategy，不保证总是正确。\n\n## 6. alignment\n\nalignment 的目标是让 llm 输出更符合人类偏好、安全要求和任务目标。\n\n常见流程：\n\n```text\npretraining → supervised fine-tuning → preference learning / rlhf\n```\n\n### 6.1 为什么需要 alignment\n\n未对齐模型可能：\n\n- 胡编事实。\n- 输出有害内容。\n- 不遵循指令。\n- 回复不符合用户偏好。\n\n### 6.2 rlhf 直觉\n\nrlhf：reinforcement learning from human feedback。\n\n基本流程：\n\n1. 收集人类偏好数据。\n2. 训练 reward model。\n3. 用强化学习优化模型，使输出更符合 reward。\n\n## 7. efficient training of llms\n\n大模型训练难点是内存和计算成本。\n\n### 7.1 训练内存花在哪里\n\n对于参数量为 ψ 的模型，fp16 训练中可能包括：\n\n| 项 | 内存 |\n|---|---|\n| fp16 model weights | 2ψ |\n| fp16 gradients | 2ψ |\n| fp32 master weights | 4ψ |\n| adam momentum | 4ψ |\n| adam variance | 4ψ |\n| 合计 | 16ψ |\n\n此外还有 activation memory。\n\nactivation memory 与以下因素有关：\n\n```text\nlayers × hidden dimension × sequence length × batch size\n```\n\n所以即使模型权重看起来能放进 gpu，训练时仍可能 oom。\n\n### 7.2 model parallelism\n\n把模型切到多个 gpu 上。\n\n方式：\n\n- naive model parallelism：按层切分。\n- pipeline parallelism / gpipe：把 batch 切成 micro-batches，减少 gpu 空闲。\n- tensor parallelism：把矩阵/tensor 切分到多个 gpu。\n\n### 7.3 data parallelism\n\n每个 gpu 存一份模型副本，处理不同 batch 数据，然后同步梯度。\n\n优点：简单常用。\n\n问题：模型本身太大时，每张 gpu 都放不下一整份模型。\n\n## 8. parameter-efficient fine-tuning\n\npeft 的目标：\n\n> 不更新全部模型参数，只训练少量新增或选择性参数，以低成本适配下游任务。\n\n常见方法：\n\n- adapter tuning\n- prefix tuning\n- prompt tuning\n- lora\n\n## 9. lora\n\nlora：low-rank adaptation。\n\n核心思想：冻结原模型权重，只训练一个低秩增量矩阵。\n\n原本要学习权重更新：\n\n```text\nw' = w + δw\n```\n\nlora 把 `δw` 分解为两个小矩阵：\n\n```text\nδw = ba\n```\n\n其中 rank r 很小。\n\n优点：\n\n- 训练参数少。\n- 显存占用低。\n- 可以为不同任务保存不同 lora adapter。\n- 推理时可以合并回原权重。\n\n## 10. llm agents\n\nagent 是能与环境交互、做决策并采取行动的系统。\n\nllm agent 是以 llm 为核心智能的 agent。\n\n### 10.1 agent 的核心能力\n\n| 能力 | 解释 |\n|---|---|\n| planning | 把用户目标拆成步骤 |\n| tool use | 选择并调用外部工具 |\n| memory | 存储、检索、更新过去信息 |\n| workflow | 用预设流程组织模型和工具 |\n| reflection/evaluation | 检查结果并改进 |\n\n### 10.2 agent 为什么有用\n\n普通 llm 的限制：\n\n- hallucination\n- 知识不准确或过时\n- 不会真正执行外部动作\n- 可解释性不足\n- 能力受限于输入输出文本\n\nagent 通过规划、工具、外部环境反馈扩展能力。\n\n### 10.3 react\n\nreact 结合 reasoning 和 acting。\n\n典型循环：\n\n```text\nthought → action → observation → thought → action → observation → final answer\n```\n\n它让模型边思考边调用工具，并根据工具返回结果调整下一步。\n\n## 11. rag\n\nrag：retrieval-augmented generation。\n\n核心思想：\n\n> 生成答案前，先从外部知识库检索相关信息，再把检索结果提供给 llm 生成回答。\n\n基本流程：\n\n```text\nuser query\n→ retriever\n→ relevant documents\n→ prompt with context\n→ llm generator\n→ answer\n```\n\n## 12. 为什么需要 rag\n\nllm 的问题：\n\n- 训练知识可能过时。\n- 对长尾知识掌握不准。\n- 可能 hallucinate。\n- 针对私有知识重新训练成本高。\n\nrag 的优势：\n\n| 问题 | rag 如何解决 |\n|---|---|\n| 知识过时 | 检索最新外部文档 |\n| 长尾知识 | 接入领域知识库 |\n| 幻觉 | 用检索内容 grounding |\n| 成本高 | 不必重新训练模型 |\n| 可追溯 | 可返回 source/chunk |\n\n## 13. rag architecture\n\nrag 通常包括：\n\n```text\ndocuments\n→ loader\n→ splitter\n→ embedding model\n→ vector database / index\n→ retriever\n→ post-processing / reranking\n→ llm generator\n```\n\n### 13.1 document loading\n\n加载文档：pdf、网页、数据库、文本文件等。\n\n### 13.2 chunking\n\n把文档切成小块。\n\n原因：\n\n- llm context window 有限制。\n- 小 chunk 更容易精准匹配。\n\n### 13.3 embedding\n\n把 query 和 document chunks 转成向量。\n\n可用方法：\n\n- tf-idf\n- bm25\n- bert embedding\n- gpt embedding\n\n### 13.4 vector database\n\n向量数据库存储 embedding，并支持相似度检索。\n\n常见索引方法：\n\n- lsh\n- product quantization\n- hnsw graph\n\n### 13.5 retrieval\n\n给定 query embedding，找最相似的 chunks。\n\n### 13.6 generation\n\n把检索到的上下文和问题一起放进 prompt，让 llm 回答。\n\n## 14. rag vs prompt engineering vs fine-tuning\n\n| 方法 | 是否改模型参数 | 是否需要外部知识 | 适合场景 |\n|---|---|---|---|\n| prompt engineering | 否 | 低 | 调整输出格式、简单任务引导 |\n| fine-tuning | 是 | 不一定 | 学任务风格或行为模式 |\n| rag | 否或少量 | 高 | 需要最新、私有、可追溯知识 |\n\n## 15. 本模块考试重点\n\n### 15.1 必背概念\n\n- prompting 用输入引导模型，不更新参数。\n- cot 让模型显式生成中间推理步骤。\n- alignment 让模型更符合人类偏好与安全要求。\n- llm 训练内存包括 weights、gradients、optimizer states、activations。\n- peft/lora 用少量参数适配大模型。\n- agent = llm + planning + tools + memory + feedback。\n- rag = retrieval + generation，用外部知识增强 llm。\n\n### 15.2 高频答题模板\n\n**问题：为什么 prompting 可以降低使用成本？**\n\n```text\nprompting reformulates downstream tasks into the same format as language modeling. the pretrained model can often be kept frozen, and task information is provided through natural language instructions, templates, or demonstrations. therefore, prompting avoids training task-specific parameters and is especially useful in few-shot settings.\n```\n\n**问题：rag 为什么能减少 hallucination？**\n\n```text\nrag reduces hallucination by grounding the model's generation in retrieved external documents. instead of relying only on the model's parametric memory, it first retrieves relevant and up-to-date evidence from a knowledge base, then conditions the generation on that evidence. this improves factuality, traceability, and domain adaptability without full retraining.\n```\n\n**问题：lora 为什么参数高效？**\n\n```text\nlora freezes the original pretrained weights and learns only a low-rank update to selected weight matrices. instead of training the full weight matrix, it decomposes the update into two much smaller matrices, which greatly reduces trainable parameters, memory usage, and storage cost while still allowing task adaptation.\n```\n\n**问题：llm agent 包含哪些模块？**\n\n```text\nan llm agent typically includes planning, tool use, memory, and workflow control. planning decomposes a user goal into steps, tool use allows the agent to interact with external systems, memory stores and retrieves past information, and workflow defines how llm calls and tools are orchestrated. these components allow llms to go beyond text generation and perform real-world tasks.\n```"
  },
  {
    "id": "exam",
    "number": "07",
    "type": "Exam",
    "file": "07_作业与期末题型_答题模板.md",
    "sourceHref": "../07_作业与期末题型_答题模板.md",
    "title": "作业与期末题型整理：答题模板与训练清单",
    "fullTitle": "作业与期末题型整理：答题模板与训练清单",
    "summary": "这门课的考试题型大概率不是单纯背诵，而是：",
    "keywords": [
      "NLP",
      "NLU",
      "NLG",
      "Tokenization",
      "Vocabulary",
      "Padding",
      "Language Model",
      "n-gram"
    ],
    "sections": [
      {
        "id": "1-期末考试复习策略",
        "title": "1. 期末考试复习策略",
        "level": 2,
        "body": "这门课的考试题型大概率不是单纯背诵，而是：\n\n1. 概念解释。\n2. 方法对比。\n3. 小计算题。\n4. 系统设计题。\n5. 根据场景说明 NLP 模块如何工作。\n\n复习时不要只背定义，要做到：\n\n```text\n定义 → 为什么需要 → 怎么做 → 优缺点 → 例子 → 如何评价\n```",
        "summary": "这门课的考试题型大概率不是单纯背诵，而是：",
        "keywords": [
          "NLP"
        ]
      },
      {
        "id": "2-hw1-覆盖重点",
        "title": "2. HW1 覆盖重点",
        "level": 2,
        "body": "HW1 主要覆盖：\n\n- one-hot encoding\n- n-gram language model\n- Markov assumption\n- sparsity / curse of dimensionality\n- neural language model\n- embedding dimension 影响\n- Word2Vec Skip-gram\n- GloVe\n- negative sampling\n\n### 2.1 one-hot 参数量题\n\n标准套路：\n\n```text\nembedding table 参数量 = vocab size × embedding dimension\n```\n\n例子：\n\n```text\n|V| = 50,000\nd = 128\nparameters = 50,000 × 128 = 6,400,000\n```\n\n答题时还要补充 practical issues：\n\n- high memory consumption\n- slower training/inference\n- overfitting risk\n- sparse representation cannot encode semantic similarity\n\n### 2.2 n-gram 列举题\n\n给句子：\n\n```text\nI am taking CS6493 this semester and studying NLP is really fascinating\n```\n\ntokenize 后：\n\n```text\n[I, am, taking, CS6493, this, semester, and, studying, NLP, is, really, fascinating]\n```\n\nbigram where second word is CS6493 or NLP：\n\n```text\n(taking, CS6493)\n(studying, NLP)\n```\n\ntrigram where third word is CS6493 or NLP：\n\n```text\n(am, taking, CS6493)\n(and, studying, NLP)\n```\n\n### 2.3 n-gram 局限答题模板\n\n```text\nn-gram models rely on observed frequency counts. They cannot generalize well to unseen word combinations, even if the individual words are known. As n increases, the number of possible n-grams grows exponentially with vocabulary size, leading to data sparsity and unreliable probability estimates. The Markov assumption also restricts the model to a short fixed context, making it hard to capture long-range dependencies.\n```\n\n### 2.4 neural LM 代码题要点\n\n生成训练样本：\n\n```python\nsentence = \"I am taking CS6493 this semester and studying NLP is really fascinating\".split()\ncontext_size = 3\ntrain_data = []\nfor i in range(context_size, len(sentence)):\n    context = sentence[i-context_size:i]\n    target = sentence[i]\n    train_data.append((context, target))\n```\n\n训练循环核心：\n\n```python\nfor context, target in train_data:\n    optimizer.zero_grad()\n    log_probs = model(context_ids)\n    loss = criterion(log_probs, target_id)\n    loss.backward()\n    optimizer.step()\n```\n\nembedding dimension 对比：\n\n| dim | 特点 |\n|---|---|\n| 32 | 参数少、快，但可能 underfit |\n| 64 | 折中，通常较稳 |\n| 128 | 容量大，小数据上可能 overfit，计算成本高 |",
        "summary": "答题时还要补充 practical issues：",
        "keywords": [
          "NLP",
          "Vocabulary",
          "Language Model",
          "n-gram",
          "Markov",
          "one-hot",
          "Embedding",
          "Word2Vec"
        ]
      },
      {
        "id": "3-hw2-覆盖重点",
        "title": "3. HW2 覆盖重点",
        "level": 2,
        "body": "HW2 主要覆盖：\n\n- padding / tokenization\n- word embedding\n- greedy search / beam search\n- BLEU\n- Transformer attention\n- Q/K/V 约束分析\n- softmax temperature / β\n- causal mask\n- NLU/NLG 基本任务\n\n### 3.1 Padding 题模板\n\n```text\nPadding makes all sequences in a batch have the same length so that matrix operations can be performed efficiently. Padding tokens are usually assigned index 0 and ignored by the model through attention masks or loss masks.\n```\n\n### 3.2 Greedy vs Beam Search 题模板\n\n```text\nGreedy search chooses the token with the highest probability at each step. It is efficient but can be trapped in local optimum. Beam search keeps the top k partial sequences at each step, expands them, and selects the best complete sequence according to accumulated probability. Therefore, beam search can find better global sequences but requires more computation.\n```\n\n### 3.3 BLEU 计算步骤\n\n遇到 BLEU 题，按以下顺序写：\n\n```text\n1. Tokenize candidate and references.\n2. Compute clipped n-gram precision P1, P2, P3, P4.\n3. Compute brevity penalty BP.\n4. Plug into BLEU = BP × exp(Σ w_n log P_n).\n5. State final score.\n```\n\n注意：如果任意高阶 precision 为 0，未平滑 BLEU 可能为 0。\n\n### 3.4 Attention 对称性题模板\n\n问题：如果 `W_Q = W_K`，score matrix 有什么性质？\n\n答案：\n\n```text\nIf W_Q = W_K, then Q = XW and K = XW, so S = QK^T = (XW)(XW)^T. Therefore S is symmetric, meaning S_ij = S_ji. This restricts the model's ability to represent directional or asymmetric relations, which are common in language. If V is also forced to equal K, the model loses the ability to separately learn features for matching positions and features for returning information.\n```\n\n### 3.5 Masking 题模板\n\n```text\nMasking should be applied before softmax by assigning forbidden positions a logit of -∞. After softmax, these positions receive probability 0, and the remaining valid positions are normalized to sum to 1. If masking is applied after softmax, the probability distribution will no longer sum to 1 unless it is renormalized.\n```",
        "summary": "注意：如果任意高阶 precision 为 0，未平滑 BLEU 可能为 0。",
        "keywords": [
          "NLU",
          "NLG",
          "Tokenization",
          "Padding",
          "n-gram",
          "Embedding",
          "Attention",
          "Q"
        ]
      },
      {
        "id": "4-期末参考题重点",
        "title": "4. 期末参考题重点",
        "level": 2,
        "body": "期末参考题集中在：\n\n1. Lecture 6：任务型对话系统。\n2. Lecture 3：distributional hypothesis、ELMo、Skip-gram 训练效率。\n\n### 4.1 任务型对话系统：CRB 题\n\n题目背景：设计 COVID-19 Reporting Bot，让用户自动上报 COVID-19 检测结果。\n\n#### 4.1.1 Domain classification\n\n判断用户话语属于哪个领域。\n\n例子：\n\n```text\nCOVID reporting / general health inquiry / appointment booking / unrelated\n```\n\n#### 4.1.2 Intent detection\n\n判断用户想做什么。\n\n例子：\n\n```text\nreport_positive_result\nreport_negative_result\nupdate_report\nask_reporting_policy\ncancel_report\n```\n\n#### 4.1.3 Slot filling\n\n抽取完成任务所需字段。\n\n可设计 5 个 slots：\n\n| Slot | 例子 |\n|---|---|\n| patient_name | Chan Tai Man |\n| HKID/passport | A123456(7) |\n| test_result | positive / negative |\n| test_date | 2026-02-01 |\n| phone_number | 98765432 |\n\n也可以补充：address、symptom onset date、test type、vaccination status。\n\n#### 4.1.4 NLU 后续模块\n\n```text\nNLU → Dialogue State Tracking → Dialogue Policy → Backend/API → NLG\n```\n\n说明：\n\n- DST 维护已收集和缺失的信息。\n- Policy 决定追问、确认、修改还是提交。\n- Backend/API 验证身份并提交报告。\n- NLG 生成自然语言回复。\n\n#### 4.1.5 评价指标\n\n至少写两个，最好写四个：\n\n| Metric | Meaning |\n|---|---|\n| Intent accuracy | 意图识别是否正确 |\n| Slot F1 | 槽位抽取是否准确完整 |\n| Task success rate | 是否成功完成 COVID 上报 |\n| Average turns | 完成任务平均轮数 |\n| User satisfaction | 用户满意度 |\n\n### 4.2 Distributional hypothesis 题\n\n标准答案：\n\n```text\nThe distributional hypothesis states that words occurring in similar contexts tend to have similar meanings. It is the foundation of word embedding methods such as Word2Vec and GloVe, which learn word vectors from word co-occurrence patterns in large corpora.\n```\n\n### 4.3 ELMo 题\n\n标准答案：\n\n```text\nWord2Vec and GloVe produce one static vector for each word, so they cannot distinguish polysemy. For example, bank in river bank and bank account receives the same vector. ELMo uses a deep bidirectional LSTM to generate context-dependent word representations, allowing the same word to have different embeddings in different contexts.\n```\n\n### 4.4 Skip-gram 训练慢与优化题\n\n标准答案：\n\n```text\nSkip-gram is slow because computing the probability of a context word requires softmax normalization over the entire vocabulary. This has O(V) cost per training step. Negative sampling improves efficiency by replacing the full softmax with a binary classification objective: the model distinguishes one positive context word from K sampled negative words. This reduces computation and makes training feasible for large vocabularies.\n```",
        "summary": "题目背景：设计 COVID-19 Reporting Bot，让用户自动上报 COVID-19 检测结果。",
        "keywords": [
          "NLU",
          "NLG",
          "Vocabulary",
          "LSTM",
          "Embedding",
          "Word2Vec",
          "Skip-gram",
          "Negative Sampling"
        ]
      },
      {
        "id": "5-期末答题格式建议",
        "title": "5. 期末答题格式建议",
        "level": 2,
        "body": "每道解释题都按这个结构写：\n\n```text\n1. Define the concept.\n2. Explain why it is needed / what problem it solves.\n3. Explain how it works.\n4. Give one concrete example.\n5. Mention limitation or evaluation if relevant.\n```\n\n例如 RAG：\n\n```text\nRAG is a framework that combines retrieval and generation. It is needed because LLMs may hallucinate or lack up-to-date/domain-specific knowledge. RAG first retrieves relevant documents from an external knowledge base using embeddings or lexical retrieval, then provides the retrieved context to the LLM for answer generation. For example, a legal QA system can retrieve relevant law articles before generating an answer. This improves factual grounding and traceability, although retrieval quality and chunking strategy strongly affect performance.\n```",
        "summary": "每道解释题都按这个结构写：",
        "keywords": [
          "Embedding",
          "Q",
          "K",
          "V",
          "RAG"
        ]
      },
      {
        "id": "6-必背英文短句",
        "title": "6. 必背英文短句",
        "level": 2,
        "body": "这些短句可以直接放进考试答案：\n\n```text\nA language model assigns probabilities to sequences of words and can be interpreted as predicting the next word.\n```\n\n```text\nThe Markov assumption reduces computational cost by conditioning only on a fixed-length history, but it limits the model's ability to capture long-range dependencies.\n```\n\n```text\nWord embeddings are dense vector representations that encode semantic similarity in a continuous space.\n```\n\n```text\nSelf-attention allows each token to directly attend to all other tokens in the sequence.\n```\n\n```text\nBERT is encoder-based and suitable for understanding tasks, while GPT is decoder-based and suitable for generation tasks.\n```\n\n```text\nBeam search keeps multiple hypotheses and therefore can avoid some locally optimal decisions made by greedy search.\n```\n\n```text\nRAG grounds generation in retrieved external knowledge, improving factuality and reducing hallucination.\n```\n\n```text\nLoRA freezes the original model and trains low-rank update matrices, reducing trainable parameters and memory cost.\n```",
        "summary": "这些短句可以直接放进考试答案：",
        "keywords": [
          "Language Model",
          "Markov",
          "Embedding",
          "Attention",
          "Q",
          "K",
          "V",
          "BERT"
        ]
      },
      {
        "id": "7-最后-2-小时冲刺清单",
        "title": "7. 最后 2 小时冲刺清单",
        "level": 2,
        "body": "考试前最后 2 小时只看这些：\n\n1. Module 3：one-hot、distributional hypothesis、Skip-gram、negative sampling、ELMo。\n2. Module 4：attention 公式、Q/K/V、mask、BERT vs GPT。\n3. Module 5：dialogue system、greedy vs beam、BLEU。\n4. Module 6：prompt、alignment、agent、RAG、LoRA。\n5. 本文档第 6 节英文短句。\n\n如果时间只剩 30 分钟，背这条主线：\n\n```text\nText → tokens → embeddings → language model → Transformer → pretrained models → downstream tasks → prompting/RAG/agents/PEFT\n```",
        "summary": "如果时间只剩 30 分钟，背这条主线：",
        "keywords": [
          "Language Model",
          "one-hot",
          "Embedding",
          "Skip-gram",
          "Negative Sampling",
          "ELMo",
          "Attention",
          "Q"
        ]
      }
    ],
    "wordCount": 7418,
    "sectionCount": 7,
    "searchText": "作业与期末题型整理：答题模板与训练清单\n## 1. 期末考试复习策略\n\n这门课的考试题型大概率不是单纯背诵，而是：\n\n1. 概念解释。\n2. 方法对比。\n3. 小计算题。\n4. 系统设计题。\n5. 根据场景说明 nlp 模块如何工作。\n\n复习时不要只背定义，要做到：\n\n```text\n定义 → 为什么需要 → 怎么做 → 优缺点 → 例子 → 如何评价\n```\n\n## 2. hw1 覆盖重点\n\nhw1 主要覆盖：\n\n- one-hot encoding\n- n-gram language model\n- markov assumption\n- sparsity / curse of dimensionality\n- neural language model\n- embedding dimension 影响\n- word2vec skip-gram\n- glove\n- negative sampling\n\n### 2.1 one-hot 参数量题\n\n标准套路：\n\n```text\nembedding table 参数量 = vocab size × embedding dimension\n```\n\n例子：\n\n```text\n|v| = 50,000\nd = 128\nparameters = 50,000 × 128 = 6,400,000\n```\n\n答题时还要补充 practical issues：\n\n- high memory consumption\n- slower training/inference\n- overfitting risk\n- sparse representation cannot encode semantic similarity\n\n### 2.2 n-gram 列举题\n\n给句子：\n\n```text\ni am taking cs6493 this semester and studying nlp is really fascinating\n```\n\ntokenize 后：\n\n```text\n[i, am, taking, cs6493, this, semester, and, studying, nlp, is, really, fascinating]\n```\n\nbigram where second word is cs6493 or nlp：\n\n```text\n(taking, cs6493)\n(studying, nlp)\n```\n\ntrigram where third word is cs6493 or nlp：\n\n```text\n(am, taking, cs6493)\n(and, studying, nlp)\n```\n\n### 2.3 n-gram 局限答题模板\n\n```text\nn-gram models rely on observed frequency counts. they cannot generalize well to unseen word combinations, even if the individual words are known. as n increases, the number of possible n-grams grows exponentially with vocabulary size, leading to data sparsity and unreliable probability estimates. the markov assumption also restricts the model to a short fixed context, making it hard to capture long-range dependencies.\n```\n\n### 2.4 neural lm 代码题要点\n\n生成训练样本：\n\n```python\nsentence = \"i am taking cs6493 this semester and studying nlp is really fascinating\".split()\ncontext_size = 3\ntrain_data = []\nfor i in range(context_size, len(sentence)):\n    context = sentence[i-context_size:i]\n    target = sentence[i]\n    train_data.append((context, target))\n```\n\n训练循环核心：\n\n```python\nfor context, target in train_data:\n    optimizer.zero_grad()\n    log_probs = model(context_ids)\n    loss = criterion(log_probs, target_id)\n    loss.backward()\n    optimizer.step()\n```\n\nembedding dimension 对比：\n\n| dim | 特点 |\n|---|---|\n| 32 | 参数少、快，但可能 underfit |\n| 64 | 折中，通常较稳 |\n| 128 | 容量大，小数据上可能 overfit，计算成本高 |\n\n## 3. hw2 覆盖重点\n\nhw2 主要覆盖：\n\n- padding / tokenization\n- word embedding\n- greedy search / beam search\n- bleu\n- transformer attention\n- q/k/v 约束分析\n- softmax temperature / β\n- causal mask\n- nlu/nlg 基本任务\n\n### 3.1 padding 题模板\n\n```text\npadding makes all sequences in a batch have the same length so that matrix operations can be performed efficiently. padding tokens are usually assigned index 0 and ignored by the model through attention masks or loss masks.\n```\n\n### 3.2 greedy vs beam search 题模板\n\n```text\ngreedy search chooses the token with the highest probability at each step. it is efficient but can be trapped in local optimum. beam search keeps the top k partial sequences at each step, expands them, and selects the best complete sequence according to accumulated probability. therefore, beam search can find better global sequences but requires more computation.\n```\n\n### 3.3 bleu 计算步骤\n\n遇到 bleu 题，按以下顺序写：\n\n```text\n1. tokenize candidate and references.\n2. compute clipped n-gram precision p1, p2, p3, p4.\n3. compute brevity penalty bp.\n4. plug into bleu = bp × exp(σ w_n log p_n).\n5. state final score.\n```\n\n注意：如果任意高阶 precision 为 0，未平滑 bleu 可能为 0。\n\n### 3.4 attention 对称性题模板\n\n问题：如果 `w_q = w_k`，score matrix 有什么性质？\n\n答案：\n\n```text\nif w_q = w_k, then q = xw and k = xw, so s = qk^t = (xw)(xw)^t. therefore s is symmetric, meaning s_ij = s_ji. this restricts the model's ability to represent directional or asymmetric relations, which are common in language. if v is also forced to equal k, the model loses the ability to separately learn features for matching positions and features for returning information.\n```\n\n### 3.5 masking 题模板\n\n```text\nmasking should be applied before softmax by assigning forbidden positions a logit of -∞. after softmax, these positions receive probability 0, and the remaining valid positions are normalized to sum to 1. if masking is applied after softmax, the probability distribution will no longer sum to 1 unless it is renormalized.\n```\n\n## 4. 期末参考题重点\n\n期末参考题集中在：\n\n1. lecture 6：任务型对话系统。\n2. lecture 3：distributional hypothesis、elmo、skip-gram 训练效率。\n\n### 4.1 任务型对话系统：crb 题\n\n题目背景：设计 covid-19 reporting bot，让用户自动上报 covid-19 检测结果。\n\n#### 4.1.1 domain classification\n\n判断用户话语属于哪个领域。\n\n例子：\n\n```text\ncovid reporting / general health inquiry / appointment booking / unrelated\n```\n\n#### 4.1.2 intent detection\n\n判断用户想做什么。\n\n例子：\n\n```text\nreport_positive_result\nreport_negative_result\nupdate_report\nask_reporting_policy\ncancel_report\n```\n\n#### 4.1.3 slot filling\n\n抽取完成任务所需字段。\n\n可设计 5 个 slots：\n\n| slot | 例子 |\n|---|---|\n| patient_name | chan tai man |\n| hkid/passport | a123456(7) |\n| test_result | positive / negative |\n| test_date | 2026-02-01 |\n| phone_number | 98765432 |\n\n也可以补充：address、symptom onset date、test type、vaccination status。\n\n#### 4.1.4 nlu 后续模块\n\n```text\nnlu → dialogue state tracking → dialogue policy → backend/api → nlg\n```\n\n说明：\n\n- dst 维护已收集和缺失的信息。\n- policy 决定追问、确认、修改还是提交。\n- backend/api 验证身份并提交报告。\n- nlg 生成自然语言回复。\n\n#### 4.1.5 评价指标\n\n至少写两个，最好写四个：\n\n| metric | meaning |\n|---|---|\n| intent accuracy | 意图识别是否正确 |\n| slot f1 | 槽位抽取是否准确完整 |\n| task success rate | 是否成功完成 covid 上报 |\n| average turns | 完成任务平均轮数 |\n| user satisfaction | 用户满意度 |\n\n### 4.2 distributional hypothesis 题\n\n标准答案：\n\n```text\nthe distributional hypothesis states that words occurring in similar contexts tend to have similar meanings. it is the foundation of word embedding methods such as word2vec and glove, which learn word vectors from word co-occurrence patterns in large corpora.\n```\n\n### 4.3 elmo 题\n\n标准答案：\n\n```text\nword2vec and glove produce one static vector for each word, so they cannot distinguish polysemy. for example, bank in river bank and bank account receives the same vector. elmo uses a deep bidirectional lstm to generate context-dependent word representations, allowing the same word to have different embeddings in different contexts.\n```\n\n### 4.4 skip-gram 训练慢与优化题\n\n标准答案：\n\n```text\nskip-gram is slow because computing the probability of a context word requires softmax normalization over the entire vocabulary. this has o(v) cost per training step. negative sampling improves efficiency by replacing the full softmax with a binary classification objective: the model distinguishes one positive context word from k sampled negative words. this reduces computation and makes training feasible for large vocabularies.\n```\n\n## 5. 期末答题格式建议\n\n每道解释题都按这个结构写：\n\n```text\n1. define the concept.\n2. explain why it is needed / what problem it solves.\n3. explain how it works.\n4. give one concrete example.\n5. mention limitation or evaluation if relevant.\n```\n\n例如 rag：\n\n```text\nrag is a framework that combines retrieval and generation. it is needed because llms may hallucinate or lack up-to-date/domain-specific knowledge. rag first retrieves relevant documents from an external knowledge base using embeddings or lexical retrieval, then provides the retrieved context to the llm for answer generation. for example, a legal qa system can retrieve relevant law articles before generating an answer. this improves factual grounding and traceability, although retrieval quality and chunking strategy strongly affect performance.\n```\n\n## 6. 必背英文短句\n\n这些短句可以直接放进考试答案：\n\n```text\na language model assigns probabilities to sequences of words and can be interpreted as predicting the next word.\n```\n\n```text\nthe markov assumption reduces computational cost by conditioning only on a fixed-length history, but it limits the model's ability to capture long-range dependencies.\n```\n\n```text\nword embeddings are dense vector representations that encode semantic similarity in a continuous space.\n```\n\n```text\nself-attention allows each token to directly attend to all other tokens in the sequence.\n```\n\n```text\nbert is encoder-based and suitable for understanding tasks, while gpt is decoder-based and suitable for generation tasks.\n```\n\n```text\nbeam search keeps multiple hypotheses and therefore can avoid some locally optimal decisions made by greedy search.\n```\n\n```text\nrag grounds generation in retrieved external knowledge, improving factuality and reducing hallucination.\n```\n\n```text\nlora freezes the original model and trains low-rank update matrices, reducing trainable parameters and memory cost.\n```\n\n## 7. 最后 2 小时冲刺清单\n\n考试前最后 2 小时只看这些：\n\n1. module 3：one-hot、distributional hypothesis、skip-gram、negative sampling、elmo。\n2. module 4：attention 公式、q/k/v、mask、bert vs gpt。\n3. module 5：dialogue system、greedy vs beam、bleu。\n4. module 6：prompt、alignment、agent、rag、lora。\n5. 本文档第 6 节英文短句。\n\n如果时间只剩 30 分钟，背这条主线：\n\n```text\ntext → tokens → embeddings → language model → transformer → pretrained models → downstream tasks → prompting/rag/agents/peft\n```"
  }
];
