import { ImageResponse } from 'next/og';
import { allCaseStudies } from 'contentlayer/generated';

export const runtime = 'edge';
export const alt = 'Implenix case study';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Per-case-study OG image. Renders the result headline + primary
// metric on the brand background, designed to win the scroll on
// LinkedIn and Twitter shares.
export default function CaseStudyOgImage({
  params,
}: {
  params: { slug: string };
}) {
  const doc = allCaseStudies.find((c) => c.slug === params.slug);
  const headline = doc?.resultHeadline ?? 'Implenix case study';
  const industry = doc?.industry ?? 'Case study';
  const primary = doc?.primaryMetric as { number: string; label: string } | undefined;

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
                fontSize: 14,
                color: '#3dfaff',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                border: '1px solid rgba(61,250,255,0.5)',
                padding: '4px 10px',
                display: 'flex',
              }}
            >
              Case Study · {industry}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 1000 }}>
            {primary ? (
              <div
                style={{
                  fontSize: 110,
                  fontWeight: 900,
                  color: '#3dfaff',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  display: 'flex',
                }}
              >
                {primary.number}
              </div>
            ) : null}
            <div
              style={{
                fontSize: headline.length > 60 ? 44 : 56,
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#ffffff',
                letterSpacing: '-0.01em',
              }}
            >
              {headline}
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
            <span>implenix.net/case-studies</span>
            <span>★ ★ ★ ★ ★ Verified result</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
