# Module 1：NLP 入门与文本预处理

## 1. NLP 是什么

Natural Language Processing，简称 NLP，是人工智能的一个分支，目标是让计算机能够学习、处理、理解和生成自然语言，从而与人类交互。

自然语言包括人平时说和写的语言，例如英文、中文、日文、聊天消息、新闻、论文、搜索 query、客服对话等。

NLP 的难点在于：语言不是单纯的字符序列。语言有多层结构：

```text
字符/音素 → 词 → 短语 → 句子 → 篇章 → 语义 → 语用/上下文
```

例如：

```text
I saw her duck.
```

这句话可能表示：

1. 我看见她低头躲避。
2. 我看见了她的鸭子。

这说明 NLP 不只是“查字典”，而是要结合语法、语义、上下文和世界知识。

## 2. NLP 的典型任务

NLP 任务可以粗略分成两类：

### 2.1 NLU：Natural Language Understanding

NLU 是“理解文本”，把自然语言变成结构化信息。

常见任务：

| 任务 | 输入 | 输出 | 例子 |
|---|---|---|---|
| Text classification | 文本 | 类别 | 判断评论是 positive/negative |
| Intent detection | 用户话语 | 意图 | “我要订机票” → booking_ticket |
| Slot filling | 用户话语 | 槽位 | “明天去北京” → date=明天, destination=北京 |
| Named Entity Recognition | 文本 | 实体 | “Apple is in California” → Apple=ORG, California=LOC |
| Question Answering | 问题 + 文档 | 答案 | 从文章中抽取答案 |
| Natural Language Inference | 两句话 | entail/contradict/neutral | 判断一句话是否推出另一句话 |

### 2.2 NLG：Natural Language Generation

NLG 是“生成文本”，从结构化信息、源文本或上下文生成自然语言。

常见任务：

| 任务 | 输入 | 输出 | 例子 |
|---|---|---|---|
| Machine Translation | 源语言句子 | 目标语言句子 | English → Chinese |
| Summarization | 长文本 | 摘要 | 新闻摘要 |
| Dialogue generation | 对话上下文 | 回复 | Chatbot |
| Paraphrasing | 原句 | 改写句 | 同义改写 |
| Report generation | 数据/表格 | 报告 | 医学影像报告生成 |

## 3. NLP 系统的基本流程

传统 NLP 系统通常可以理解为：

```text
Raw text
→ preprocessing
→ feature/vector representation
→ model
→ prediction/generation
→ evaluation
```

例如做 sentiment analysis：

```text
“I really like this movie!”
→ tokenize: [I, really, like, this, movie]
→ vectorize: 词向量/TF-IDF/BERT embedding
→ classifier
→ positive
```

## 4. 文本预处理

### 4.1 Tokenization

Tokenization 是把文本切分成 token 的过程。Token 可以是：

- word：`I love NLP` → `[I, love, NLP]`
- character：`NLP` → `[N, L, P]`
- subword：`unbelievable` → `[un, ##believ, ##able]`

为什么 tokenization 重要？因为模型处理的是 token ID，不是原始字符串。

```text
文本 → token → token ID → embedding → 模型
```

### 4.2 Vocabulary 与 index

模型通常会维护一个 vocabulary，把 token 映射成数字。

例如：

```text
I      → 4
like   → 7
cats   → 10
and    → 17
dogs   → 11
```

句子：

```text
I like cats and dogs
```

转换为：

```text
[4, 7, 10, 17, 11]
```

### 4.3 Padding

神经网络训练时通常按 batch 输入。一个 batch 中的句子长度可能不同，但矩阵运算要求形状一致，所以需要 padding。

例如：

```text
Sentence 1: [4, 7, 10, 17, 11]
Sentence 2: [5, 8, 12, 13, 17, 18, 19, 20]
```

最长长度为 8，则句子 1 右侧补 0：

```text
[4, 7, 10, 17, 11, 0, 0, 0]
```

padding 位置通常要配合 attention mask，让模型不要把 padding 当成真实词。

### 4.4 Stop words removal

Stop words 是高频但信息量较低的词，例如：

```text
the, a, an, is, are, of
```

在传统方法中，有时会去除 stop words。但在 BERT/GPT 等模型中，通常不随意去除，因为这些模型可能利用功能词理解句法关系。

### 4.5 Stemming 与 Lemmatization

这两个操作都用于把词还原到更基础形式。

| 方法 | 解释 | 例子 |
|---|---|---|
| Stemming | 粗暴截断词缀 | studies → studi |
| Lemmatization | 根据词典和词性还原 | studies → study |

### 4.6 Bag-of-Words

Bag-of-Words，简称 BOW，把文本表示成词频向量，不考虑顺序。

例如 vocabulary：

```text
[cat, dog, run]
```

句子：

```text
cat dog cat
```

BOW 表示：

```text
[2, 1, 0]
```

缺点：丢失顺序。

```text
Dog bites man.
Man bites dog.
```

BOW 可能非常相似，但语义不同。

### 4.7 TF-IDF

TF-IDF 用来衡量一个词对文档的重要性。

核心思想：

```text
一个词在当前文档出现多 → 重要性上升
一个词在所有文档都常见 → 重要性下降
```

公式直觉：

```text
TF-IDF = Term Frequency × Inverse Document Frequency
```

- TF：词在当前文档中的频率。
- IDF：词在整个语料中越少见，权重越高。

TF-IDF 常用于传统文本分类、信息检索、baseline 模型。

## 5. 从传统 NLP 到神经 NLP

传统 NLP 常见流程：

```text
文本 → 人工特征/TF-IDF → 传统分类器（Naive Bayes/SVM/Logistic Regression）
```

神经 NLP 常见流程：

```text
文本 → token ID → embedding → neural model（RNN/CNN/Transformer）→ output
```

大模型时代的流程：

```text
文本 + prompt → pretrained LLM → output
```

## 6. 本模块考试重点

### 6.1 必背概念

- NLP 是让计算机处理自然语言的 AI 分支。
- NLU 是理解/抽取意义；NLG 是生成自然语言。
- Tokenization 是把文本切成 token。
- Padding 是为了让同 batch 的输入等长。
- BOW/TF-IDF 是传统向量化方法。

### 6.2 常见问法

**问题：NLU 和 NLG 有什么区别？**

答题模板：

```text
NLU focuses on understanding and extracting meaning from natural language input, such as text classification, intent detection, slot filling, and question answering. NLG focuses on generating fluent and meaningful text, such as machine translation, summarization, and dialogue generation. In short, NLU maps text to structured meaning, while NLG maps meaning/context to text.
```

**问题：为什么 padding 后还需要 mask？**

答题模板：

```text
Padding makes sequences in a batch have the same length for efficient matrix operations. However, padded tokens are not real linguistic content. Therefore, an attention mask is used to prevent the model from attending to or learning from padding positions.
```
