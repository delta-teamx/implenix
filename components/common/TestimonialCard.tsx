import { Play, ShieldCheck } from 'lucide-react';

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
  return (
    <article className="bg-white text-black border-t-[3px] border-t-brand-purple p-6 flex flex-col gap-4">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-lg">{businessName}</h3>
          <p className="text-sm font-body text-black/70">
            {ownerName} • {industry}
          </p>
        </div>
        <span className="inline-flex items-center gap-1 border border-brand-cyan text-brand-cyan text-[10px] uppercase tracking-widest px-2 py-1">
          <ShieldCheck size={12} /> Verified
        </span>
      </header>
      <p className="font-body italic text-black/80 text-sm leading-relaxed">
        “{quote}”
      </p>
      <a
        href={recordingHref}
        data-cta-location="testimonial"
        data-cta-type="recording"
        className="inline-flex items-center gap-2 text-brand-purple font-medium text-sm hover:underline"
      >
        <Play size={14} />
        Play Recording
      </a>
    </article>
  );
}
