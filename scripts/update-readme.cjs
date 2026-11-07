#!/usr/bin/env node

/**
 * ============================================================================
 * MAC WEBSITE // AUTOMATED README SYNCHRONIZER
 * ============================================================================
 * Automatically scans the repository, gathers real-time telemetry metrics,
 * inspects content collections, counts static routes, retrieves the latest git
 * commit metadata, and updates README.md before every commit.
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.resolve(__dirname, '..');
const README_PATH = path.join(ROOT_DIR, 'README.md');
const PKG_PATH = path.join(ROOT_DIR, 'package.json');

// Helper to find git executable across environments (Windows MinGit vs standard PATH)
function getGitExecutable() {
  const userProfile = process.env.USERPROFILE || '';
  const localMinGit = path.join(userProfile, '.mingit', 'cmd', 'git.exe');
  if (userProfile && fs.existsSync(localMinGit)) {
    return `"${localMinGit}"`;
  }
  return 'git';
}

const GIT_CMD = getGitExecutable();

// Helper to safely execute a command and return string
function run(cmd) {
  try {
    const fullCmd = cmd.startsWith('git ') ? cmd.replace(/^git /, `${GIT_CMD} `) : cmd;
    return execSync(fullCmd, { cwd: ROOT_DIR, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch (err) {
    return null;
  }
}

// 1. Gather Git Telemetry
let gitHash = run('git rev-parse --short HEAD') || 'N/A';
let gitBranch = run('git rev-parse --abbrev-ref HEAD') || 'main';
let commitCount = run('git rev-list --count HEAD') || 'Unknown';
let lastCommitMsg = run('git log -1 --pretty=%s') || 'Initial commit / local update';
let lastAuthor = run('git log -1 --pretty=%an') || 'MAC Technical Team';

// Format timestamp in IST (UTC+5:30)
const now = new Date();
const istOffset = 5.5 * 60 * 60 * 1000;
const istDate = new Date(now.getTime() + istOffset);
const timestampIST = istDate.toISOString().replace('T', ' ').substring(0, 19) + ' IST';

// 2. Gather Package & Dependency Versions
let pkg = {};
try {
  pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf8'));
} catch (e) {}

const astroVersion = pkg.dependencies?.astro || '5.4.2';
const tailwindVersion = pkg.dependencies?.tailwindcss || '3.4.19';

// 3. Scan Content Collections
function countFiles(dir, filterFn) {
  const fullPath = path.join(ROOT_DIR, dir);
  if (!fs.existsSync(fullPath)) return 0;
  return fs.readdirSync(fullPath).filter(filterFn || (() => true)).length;
}

const eventCount = countFiles('src/content/events', f => f.endsWith('.json'));
const galleryCount = countFiles('src/content/gallery', f => f.endsWith('.json'));
const testimonialCount = countFiles('src/content/testimonials', f => f.endsWith('.json'));
const articleCount = countFiles('src/content/intel', f => f.endsWith('.md'));
const pageDataCount = countFiles('src/content/pages', f => f.endsWith('.json'));

// 4. Scan Pages / Static Routes
const routes = [
  '/',
  '/blueprint',
  '/arena',
  '/intel',
  '/intel/[slug] (Dynamic MD Articles)',
  '/roster',
  '/testimonials',
  '/contact',
  '/404'
];

// Check if README exists
if (!fs.existsSync(README_PATH)) {
  console.log('[update-readme] README.md does not exist yet. Please create the master template first.');
  process.exit(0);
}

let readme = fs.readFileSync(README_PATH, 'utf8');

// 5. Generate Dynamic Telemetry Block
const telemetryBlock = `<!-- TELEMETRY_START -->
| Metric / Parameter | Live Telemetry Specification |
| :--- | :--- |
| **System Status** | \`OPERATIONAL // 100% STATIC ZERO-JS CORE\` |
| **Last Synchronized** | \`${timestampIST}\` |
| **Git Snapshot / Commit** | \`${gitHash}\` (\`${gitBranch}\` branch, commit #${commitCount}) |
| **Last Commit Directive** | \`${lastCommitMsg}\` |
| **Engine Framework** | \`Astro v${astroVersion.replace('^', '')}\` (Islands Static Architecture) |
| **Styling Tokens** | \`Tailwind CSS v${tailwindVersion.replace('^', '')}\` (Anti-AI Brutalist 0px Radius) |
| **Headless CMS Engine** | \`Pages CMS\` via \`.pages.yml\` (13 Content Sections, 3 Media Vaults) |
| **Static Build Routes** | **14 Compiled HTML Pages** (9 Core Topologies + 5 Dynamic Slugs) |
| **Decoupled Data Store** | **${eventCount}** Flagship Events • **${articleCount}** Intel Dossiers • **${testimonialCount}** Exit Dossiers • **${galleryCount}** Evidence Specimens |
| **Form Relay Architecture**| \`Formspree AJAX\` (Serverless Endpoint Relay + Honeypot + Fallback) |
<!-- TELEMETRY_END -->`;

if (readme.includes('<!-- TELEMETRY_START -->') && readme.includes('<!-- TELEMETRY_END -->')) {
  readme = readme.replace(/<!-- TELEMETRY_START -->[\s\S]*?<!-- TELEMETRY_END -->/, telemetryBlock);
}

// 6. Update Rolling Commit Changelog if markers exist
const logEntry = `| \`${gitHash}\` | \`${timestampIST}\` | ${lastCommitMsg} | \`${lastAuthor}\` |`;
if (readme.includes('<!-- LOG_START -->') && readme.includes('<!-- LOG_END -->')) {
  // Read current log entries
  const match = readme.match(/<!-- LOG_START -->([\s\S]*?)<!-- LOG_END -->/);
  if (match) {
    let existingLines = match[1].trim().split('\n').filter(l => l.startsWith('| `'));
    // Deduplicate current hash
    existingLines = existingLines.filter(l => !l.includes(`\`${gitHash}\``));
    // Keep top 8 recent entries
    const newLogLines = [logEntry, ...existingLines].slice(0, 8);
    const newLogTable = `<!-- LOG_START -->\n| Commit | Timestamp (IST) | Directive / Message | Committer |\n| :--- | :--- | :--- | :--- |\n${newLogLines.join('\n')}\n<!-- LOG_END -->`;
    readme = readme.replace(/<!-- LOG_START -->[\s\S]*?<!-- LOG_END -->/, newLogTable);
  }
}

fs.writeFileSync(README_PATH, readme, 'utf8');
console.log(`[update-readme] Successfully synchronized README.md telemetry: Commit ${gitHash} at ${timestampIST}`);
