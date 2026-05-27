# Module 6：LLM、Prompting、Alignment、Agent、RAG、Efficient Training、PEFT/LoRA

## 1. Large Language Models 是什么

Large Language Models，简称 LLM，是在大规模语料上训练的大型语言模型，通常基于 Transformer 架构，参数量可达数十亿到数千亿。

LLM 的能力包括：

- 文本生成
- 问答
- 翻译
- 摘要
- 代码生成
- 数学推理
- 对话
- 工具调用

## 2. SLM vs LLM

| 维度 | Small Language Models | Large Language Models |
|---|---|---|
| 参数规模 | 较小，可能百万到千万级 | 可达数十亿/数千亿 |
| 计算需求 | 较低 | 很高，需要 GPU 集群 |
| 能力 | 适合简单任务 | 可处理复杂、多样任务 |
| 部署 | 更容易本地部署 | 部署成本高 |
| 训练 | 较快 | 可能需要数周或数月 |

## 3. Pretraining-Finetuning Paradigm

传统大模型使用流程：

```text
Pretraining → Fine-tuning → Downstream task
```

### 3.1 Pretraining

在大规模语料上学习通用语言能力。

例如：

- BERT：masked language modeling。
- GPT：next token prediction。

### 3.2 Fine-tuning

在特定任务数据上继续训练，让模型适配任务。

例如：

```text
BERT + sentiment dataset → sentiment classifier
```

问题：大模型参数太多，fine-tuning 成本高。

## 4. Prompt Learning

Prompting 的核心思想：

> 不改模型参数，而是通过设计输入，让预训练模型完成任务。

例如情感分类：

```text
Review: No reason to watch.
Prompt: It was ____.
```

模型如果更可能填 `terrible`，说明负面；如果更可能填 `great`，说明正面。

### 4.1 Prompt 组成

一个 prompt 可以包括：

- instruction
- context
- examples/demonstrations
- question
- output format
- constraints

### 4.2 Prompt shape

| 类型 | 解释 | 例子 |
|---|---|---|
| Cloze prompt | 填空 | It was [MASK]. |
| Prefix prompt | 续写 | Translate English to French: ... |

### 4.3 Manual prompt engineering

人工设计模板，简单但依赖经验。

问题：

- 很耗时。
- 很难找到最优 prompt。
- 模型对 prompt wording 很敏感。

### 4.4 Automated prompt search

自动寻找 prompt，包括：

- discrete prompt：自然语言 token 组成的 prompt。
- continuous/soft prompt：在 embedding 空间学习 prompt，不一定可读。

## 5. Chain-of-Thought Prompting

CoT prompting 让模型先生成中间推理步骤，再给答案。

适合：

- 数学题
- 多步推理
- 常识推理
- 复杂问答

常见形式：

```text
Let's think step by step.
```

优势：

- 把复杂问题拆成多个步骤。
- 提升多步推理表现。

注意：考试答题中可以解释 CoT 的作用，但不要把 CoT 神化。它是 prompting strategy，不保证总是正确。

## 6. Alignment

Alignment 的目标是让 LLM 输出更符合人类偏好、安全要求和任务目标。

常见流程：

```text
Pretraining → Supervised Fine-tuning → Preference Learning / RLHF
```

### 6.1 为什么需要 Alignment

未对齐模型可能：

- 胡编事实。
- 输出有害内容。
- 不遵循指令。
- 回复不符合用户偏好。

### 6.2 RLHF 直觉

RLHF：Reinforcement Learning from Human Feedback。

基本流程：

1. 收集人类偏好数据。
2. 训练 reward model。
3. 用强化学习优化模型，使输出更符合 reward。

## 7. Efficient Training of LLMs

大模型训练难点是内存和计算成本。

### 7.1 训练内存花在哪里

对于参数量为 Ψ 的模型，fp16 训练中可能包括：

| 项 | 内存 |
|---|---|
| fp16 model weights | 2Ψ |
| fp16 gradients | 2Ψ |
| fp32 master weights | 4Ψ |
| Adam momentum | 4Ψ |
| Adam variance | 4Ψ |
| 合计 | 16Ψ |

此外还有 activation memory。

Activation memory 与以下因素有关：

```text
layers × hidden dimension × sequence length × batch size
```

所以即使模型权重看起来能放进 GPU，训练时仍可能 OOM。

### 7.2 Model Parallelism

把模型切到多个 GPU 上。

方式：

- Naive model parallelism：按层切分。
- Pipeline parallelism / GPipe：把 batch 切成 micro-batches，减少 GPU 空闲。
- Tensor parallelism：把矩阵/tensor 切分到多个 GPU。

### 7.3 Data Parallelism

每个 GPU 存一份模型副本，处理不同 batch 数据，然后同步梯度。

优点：简单常用。

问题：模型本身太大时，每张 GPU 都放不下一整份模型。

## 8. Parameter-Efficient Fine-Tuning

PEFT 的目标：

> 不更新全部模型参数，只训练少量新增或选择性参数，以低成本适配下游任务。

常见方法：

- Adapter tuning
- Prefix tuning
- Prompt tuning
- LoRA

## 9. LoRA

LoRA：Low-Rank Adaptation。

核心思想：冻结原模型权重，只训练一个低秩增量矩阵。

原本要学习权重更新：

```text
W' = W + ΔW
```

LoRA 把 `ΔW` 分解为两个小矩阵：

```text
ΔW = BA
```

其中 rank r 很小。

优点：

- 训练参数少。
- 显存占用低。
- 可以为不同任务保存不同 LoRA adapter。
- 推理时可以合并回原权重。

## 10. LLM Agents

Agent 是能与环境交互、做决策并采取行动的系统。

LLM agent 是以 LLM 为核心智能的 agent。

### 10.1 Agent 的核心能力

| 能力 | 解释 |
|---|---|
| Planning | 把用户目标拆成步骤 |
| Tool use | 选择并调用外部工具 |
| Memory | 存储、检索、更新过去信息 |
| Workflow | 用预设流程组织模型和工具 |
| Reflection/Evaluation | 检查结果并改进 |

### 10.2 Agent 为什么有用

普通 LLM 的限制：

- hallucination
- 知识不准确或过时
- 不会真正执行外部动作
- 可解释性不足
- 能力受限于输入输出文本

Agent 通过规划、工具、外部环境反馈扩展能力。

### 10.3 ReAct

ReAct 结合 reasoning 和 acting。

典型循环：

```text
Thought → Action → Observation → Thought → Action → Observation → Final Answer
```

它让模型边思考边调用工具，并根据工具返回结果调整下一步。

## 11. RAG

RAG：Retrieval-Augmented Generation。

核心思想：

> 生成答案前，先从外部知识库检索相关信息，再把检索结果提供给 LLM 生成回答。

基本流程：

```text
User query
→ Retriever
→ Relevant documents
→ Prompt with context
→ LLM generator
→ Answer
```

## 12. 为什么需要 RAG

LLM 的问题：

- 训练知识可能过时。
- 对长尾知识掌握不准。
- 可能 hallucinate。
- 针对私有知识重新训练成本高。

RAG 的优势：

| 问题 | RAG 如何解决 |
|---|---|
| 知识过时 | 检索最新外部文档 |
| 长尾知识 | 接入领域知识库 |
| 幻觉 | 用检索内容 grounding |
| 成本高 | 不必重新训练模型 |
| 可追溯 | 可返回 source/chunk |

## 13. RAG Architecture

RAG 通常包括：

```text
Documents
→ Loader
→ Splitter
→ Embedding model
→ Vector database / index
→ Retriever
→ Post-processing / reranking
→ LLM generator
```

### 13.1 Document loading

加载文档：PDF、网页、数据库、文本文件等。

### 13.2 Chunking

把文档切成小块。

原因：

- LLM context window 有限制。
- 小 chunk 更容易精准匹配。

### 13.3 Embedding

把 query 和 document chunks 转成向量。

可用方法：

- TF-IDF
- BM25
- BERT embedding
- GPT embedding

### 13.4 Vector Database

向量数据库存储 embedding，并支持相似度检索。

常见索引方法：

- LSH
- Product Quantization
- HNSW graph

### 13.5 Retrieval

给定 query embedding，找最相似的 chunks。

### 13.6 Generation

把检索到的上下文和问题一起放进 prompt，让 LLM 回答。

## 14. RAG vs Prompt Engineering vs Fine-tuning

| 方法 | 是否改模型参数 | 是否需要外部知识 | 适合场景 |
|---|---|---|---|
| Prompt engineering | 否 | 低 | 调整输出格式、简单任务引导 |
| Fine-tuning | 是 | 不一定 | 学任务风格或行为模式 |
| RAG | 否或少量 | 高 | 需要最新、私有、可追溯知识 |

## 15. 本模块考试重点

### 15.1 必背概念

- Prompting 用输入引导模型，不更新参数。
- CoT 让模型显式生成中间推理步骤。
- Alignment 让模型更符合人类偏好与安全要求。
- LLM 训练内存包括 weights、gradients、optimizer states、activations。
- PEFT/LoRA 用少量参数适配大模型。
- Agent = LLM + planning + tools + memory + feedback。
- RAG = retrieval + generation，用外部知识增强 LLM。

### 15.2 高频答题模板

**问题：为什么 prompting 可以降低使用成本？**

```text
Prompting reformulates downstream tasks into the same format as language modeling. The pretrained model can often be kept frozen, and task information is provided through natural language instructions, templates, or demonstrations. Therefore, prompting avoids training task-specific parameters and is especially useful in few-shot settings.
```

**问题：RAG 为什么能减少 hallucination？**

```text
RAG reduces hallucination by grounding the model's generation in retrieved external documents. Instead of relying only on the model's parametric memory, it first retrieves relevant and up-to-date evidence from a knowledge base, then conditions the generation on that evidence. This improves factuality, traceability, and domain adaptability without full retraining.
```

**问题：LoRA 为什么参数高效？**

```text
LoRA freezes the original pretrained weights and learns only a low-rank update to selected weight matrices. Instead of training the full weight matrix, it decomposes the update into two much smaller matrices, which greatly reduces trainable parameters, memory usage, and storage cost while still allowing task adaptation.
```

**问题：LLM agent 包含哪些模块？**

```text
An LLM agent typically includes planning, tool use, memory, and workflow control. Planning decomposes a user goal into steps, tool use allows the agent to interact with external systems, memory stores and retrieves past information, and workflow defines how LLM calls and tools are orchestrated. These components allow LLMs to go beyond text generation and perform real-world tasks.
```
