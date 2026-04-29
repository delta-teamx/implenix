import type { Metadata } from 'next';
import { Mail, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { CodeWindow } from '@/components/common/CodeWindow';
import { GhlForm } from '@/components/common/GhlForm';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Talk to Implenix — Book a Demo or Get a Quote',
  description:
    'Tell us about your business. The Implenix team responds within one business day. Book a live demo or scope a deployment.',
  path: '/contact',
});

const SAMPLE_LOG = [
  { ts: '00:00', speaker: 'system' as const, text: 'Implenix audit · contact form submitted' },
  { ts: '00:03', speaker: 'agent' as const, text: 'Hi — calling back about your inquiry. Got 90 seconds?' },
  { ts: '00:07', speaker: 'caller' as const, text: 'Sure. We miss about 40% of inbound calls.' },
  { ts: '00:11', speaker: 'agent' as const, text: 'Walking you through what a deployment looks like for HVAC...' },
  { ts: '00:18', speaker: 'system' as const, text: 'Demo booked · calendar invite sent' },
];

const SUPPORT_BLOCKS = [
  {
    Icon: MessageSquare,
    title: 'Sales',
    body: 'New deployments, demos, scoping calls, and pricing.',
    detail: 'sales@implenix.net',
  },
  {
    Icon: ShieldCheck,
    title: 'Support',
    body: 'Existing customers — agent tuning, integrations, escalations.',
    detail: 'support@implenix.net',
  },
  {
    Icon: Mail,
    title: 'Press / Partners',
    body: 'Media, partner integrations, and analyst inquiries.',
    detail: 'hello@implenix.net',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge label="Talk to Implenix" variant="cyan" />
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.04]">
                Tell us about your business.{' '}
                <span className="text-brand-purple">We will call you back.</span>
              </h1>
              <p className="font-body text-white/80 text-lg max-w-2xl leading-relaxed">
                Submit the form. We respond within one business day with a
                quote, a deployment timeline, and a live demo against your
                current inbound flow.
              </p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-brand-cyan pt-2">
                <Clock size={14} />
                <span>Average response: 4 business hours</span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <CodeWindow
                title="implenix-callback.log"
                lines={SAMPLE_LOG}
                caption="Sample callback flow · form → demo booked"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-[2fr_1fr] gap-10 items-start">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
              ▸ Send a message
            </span>
            <h2 className="font-heading text-2xl md:text-3xl text-white mt-3 mb-8">
              We will reach out within one business day.
            </h2>
            <GhlForm formKey="contact" ctaLocation="contact" height={680} />
          </div>

          <aside className="flex flex-col gap-3">
            {SUPPORT_BLOCKS.map(({ Icon, title, body, detail }) => (
              <div
                key={title}
                className="border border-brand-purple/20 bg-black p-5 flex flex-col gap-2"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 border border-brand-cyan/30 bg-brand-dark flex items-center justify-center">
                    <Icon size={16} className="text-brand-cyan" />
                  </span>
                  <h3 className="font-heading text-lg text-white">{title}</h3>
                </div>
                <p className="text-sm font-body text-white/65 leading-relaxed">
                  {body}
                </p>
                <p className="text-sm font-mono text-brand-cyan break-all">
                  {detail}
                </p>
              </div>
            ))}
            <div className="border-l-[3px] border-brand-purple bg-black p-5 mt-2">
              <p className="font-heading text-white">Office</p>
              <p className="mt-2 text-sm text-white/65 font-body leading-relaxed">
                PLACEHOLDER — Implenix HQ, address to be added before launch.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
