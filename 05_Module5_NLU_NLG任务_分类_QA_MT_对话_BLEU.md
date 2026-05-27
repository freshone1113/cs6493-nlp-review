# Module 5：NLU/NLG 任务、文本分类、问答、机器翻译、对话系统、BLEU

## 1. NLU vs NLG

NLP 任务可分为：

```text
NLU：理解语言，把文本变成结构化结果
NLG：生成语言，把信息变成自然语言文本
```

| 类型 | 目标 | 例子 |
|---|---|---|
| NLU | extract/understand meaning | text classification, QA, NER, intent detection |
| NLG | generate fluent text | machine translation, summarization, dialogue generation |

## 2. Text Classification

Text classification 是把文本分配到类别。

形式化表示：

```text
h: D → C
```

其中：

- `D`：文本数据集合。
- `C`：类别集合。
- `h`：分类器/模型。

### 2.1 常见任务

| 任务 | 类别例子 |
|---|---|
| spam detection | spam / not spam |
| sentiment analysis | positive / negative / neutral |
| news categorization | sports / finance / entertainment |
| intent classification | purchase / cancel / refund |
| content moderation | safe / harmful / illegal |
| topic analysis | customer support / price / usability |

### 2.2 分类类型

| 类型 | 解释 | 例子 |
|---|---|---|
| Binary classification | 两类中选一类 | spam vs legitimate |
| Single-label multi-class | 多类中只能选一类 | news category |
| Multi-label classification | 一个样本可属于多个类 | 文章标签：AI + healthcare |
| Ordinal classification | 类别有顺序 | 1–5 星评分 |

### 2.3 Hard vs Soft Classification

- Hard classification：直接输出类别。
- Soft classification：输出每个类别的概率/置信度。

例如：

```text
positive: 0.82
neutral: 0.11
negative: 0.07
```

## 3. Text Classification 方法

### 3.1 传统方法

```text
preprocessing → TF-IDF/BOW → classifier
```

常见分类器：

- Naive Bayes
- Logistic Regression
- SVM

### 3.2 神经方法

```text
tokenization → embedding → neural network → softmax
```

常见模型：

- CNN
- RNN/LSTM
- BERT fine-tuning

### 3.3 BERT fine-tuning

通常使用 `[CLS]` token 的表示做分类：

```text
[CLS] sentence tokens [SEP]
→ BERT
→ h_[CLS]
→ classification head
→ label
```

## 4. Question Answering

QA 是给定问题，输出答案。

### 4.1 Extractive QA

答案是从 passage 中抽取的一段连续文本。

例如：

```text
Passage: Paris is the capital of France.
Question: What is the capital of France?
Answer: Paris
```

### 4.2 SQuAD

SQuAD 是经典阅读理解 benchmark。

特点：

- 基于真实文章。
- 问题由人类编写。
- 答案通常是 passage 中的 span。

SQuAD 2.0 增加了 unanswerable questions，模型还需要判断“文档中没有答案”。

### 4.3 QA 评价指标

常见：

- Exact Match：预测答案是否与标准答案完全一致。
- F1：预测答案与标准答案 token overlap 的 F1。

## 5. Machine Translation

Machine Translation，简称 MT，是把源语言句子翻译成目标语言句子。

```text
x = source sentence
y = target sentence
```

目标：

```text
find y that maximizes P(y | x)
```

### 5.1 MT 发展阶段

```text
Rule-based MT → Example-based MT → Statistical MT → Neural MT
```

### 5.2 Statistical MT 与 alignment

统计机器翻译中，alignment 表示源语言词和目标语言词之间的对应关系。

alignment 可能很复杂：

- one-to-one
- one-to-many
- many-to-one
- many-to-many
- some words have no counterpart

## 6. Neural Machine Translation

NMT 通常使用 seq2seq encoder-decoder 架构。

### 6.1 Seq2seq

```text
source sentence → encoder → hidden representation → decoder → target sentence
```

Encoder 读入源语言句子，Decoder 逐步生成目标语言句子。

### 6.2 Conditional Language Model

NMT 可以看作 conditional language model：

```text
P(y | x) = P(y1 | x) × P(y2 | y1, x) × ... × P(yT | y1...yT-1, x)
```

它是 language model，因为 decoder 在预测下一个目标词；它是 conditional，因为预测依赖源句 x。

## 7. Decoding：Greedy Search 与 Beam Search

训练后，模型会给每一步生成的 token 分配概率。Decoding 的任务是找到最终输出序列。

### 7.1 Greedy Search

每一步都选择概率最高的 token。

优点：快。

缺点：局部最优，不能回头。

例如：

```text
Step 1 选了 yes，后面可能导致整体概率不高。
```

### 7.2 Exhaustive Search

枚举所有可能输出序列。

如果词表大小是 V，序列长度是 T，复杂度约为：

```text
O(V^T)
```

不可行。

### 7.3 Beam Search

Beam search 每一步保留 top-k 个部分候选。

```text
k = beam size
```

流程：

1. 第一步保留概率最高的 k 个 token。
2. 扩展每个候选。
3. 计算累计概率。
4. 继续保留 top-k。
5. 直到生成结束符。

优点：比 greedy 更可能找到全局更优序列。

缺点：计算更慢，k 太大也不一定更好。

## 8. BLEU

BLEU 是机器翻译常用自动评价指标。

核心思想：比较 candidate translation 和 reference translation 的 n-gram overlap。

公式：

```text
BLEU = BP × exp(Σ w_n log P_n)
```

其中：

- `P_n`：n-gram precision。
- `w_n`：权重，通常均匀。
- `BP`：brevity penalty，惩罚过短翻译。

### 8.1 n-gram precision

如果 candidate 的 unigram 有 9 个，其中 8 个出现在 reference 中：

```text
P1 = 8/9
```

同理可以计算 bigram、trigram、4-gram precision。

### 8.2 Brevity Penalty

如果 candidate 长度 c 小于 reference 长度 r，则惩罚：

```text
BP = exp(1 - r/c)
```

如果 `c >= r`：

```text
BP = 1
```

### 8.3 BLEU 的局限

- 只看 n-gram overlap，不真正理解语义。
- 对同义改写不友好。
- 句子级 BLEU 不稳定，更适合 corpus-level。

## 9. Dialogue System

Dialogue system 分为：

| 类型 | 目标 | 例子 |
|---|---|---|
| Task-oriented dialogue | 完成任务 | 订票、报修、COVID 上报 |
| Chitchat dialogue | 开放聊天 | 日常闲聊 |

## 10. 任务型对话系统标准模块

一个 task-oriented dialogue system 通常包括：

```text
User utterance
→ NLU
→ Dialogue State Tracking
→ Dialogue Policy
→ Backend/API
→ NLG
→ System response
```

### 10.1 NLU

NLU 包括：

1. Domain classification：判断领域。
2. Intent detection：判断用户意图。
3. Slot filling：抽取关键信息。

以 COVID Reporting Bot 为例：

| NLU 子任务 | 示例 |
|---|---|
| Domain classification | COVID reporting / general inquiry / appointment |
| Intent detection | report_positive_test / update_info / ask_policy |
| Slot filling | name, HKID, test_date, test_result, phone_number |

### 10.2 Dialogue State Tracking

维护当前已经收集到的信息。

例如：

```text
name = Chan Tai Man
test_result = positive
test_date = missing
phone_number = missing
```

### 10.3 Dialogue Policy

决定下一步做什么：

- 如果槽位缺失，继续追问。
- 如果信息齐全，确认信息。
- 如果用户确认，调用后端提交。
- 如果用户修改，更新 state。

### 10.4 NLG

把系统动作转成自然语言。

例如：

```text
请问你的检测日期是哪一天？
```

或者：

```text
我已经收到你的阳性检测上报信息，请确认手机号是否为 xxxx。
```

### 10.5 Backend/API

调用外部系统完成提交、查询、验证。

## 11. 对话系统评价指标

| 指标 | 含义 |
|---|---|
| Intent accuracy | 意图识别准确率 |
| Slot F1 | 槽位抽取效果 |
| Task success rate | 是否成功完成任务 |
| Dialogue turns | 完成任务所需轮数，越少通常越高效 |
| User satisfaction | 用户满意度 |
| API call accuracy | 后端调用是否正确 |

## 12. 本模块考试重点

### 12.1 必背概念

- NLU 是理解，NLG 是生成。
- 文本分类包括 binary、single-label multi-class、multi-label、ordinal。
- Extractive QA 答案来自 passage span。
- NMT 是 conditional language model。
- Greedy search 局部最优；beam search 保留多个候选。
- BLEU 基于 n-gram precision 和 brevity penalty。
- 任务型对话系统包括 NLU、DST、Policy、NLG、API。

### 12.2 高频答题模板

**问题：Greedy search 和 beam search 区别？**

```text
Greedy search selects the most probable token at each step, so it is fast but may miss the globally best sequence because early decisions cannot be revised. Beam search keeps the top k partial hypotheses at each step and expands them, which increases the chance of finding a sequence with higher overall probability.
```

**问题：如何设计 COVID reporting chatbot？**

```text
The system first performs NLU, including domain classification to identify whether the user is in the COVID reporting domain, intent detection to determine actions such as reporting a positive result, and slot filling to extract fields such as name, ID, test date, test result, and phone number. Then dialogue state tracking maintains collected and missing slots, dialogue policy decides whether to ask follow-up questions or submit the report, backend APIs validate and store the report, and NLG generates natural responses to guide the user. The system can be evaluated by intent accuracy, slot F1, task success rate, and average dialogue turns.
```

**问题：BLEU 是什么？**

```text
BLEU is an automatic evaluation metric for machine translation. It measures n-gram precision between the candidate translation and one or more reference translations, combined with a brevity penalty to discourage overly short outputs. Higher BLEU usually indicates closer lexical overlap with references, but it may not fully capture semantic equivalence.
```
