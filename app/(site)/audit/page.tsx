import type { Metadata } from 'next';
import { ShieldCheck, Clock, BarChart } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { buildMetadata } from '@/lib/seo';
import { AuditTool } from './AuditTool';

export const metadata: Metadata = buildMetadata({
  title: 'Free Missed-Call Audit — See Exactly What You Are Losing | Implenix',
  description:
    'Find out how much revenue you are losing to missed calls. Free audit, no software install, runs on industry-grade data and your business profile.',
  path: '/audit',
});

const STEPS = [
  {
    Icon: BarChart,
    title: 'Step 1 · Quick profile',
    body: 'Phone number, industry, average client value. 30 seconds.',
  },
  {
    Icon: Clock,
    title: 'Step 2 · Instant estimate',
    body: 'See the missed-call hit on revenue immediately. No waiting.',
  },
  {
    Icon: ShieldCheck,
    title: 'Step 3 · Full report by email',
    body: 'Annual lost figure, recoverable revenue, and a deployment plan.',
  },
];

export default function AuditPage() {
  return (
    <>
      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="max-w-3xl flex flex-col gap-5">
            <Badge label="Free · Missed-call audit" variant="cyan" />
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.04]">
              See exactly what missed calls{' '}
              <span className="text-brand-purple">cost you</span> last month.
            </h1>
            <p className="font-body text-white/80 text-lg max-w-2xl leading-relaxed">
              Drop in your number, pick your industry, and we will run an
              instant analysis on your inbound call patterns. Get your annual
              lost revenue, recoverable pipeline, and a deployment plan
              tailored to your business.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-16">
          <AuditTool />
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20 grid md:grid-cols-3 gap-5">
          {STEPS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="border border-brand-purple/20 bg-black p-6 flex flex-col gap-3"
            >
              <span className="w-9 h-9 border border-brand-cyan/30 bg-brand-dark flex items-center justify-center">
                <Icon size={16} className="text-brand-cyan" />
              </span>
              <h3 className="font-heading text-lg text-white">{title}</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
