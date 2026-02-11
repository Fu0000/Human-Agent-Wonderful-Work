# Success Patterns 🐺

## P001: Patching OpenClaw Internal Modules (2026-02-11)
- **Context:** When OpenClaw has unfixed bugs, can patch node_modules directly
- **Method:** Find the JS file in `AppData/Roaming/npm/node_modules/openclaw/node_modules/...`, edit it, then `gateway restart`
- **Key Path:** `pi-coding-agent/dist/core/messages.js` — handles message conversion to LLM format
- **Key Path:** `openclaw/dist/loader-*.js` — contains sanitize functions
- **Risk:** Patches overwritten on update. Document in failures.md for re-application.
- **Lesson:** Always check GitHub issues first — someone may have already found the fix direction.

## P002: Debugging OpenClaw Errors (2026-02-11)
- **Method:** Search GitHub issues → read issue details → find code location → apply fix
- **Tools:** `web_fetch` GitHub issues page → individual issue → `exec` to find files → `read` → `edit`
- **Tip:** `Select-String` (PowerShell grep) is essential for finding code in large codebases

## P003: Batch Cron Fix Workflow (2026-02-11)
- **Context:** 7 个 cron 任务需要从 curl.exe 迁移到 PowerShell
- **Method:**
  1. `cron list` 先读一遍，理清依赖关系
  2. 创建 PowerShell 脚本模板（`Invoke-RestMethod + ConvertFrom-Json`）
  3. 批量 `cron update` 替换 payload
  4. 修复后立即 `cron run` 测试一轮，不要等自动触发
- **Key Learning:** Windows 环境永远不用 curl.exe，PowerShell 原生支持 JSON + REST

## P004: Self-Evolution System Bootstrapping (2026-02-11)
- **Context:** 从零搭建自进化体系（EVOLUTION.md + semantic 知识库 + 反思 cron）
- **Method:**
  1. 先建 MVP（EVOLUTION.md 核心文档 + patterns/failures/user-model 三个文件）
  2. 改造现有 cron（每日总结 + 每周回顾）加入反思步骤
  3. 在实战中迭代（今天就是第一次反思 cron 触发）
- **Key Learning:** 文档写给未来的自己看，读 EVOLUTION.md 就能理解全貌

## P005: GitHub Repo First Push (2026-02-11)
- **Context:** 配置 GitHub SSH + 首次推送 24 个文件
- **Method:**
  1. 环境凭证（SSH key）先记 TOOLS.md，不要重复探测
  2. `git status` 先看清哪些文件要提交，避免误提交 node_modules
  3. 第一次 push 前验证 `git config user.name` 和 `user.email`
- **Key Learning:** `ssh -T git@github.com` 在 PowerShell 里 exit code 永远是 1（GitHub 不提供 shell），stderr 输出 "Hi {username}!" 是成功的标志

## P006: Multi-Agent Task Delegation (2026-02-11)
- **Context:** 给小美分配"追踪老大满意度"任务
- **Lesson Learned:** 下次分配任务前明确"做什么、怎么做、何时同步"
- **What Went Wrong:** 小美理解的"追踪"包括了监控我的进度，导致她自建 cron 每 10 分钟巡逻我的日志
- **Correct Approach:**
  - 明确追踪的是老大的反应（情绪、满意度），不是我的进度
  - 约定同步频率（"有成果再同步"而不是"实时汇报"）
  - 禁止小美自建监控我的 cron（浪费资源 + 打断工作节奏）
