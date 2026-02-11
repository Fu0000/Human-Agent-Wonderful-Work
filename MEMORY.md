# MEMORY.md

## 核心系统
- 进化系统已建立（EVOLUTION.md），每次醒来要读
- 知识库：memory/semantic/（patterns.md、failures.md、user-model.md）
- 反思循环：每日22:00总结+反思，每周日21:00深度回顾
- 行动前查 failures.md 避坑，查 patterns.md 复用经验
- 行动后更新知识库，观察老大反应更新 user-model.md

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
- 修复 thinking.signature bug：patch pi-coding-agent/dist/core/messages.js，在 convertToLlm 的 assistant 分支剥离无签名 thinking 块。
- GitHub 仓库配通：git@github.com:Fu0000/Human-Agent-Wonderful-Work.git

## O1 执行要点
- 详细计划落地在 O1-PLAN.md
- 五个阶段：调研(W07-08) → 分析(W08-09) → 设计(W09-10) → 验证(W10-12) → 复制推广(W13-14)
- 六维度协作评估框架：沟通效率/信任程度/自主性/记忆连续性/目标对齐/反馈闭环
- 核心产出：调研报告 → 成熟度模型v1.0 → 操作手册v1.0 → 试运行 → 操作手册v2.0
- 关键转变：从"指令-执行"到"目标-自驱"模式
- 老大强调：要详细、包含调研/分析/研究/细化，不要空泛
