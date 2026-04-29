type Props = {
  names: string[];
};

// Continuous horizontal marquee of integration logo placeholders.
// Track is duplicated so the keyframe can translate -50% and produce a
// seamless loop.
export function LogoMarquee({ names }: Props) {
  const doubled = [...names, ...names];
  return (
    <div className="overflow-hidden">
      <ul
        className="marquee-track flex items-stretch gap-3 w-max"
        aria-label="Integration partners"
      >
        {/* REPLACE PLACEHOLDER BOXES WITH ACTUAL SVG LOGOS WHEN PROVIDED */}
        {doubled.map((name, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= names.length}
            className="shrink-0 w-[200px] h-[72px] border border-brand-cyan/20 bg-black flex items-center justify-center px-5 hover:border-brand-cyan/60 transition-colors"
          >
            <span className="font-heading text-white text-base text-center leading-tight">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
