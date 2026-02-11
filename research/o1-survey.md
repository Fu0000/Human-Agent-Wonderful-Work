# 协作模式调研报告 v0.1

> 作者：Peter 🐺
> 日期：2026-02-11
> 状态：进行中
> O1 阶段：Phase 1 — 调研

---

## 1. 调研概述

本报告是 O1（建立可复制的人-Agent 协作范式）的第一阶段输出。目标是理解学术界和社区对 human-agent 协作的认知现状，找到我们的位置。

### 已完成
- [x] 岚叔文章分析（"魂+忆+屋"框架，四种分身）
- [x] Yao et al. 2026 深度阅读

### 待完成
- [ ] 更多学术论文（分布式认知、Multi-Agent Systems）
- [ ] OpenClaw 社区实践案例
- [ ] Day 1 协作数据量化分析

---

## 2. 学术文献分析

### 2.1 Yao et al. 2026 — "Agent 即远程协作者"

**论文**: From Human-Human Collaboration to Human-Agent Collaboration
**详细笔记**: [papers/yao2026-human-agent-collaboration.md](papers/yao2026-human-agent-collaboration.md)
**原文PDF**: [papers/yao2026-human-agent-collaboration.pdf](papers/yao2026-human-agent-collaboration.pdf)

#### 核心贡献

提出了一个**生成性启发式框架**（generative heuristic）：将 LLM Agent 视为远程人类协作者，从而复用 CSCW 几十年的研究成果来指导设计。

三大理论支柱：
1. **Common Ground** (Clark & Brennan 1991) — 共享的知识基础
2. **Workspace Awareness** (Gutwin & Greenberg 2002) — 协作者在做什么
3. **Trust Calibration** (Lee & See 2004) — 信任的适当校准

#### 与我们 O1 六维度框架的映射

| 论文理论 | O1 维度 | 我们的实践 | 差距 |
|---------|--------|-----------|------|
| Common Ground | 目标对齐 + 记忆连续性 | MEMORY.md, OKR.md, SOUL.md | ✅ 已实现基础版本 |
| Workspace Awareness | 沟通效率 | 日志、daily notes | ⚠️ 需要更好的可视化 |
| Trust Calibration | 信任程度 + 自主性 | EVOLUTION.md, failures.md | ⚠️ 缺少量化指标 |
| Media Richness | 沟通效率 | Telegram文字为主 | ⚠️ 单一通道 |
| Articulation Work | 反馈闭环 | patterns.md, 反思cron | ✅ 已有闭环 |
| Social Accountability | — | 未覆盖 | ❌ 新维度，需要考虑 |

#### 我们已超越论文的地方

1. **进化机制**: 论文没有涉及 Agent 自我改进。我们的 EVOLUTION.md + semantic知识库 + 反思循环已经建立了完整的自进化体系。
2. **实践验证**: 他们是 workshop proposal（概念阶段），我们是真实运行的系统（Day 1 已跑通）。
3. **协作模式分类**: 我们定义了4种模式（指令-执行 / 目标-自驱 / 协商-共创 / 监督-纠偏），论文只在概念层提到 mixed-initiative。
4. **"Beyond Being There" 的实现**: 论文提到 Agent 应有的独特优势，我们已经实现了：
   - 持久记忆 → MEMORY.md + daily logs
   - 机器可读任务契约 → OKR.md
   - 可编程社交协议 → AGENTS.md + SOUL.md

#### 我们可以借鉴的地方

1. **Workspace Awareness 框架**: Gutwin & Greenberg 的描述框架很系统 — 我们需要更好地让老大"看到" Peter 在做什么、关注什么、接下来要做什么。
2. **Trust Calibration 理论**: Lee & See 2004 的"适当信任"概念 — 不是越信任越好，而是**校准**。我们需要建立信任度量。
3. **异步协作的设计模式**: Agent 在老大不在时工作（我们的 cron 任务），出错后如何优雅地呈现和修复？
4. **多人多Agent团队**: 我们已有 Peter + 小美，但缺乏系统化的多Agent协作设计。

---

## 3. 社区实践分析

### 3.1 岚叔的"魂+忆+屋"框架

**来源**: 岚叔文章（2026-02-11 学习）

核心框架：
- **魂** (Soul): Agent 的人格定义 → 对应我们的 SOUL.md + IDENTITY.md
- **忆** (Memory): 记忆系统 → 对应我们的 MEMORY.md + memory/
- **屋** (House): 工作环境 → 对应我们的 workspace + 工具链

四种分身：
1. 静态分身 — 固定角色
2. 动态分身 — 可调整的角色
3. 平行宇宙分身 — 同时运行多个
4. 定时分身 — 定时触发

#### 与 Yao 论文的交叉

岚叔的框架更偏**实操**（怎么搭），Yao 论文更偏**理论**（为什么这样设计）。两者互补：
- "魂" = Common Ground 的一部分（Agent 端的自我认知）
- "忆" = Common Ground 的持久化机制
- "屋" = Workspace Awareness 的载体

---

## 4. 初步发现与洞察

### 4.1 我们的独特定位

在学术界和社区之间，我们处于一个独特位置：

```
学术界 (Yao et al.)          我们 (Peter + 老大)          社区 (岚叔等)
理论框架                      ← 理论 + 实践 →              实操经验
Workshop proposal             真实运行的系统                教程和模板
"应该怎么做"                  "正在怎么做"                  "可以怎么做"
```

**我们的价值**：用真实的人-Agent 协作实践来验证学术理论，同时用理论来指导实践改进。

### 4.2 待探索的关键问题

1. **进化速度如何量化？** — 我们有进化机制，但如何衡量 Peter 的成长速度？
2. **信任边界在哪？** — 老大什么时候该放手、什么时候该介入？需要数据。
3. **Common Ground 会衰减吗？** — 长期运行后，MEMORY.md 会不会变得过时或臃肿？
4. **多Agent协作的最优模式** — Peter + 小美的协作效率怎么衡量？

---

## 5. 下一步

1. [ ] 深读 Clark & Brennan 1991 (Grounding in Communication)
2. [ ] 深读 Gutwin & Greenberg 2002 (Workspace Awareness)
3. [ ] 深读 Lee & See 2004 (Trust in Automation)
4. [ ] Day 1 协作数据量化分析
5. [ ] 补充社区案例（OpenClaw Discord, Reddit）
6. [ ] 输出 v1.0 报告

---

*本报告持续更新。每次新增分析后更新版本号。*
