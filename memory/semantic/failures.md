# Failures & Pitfalls 🐺

## F001: thinking.signature Field Required (2026-02-11)
- **Error:** `messages.N.content.N.thinking.signature: Field required`
- **Root Cause:** OpenClaw bug (#13826/#13834). Google Antigravity returns thinking blocks without `signature` field. `sanitizeAntigravityThinkingBlocks` only runs in `sanitizeSessionHistory`, not in `convertToLlm` path during agent loop tool-call rounds.
- **Fix Applied:** Patched `pi-coding-agent/dist/core/messages.js` → `convertToLlm()` assistant case to strip unsigned thinking blocks.
- **File:** `C:\Users\Administrator\AppData\Roaming\npm\node_modules\openclaw\node_modules\@mariozechner\pi-coding-agent\dist\core\messages.js`
- **⚠️ Patch gets overwritten on `npm update openclaw`** — re-apply if needed.
- **Prevention:** After any OpenClaw update, verify this bug is fixed upstream or re-apply patch.

## F002: SSH测试误判失败 (2026-02-11)
- **Error:** `ssh -T git@github.com` exit code 1，PowerShell 把 stderr 当错误
- **Root Cause:** GitHub SSH 不提供 shell access，永远返回 exit code 1。成功标志是 stderr 里的 "Hi {username}!"
- **教训:** 环境凭证信息记在 TOOLS.md，不要重复探测已知可用的配置。先读 TOOLS.md 再动手。
