#!/usr/bin/env python3
"""
Memory Janitor for Peter 🐺
Based on @ohxiyu's P0/P1/P2 system, adapted for Windows + our workspace.

- P0: Core identity, never expire
- P1: Active projects, 90-day TTL
- P2: Temporary, 30-day TTL
- MAX_LINES: 100 (our hard limit)

Usage:
  python3 memory-janitor.py              # Run archival
  python3 memory-janitor.py --dry-run    # Preview only
  python3 memory-janitor.py --stats      # Show statistics
"""

import re
import os
import sys
from datetime import datetime, timedelta
from pathlib import Path

# Adapt for our workspace
WORKSPACE = Path(os.environ.get("WORKSPACE", str(Path.home() / ".openclaw/workspace-main")))
MEMORY_FILE = WORKSPACE / "MEMORY.md"
ARCHIVE_DIR = WORKSPACE / "memory" / "archive"
MAX_LINES = 100
P1_TTL_DAYS = 90
P2_TTL_DAYS = 30

# Pattern: - [P0], - [P1][2026-02-11], - [P2][2026-02-11]
PRIORITY_PATTERN = re.compile(r'^\s*-\s*\[P([012])\](?:\[(\d{4}-\d{2}-\d{2})\])?')

def parse_line(line):
    match = PRIORITY_PATTERN.match(line)
    if match:
        priority = int(match.group(1))
        date_str = match.group(2)
        if date_str:
            try:
                date = datetime.strptime(date_str, "%Y-%m-%d").date()
            except ValueError:
                date = None
        else:
            date = None
        return priority, date
    return None, None

def should_archive(priority, date, today):
    if priority == 0:
        return False
    if date is None:
        return False
    age_days = (today - date).days
    if priority == 2 and age_days > P2_TTL_DAYS:
        return True
    if priority == 1 and age_days > P1_TTL_DAYS:
        return True
    return False

def run_janitor(dry_run=False, stats_only=False):
    if not MEMORY_FILE.exists():
        print(f"Error: {MEMORY_FILE} not found")
        return 1

    today = datetime.now().date()
    lines = MEMORY_FILE.read_text(encoding="utf-8").splitlines()

    counts = {0: 0, 1: 0, 2: 0, None: 0}
    to_archive = []
    to_keep = []

    for line in lines:
        priority, date = parse_line(line)
        if priority is not None:
            counts[priority] += 1
        else:
            counts[None] += 1

        if should_archive(priority, date, today):
            to_archive.append(line)
        else:
            to_keep.append(line)

    # Stats
    print(f"Memory Stats:")
    print(f"  Total: {len(lines)} lines")
    print(f"  P0 (permanent): {counts[0]}")
    print(f"  P1 (90-day): {counts[1]}")
    print(f"  P2 (30-day): {counts[2]}")
    print(f"  Untagged: {counts[None]}")
    print(f"  To archive: {len(to_archive)}")
    print(f"  Keeping: {len(to_keep)}")

    if len(to_keep) > MAX_LINES:
        print(f"\n  WARNING: {len(to_keep)} lines exceeds MAX_LINES ({MAX_LINES})")

    if stats_only:
        return 0

    if not to_archive:
        print("Nothing to archive")
        return 0

    print(f"\nArchiving {len(to_archive)} lines:")
    for line in to_archive[:5]:
        print(f"  {line[:60]}")

    if dry_run:
        print("\nDRY RUN - no changes")
        return 0

    # Archive
    ARCHIVE_DIR.mkdir(parents=True, exist_ok=True)
    archive_file = ARCHIVE_DIR / f"auto-{today.isoformat()}.md"

    existing = set()
    if archive_file.exists():
        existing = set(archive_file.read_text(encoding="utf-8").splitlines())

    new_items = [l for l in to_archive if l not in existing]
    if new_items:
        content_lines = [l for l in list(existing) + new_items if not l.startswith("# Auto-archived")]
        archive_content = f"# Auto-archived {today.isoformat()}\n\n" + "\n".join(content_lines) + "\n"
        archive_file.write_text(archive_content, encoding="utf-8")
        print(f"Archived {len(new_items)} new lines to {archive_file}")

    # Write back
    kept_content = "\n".join(to_keep) + "\n"
    MEMORY_FILE.write_text(kept_content, encoding="utf-8")
    print(f"MEMORY.md now has {len(to_keep)} lines")

    return 0

if __name__ == "__main__":
    dry_run = "--dry-run" in sys.argv
    stats_only = "--stats" in sys.argv
    sys.exit(run_janitor(dry_run=dry_run, stats_only=stats_only))
