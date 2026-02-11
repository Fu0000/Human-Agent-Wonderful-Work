# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Git & SSH

- **GitHub 账号:** Fu0000
- **SSH key:** ed25519, 已配置到 GitHub，认证正常
- **仓库:** `git@github.com:Fu0000/Human-Agent-Wonderful-Work.git` (workspace-main)
- **Git 身份:** powerA-openclaw / powerA@openclaw.local
- **注意:** `ssh -T git@github.com` 在 PowerShell 里 exit code 永远是 1（GitHub 不提供 shell），stderr 输出 "Hi Fu0000!" 是成功的标志。不要误判为失败。

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.
