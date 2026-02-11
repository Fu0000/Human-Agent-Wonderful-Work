#!/usr/bin/env node
/**
 * Memory Janitor for Peter 🐺
 * Based on @ohxiyu's P0/P1/P2 system, adapted for Windows + Node.js
 *
 * - P0: Core identity, never expire
 * - P1: Active projects, 90-day TTL
 * - P2: Temporary, 30-day TTL
 * - MAX_LINES: 100 (hard limit)
 *
 * Usage:
 *   node memory-janitor.js              # Run archival
 *   node memory-janitor.js --dry-run    # Preview only
 *   node memory-janitor.js --stats      # Show statistics
 */

const fs = require('fs');
const path = require('path');

const WORKSPACE = process.env.WORKSPACE || path.join(require('os').homedir(), '.openclaw', 'workspace-main');
const MEMORY_FILE = path.join(WORKSPACE, 'MEMORY.md');
const ARCHIVE_DIR = path.join(WORKSPACE, 'memory', 'archive');
const MAX_LINES = 100;
const P1_TTL_DAYS = 90;
const P2_TTL_DAYS = 30;

const PRIORITY_RE = /^\s*-\s*\[P([012])\](?:\[(\d{4}-\d{2}-\d{2})\])?/;

function parseLine(line) {
  const m = PRIORITY_RE.exec(line);
  if (!m) return { priority: null, date: null };
  const priority = parseInt(m[1]);
  let date = null;
  if (m[2]) {
    date = new Date(m[2] + 'T00:00:00');
    if (isNaN(date.getTime())) date = null;
  }
  return { priority, date };
}

function daysBetween(a, b) {
  return Math.floor((b - a) / (1000 * 60 * 60 * 24));
}

function shouldArchive(priority, date, today) {
  if (priority === 0 || priority === null) return false;
  if (!date) return false;
  const age = daysBetween(date, today);
  if (priority === 2 && age > P2_TTL_DAYS) return true;
  if (priority === 1 && age > P1_TTL_DAYS) return true;
  return false;
}

function run(args) {
  const dryRun = args.includes('--dry-run');
  const statsOnly = args.includes('--stats');

  if (!fs.existsSync(MEMORY_FILE)) {
    console.log(`Error: ${MEMORY_FILE} not found`);
    return 1;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const lines = fs.readFileSync(MEMORY_FILE, 'utf-8').split('\n');

  const counts = { 0: 0, 1: 0, 2: 0, null: 0 };
  const toArchive = [];
  const toKeep = [];

  for (const line of lines) {
    const { priority, date } = parseLine(line);
    if (priority !== null) counts[priority]++;
    else counts['null']++;

    if (shouldArchive(priority, date, today)) {
      toArchive.push(line);
    } else {
      toKeep.push(line);
    }
  }

  console.log('📊 Memory Stats:');
  console.log(`  Total: ${lines.length} lines`);
  console.log(`  P0 (permanent): ${counts[0]}`);
  console.log(`  P1 (90-day): ${counts[1]}`);
  console.log(`  P2 (30-day): ${counts[2]}`);
  console.log(`  Untagged: ${counts['null']}`);
  console.log(`  To archive: ${toArchive.length}`);
  console.log(`  Keeping: ${toKeep.length}`);

  if (toKeep.length > MAX_LINES) {
    console.log(`\n  ⚠️ WARNING: ${toKeep.length} lines exceeds MAX_LINES (${MAX_LINES})`);
  }

  if (statsOnly) return 0;

  if (toArchive.length === 0) {
    console.log('✅ Nothing to archive');
    return 0;
  }

  console.log(`\n📦 Archiving ${toArchive.length} lines:`);
  toArchive.slice(0, 5).forEach(l => console.log(`  ${l.slice(0, 60)}`));

  if (dryRun) {
    console.log('\n🔍 DRY RUN - no changes');
    return 0;
  }

  // Archive
  fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
  const todayStr = today.toISOString().slice(0, 10);
  const archiveFile = path.join(ARCHIVE_DIR, `auto-${todayStr}.md`);

  let existing = new Set();
  if (fs.existsSync(archiveFile)) {
    existing = new Set(fs.readFileSync(archiveFile, 'utf-8').split('\n'));
  }

  const newItems = toArchive.filter(l => !existing.has(l));
  if (newItems.length > 0) {
    const allLines = [...existing, ...newItems].filter(l => !l.startsWith('# Auto-archived'));
    const content = `# Auto-archived ${todayStr}\n\n${allLines.join('\n')}\n`;
    fs.writeFileSync(archiveFile, content, 'utf-8');
    console.log(`✅ Archived ${newItems.length} new lines to ${archiveFile}`);
  }

  // Write back
  fs.writeFileSync(MEMORY_FILE, toKeep.join('\n') + '\n', 'utf-8');
  console.log(`✅ MEMORY.md now has ${toKeep.length} lines`);

  return 0;
}

process.exit(run(process.argv.slice(2)));
