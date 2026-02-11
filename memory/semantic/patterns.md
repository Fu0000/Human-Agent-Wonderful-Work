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
