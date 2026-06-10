import { ImageResponse } from 'next/og';
import { allBlogPosts } from 'contentlayer/generated';

export const runtime = 'edge';
export const alt = 'Implenix blog post';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Per-blog-post OG image generator. Renders the post title on the
// Implenix brand background so the social card matches the post —
// gives a real CTR lift vs the generic default image.
export default function BlogOgImage({
  params,
}: {
  params: { slug: string };
}) {
  const doc = allBlogPosts.find((p) => p.slug === params.slug);
  const title = doc?.title ?? 'Implenix Blog';
  const category = doc?.category ?? 'AI Voice Agents';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#070538',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`v${i}`}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${(i + 1) * 100}px`,
                width: '1px',
                background: 'rgba(61,250,255,0.06)',
              }}
            />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={`h${i}`}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: `${(i + 1) * 90}px`,
                height: '1px',
                background: 'rgba(61,250,255,0.06)',
              }}
            />
          ))}
        </div>

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span
              style={{
                fontSize: 32,
                color: '#ffffff',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                display: 'flex',
              }}
            >
              <span style={{ color: '#3dfaff' }}>i</span>mplenix
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 14,
                color: '#bb00ff',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                border: '1px solid rgba(187,0,255,0.5)',
                padding: '4px 10px',
              }}
            >
              <span style={{ width: 6, height: 6, background: '#bb00ff' }} />
              {category}
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              maxWidth: 1000,
            }}
          >
            <div
              style={{
                fontSize: title.length > 60 ? 56 : 68,
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 16,
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              borderTop: '1px solid rgba(187,0,255,0.25)',
              paddingTop: 24,
            }}
          >
            <span>implenix.net/blog</span>
            <span>We Automate the Call. You Close the Deal.</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
