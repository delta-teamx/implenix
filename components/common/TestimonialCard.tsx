import { Play, ShieldCheck, Quote } from 'lucide-react';

type Props = {
  businessName: string;
  ownerName: string;
  industry: string;
  quote: string;
  recordingHref?: string;
};

export function TestimonialCard({
  businessName,
  ownerName,
  industry,
  quote,
  recordingHref = '#',
}: Props) {
  const initials = ownerName
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="bg-black border border-brand-purple/25 hover:border-brand-purple p-6 flex flex-col gap-5 h-full transition-colors">
      <header className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-brand-cyan border border-brand-cyan/35 px-2 py-1">
          <ShieldCheck size={11} /> Verified
        </span>
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/45">
          {industry}
        </span>
      </header>

      <Quote size={18} className="text-brand-purple" />

      <p className="font-body text-white/85 text-base leading-relaxed flex-1">
        “{quote}”
      </p>

      <footer className="flex items-center gap-3 border-t border-brand-purple/15 pt-4">
        <span className="w-9 h-9 bg-brand-purple text-white flex items-center justify-center font-heading text-sm">
          {initials}
        </span>
        <div className="flex-1 min-w-0 leading-tight">
          <p className="font-heading text-white text-sm">{businessName}</p>
          <p className="text-xs text-white/55 font-body mt-0.5">{ownerName}</p>
        </div>
        <a
          href={recordingHref}
          data-cta-location="testimonial"
          data-cta-type="recording"
          aria-label={`Play recording from ${businessName}`}
          className="inline-flex items-center gap-1.5 text-brand-cyan text-xs font-mono uppercase tracking-widest hover:opacity-80"
        >
          <Play size={12} /> Recording
        </a>
      </footer>
    </article>
  );
}
