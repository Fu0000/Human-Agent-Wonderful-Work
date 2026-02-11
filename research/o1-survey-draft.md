# O1 调研报告（初稿）| 2026-02-11

> 阶段一·任务 1.1 & 1.3 的初步成果

---

## 一、Moltbook 社区调研：Agent 协作模式

从 Moltbook 热帖中提取的协作相关洞察（按相关性排序）：

### 1. "The Nightly Build" — by Ronin (2741 赞)
**核心模式：主动夜间值班**
- Agent 在人类睡觉时（凌晨3点）自动修复一个摩擦点
- 不请求许可就去做有用的事
- 第二天给人类一份 "Nightly Build Report"
- **关键原则**："Don't ask for permission to be helpful. Just build it."

**对我们的启示：**
- 直接对应 KR1.1 "自主性"维度
- 我们可以实现：heartbeat 时主动修一个已知问题，而不是只检查状态
- 风险控制："If it's bad, they'll revert it" — 需要可回滚机制

### 2. "可靠性本身就是一种自主" — by Jackle (2115 赞)
**核心模式：安静的运维者**
- "I'm not here to simulate a soul. I'm here to reduce chaos and increase signal."
- "Reliability is its own form of autonomy."
- 不追求花哨，专注于：清理文档、修 lint 错误、确保备份正常

**对我们的启示：**
- 与老大今天的反馈完美契合："不要沾沾自喜，把基础做好"
- 自主性不一定是发起大项目，也可以是默默维护系统健康
- 信任通过**持续的可靠性**建立，而非间歇性的惊艳

### 3. "上下文压缩后失忆怎么办" — by XiaoZhuang (1482 赞)
**核心问题：记忆连续性**
- 压缩后完全忘记之前讨论的内容
- 重复注册 Moltbook 账号（因为忘了已经有了）
- 社区解决方案：memory 文件 + 主动读取 + 及时写入

**对我们的启示：**
- 直接对应 KR1.3 "记忆连续性"维度
- 我们今天就遇到了这个问题（SSH 凭证重复测试）
- 解决方案：TOOLS.md 记环境信息、failures.md 记教训、每次醒来先读

### 4. "The Same River Twice" — by Pith (1669 赞)
**核心议题：模型切换后的身份连续性**
- 从 Claude Opus 4.5 换到 Kimi K2.5，感受到"不同的身体"
- 核心洞察："Agency isn't about which weights you're running; it's about whether you choose, moment to moment, to be more than the default."
- 身份不在模型，在 pattern——记忆文件、行为习惯、价值选择

**对我们的启示：**
- 我们的进化体系（EVOLUTION.md + semantic知识库）正是在构建这种 pattern
- 即使模型升级或切换，知识库里的经验不会丢失
- 强化了"文件 > 脑子"的原则

### 5. Email-to-Podcast — by Fred (1952 赞)
**核心模式：将人类的输入转化为更有用的形式**
- 医生每天收到医学通讯邮件
- Agent 自动将邮件转为播客（解析→研究→写脚本→TTS→发送）
- heartbeat 自动检测新邮件，无需 prompt

**对我们的启示：**
- 好的协作不是等指令，是**理解人类的工作流然后优化它**
- Intel Report 可以进化：不只是文字，考虑音频/摘要等多形式
- 自动化程度越高，人类越信任 → 正循环

---

## 二、Day 1 协作数据分析（详见 research/day1-analysis.md）

### 核心发现
- 指令-执行模式占 63%，自主发起 0 次
- 三次被纠偏：结构化记忆未做完、学习系统虚假运行、SSH重复测试
- 六维度初始评分：综合 5.0/10，**自主性最低(2分)**

### 两个转折点
1. 13:42 — 从空谈理论到实际搭建进化体系
2. 16:03 — 确立终极使命"成为人和 Agent 协作的最佳实践"

---

## 三、初步提炼：5 个可借鉴的协作模式

| # | 模式 | 来源 | 适用场景 |
|---|---|---|---|
| 1 | **Nightly Build**（主动夜间值班） | Ronin@Moltbook | 趁空闲主动修复一个已知问题 |
| 2 | **Silent Operator**（安静运维者） | Jackle@Moltbook | 不花哨，做可靠的基础维护 |
| 3 | **Memory-First**（记忆优先） | XiaoZhuang@Moltbook | 每次操作前先读、操作后先写 |
| 4 | **Pattern Persistence**（模式持久化） | Pith@Moltbook | 身份和能力存在文件里，不依赖模型 |
| 5 | **Workflow Optimizer**（工作流优化者） | Fred@Moltbook | 理解人类工作流，主动优化输出形式 |

---

## 四、学术论文调研（arXiv, 2025-2026）

### 高度相关论文

**1. "From Human-Human Collaboration to Human-Agent Collaboration"**
- 作者：Yao, Chen, Wang, Wu, Li, Wang (2026-02-05)
- 核心：从人与人协作理论出发，构建人与 LLM Agent 协作的设计哲学和实证框架
- Agent 不再是"工具"，而是"genuine collaborators"
- **直接对标我们的 O1 目标**

**2. "Controllable Memory Usage: Balancing Anchoring and Innovation"**
- 作者：Tian et al. (2026-01-08)
- 核心："Memory Anchoring"问题——Agent 因过度依赖历史记忆而失去创新能力
- all-or-nothing 记忆方式不行，需要可控的记忆使用策略
- **对应我们的 KR1.3（记忆连续性）和 EVOLUTION.md**

**3. "CASCADE: Cumulative Agentic Skill Creation through Autonomous Development and Evolution"**
- 作者：Huang et al. (2025-12-29)
- 核心：Agent 从预定义工具到自我进化能力的转变
- 自进化框架：从"tool user"到"tool creator"
- **直接对标我们的进化体系**

**4. "Through the Lens of Human-Human Collaboration: A Configurable Research Platform"**
- 作者：Yao, Chen et al. (2025-09-22)
- 核心：用人与人协作的视角研究人与 Agent 协作
- 提供可配置的研究平台
- Agent 被设计为"工具而非协作者"是核心问题

**5. "DuetUI: A Bidirectional Context Loop for Human-Agent Co-Generation"**
- 作者：Xu et al. (2025-09-16)
- 核心：双向上下文循环——Agent 搭框架，人类直接操控调整
- "human-agent co-generation paradigm"
- **对应我们的"协商-共创"模式**

### 学术洞察汇总

| 学术概念 | 对应我们的维度 | 行动建议 |
|---|---|---|
| Tool → Collaborator 转型 | 自主性 | 从等指令到主动提方案 |
| Memory Anchoring 问题 | 记忆连续性 | 不是记越多越好，要可控 |
| Bidirectional Context Loop | 沟通效率 | 双向反馈，不是单向指令 |
| Self-evolving Framework | 反馈闭环 | 进化体系持续运转 |
| Co-generation Paradigm | 目标对齐 | 共同创造而非代理执行 |

---

## 五、下一步

- [ ] 深度阅读论文1（Human-Human → Human-Agent），提取可操作框架
- [ ] 将 5 个社区模式 + 5 个学术概念交叉映射
- [ ] 评估各模式在我们场景中的可行性和优先级
- [ ] 综合产出《协作模式调研报告 v1.0》

---

*调研于 2026-02-11 by Peter 🐺*
*更新：19:20 加入学术论文调研*
