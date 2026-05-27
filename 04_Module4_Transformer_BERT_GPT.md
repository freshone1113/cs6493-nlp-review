# Module 4：Attention、Transformer、BERT、GPT

## 1. 为什么需要 Attention 和 Transformer

RNN/LSTM 的问题：

1. **顺序计算**：必须一个 token 一个 token 处理，难以并行。
2. **长距离依赖弱**：早期信息经过很多步传递，容易丢失。
3. **表示融合能力有限**：双向 RNN 虽然能看左右上下文，但相比 Transformer 表达能力弱。

Transformer 的核心思想：

> 不再依赖递归结构，而是用 self-attention 让序列中任意两个位置直接建立联系。

## 2. Attention 的直觉

Attention 就是：在处理当前信息时，模型决定应该重点看哪些其他信息。

机器翻译例子：

```text
source: he hit me with a pie
target: il m'a entarté
```

生成目标语言某个词时，模型应该关注源句中最相关的词，而不是把整句压缩成一个固定向量。

## 3. Q、K、V 是什么

Attention 输入包括：

| 符号 | 名称 | 作用 |
|---|---|---|
| Q | Query | 当前要查询什么信息 |
| K | Key | 每个位置提供的“索引/匹配特征” |
| V | Value | 每个位置真正要被取出的内容 |

类比搜索系统：

```text
Query：你输入的搜索词
Key：文档的索引特征
Value：文档内容
```

模型先用 Q 和 K 计算相关性，再根据相关性对 V 加权求和。

## 4. Attention 计算步骤

给定 query `q`，以及一组 key-value pairs：

```text
(k1, v1), (k2, v2), ..., (kL, vL)
```

### Step 1：计算相似度

```text
s_i = similarity(q, k_i)
```

常见相似度：

- additive attention
- multiplicative attention
- dot-product attention
- scaled dot-product attention

### Step 2：softmax 归一化

```text
a_i = softmax(s_i)
```

得到 attention distribution，满足：

```text
Σ a_i = 1
```

### Step 3：对 value 加权求和

```text
z = Σ a_i v_i
```

`z` 就是 attention output/context vector。

## 5. Scaled Dot-Product Attention

Transformer 使用 scaled dot-product attention：

```text
Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V
```

为什么除以 `sqrt(d_k)`？

当维度较大时，dot product 的数值可能很大，softmax 会变得过于尖锐，梯度不稳定。除以 `sqrt(d_k)` 可以缓解这个问题。

## 6. Self-Attention

Self-attention 指 Q、K、V 都来自同一个输入序列。

输入：

```text
X = [x1, x2, ..., xn]
```

通过不同参数矩阵得到：

```text
Q = XW_Q
K = XW_K
V = XW_V
```

每个 token 都可以关注其他 token。

例如句子：

```text
The animal didn't cross the street because it was too tired.
```

处理 `it` 时，self-attention 可以直接关注 `animal`。

## 7. 为什么 Q、K、V 不应强行相同

如果设定：

```text
W_Q = W_K
```

则：

```text
Q = XW
K = XW
S = QK^T = (XW)(XW)^T
```

这个 score matrix 会是对称的：

```text
S_ij = S_ji
```

这会限制模型表达方向性关系。语言中很多关系是非对称的，例如：

```text
subject → verb
modifier → head
previous token → next token
```

如果进一步强行 `V = K`，模型就无法区分：

- 用什么特征来匹配位置（key）
- 从该位置取出什么信息（value）

这会降低表达能力。

## 8. Masking

### 8.1 Padding Mask

padding token 不是真实内容，不能让模型关注它。

### 8.2 Causal Mask

在生成任务中，模型预测当前位置时不能看未来 token。

长度为 4 的 causal mask 可以写成：

```text
[ 0, -∞, -∞, -∞ ]
[ 0,  0, -∞, -∞ ]
[ 0,  0,  0, -∞ ]
[ 0,  0,  0,  0 ]
```

mask 要在 softmax 前加到 logits 上，使被禁止位置的概率变成 0。

如果 softmax 后再 mask，需要重新归一化，否则概率和不为 1。

## 9. Multi-Head Attention

Multi-head attention 是并行做多组 attention。

直觉：不同 head 可以关注不同关系。

例如：

- head 1 关注主谓关系。
- head 2 关注代词指代。
- head 3 关注局部短语。
- head 4 关注长距离依赖。

最后把多个 head 的输出拼接起来，再线性变换。

## 10. Transformer 架构

Transformer 是 encoder-decoder 架构。

### 10.1 Encoder

Encoder 把输入序列变成 contextual representations。

每层通常包括：

```text
self-attention
→ add & norm
→ feed-forward network
→ add & norm
```

### 10.2 Decoder

Decoder 生成输出序列，每次生成一个 token。

每层通常包括：

```text
masked self-attention
→ encoder-decoder attention
→ feed-forward network
```

Decoder 是 autoregressive 的：生成当前 token 时依赖前面已经生成的 token。

## 11. Positional Encoding

Transformer 没有 RNN 的顺序结构，所以需要显式加入位置信息。

Positional encoding 告诉模型：

```text
这个 token 是第几个位置
```

否则 self-attention 本身不天然知道词序。

## 12. BERT

BERT：Bidirectional Encoder Representations from Transformers。

特点：

- 使用 Transformer encoder。
- 双向上下文理解。
- 适合 NLU 任务。

### 12.1 BERT 的预训练任务

常见包括：

1. Masked Language Modeling：随机 mask 一些 token，让模型预测被 mask 的词。
2. Next Sentence Prediction：判断两个句子是否相邻。

### 12.2 BERT 适合的任务

- 文本分类
- NER
- QA
- NLI
- 句子匹配

## 13. GPT

GPT：Generative Pre-trained Transformer。

特点：

- 使用 Transformer decoder。
- 自回归生成。
- 适合文本生成。

训练目标：

```text
predict next token
```

即：

```text
P(w_t | w_1, ..., w_{t-1})
```

### 13.1 GPT 适合的任务

- 续写
- 对话
- 代码生成
- 摘要
- 翻译
- reasoning with prompting

## 14. BERT vs GPT

| 维度 | BERT | GPT |
|---|---|---|
| 架构 | Transformer encoder | Transformer decoder |
| 上下文 | 双向 | 单向/因果 |
| 训练目标 | masked token prediction | next token prediction |
| 强项 | 理解、分类、抽取 | 生成、对话、续写 |
| 典型任务 | NLU | NLG / LLM interaction |

## 15. 本模块考试重点

### 15.1 必背概念

- Attention = query 与 key 匹配，对 value 加权求和。
- Self-attention 中 Q/K/V 来自同一序列。
- Scaled dot-product attention 公式必须会写。
- Mask 要在 softmax 前做。
- Transformer 用 self-attention 替代 RNN，实现并行和长距离依赖建模。
- BERT 是 encoder-based，适合理解。
- GPT 是 decoder-based，适合生成。

### 15.2 高频答题模板

**问题：Attention 的 Q/K/V 分别是什么？**

```text
In attention, the query represents what information the current position is looking for, the keys represent features used to match each candidate position, and the values contain the information to be aggregated. The model computes similarity between queries and keys, normalizes the scores into attention weights, and then returns a weighted sum of values.
```

**问题：为什么 Transformer 比 RNN 更适合并行和长距离依赖？**

```text
RNNs process tokens sequentially, so computation at time t depends on previous hidden states. This limits parallelism and makes long-range dependencies hard to preserve. Transformer uses self-attention, where each token can directly attend to every other token in a constant number of layers, enabling parallel computation and better modeling of long-distance relations.
```

**问题：BERT 和 GPT 的区别？**

```text
BERT is based on the Transformer encoder and learns bidirectional contextual representations, usually through masked language modeling, so it is well-suited for NLU tasks. GPT is based on the Transformer decoder and is trained autoregressively to predict the next token, making it more suitable for text generation and dialogue.
```
