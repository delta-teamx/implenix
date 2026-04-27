import Link from 'next/link';
import { CallFlowDiagram } from '@/components/common/CallFlowDiagram';

export function Hero() {
  return (
    <section className="relative grid-bg">
      <div className="max-w-content mx-auto px-6 min-h-screen flex flex-col justify-center py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
              [ implenix.net // ai voice agents ]
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
              Implenix —{' '}
              <span className="text-brand-purple">The AI</span> That
              <br />
              Answers, Qualifies,
              <br />
              and Books.{' '}
              <span className="text-brand-cyan">Every Call.</span>
            </h1>
            <p className="font-body text-white/80 text-lg max-w-xl">
              We build and deploy AI voice agents for local businesses. Your
              phone gets answered 24/7. Your CRM gets updated. You close more
              deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                data-cta-location="hero"
                data-cta-type="primary"
                className="inline-flex items-center justify-center bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
              >
                Book a Demo
              </Link>
              <Link
                href="#how-it-works"
                data-cta-location="hero"
                data-cta-type="secondary"
                className="inline-flex items-center justify-center border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
              >
                See How It Works
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <CallFlowDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
