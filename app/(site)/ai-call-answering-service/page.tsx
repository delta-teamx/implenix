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
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="What it is"
              title="The AI alternative to a traditional call answering service"
            />
            <div className="mt-8 flex flex-col gap-5 font-body text-white/80 text-base lg:text-lg leading-relaxed">
              <p>
                A call answering service handles your inbound business
                phone — picking up calls, taking messages, routing the
                ones that need a human. Traditional answering services
                use human operators reading from your script, billed per
                call or per minute. They work, within constraints: cost
                rises with volume, after-hours coverage is premium-priced
                or absent, integrations are usually one-way email
                summaries, and operator quality drifts over time.
              </p>
              <p>
                An AI call answering service is the same job — answer,
                qualify, take a message or book, transfer when needed —
                with different operating economics. Implenix runs as a
                deployed AI agent on your business number, picks up every
                call within one ring, follows your defined script, and
                writes the outcome back to your CRM during the call.
                Coverage is continuous. Concurrency is unbounded. Cost is
                fixed at $297-$997/month regardless of call volume.
              </p>
              <p>
                For most local businesses replacing or augmenting a
                traditional answering service, the AI delivers the same
                practical outcomes (every call answered, intake captured,
                bookings made, urgent calls routed) at a fraction of the
                cost — and adds capability the traditional service did not
                have, like real-time CRM sync, live calendar booking, and
                no premium for after-hours.
              </p>
            </div>
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
