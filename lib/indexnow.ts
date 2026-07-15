// IndexNow protocol, instant indexing for Bing, Yandex, Naver,
// Seznam, and Cloudflare-cached search engines. Google does not yet
// honor IndexNow but is reportedly evaluating it.
//
// On every successful build the postbuild script reads the generated
// sitemap and pings api.indexnow.org so the search engines fetch
// updated pages within minutes instead of waiting for crawler cycles.
//
// The key file at /public/<INDEXNOW_KEY>.txt is the verification
// document IndexNow fetches to confirm we own the domain.

export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY ||
  process.env.NEXT_PUBLIC_INDEXNOW_KEY ||
  // Default key, generated for the implenix.net domain. Replace by
  // setting INDEXNOW_KEY env var and rotating the file in /public.
  'fa3c2e8d9b1748a6b4f0c5d2e7a98316';

export const INDEXNOW_HOST = 'implenix.net';

export async function pingIndexNow(urls: string[]): Promise<boolean> {
  if (urls.length === 0) return false;
  try {
    const body = {
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    };
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    return res.ok;
  } catch (err) {
    console.error('[indexnow] ping failed', err);
    return false;
  }
}
