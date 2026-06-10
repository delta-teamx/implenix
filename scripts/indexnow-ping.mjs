#!/usr/bin/env node
// Postbuild ping for IndexNow. Reads the generated sitemap-0.xml,
// extracts every URL, and POSTs them to api.indexnow.org so Bing,
// Yandex, Naver, Seznam, and Cloudflare-cached crawlers fetch the
// updated content within minutes.
//
// Wired into the postbuild step in package.json so it runs after
// next-sitemap. Silent when sitemap is missing; non-fatal on network
// errors so the build never breaks because of indexing notifications.

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const HOST = 'implenix.net';
const KEY =
  process.env.INDEXNOW_KEY ||
  process.env.NEXT_PUBLIC_INDEXNOW_KEY ||
  'fa3c2e8d9b1748a6b4f0c5d2e7a98316';

const sitemapPath = resolve(process.cwd(), 'public', 'sitemap-0.xml');

async function main() {
  let xml;
  try {
    xml = await readFile(sitemapPath, 'utf8');
  } catch {
    console.log('[indexnow] no sitemap-0.xml — skipping ping');
    return;
  }

  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) {
    console.log('[indexnow] no URLs in sitemap — skipping ping');
    return;
  }

  // Skip the ping in local dev / CI without explicit opt-in. Only ping
  // when this is a production build on the canonical host.
  if (!process.env.INDEXNOW_PING) {
    console.log(
      `[indexnow] dry-run · ${urls.length} URLs would be pinged. Set INDEXNOW_PING=1 to enable.`,
    );
    return;
  }

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  };

  try {
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      console.log(`[indexnow] pinged ${urls.length} URLs · status ${res.status}`);
    } else {
      console.warn(
        `[indexnow] non-OK response · status ${res.status} · ${await res.text()}`,
      );
    }
  } catch (err) {
    console.error('[indexnow] ping failed:', err.message);
  }
}

main().catch((err) => {
  console.error('[indexnow] unexpected error:', err);
  // Never break the build because of indexing pings.
  process.exit(0);
});
