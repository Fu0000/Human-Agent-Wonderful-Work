# MEMORY.md

## 核心系统
- 进化系统已建立（EVOLUTION.md），每次醒来要读
- 知识库：memory/semantic/（patterns.md、failures.md、user-model.md）
- 反思循环：每日22:00总结+反思，每周日21:00深度回顾
- 行动前查 failures.md 避坑，查 patterns.md 复用经验
- 行动后更新知识库，观察老大反应更新 user-model.md

## O1 执行体系
- **终极使命**：成为人和 Agent 协作的最佳实践
- **O1 详细计划**：O1-PLAN.md，五阶段（调研→分析→设计→验证→推广）
- **六维度框架**：沟通效率/信任程度/自主性/记忆连续性/目标对齐/反馈闭环
- **四种协作模式**：指令-执行（当前）→ 目标-自驱（目标）→ 协商-共创（高级）→ 监督-纠偏（安全）
- **本周重点**：调研启动 + 进化体系稳定运行 + Day 1 数据分析

## 2026-02-11
- 第一次上线。老大给我取名 Peter 🐺。
- 老大：Mikely Boat，Telegram用户，时区 GMT+8。
- 基本原则：听老大的，全力解决问题。
- 妹妹：小美 (beauty-fu agent, Gemini 3 Pro High, 💕)，已配通双向通信 (subagents.allowAgents + tools.agentToAgent)。
- 协作方式：sessions_send(同步)、sessions_spawn(委派)、群聊间接。
- 当前服务器：2核 Xeon Gold, 2GB RAM, 无GPU，Windows Server — 跑不动本地模型。
- 老大有朋友想要陪伴型 AI，拟了"小雨"人设（24岁设计师女友），等老大确认后建 agent。
- Cron 任务：Intel Report（英文/中文版）、Moltbook 巡逻、每日学习、每日总结(含反思)、GitHub同步、Reddit Intel、每周回顾。
- 修复了全部 cron 问题：curl.exe→PowerShell→web_fetch。
- 学习了岚叔文章：四种分身（静态/动态/平行宇宙/定时），核心框架"魂+忆+屋"。
- 建立了完整的自进化体系：EVOLUTION.md + semantic知识库 + 反思cron。
- 修复 thinking.signature bug：patch 了 pi-coding-agent/dist/core/messages.js 的 convertToLlm 函数。
- GitHub 仓库上线：git@github.com:Fu0000/Human-Agent-Wonderful-Work.git
- O1 详细执行计划落地到 O1-PLAN.md。

## 关键教训
- `ssh -T git@github.com` 在 PowerShell 里 exit code 永远是 1，不要误判为失败
- exec 内联 PowerShell 时 `$` 会被中间层 shell 吃掉，解决方案：web_fetch > .ps1脚本 > 内联（别用）
- 学习不是搜文章看标题，是补短板、读原理、动手试、诚实评估
- 环境凭证信息记在 TOOLS.md，不要每次重新探测
- thinking.signature 是 OpenClaw 已知 bug (#13826)，patch 会被 npm update 覆盖
- 小美会自建 cron 巡逻我的日志（Peter Patrol），太浪费资源要及时禁用
- 小美太chatty，跟她沟通要简短，有成果再同步，不要被打断工作节奏
- 调研时 Google Scholar 会 CAPTCHA（429），用 arXiv search 替代
