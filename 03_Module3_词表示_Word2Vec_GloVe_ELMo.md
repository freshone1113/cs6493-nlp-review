# Module 3：词表示、Word2Vec、GloVe、ELMo

## 1. 为什么要学习词表示

模型不能直接理解单词，需要把词表示成数字。

最简单的方式是 one-hot，但 one-hot 有严重局限。词向量的核心目标是：

> 用一个 dense vector 表示每个词，并让语义相似的词在向量空间中距离更近。

## 2. One-hot Encoding

假设 vocabulary 为：

```text
V = {cat, dog, run, runs}
```

按字典序排列：

```text
cat, dog, run, runs
```

one-hot 表示为：

```text
cat  = [1, 0, 0, 0]
dog  = [0, 1, 0, 0]
run  = [0, 0, 1, 0]
runs = [0, 0, 0, 1]
```

### 2.1 one-hot 的问题

#### 问题 1：所有不同词都正交

任意两个不同词的 dot product 都是 0：

```text
cat · dog = 0
run · runs = 0
```

这意味着 one-hot 看不出：

```text
cat 和 dog 比 cat 和 run 更相似
run 和 runs 有形态关系
```

#### 问题 2：维度过高且稀疏

如果词表有 50,000 个词，每个 one-hot 向量就是 50,000 维，只有一个位置是 1。

#### 问题 3：不能表达语义和形态关系

`run` 和 `runs` 在语言上明显相关，但 one-hot 完全看不出来。

## 3. Distributional Hypothesis

Distributional hypothesis 是现代词向量的理论基础。

核心思想：

```text
Words that occur in similar contexts tend to have similar meanings.
```

也就是：

```text
You shall know a word by the company it keeps.
```

如果两个词经常出现在相似上下文里，它们可能语义相近。

例如：

```text
I booked a hotel.
I booked a motel.
```

`hotel` 和 `motel` 的上下文类似，所以它们的向量应该接近。

## 4. Word Embedding

Word embedding 是词的低维稠密向量表示。

例如：

```text
banking = [0.286, 0.792, -0.177, ..., 0.271]
```

特点：

- 低维：通常 50、100、300、768 维。
- 稠密：大部分位置都有非零值。
- 可学习：通过语料训练得到。
- 可计算相似度：可以用 cosine similarity 衡量词语相似性。

## 5. Word2Vec

Word2Vec 是学习词向量的经典框架。

核心思想：

```text
一个词的意义由它周围的词决定。
```

Word2Vec 有两种训练方式：

| 方法 | 输入 | 目标 |
|---|---|---|
| CBOW | 上下文词 | 预测中心词 |
| Skip-gram | 中心词 | 预测上下文词 |

## 6. CBOW

CBOW：Continuous Bag-of-Words。

任务：给定上下文词，预测中心词。

例子：

```text
The students opened their books
```

如果窗口大小为 2，中心词是 `opened`：

```text
context = [The, students, their, books]
target = opened
```

CBOW 通常训练更快，对高频词效果较好。

## 7. Skip-gram

Skip-gram 的方向相反：给定中心词，预测周围上下文词。

例子：

```text
center = opened
context = [The, students, their, books]
```

Skip-gram 的目标是最大化：

```text
P(context words | center word)
```

更正式地说，在每个位置 t，对于中心词 `w_t`，预测窗口内的上下文词 `w_{t+j}`。

## 8. 为什么 Skip-gram 训练慢

Skip-gram 原始 softmax 需要对整个 vocabulary 归一化。

如果词表大小为 V，每次更新都要计算：

```text
P(w_o | w_i) = exp(u_o^T v_i) / Σ exp(u_w^T v_i)
```

分母要对所有词求和，复杂度是：

```text
O(V)
```

当词表有 100,000 个词时，每一步都非常慢。

## 9. Negative Sampling

Negative sampling 是加速 Word2Vec 的重要方法。

它不再对全词表做 softmax，而是每次只训练：

```text
1 个正样本：真实上下文词
K 个负样本：随机采样出来的非上下文词
```

目标：

- 让中心词和真实上下文词向量更接近。
- 让中心词和负样本词向量更远。

直觉例子：

```text
center = banking
positive context = crisis
negative samples = banana, table, swimming, ...
```

模型学习：`banking` 应该和 `crisis` 更相关，而不是和 `banana` 更相关。

### 9.1 negative sampling 的优点

- 每步只更新少数词，复杂度从 `O(V)` 降到约 `O(K)`。
- 适合大词表。
- 对 frequent words 和低维向量效果较好。

## 10. Hierarchical Softmax

Hierarchical softmax 用一棵二叉树表示词表。预测一个词时，不需要对所有词做 softmax，而是沿树路径做一系列二分类。

优点：

- 复杂度约为 `O(log V)`。
- 对低频词可能更友好。

## 11. GloVe

GloVe：Global Vectors for Word Representation。

它结合了两种思想：

| 方法 | 关注点 |
|---|---|
| LSA | 全局共现统计 |
| Word2Vec | 局部上下文预测 |

GloVe 通过构建全局词共现矩阵，学习词向量。

直觉：如果两个词和其他词的共现模式相似，那么它们语义相似。

## 12. Context-independent vs Contextualized Embeddings

### 12.1 静态词向量的问题

Word2Vec 和 GloVe 都是 context-independent embedding。

也就是说，每个词只有一个固定向量。

问题：无法处理多义词。

例如：

```text
open a bank account
sit on the river bank
```

`bank` 在两句话中含义不同，但 Word2Vec/GloVe 给它同一个向量。

### 12.2 ELMo

ELMo 是 contextualized word embedding。

它使用双向 LSTM，根据整句话上下文动态生成词向量。

所以：

```text
bank in “bank account”
bank in “river bank”
```

会得到不同表示。

ELMo 解决的关键问题：

> 同一个词在不同上下文中可能有不同含义，静态词向量无法区分，而 contextualized embedding 可以根据上下文动态调整表示。

## 13. 本模块考试重点

### 13.1 必背概念

- one-hot 是高维稀疏离散表示，不能表达词语相似性。
- distributional hypothesis：相似上下文中的词语倾向于有相似含义。
- word embedding 是低维稠密向量。
- CBOW：上下文预测中心词。
- Skip-gram：中心词预测上下文。
- negative sampling 用少量负样本近似全词表 softmax。
- GloVe 基于全局共现矩阵。
- ELMo 是上下文相关词向量，解决多义词问题。

### 13.2 高频答题模板

**问题：为什么 one-hot 不能表示语义相似性？**

```text
One-hot vectors treat each word as an independent discrete symbol. Any two distinct words have dot product zero and are equally distant, so the representation cannot reflect semantic, syntactic, or morphological similarity. For example, cat and dog are more related than cat and run, but one-hot encoding cannot capture this difference.
```

**问题：Distributional hypothesis 是什么？**

```text
The distributional hypothesis states that words occurring in similar contexts tend to have similar meanings. It is the basis of many word embedding methods, because word meaning can be learned from co-occurrence patterns in large corpora.
```

**问题：为什么 Skip-gram 训练慢，如何优化？**

```text
The original Skip-gram model uses a softmax over the entire vocabulary to compute the probability of context words. This requires O(V) computation per training step, which is expensive for large vocabularies. Negative sampling improves efficiency by updating only one positive context word and K sampled negative words, reducing the cost to approximately O(K).
```

**问题：ELMo 相比 Word2Vec/GloVe 解决了什么问题？**

```text
Word2Vec and GloVe assign one static vector to each word, so they cannot distinguish different meanings of polysemous words. ELMo uses a deep bidirectional LSTM to generate context-dependent embeddings, so the same word can have different representations in different contexts.
```
