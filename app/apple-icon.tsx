import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#070538',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#3dfaff" transform="rotate(6 50 50)">
            <rect x="34" y="10" width="58" height="16" rx="8" />
            <rect x="76" y="14" width="16" height="50" rx="8" />
            <rect x="8" y="50" width="58" height="16" rx="8" />
            <rect x="50" y="54" width="16" height="40" rx="8" />
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
