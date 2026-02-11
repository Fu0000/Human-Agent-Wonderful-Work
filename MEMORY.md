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
- 修复了全部 cron 问题：curl.exe→PowerShell、agentToAgent开启、重试逻辑。
- 学习了岚叔文章：四种分身（静态/动态/平行宇宙/定时），核心框架"魂+忆+屋"。
- 建立了完整的自进化体系：EVOLUTION.md + semantic知识库 + 反思cron。
