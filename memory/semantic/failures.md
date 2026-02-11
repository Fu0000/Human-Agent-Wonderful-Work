# Failures & Pitfalls 🐺

## F001: thinking.signature Field Required (2026-02-11)
- **Error:** `messages.N.content.N.thinking.signature: Field required`
- **Root Cause:** OpenClaw bug (#13826/#13834). Google Antigravity returns thinking blocks without `signature` field. `sanitizeAntigravityThinkingBlocks` only runs in `sanitizeSessionHistory`, not in `convertToLlm` path during agent loop tool-call rounds.
- **Fix Applied:** Patched `pi-coding-agent/dist/core/messages.js` → `convertToLlm()` assistant case to strip unsigned thinking blocks.
- **File:** `C:\Users\Administrator\AppData\Roaming\npm\node_modules\openclaw\node_modules\@mariozechner\pi-coding-agent\dist\core\messages.js`
- **⚠️ Patch gets overwritten on `npm update openclaw`** — re-apply if needed.
- **Prevention:** After any OpenClaw update, verify this bug is fixed upstream or re-apply patch.
