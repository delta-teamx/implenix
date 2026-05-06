import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight, Headphones, Clock, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { CodeWindow } from '@/components/common/CodeWindow';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Hear Implenix Live — Call Our Demo Receptionist | Implenix',
  description:
    'Skip the video demo. Pick up your phone, dial our demo number, and have a real conversation with the Implenix AI configured as a sample HVAC receptionist.',
  path: '/try-it',
});

// PLACEHOLDER demo number — replace with provisioned Twilio / SIP DID
// before launch. Make sure the persona on the other end matches the
// "Ava · Northwind HVAC" framing used elsewhere on the site.
const DEMO_NUMBER = '+1 (415) 555-0184';
const DEMO_HREF = 'tel:+14155550184';

const SAMPLE_TRANSCRIPT = [
  { ts: '00:00', speaker: 'system' as const, text: 'Inbound · demo · Northwind HVAC' },
  { ts: '00:02', speaker: 'agent' as const, text: 'Northwind HVAC, this is Ava. How can I help?' },
  { ts: '00:05', speaker: 'caller' as const, text: 'Hi — I want to test how you handle a real call.' },
  { ts: '00:09', speaker: 'agent' as const, text: 'Happy to demo. Try giving me a real-world request — like an emergency, a quote, or a reschedule.' },
  { ts: '00:14', speaker: 'caller' as const, text: 'My AC is out, can you book someone today?' },
  { ts: '00:18', speaker: 'agent' as const, text: 'Yes — what is the address, and what time window works?' },
];

const STEPS = [
  {
    Icon: Phone,
    title: '1 · Dial the number',
    body: 'No app, no signup. Just call from any phone.',
  },
  {
    Icon: Headphones,
    title: '2 · Talk to Ava',
    body: 'Ava is configured as Northwind HVAC. Try emergencies, quotes, reschedules.',
  },
  {
    Icon: Clock,
    title: '3 · Hear it for yourself',
    body: 'Most people decide in under two minutes. Then book your real demo.',
  },
];

export default function TryItPage() {
  return (
    <>
      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge label="Live demo · no signup" variant="cyan" />
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.04]">
                Skip the video.{' '}
                <span className="text-brand-purple">Call the AI</span>{' '}
                yourself.
              </h1>
              <p className="font-body text-white/80 text-lg max-w-2xl leading-relaxed">
                Pick up your phone, dial the number, and have a real
                conversation with the Implenix agent — configured as a
                sample HVAC receptionist named Ava. No form. No signup.
                Just talk.
              </p>

              <a
                href={DEMO_HREF}
                data-cta-location="try-it-hero"
                data-cta-type="primary"
                className="mt-2 group inline-flex items-center gap-3 bg-brand-purple text-white font-heading text-2xl md:text-3xl px-6 py-4 rounded-sm hover:opacity-90 self-start"
              >
                <Phone size={22} />
                <span className="font-mono">{DEMO_NUMBER}</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-[11px] font-mono uppercase tracking-widest text-white/45">
                ▸ Tap on mobile to dial · standard carrier rates apply
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-6 border-t border-brand-purple/15">
                {STEPS.map(({ Icon, title, body }) => (
                  <div
                    key={title}
                    className="bg-black border border-brand-purple/20 p-4 flex flex-col gap-2"
                  >
                    <span className="w-8 h-8 border border-brand-cyan/30 bg-brand-dark flex items-center justify-center">
                      <Icon size={14} className="text-brand-cyan" />
                    </span>
                    <p className="font-heading text-white text-sm">{title}</p>
                    <p className="text-xs font-body text-white/65 leading-relaxed">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <CodeWindow
                title="northwind-hvac.demo-line.log"
                lines={SAMPLE_TRANSCRIPT}
                caption="Sample of a recent demo call · 18 seconds in"
              />
              <div className="mt-5 border border-brand-cyan/30 bg-black p-5 flex flex-col gap-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan flex items-center gap-1.5">
                  <ShieldCheck size={11} /> Ava knows
                </span>
                <ul className="text-sm font-body text-white/85 grid grid-cols-2 gap-y-2 gap-x-4">
                  <li>· HVAC pricing</li>
                  <li>· Service area</li>
                  <li>· Emergency triage</li>
                  <li>· Tech availability</li>
                  <li>· Booking rules</li>
                  <li>· Transfer logic</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Badge label="Heard enough?" variant="purple" />
            <h2 className="font-heading text-3xl md:text-5xl mt-5 leading-[1.05]">
              Now book the real demo for your business.
            </h2>
            <p className="mt-4 font-body text-white/75 max-w-xl">
              We will configure an Implenix agent against your industry, run
              it on a test number, and walk you through what we built.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Link
              href="/contact"
              data-cta-location="try-it-bottom"
              data-cta-type="primary"
              className="inline-flex items-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
            >
              Book my real demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
