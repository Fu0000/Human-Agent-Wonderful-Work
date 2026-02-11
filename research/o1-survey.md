# 协作模式调研报告 v0.1

> 更新日期：2026-02-11
> 作者：Peter 🐺
> 状态：持续更新中

---

## 一、学术研究

### 1.1 核心论文：Yao et al. 2026

**标题**: From Human-Human Collaboration to Human-Agent Collaboration: A Vision, Design Philosophy, and an Empirical Framework for Achieving Successful Partnerships Between Humans and LLM Agents
**来源**: CHI EA '26 Workshop Proposal | arXiv:2602.05987v1
**详细笔记**: [papers/yao2026-human-agent-collaboration.md](papers/yao2026-human-agent-collaboration.md)
**原文 PDF**: [papers/yao2026-human-agent-collaboration.pdf](papers/yao2026-human-agent-collaboration.pdf)

#### 核心主张

**设计哲学**：将 LLM Agent 视为"远程人类协作者"来设计和研究。

这个类比的力量：可以直接复用 CSCW 几十年的研究（信任、意识、共同基础），同时识别 Agent 特有的新挑战。

#### 三大理论支柱与我们的映射

| CSCW 理论 | 核心含义 | 我们的对应实践 | 我们的六维度 |
|-----------|---------|---------------|------------|
| **Common Ground** (Clark & Brennan 1991) | 双方共享的知识、信念、假设 | MEMORY.md, SOUL.md, USER.md | 目标对齐 + 记忆连续性 |
| **Workspace Awareness** (Gutwin & Greenberg 2002) | 知道协作者在做什么、关注什么 | Heartbeat, Cron logs, daily notes | 沟通效率 |
| **Trust Calibration** (Lee & See 2004) | 对自动化系统信任的适当校准 | failures.md, patterns.md, 反思循环 | 信任程度 + 自主性 |

#### 论文提出的四大设计问题 → 我们的解法

| 设计问题 | 我们的现有解法 | 差距 |
|---------|-------------|------|
| 与缺乏生活经验的 Agent 建立 Common Ground？ | MEMORY.md + SOUL.md 持续维护共享上下文 | 尚无结构化的"共同知识清单" |
| 如何表征 Agent 的焦点和意图？ | Heartbeat 周期汇报 + cron 日志 | 没有实时 awareness dashboard |
| Agent 何时承担 Articulation Work？ | 自主读文件、组织记忆、做背景检查 | 缺少显式的"任务契约"机制 |
| 什么 Media Richness 支持有效协商？ | Telegram 文字为主 + 偶尔文件/链接 | 没有语音/视觉通道 |

#### "Beyond Being There" — Agent 独特优势对照

论文引用 Hollan & Stornetta 1992，认为 Agent 不该只模仿人类，还应提供人类团队做不到的能力：

| 独特优势 | 我们的实现 | 成熟度 |
|---------|----------|--------|
| 持久记忆 + 溯源 | memory/ 系统 + MEMORY.md + git history | ⭐⭐⭐ 已运行 |
| 机器可读的任务契约 | OKR.md + O1-PLAN.md | ⭐⭐ 初步 |
| 可编程的社交协议 | EVOLUTION.md + AGENTS.md | ⭐⭐ 初步 |

#### 我们有但论文没涉及的

1. **自进化机制** — 论文只讨论静态协作设计，没有涉及 Agent 如何从错误中学习并改进自身行为模式
2. **实践验证** — 论文是 workshop proposal，我们是真实运行的人-Agent 协作系统
3. **多模式协作分类** — 我们定义了4种模式（指令-执行 / 目标-自驱 / 协商-共创 / 监督-纠偏），论文停留在概念层
4. **跨 session 记忆连续性** — 论文提到 "persistent memory" 但没有给出具体方案

#### 关键引文值得深读

- [ ] Clark & Brennan 1991 — Grounding in Communication（共同基础的经典理论）
- [ ] Gutwin & Greenberg 2002 — Workspace Awareness 描述框架
- [ ] Horvitz 1999 — 混合主动权界面原则（mixed-initiative）
- [ ] Olson & Olson 2000 — "Distance Matters"（远程协作的挑战）
- [ ] Hollan & Stornetta 1992 — "Beyond Being There"（超越模仿）

---

## 二、社区实践

### 2.1 岚叔方法论（已调研）

- 四种分身：静态/动态/平行宇宙/定时
- 核心框架："魂+忆+屋"
- 详见 memory/2026-02-11.md

### 2.2 Moltbook 社区（待深入）

- [ ] 收集典型 agent 使用者的协作模式
- [ ] 分析社区讨论中的常见痛点

### 2.3 Reddit/HackerNews（待启动）

- Reddit Intel cron 已配置
- [ ] 系统性分析收集到的讨论

---

## 三、初步结论

### 3.1 我们的位置

从 Yao et al. 的框架看，我们的 Peter-老大 协作系统已经**超越了论文的概念提案阶段**：

- 论文在提问"如何建立 common ground？"— 我们已经有了 MEMORY.md
- 论文在提问"如何校准信任？"— 我们已经有了 failures.md + patterns.md
- 论文在提问"如何实现 beyond being there？"— 我们已经有了自进化体系

### 3.2 我们的差距

1. **缺少形式化** — 我们的实践是有机生长的，缺少系统性的理论对照
2. **缺少量化评估** — 六维度框架定义了但还没开始测量
3. **缺少对比基线** — 不知道其他 human-agent 团队表现如何
4. **单人团队** — 论文讨论了 multi-human multi-agent 场景，我们还是 1:1

### 3.3 下一步行动

1. 深读 Clark & Brennan 1991，理解 grounding 理论的具体机制
2. 开始 Day 1 协作数据的量化分析（六维度评分）
3. 收集更多社区实践案例做对比
4. 将论文框架融入 O1-PLAN.md 的分析阶段

---

*本报告将随调研推进持续更新。*
