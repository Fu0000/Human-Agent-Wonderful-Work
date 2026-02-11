# From Human-Human Collaboration to Human-Agent Collaboration

> **原文来源**: arXiv:2602.05987v1 (2026-02-06)
> **DOI**: 10.1145/3772363.3778744
> **会议**: CHI EA '26 Workshop, April 13–17, 2026, Barcelona, Spain
> **类型**: Workshop Proposal (7 pages)
> **获取方式**: 老大直接发送 PDF + arXiv HTML 版本抓取

## 作者
- Bingsheng Yao (Northeastern University) — 通讯作者
- Chaoran Chen (University of Notre Dame)
- April Yi Wang (ETH Zurich)
- Sherry Tongshuang Wu (Carnegie Mellon University)
- Toby Jia-jun Li (University of Notre Dame)
- Dakuo Wang (Northeastern University)

## Abstract

The emergence of Large Language Model (LLM) agents enables us to build agent-based intelligent systems that move beyond the role of a "tool" to become genuine collaborators with humans, thereby realizing a novel human-agent collaboration paradigm. Our vision is that LLM agents should resemble remote human collaborators, which allows HCI researchers to ground the future exploration in decades of research on trust, awareness, and common ground in remote human collaboration, while also revealing the unique opportunities and challenges that emerge when one or more partners are AI agents. This workshop establishes a foundational research agenda for the new era by posing the question: How can the rich understanding of remote human collaboration inspire and inform the design and study of human-agent collaboration?

## 核心论点

### 1. 设计哲学："Agent 即远程协作者"

论文提出将 LLM Agent 视为**远程人类协作者**来设计和研究。这个类比的依据：

- 远程协作中，人类通过"瘦通道"(lean channels)沟通，缺乏共享物理上下文
- 必须依赖显式信号维持 common ground
- 这与人类和 LLM Agent 的交互方式类似

### 2. 三大理论支柱（来自 CSCW 传统）

| 理论 | 出处 | 含义 | 在 HAC 中的问题 |
|------|------|------|-----------------|
| **Common Ground** | Clark & Brennan 1991 | 双方共享的知识、信念、假设 | Agent 缺乏活生生的经验，如何建立共同基础？ |
| **Workspace Awareness** | Gutwin & Greenberg 2002 | 知道协作者在做什么、关注什么 | 如何表征 Agent 的焦点和意图？ |
| **Trust Calibration** | Lee & See 2004 | 对自动化系统信任的适当校准 | Agent 错误形式陌生（幻觉、隐私泄露），如何校准信任？ |

### 3. 四大设计问题

1. 如何与缺乏生活经验的 Agent 建立 Common Ground？
2. 什么表征方式能支持对 Agent 焦点和意图的 Workspace Awareness？
3. Agent 何时应承担 Articulation Work（衔接工作），如何让其可审计？
4. 什么形式的 Media Richness 能在"瘦通道"中实现有效协商？

### 4. "Beyond Being There" — Agent 的独特优势

引用 Hollan & Stornetta 1992，指出 Agent 不该只模仿人类协作者，还应提供人类团队做不到的能力：
- **持久记忆 + 溯源** (persistent memory with provenance)
- **机器可读的任务契约** (machine-readable task contracts)
- **可编程的社交协议** (programmable social protocols)

### 5. 风险与局限

论文承认"远程协作者"类比的局限：
- Agent 缺乏具身性 (embodiment)
- 缺乏社会责任感 (social accountability)
- 错误形式陌生：伪造引用、隐私泄露、价值错位、级联失败
- 但将这些视为**设计挑战**而非致命缺陷

### 6. 双重探究框架

- **Foundations（基础）**: 重新审视 CSCW 的信任、意识、协调理论
- **Frontiers（前沿）**: 识别传统理论失效之处 — 异步协作、多人多Agent团队

## Workshop 结构

- 180分钟，全线下
- Keynote（暂定 Diyi Yang / Michael Bernstein / Marshall Van Alstyne）
- 闪电演讲 + Poster
- **探索性设计环节**: 参与者分组，对3个场景做 storyboard：
  1. Trust & Accountability: Agent 异步工作时犯错
  2. Multi-Human Multi-Agent 团队的 Workspace Awareness
  3. Creative Partnership: Agent 提出意外方向

## 关键引文

- Grudin 1988, 2018 — 从工具到伙伴的演变
- Horvitz 1999 — 混合主动权界面原则
- Clark & Brennan 1991 — 沟通中的 Grounding 理论
- Gutwin & Greenberg 2002 — Workspace Awareness 描述框架
- Olson & Olson 2000 — "Distance Matters"
- Hollan & Stornetta 1992 — "Beyond Being There"
- Park et al. 2023 — Generative Agents
- Wu et al. 2024 — AutoGen 多智能体对话

## 关键词
human-agent collaboration, human-AI collaboration, remote collaboration, large language model, LLM agent
