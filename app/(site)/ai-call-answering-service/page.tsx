import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  CalendarCheck,
  PhoneForwarded,
  Mic,
  ListChecks,
  ClipboardList,
} from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { SectionHeader } from '@/components/common/SectionHeader';
import { BentoCard } from '@/components/common/BentoCard';
import { CodeWindow } from '@/components/common/CodeWindow';
import { DividedStats } from '@/components/common/DividedStats';
import { RelatedContent } from '@/components/common/RelatedContent';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { faqSchema, articleSchema, serviceSchema } from '@/lib/schema';
import { buildMetadata, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'AI Call Answering Service | 24/7 Pickup, Booking | Implenix',
  description:
    'AI call answering service that picks up every call, captures intake, qualifies callers, and books appointments — without the per-minute billing.',
  path: '/ai-call-answering-service',
});

const FAQS = [
  {
    question: 'What is an AI call answering service?',
    answer:
      'An AI call answering service is a voice-AI agent that handles your inbound business calls — picking up, qualifying the caller, taking a message or booking an appointment, and routing to a human when needed. It replaces traditional human-operated call answering at fixed monthly cost.',
  },
  {
    question: 'How is this different from a traditional answering service?',
    answer:
      'Traditional services use human operators billed per call or per minute. The AI is fixed monthly cost regardless of volume, handles unlimited concurrent calls, integrates two-way with your CRM and calendar, and runs continuously without staffing constraints.',
  },
  {
    question: 'Will it just take a message, or can it actually do things?',
    answer:
      'Both. The agent takes detailed messages with full intake when that is the right outcome, but it can also book appointments live, transfer to a human, dispatch field crews, send confirmations, and update your CRM — depending on what your defined script says.',
  },
  {
    question: 'Can it handle after-hours calls?',
    answer:
      'Yes. 24/7 coverage is included at the same fixed price. No premium upcharge for evenings, weekends, or holidays.',
  },
  {
    question: 'How quickly does it answer?',
    answer:
      'Within one ring. The agent picks up before voicemail engages, on every call, every time. Speed-to-answer is the highest-leverage variable in inbound conversion.',
  },
  {
    question: 'Can callers reach a human if needed?',
    answer:
      'Yes. We define your live-transfer rules during onboarding — VIP allow-list, urgent keywords, sentiment triggers, off-script questions. Flagged calls warm-transfer to your team or backup human service in seconds.',
  },
];

const FEATURES = [
  {
    Icon: Phone,
    title: '24/7 inbound answering',
    description:
      'Every call picked up within one ring. No premium upcharge for after-hours, weekends, or holidays.',
    span: 'lg' as const,
    accent: 'purple' as const,
  },
  {
    Icon: ClipboardList,
    title: 'Detailed message capture',
    description:
      'Full intake on every call — name, contact, reason, urgency, decision-maker, all logged to your CRM.',
  },
  {
    Icon: CalendarCheck,
    title: 'Live appointment booking',
    description:
      'Books real appointments against your real calendar during the call.',
  },
  {
    Icon: ListChecks,
    title: 'Caller qualification',
    description:
      'Captures the variables your team needs to act — service type, location, scope, budget posture.',
  },
  {
    Icon: PhoneForwarded,
    title: 'Live transfer to humans',
    description:
      'VIPs, urgent calls, and complex cases route to a real person in seconds.',
    span: 'lg' as const,
    accent: 'purple' as const,
  },
  {
    Icon: Mic,
    title: 'Recordings + transcripts',
    description:
      'Every call recorded and searchable for spot-checks, training, and compliance.',
  },
];

export default function AICallAnsweringServicePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          articleSchema({
            title: 'AI Call Answering Service',
            description:
              'AI call answering service that handles inbound calls 24/7 with intake, qualification, booking, and live transfer.',
            url: '/ai-call-answering-service',
            datePublished: new Date().toISOString().slice(0, 10),
            author: SITE_NAME,
          }),
          faqSchema(FAQS),
          serviceSchema({
            name: 'AI Call Answering Service',
            description:
              'AI-powered call answering service for businesses replacing traditional human-operated answering services.',
            serviceType: 'AI Call Answering Service',
            url: '/ai-call-answering-service',
          }),
        ]}
      />

      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-20 pb-20 md:pt-24 md:pb-24">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'AI Call Answering Service', href: '/ai-call-answering-service' },
            ]}
            className="mb-8"
          />
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <Badge label="Service · AI call answering" variant="cyan" />
              <h1 className="font-heading text-4xl md:text-6xl leading-[1.04]">
                AI call answering service.{' '}
                <span className="text-brand-purple">Pick up everything.</span>
              </h1>
              <p className="font-body text-white/80 text-lg max-w-2xl leading-relaxed">
                Implenix is an AI call answering service for local
                businesses — every inbound call picked up within one ring,
                qualified against your script, booked or transferred per
                your rules, and synced to your CRM. Fixed monthly cost. No
                per-minute billing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/audit"
                  data-cta-location="answering-service-hero"
                  data-cta-type="primary"
                  className="inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
                >
                  Get my free missed-call audit <ArrowRight size={16} />
                </Link>
                <Link
                  href="/try-it"
                  data-cta-location="answering-service-hero"
                  data-cta-type="secondary"
                  className="inline-flex items-center justify-center gap-2 border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
                >
                  Hear it live
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20">
          <SectionHeader
            eyebrow="What it is"
            title="The AI alternative to a traditional call answering service"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <div className="border border-white/10 bg-black p-6 flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 self-start font-mono text-[10px] uppercase tracking-widest text-white/55 border border-white/15 px-2 py-1">
                Traditional answering service
              </span>
              <ul className="flex flex-col gap-3 mt-1">
                <ModelRow label="Operators" value="Humans on rotating shifts" bad />
                <ModelRow label="Billing" value="Per call or per minute" bad />
                <ModelRow label="After-hours" value="Premium-priced or absent" bad />
                <ModelRow label="Integration" value="One-way email summaries" bad />
                <ModelRow label="Quality" value="Drifts between operators" bad />
                <ModelRow label="Coverage" value="Business hours + limited overflow" bad />
              </ul>
            </div>
            <div className="border-l-[3px] border-brand-cyan bg-black p-6 flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 self-start font-mono text-[10px] uppercase tracking-widest text-brand-cyan border border-brand-cyan/40 px-2 py-1">
                Implenix AI answering
              </span>
              <ul className="flex flex-col gap-3 mt-1">
                <ModelRow label="Operators" value="Deployed AI agent, tuned to your script" good />
                <ModelRow label="Billing" value="Fixed $297-$997/month regardless of volume" good />
                <ModelRow label="After-hours" value="Included at the same price" good />
                <ModelRow label="Integration" value="Live two-way CRM + calendar sync" good />
                <ModelRow label="Quality" value="Identical every call, every shift" good />
                <ModelRow label="Coverage" value="24/7 with unlimited concurrent calls" good />
              </ul>
            </div>
          </div>
          <div className="mt-8 max-w-3xl border-l-[3px] border-brand-purple bg-black p-6">
            <p className="font-body text-white/85 text-base leading-relaxed">
              For most local businesses replacing or augmenting a
              traditional answering service, the AI delivers{' '}
              <span className="text-white font-medium">the same
              practical outcomes at a fraction of the cost</span> — every
              call answered, intake captured, bookings made, urgent
              calls routed — and adds capability the traditional service
              did not have (real-time CRM sync, live calendar booking,
              no after-hours premium).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="Hear it"
            title="An actual call from the answering service"
            description="The same flow runs at noon, midnight, or 3am. No human operator on the other end — and most callers cannot tell."
            badgeVariant="purple"
          />
          <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <CodeWindow
                title="answering-service.log"
                lines={[
                  { ts: '07:42', speaker: 'system', text: 'Inbound call · Saturday 7:42am · Answered in 0 rings' },
                  { ts: '07:42', speaker: 'agent', text: 'Thanks for calling Northside Plumbing, this is Avery. How can I help today?' },
                  { ts: '07:42', speaker: 'caller', text: 'My water heater is leaking everywhere, can someone come out?' },
                  { ts: '07:42', speaker: 'agent', text: "Yes — that qualifies as urgent. Let me get a tech routed. Are you the homeowner, and what's the address?" },
                  { ts: '07:42', speaker: 'caller', text: '17 Oakland Ave, homeowner.' },
                  { ts: '07:42', speaker: 'agent', text: "Got it. Mike is closest — ETA about 50 minutes. I've dispatched him and texted you a confirmation. Anything else right now?" },
                  { ts: '07:43', speaker: 'caller', text: 'No, thank you.' },
                  { ts: '07:43', speaker: 'system', text: 'Call ended · 1m 02s · Tech dispatched · CRM updated · SMS confirmation sent' },
                ]}
                caption="Same call on a per-minute service = ~$2 billable · On Implenix = $0 marginal"
              />
            </div>
            <aside className="lg:col-span-4 flex flex-col gap-4">
              <div className="border border-brand-purple/25 bg-brand-dark p-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan">
                  ▸ What just happened
                </span>
                <p className="mt-3 font-body text-white/85 text-sm leading-relaxed">
                  Saturday morning emergency, picked up in zero rings,
                  qualified the urgency, dispatched the on-call tech, and
                  confirmed via SMS — all in 62 seconds. Zero per-minute
                  charges. Zero callbacks owed.
                </p>
              </div>
              <div className="border border-brand-cyan/25 bg-black p-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-purple">
                  ▸ Coverage
                </span>
                <p className="mt-3 font-heading text-3xl text-white leading-tight">
                  24/7
                </p>
                <p className="mt-2 font-body text-white/70 text-sm">
                  Same fixed price for evenings, weekends, holidays — no upcharge.
                </p>
              </div>
            </aside>
          </div>
          <div className="mt-16">
            <DividedStats
              stats={[
                { number: '<1 ring', label: 'Pickup time on every inbound call, every time' },
                { number: '$0/min', label: 'Per-minute billing — fixed monthly cost regardless of volume' },
                { number: '24/7', label: 'After-hours coverage included at the same price' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="Capabilities"
            title="What an AI call answering service should do"
            description="Beyond just picking up the phone."
            badgeVariant="purple"
          />
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-5">
            {FEATURES.map((f) => (
              <BentoCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {FAQS.map((f) => (
              <div
                key={f.question}
                className="border border-brand-purple/20 bg-black p-6"
              >
                <p className="font-heading text-white text-lg">{f.question}</p>
                <p className="mt-3 font-body text-sm text-white/75 leading-relaxed">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Badge label="Replace per-minute billing" variant="purple" />
            <h2 className="font-heading text-3xl md:text-5xl mt-5 leading-[1.05]">
              See your real numbers before you switch.
            </h2>
            <p className="mt-4 font-body text-white/75 max-w-xl">
              60-second audit. Industry-grade estimate of your missed-call
              cost and what an AI answering service would recover.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link
              href="/audit"
              data-cta-location="answering-service-bottom"
              data-cta-type="primary"
              className="inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
            >
              Get my audit <ArrowRight size={16} />
            </Link>
            <Link
              href="/pricing"
              data-cta-location="answering-service-bottom"
              data-cta-type="secondary"
              className="inline-flex items-center justify-center gap-2 border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
            >
              See pricing
            </Link>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 pb-16">
          <RelatedContent
            topic="Keep reading"
            type="resource"
            links={[
              { href: '/ai-phone-answering-service', label: 'AI Phone Answering Service' },
              {
                href: '/ai-receptionist-vs-answering-service',
                label: 'AI Receptionist vs Answering Service',
              },
              { href: '/24-7-ai-receptionist', label: '24/7 AI Receptionist' },
            ]}
          />
        </div>
      </section>
    </>
  );
}

function ModelRow({
  label,
  value,
  good,
  bad,
}: {
  label: string;
  value: string;
  good?: boolean;
  bad?: boolean;
}) {
  return (
    <li className="flex items-start gap-3 pb-2 border-b border-white/5 last:border-b-0 last:pb-0">
      <span
        className={`mt-1 w-1.5 h-1.5 shrink-0 ${
          good ? 'bg-brand-cyan' : bad ? 'bg-white/25' : 'bg-white/40'
        }`}
      />
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[9px] uppercase tracking-widest text-white/45">
          {label}
        </p>
        <p
          className={`font-body text-sm mt-0.5 leading-snug ${
            good ? 'text-white' : bad ? 'text-white/55' : 'text-white/80'
          }`}
        >
          {value}
        </p>
      </div>
    </li>
  );
}
