import Link from 'next/link';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/common/Badge';

// "Cost of doing nothing" anchor block. Side-by-side: left column shows
// what the prospect is losing right now without Implenix; right column
// shows what changes once it's deployed. Numbers are conservative
// industry medians, replaceable per audience.
export function CostOfNothingSection() {
  return (
    <section className="bg-brand-dark border-t border-brand-purple/15">
      <div className="max-w-content mx-auto px-6 py-24">
        <header className="max-w-3xl">
          <Badge label="Cost of doing nothing" variant="purple" />
          <h2 className="font-heading text-3xl md:text-5xl mt-5 leading-[1.05] text-white">
            What you're losing every week, right now.
          </h2>
          <p className="mt-4 font-body text-white/70 text-lg">
            Based on industry medians. Run the audit on your own number to
            see the exact figures for your business.
          </p>
        </header>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="border border-white/10 bg-black p-8 flex flex-col gap-5">
            <header className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/65 border border-white/15 px-2 py-1">
                <AlertTriangle size={11} /> Without Implenix
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/35">
                ▸ this week
              </span>
            </header>
            <Row label="Inbound calls" value="186" muted />
            <Row label="Missed (ring → voicemail)" value="115" muted />
            <Row label="Avg client value" value="$1,250" muted />
            <div className="border-t border-white/10 pt-5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/55">
                ▸ Estimated lost pipeline
              </span>
              <p className="font-heading text-5xl md:text-6xl text-white/90 mt-3 leading-none">
                $42,800
              </p>
              <p className="text-sm font-body text-white/55 mt-2">
                Going to whoever answered first.
              </p>
            </div>
            <div className="mt-auto pt-2">
              <Link
                href="/audit"
                data-cta-location="cost-of-nothing-left"
                data-cta-type="secondary"
                className="inline-flex items-center gap-1.5 text-brand-cyan text-xs font-mono uppercase tracking-widest hover:opacity-80"
              >
                See what YOUR week costs <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <div className="border-l-[3px] border-brand-cyan bg-black p-8 flex flex-col gap-5">
            <header className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-brand-cyan border border-brand-cyan/40 px-2 py-1">
                <span className="w-1.5 h-1.5 bg-brand-cyan" /> With Implenix
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/45">
                ▸ this week
              </span>
            </header>
            <Row label="Inbound calls" value="186" />
            <Row label="Answered in <1 ring" value="186" highlight />
            <Row label="Booked into calendar" value="71" highlight />
            <div className="border-t border-brand-purple/20 pt-5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan">
                ▸ Pipeline captured
              </span>
              <p className="font-heading text-5xl md:text-6xl text-brand-cyan mt-3 leading-none">
                $88,750
              </p>
              <p className="text-sm font-body text-white/70 mt-2">
                Booked, qualified, written to your CRM.
              </p>
            </div>
            <Link
              href="/audit"
              data-cta-location="cost-of-nothing"
              data-cta-type="primary"
              className="mt-2 inline-flex items-center gap-2 bg-brand-purple text-white font-medium px-5 py-3 rounded-sm hover:opacity-90 self-start"
            >
              Run my audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  muted,
  highlight,
}: {
  label: string;
  value: string;
  muted?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 font-body">
      <span className="text-sm text-white/65">{label}</span>
      <span
        className={`font-mono text-lg ${
          muted
            ? 'text-white/55 line-through decoration-white/30'
            : highlight
              ? 'text-brand-cyan'
              : 'text-white'
        }`}
      >
        {value}
      </span>
    </div>
  );
}
