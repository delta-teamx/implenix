type Props = {
  size?: number;
  className?: string;
  title?: string;
};

// The Implenix mark, two stair-step gamma shapes in cyan. Used at any
// size; the SVG scales cleanly. Accepts a className so the parent can
// control color via currentColor when needed.
export function LogoMark({
  size = 28,
  className,
  title = 'Implenix',
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
    >
      <g
        fill="#3dfaff"
        transform="rotate(6 50 50)"
      >
        <rect x="34" y="10" width="58" height="16" rx="8" />
        <rect x="76" y="14" width="16" height="50" rx="8" />
        <rect x="8" y="50" width="58" height="16" rx="8" />
        <rect x="50" y="54" width="16" height="40" rx="8" />
      </g>
    </svg>
  );
}
