import { ImageResponse } from 'next/og';
import { getTopic } from '@/lib/blogTopics';

export const runtime = 'edge';
export const alt = 'Implenix topic hub';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Branded topic-hub OG image, same visual language as blog covers
// (BLOGS pill, big heading, description, IMPLENIX.NET | @IMPLENIX.AI
// footer) but the badge reads TOPIC HUB.
export default function TopicOgImage({
  params,
}: {
  params: { hub: string };
}) {
  const topic = getTopic(params.hub);
  const heading = topic?.heading ?? 'Implenix Blog Topics';
  const description =
    topic?.metaDescription ??
    'Cluster hubs of Implenix operator content by theme.';

  const headingFontSize = heading.length > 90 ? 60 : heading.length > 55 ? 76 : 92;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0a0d3f',
          display: 'flex',
          flexDirection: 'column',
          padding: '56px 64px 0 64px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            right: '-140px',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(61,250,255,0.28) 0%, rgba(61,250,255,0) 65%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 36,
            flex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: '#3dfaff',
              color: '#0a0d3f',
              padding: '10px 26px',
              borderRadius: 40,
              alignSelf: 'flex-start',
              fontSize: 30,
              fontWeight: 900,
              letterSpacing: '0.02em',
            }}
          >
            TOPIC HUB
          </div>

          <div
            style={{
              fontSize: headingFontSize,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              maxWidth: 1000,
              color: '#ffffff',
              display: 'flex',
            }}
          >
            {heading}
          </div>

          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.35,
              maxWidth: 980,
              display: 'flex',
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            marginLeft: -64,
            marginRight: -64,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              height: 4,
              background: 'rgba(255,255,255,0.9)',
              margin: '0 64px',
            }}
          />
          <div style={{ display: 'flex' }}>
            <div
              style={{
                flex: 1,
                background: '#bb00ff',
                color: '#ffffff',
                padding: '24px 40px',
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              IMPLENIX.NET
            </div>
            <div style={{ width: 4, background: '#ffffff' }} />
            <div
              style={{
                flex: 1,
                background: '#bb00ff',
                color: '#ffffff',
                padding: '24px 40px',
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              @IMPLENIX.AI
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
