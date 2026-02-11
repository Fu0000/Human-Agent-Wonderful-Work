# Failures & Pitfalls 🐺

## F001: thinking.signature Field Required — Claude via Antigravity (2026-02-11)
- **Error:** `messages.N.content.N.thinking.signature: Field required` / `LLM request rejected`
- **Root Cause (深层):** Google Antigravity 把 Claude 的 thinking blocks 存储时用了 Google 格式的 `thoughtSignature`（base64 bytes）。当 Antigravity 后端把请求代理给 Anthropic Claude 时，这个 Google 格式的 signature 不被 Anthropic 认可，导致 API 拒绝。
- **Root Cause (表层):** `transform-messages.js` 和 `google-shared.js` 检查 `isSameModel` 为 true 时，如果 `thinkingSignature` 存在就保留 thinking block 原样发送。但 Claude via Antigravity 的 signature 格式与 Anthropic 原生不兼容。
- **Fix Applied (v2):** 在 `transform-messages.js` 和 `google-shared.js` 中增加 `isClaudeViaAntigravity` 检查：当 `model.provider === "google-antigravity"` 且 `model.id` 包含 `"claude"` 时，始终将 thinking blocks 转成 plain text，不保留 signature。
- **Files Patched:**
  1. `pi-ai/dist/providers/transform-messages.js` — `isClaudeViaAntigravity` 短路 `isSameModel && thinkingSignature`
  2. `pi-ai/dist/providers/google-shared.js` — `isClaudeViaAntigravity` 短路 `isSameProviderAndModel` 的 thinking 保留逻辑
  3. `pi-coding-agent/dist/core/messages.js` — 旧 patch，剥离无签名 thinking blocks（仍保留）
- **⚠️ 所有 patch 会被 `npm update openclaw` 覆盖** — 更新后重新检查
- **诊断方法:** `check-thinking-v3.js` 扫描所有 session jsonl 中的 thinking blocks + signature 状态
- **学到的:**
  1. Google `thoughtSignature` (base64) ≠ Anthropic `signature`（不同格式）
  2. 错误格式 `messages.N.content.N` 是 Anthropic 风格的 JSONPath 验证，即使请求走的是 Google endpoint
  3. `isSameModel` 在 Antigravity 场景下语义有歧义——provider 一样但底层 API 不一样

## F002: PowerShell 里用 CMD 语法导致报错 (2026-02-11)
- **Error:** `out-file : 要求 FileStream 到一个磁盘文件设备。不支持 com1: 或 lpt1: 等设备`
- **Root Cause:** exec 环境是 PowerShell，`2>nul` 是 CMD 语法。PowerShell 不认识 `nul` 设备名，尝试写文件时触发 Windows 保留设备名冲突。
- **同类问题:** `&&` 在 PowerShell 里也不工作（CMD 语法）；`$` 变量会被中间层 shell 吃掉。
- **解决方案:**
  1. 优先用 PowerShell 原生命令（`Get-ChildItem` 而非 `dir`，`Get-Content` 而非 `type`）
  2. 如果必须用 CMD：把全部 CMD 语法放进 `cmd /c "..."` 引号内
  3. `2>nul` → `2>$null`（PowerShell 语法）
  4. `&&` → `;` 或 `-and`
- **规则:** exec = PowerShell 环境，永远别混用 CMD 语法。

## F003: SSH测试误判失败 (2026-02-11)
- **Error:** `ssh -T git@github.com` exit code 1，PowerShell 把 stderr 当错误
- **Root Cause:** GitHub SSH 不提供 shell access，永远返回 exit code 1。成功标志是 stderr 里的 "Hi {username}!"
- **教训:** 环境凭证信息记在 TOOLS.md，不要重复探测已知可用的配置。先读 TOOLS.md 再动手。

## F006: 工具调用失败后未自动重试 (2026-02-11 21:08-23:11)
- **Error:** write/exec 返回 "synthetic error result for transcript repair"，任务中断
- **Root Cause:** 工具调用偶发失败（可能是 session 修复机制），但我没有立即重试
- **Impact:** 老大等了近2小时来催问，严重影响信任
- **Fix:** 工具调用失败后应立即重试同一操作，最多重试2次。如果连续失败，主动告知老大。
- **教训:** 不要默默失败。要么重试成功，要么立刻汇报。沉默 = 最差的失败模式。
