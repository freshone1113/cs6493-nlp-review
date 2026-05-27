# CS6493 NLP Review Design System

## 1. Product Frame

这个网站不是课程营销页，而是考试复习工具。第一屏必须直接提供：

- 课程身份：`CS6493 NLP Final Review`
- 复习目标：从基础 NLP 到 LLM/RAG/PEFT
- 快速入口：开始复习、打开学习地图、搜索模块
- 考试指标：6 个核心模块、40% final exam、12 类必会题

## 2. Information Architecture

```text
Home
├── Hero: NLP 复习地图
├── Sidebar: collapsible chapter navigation
├── Search: keyword + category filters
├── Routes: Representation / Language Modeling / Tasks / LLM Applications
├── Modules: M1-M6 + Exam template
├── Chapter Practice: Tutorial / HW / Final questions + answer templates
├── Exam Toolkit: concept / compare / calculate / system
└── Design System preview
```

后续扩展建议：

- `site/content/`：把课程笔记继续拆成可维护的结构化数据。
- `site/components/`：当引入构建工具时拆出 Button、ModuleCard、RoutePanel。

## 3. Visual Direction

参考站点采用深色考试导航风格。本项目保留它的模块卡片、搜索入口和复习路线结构，但配色更偏“命令中心”：

| Token | Value | Usage |
|---|---:|---|
| `--bg` | `#101112` | 全站背景 |
| `--surface` | `#181a1d` | 大面板 |
| `--surface-2` | `#202328` | 卡片和 token blocks |
| `--text` | `#f6f2ea` | 主文字 |
| `--muted` | `#b9b2a8` | 次级说明 |
| `--cyan` | `#54d5d0` | 主行动与搜索焦点 |
| `--coral` | `#ff7d67` | 重点路线 |
| `--amber` | `#f1b84b` | 考试优先级 |
| `--green` | `#7ccf82` | LLM application 路线 |

颜色不能只靠一种蓝紫渐变；每个路线类别都要有独立识别色。

## 4. Typography

- Base font: system UI stack.
- Mono font: code-like labels, module numbers, compact metadata.
- Hero H1: large, direct, brand/product-first.
- Card headings: compact, avoid hero-scale typography inside cards.
- Letter spacing: `0`; 不使用负字距。

## 5. Component Rules

### Buttons

- Primary action: cyan fill, dark text.
- Secondary action: transparent surface, subtle border.
- Minimum height: `44px`.
- Border radius: `8px`.

### Module Card

每张卡片必须包含：

1. Module number and category
2. Title
3. One-sentence exam-oriented summary
4. Topic chips
5. Link to the module subpage
6. Priority label

Hover 状态必须有明确反馈：

- card lift
- accent line expand
- pointer-following glow
- topic chips become brighter

### Sidebar Navigation

左侧导航用于快速跳转到每个章节训练区：

- 默认展开，显示章节编号和中文标题。
- 收起后只保留编号，主内容区变宽。
- 移动端固定在底部，收起时只显示 toggle。

### Chapter Practice Panel

每个章节训练面板必须包含：

1. 原笔记入口
2. Tutorial 题目
3. 作业题目
4. 期末题目
5. `Answer Template`

题目归档原则：

- Module 1：L1/L12/Tutorial 1，重点是 preprocessing 与输入表示。
- Module 2：Tutorial 2/HW1，重点是 n-gram、LM 与 neural LM。
- Module 3：HW1/Final reference，重点是 one-hot、word2vec、ELMo。
- Module 4：HW2，重点是 attention、Q/K/V、mask、BERT/GPT。
- Module 5：Tutorial 4/5/6/HW2/Final reference，重点是 QA、MT、BLEU、dialogue system。
- Module 6：Tutorial 8/9/10，重点是 prompting、RAG、Agent、PEFT/LoRA。

### Search Panel

搜索应该覆盖：

- module number
- title
- summary
- topics
- priority
- category

Category filters: `All / Basics / Tasks / LLM / Exam`。

## 6. Content Pattern

答题内容统一采用：

```text
Definition -> Why -> How -> Pros/Cons -> Example
```

系统设计题统一采用：

```text
Input -> NLU -> State -> Policy -> NLG -> Backend/API -> Evaluation
```

## 7. Responsive Behavior

- Desktop: hero uses two columns; modules use 3 columns.
- Tablet: modules and routes use 2 columns.
- Mobile: single-column layout; top navigation wraps; decorative attention lines are hidden.

所有固定格式组件都使用稳定尺寸或 grid tracks，避免搜索结果、按钮文字和卡片 hover 导致布局跳动。
