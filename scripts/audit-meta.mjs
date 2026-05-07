#!/usr/bin/env node
// Audit every static page's <title> and <meta name="description"> in the
// production build output. Flags any title over 60 chars or description
// over 155 chars per the SEO brief's on-page rules.
//
// Usage:
//   npm run build
//   node scripts/audit-meta.mjs

import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SERVER_APP_DIR = join(ROOT, '.next/server/app');

const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 155;

async function* walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.name.endsWith('.html')) {
      yield full;
    }
  }
}

function extract(html, regex) {
  const match = regex.exec(html);
  if (!match) return null;
  return match[1].replace(/&amp;/g, '&').replace(/&#x27;/g, "'");
}

const TITLE_RE = /<title>([^<]*)<\/title>/i;
const DESC_RE = /<meta name="description" content="([^"]*)"/i;

let total = 0;
let titleIssues = [];
let descIssues = [];

for await (const file of walk(SERVER_APP_DIR)) {
  const rel = relative(SERVER_APP_DIR, file).replace(/\.html$/, '');
  // Skip the special _not-found etc.
  if (rel.startsWith('_')) continue;
  const html = await readFile(file, 'utf8');
  const title = extract(html, TITLE_RE) ?? '';
  const desc = extract(html, DESC_RE) ?? '';
  total++;
  if (title.length > TITLE_LIMIT) {
    titleIssues.push({ rel, len: title.length, title });
  }
  if (desc.length > DESCRIPTION_LIMIT) {
    descIssues.push({ rel, len: desc.length, desc });
  }
}

console.log(`Scanned ${total} pages.\n`);

if (titleIssues.length === 0) {
  console.log(`✓ All titles ≤ ${TITLE_LIMIT} chars`);
} else {
  console.log(`✗ ${titleIssues.length} titles over ${TITLE_LIMIT} chars:`);
  for (const { rel, len, title } of titleIssues) {
    console.log(`  [${len}] /${rel}`);
    console.log(`         ${title}`);
  }
}

console.log();

if (descIssues.length === 0) {
  console.log(`✓ All descriptions ≤ ${DESCRIPTION_LIMIT} chars`);
} else {
  console.log(`✗ ${descIssues.length} descriptions over ${DESCRIPTION_LIMIT} chars:`);
  for (const { rel, len, desc } of descIssues) {
    console.log(`  [${len}] /${rel}`);
    console.log(`         ${desc}`);
  }
}

if (titleIssues.length > 0 || descIssues.length > 0) {
  process.exitCode = 1;
}
