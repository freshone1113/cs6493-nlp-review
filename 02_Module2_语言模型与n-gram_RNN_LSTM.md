# Module 2：语言模型、n-gram、RNN/LSTM

## 1. 什么是 Language Model

Language Model，简称 LM，是对词序列分配概率的模型。

给定一个长度为 T 的词序列：

```text
x(1), x(2), ..., x(T)
```

语言模型会给整个序列分配概率：

```text
P(x(1), x(2), ..., x(T))
```

直觉上，它判断一句话“像不像自然语言”。

例如：

```text
NLP is about how machines understand natural languages.
```

比下面这句更自然：

```text
machines NLP about languages understand how is natural process.
```

语言模型也可以理解为“预测下一个词”：

```text
the students opened their ____
```

模型要预测下一个词可能是：

```text
books / laptops / exams / minds
```

## 2. 链式法则：把句子概率拆成条件概率

根据概率链式法则：

```text
P(w1, w2, ..., wT)
= P(w1) × P(w2 | w1) × P(w3 | w1, w2) × ... × P(wT | w1, ..., wT-1)
```

一般写作：

```text
P(S) = ∏ P(wt | w1, ..., wt-1)
```

这表示：一句话的概率可以拆成每个词在前面历史下出现的概率。

问题是：完整历史太长，组合空间太大，无法可靠估计。

## 3. n-gram 模型

n-gram 使用 Markov assumption：预测当前词时，不看完整历史，只看前 n-1 个词。

```text
P(wt | w1, ..., wt-1) ≈ P(wt | wt-n+1, ..., wt-1)
```

### 3.1 unigram / bigram / trigram

句子：

```text
the students opened their books
```

| 类型 | 示例 |
|---|---|
| unigram | the, students, opened, their, books |
| bigram | the students, students opened, opened their, their books |
| trigram | the students opened, students opened their, opened their books |

### 3.2 n-gram 概率估计

bigram 例子：

```text
P(books | their) = count(their books) / count(their)
```

trigram 例子：

```text
P(books | opened their) = count(opened their books) / count(opened their)
```

## 4. n-gram 的三个核心问题

### 4.1 Sparsity：稀疏问题

词表很大时，可能出现大量没见过的组合。

例如训练语料中见过：

```text
studying NLP
```

但没见过：

```text
studying AI
```

即使 `studying` 和 `AI` 都是已知词，n-gram 也可能给这个组合 0 概率。

### 4.2 Curse of dimensionality：维度灾难

如果词表大小是 V，那么可能的 n-gram 数量约为：

```text
V^n
```

当 n 增大，组合空间指数增长。即使语料很大，大部分 n-gram 仍然不会出现。

### 4.3 Long-range dependency：长距离依赖问题

n-gram 只能看有限窗口，难以捕捉远距离信息。

例子：

```text
The key that opened the box was rusty because it had been in the attic for years.
```

要判断 `it` 指什么，可能需要更长上下文。trigram 或 4-gram 很难解决。

## 5. Smoothing

为了解决未出现 n-gram 概率为 0 的问题，可以使用 smoothing。

最简单的是 add-one smoothing：

```text
P(w | context) = (count(context, w) + 1) / (count(context) + |V|)
```

直觉：给所有可能词都加一点概率，避免 0。

但 smoothing 只是缓解问题，不能真正理解语义或泛化到新组合。

## 6. Neural Language Model

神经语言模型用 embedding 和神经网络预测下一个词。

基本流程：

```text
前几个词 → word embeddings → neural network → softmax over vocabulary → next word probability
```

例如 4-gram neural LM：

```text
(I, am, taking) → CS6493
(am, taking, CS6493) → this
(taking, CS6493, this) → semester
```

### 6.1 Embedding layer

输入是 token ID，embedding layer 把每个 token ID 查表变成 dense vector。

如果：

```text
vocab_size = 50,000
embedding_dim = 128
```

embedding table 参数量是：

```text
50,000 × 128 = 6,400,000
```

### 6.2 Softmax 输出

模型最后输出 vocabulary 中每个词作为下一个词的概率。

```text
P(next_word | context)
```

训练目标通常是最大化真实下一个词的概率，等价于最小化 cross-entropy loss。

## 7. RNN-based Language Model

RNN 用隐藏状态逐步处理序列：

```text
h_t = f(x_t, h_{t-1})
```

其中：

- `x_t`：当前词的 embedding
- `h_t`：当前隐藏状态，理论上包含前面历史信息

RNN 的优点：

- 可以处理任意长度输入。
- 模型参数不随序列长度增加。
- 同一组参数在每个时间步共享。

RNN 的问题：

- 顺序计算，难以并行。
- 长距离依赖难学。
- 容易出现 vanishing/exploding gradient。

## 8. LSTM

LSTM 是一种特殊 RNN，用门控机制缓解梯度消失问题。

它有几个关键门：

| 组件 | 作用 |
|---|---|
| input gate | 决定当前输入写入多少 |
| forget gate | 决定旧记忆保留多少 |
| output gate | 决定输出多少隐藏状态 |
| cell state | 长期记忆通道 |

直觉：普通 RNN 每一步都把历史混在一起，LSTM 增加了“记忆开关”，可以选择保留或遗忘信息。

## 9. Perplexity

Perplexity 是语言模型的标准评价指标。

直觉：模型面对每个位置时平均有多少个“困惑的候选词”。

- perplexity 越低，模型越好。
- 如果模型对真实文本给出更高概率，则 perplexity 更低。

与 cross-entropy loss 的关系：

```text
perplexity = exp(cross_entropy)
```

## 10. 本模块考试重点

### 10.1 必背概念

- LM 是对词序列分配概率的模型，也可看作预测下一个词。
- n-gram 使用 Markov assumption，只看前 n-1 个词。
- n-gram 的主要问题：sparsity、无法泛化、长距离依赖弱。
- RNN 通过 hidden state 建模序列，但难并行且有长依赖问题。
- LSTM 用 gating mechanism 缓解 vanishing gradient。
- Perplexity 越低越好。

### 10.2 高频答题模板

**问题：为什么 n-gram 不能很好泛化到 novel sequences？**

```text
n-gram models estimate probabilities from observed co-occurrence counts. If a sequence has not appeared in the training corpus, the model may assign zero or very low probability even if all individual words are known. Since n-gram models do not learn semantic or compositional representations, they cannot generalize well to novel but meaningful word combinations.
```

**问题：Markov assumption 的局限是什么？**

```text
The Markov assumption approximates the next-word probability using only the previous n-1 words. This reduces computational cost, but it prevents the model from using long-distance context. Therefore, it fails in cases requiring discourse-level information, coreference resolution, or dependencies across long spans.
```

**问题：为什么需要 neural language models？**

```text
Neural language models learn dense representations of words and contexts, allowing them to share statistical strength across similar words and contexts. Compared with count-based n-gram models, they can generalize better to unseen sequences and capture richer semantic patterns.
```
