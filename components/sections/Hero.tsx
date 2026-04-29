import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { IPhoneMock } from '@/components/common/IPhoneMock';

export function Hero() {
  return (
    <section className="relative grid-bg border-b border-brand-purple/15">
      <div className="max-w-content mx-auto px-6 pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Badge label="Implenix · AI Voice Agents" variant="cyan" />
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
              The AI that{' '}
              <span className="text-brand-purple">answers</span>,
              <br />
              qualifies, and{' '}
              <span className="text-brand-cyan">books</span>.
              <br />
              Every call.
            </h1>
            <p className="font-body text-white/75 text-lg max-w-xl leading-relaxed">
              We build and deploy AI voice agents for local businesses. Your
              phone gets answered 24/7. Your CRM gets updated. You close more
              deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contact"
                data-cta-location="hero"
                data-cta-type="primary"
                className="inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
              >
                Book a Demo <ArrowRight size={16} />
              </Link>
              <Link
                href="#how-it-works"
                data-cta-location="hero"
                data-cta-type="secondary"
                className="inline-flex items-center justify-center gap-2 border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
              >
                See How It Works
              </Link>
            </div>
            <dl className="grid grid-cols-3 max-w-lg pt-8 border-t border-brand-purple/15">
              <Stat label="Pickup" value="<1 ring" />
              <Stat label="Coverage" value="24 / 7" />
              <Stat label="Deploy" value="7–14 d" />
            </dl>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <IPhoneMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-1">
      <dt className="text-xs uppercase tracking-widest text-white/50 font-mono">
        {label}
      </dt>
      <dd className="mt-1 font-heading text-xl text-white">{value}</dd>
    </div>
  );
}
