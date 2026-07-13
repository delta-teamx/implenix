import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ComparisonTable } from '@/components/common/ComparisonTable';
import { RelatedContent } from '@/components/common/RelatedContent';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { faqSchema, articleSchema, serviceSchema } from '@/lib/schema';
import { buildMetadata, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'What Is an AI Receptionist? Definition | Implenix',
  description:
    'AI receptionist defined: voice agent that answers, qualifies, and books calls 24/7. How it differs from chatbots, IVR, and when to deploy one.',
  path: '/what-is-an-ai-receptionist',
});

const FAQS = [
  {
    question: 'What is an AI receptionist?',
    answer:
      'An AI receptionist is a voice-AI agent that answers your business phone in real time, follows a custom script, qualifies callers, books appointments, and writes the outcome to your CRM. It runs continuously without a human operator on the line and integrates with your calendar and business systems.',
  },
  {
    question: 'How is an AI receptionist different from a chatbot?',
    answer:
      'A chatbot handles text-based conversations on a website or messaging app. An AI receptionist handles spoken phone calls in real time. The technology underneath shares some components (natural language understanding, intent classification) but the operating model and integrations are distinct.',
  },
  {
    question: 'How is it different from an IVR or phone tree?',
    answer:
      'An IVR ("press 1 for sales") routes calls through a menu and is universally hated by customers. An AI receptionist has an actual conversation, qualifies the caller, and resolves the request — booking, intake, transfer — without forcing the caller through a menu.',
  },
  {
    question: 'How is it different from a live answering service?',
    answer:
      'A live answering service uses human operators reading from a script, billed per call or per minute. An AI receptionist runs continuously at fixed monthly cost, handles unlimited concurrent calls, and integrates two-way with your CRM and calendar in real time.',
  },
  {
    question: 'What does an AI receptionist actually do during a call?',
    answer:
      'Picks up within one ring, greets in your brand voice, asks the qualification questions you defined, looks up calendar availability live, books the appointment, writes the contact and booking to your CRM, sends the confirmation by SMS, and routes urgent or complex calls to a human via live transfer.',
  },
  {
    question: 'When does it make sense to deploy one?',
    answer:
      'When you are losing pipeline to missed calls, paying premium rates for after-hours coverage, or burning skilled team members on routine phone work. The break-even is typically clear: if missed-call cost is over $1,500/month, the AI pays for itself.',
  },
  {
    question: 'What industries use AI receptionists today?',
    answer:
      'Local services (HVAC, plumbing, electrical, roofing), professional services (law firms, accountants, marketing agencies), health and wellness (dental, medical, chiropractic, veterinary), beauty (salons, spas, med spas), and home services (cleaning, pest control, landscaping, moving). Implenix ships tuned playbooks for 25 industries.',
  },
  {
    question: 'Is an AI receptionist HIPAA compliant?',
    answer:
      'Implenix is. We sign a BAA, encrypt PHI in transit and at rest, restrict access by role, and follow HIPAA minimum-necessary principles. Other AI receptionists vary — confirm during scoping.',
  },
];

export default function WhatIsAnAIReceptionistPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          articleSchema({
            title: 'What Is an AI Receptionist? Definition + How It Works',
            description:
              'Definition of an AI receptionist, how it works, and how it differs from chatbots, IVR, and live answering services.',
            url: '/what-is-an-ai-receptionist',
            datePublished: new Date().toISOString().slice(0, 10),
            author: SITE_NAME,
          }),
          faqSchema(FAQS),
          serviceSchema({
            name: 'AI Receptionist',
            description:
              'AI receptionist that answers calls, qualifies leads, and books appointments 24/7.',
            serviceType: 'AI Receptionist',
            url: '/what-is-an-ai-receptionist',
          }),
        ]}
      />

      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-20 pb-20 md:pt-24 md:pb-24">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'AI Receptionist', href: '/' },
              { label: 'What Is an AI Receptionist', href: '/what-is-an-ai-receptionist' },
            ]}
            className="mb-8"
          />
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <Badge label="Guide · Definition" variant="cyan" />
              <h1 className="font-heading text-4xl md:text-6xl leading-[1.04]">
                What is an{' '}
                <span className="text-brand-purple">AI receptionist</span>?
              </h1>
              <p className="font-body text-white/80 text-lg max-w-2xl leading-relaxed">
                An AI receptionist is a voice-AI agent that answers your
                business phone in real time, qualifies callers, books
                appointments, and syncs your CRM — without a human operator
                on the line. This guide walks through what it actually is,
                how it differs from related tools, and when to deploy one.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/audit"
                  data-cta-location="what-is-hero"
                  data-cta-type="primary"
                  className="inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
                >
                  Get my free missed-call audit <ArrowRight size={16} />
                </Link>
                <Link
                  href="/try-it"
                  data-cta-location="what-is-hero"
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
              eyebrow="Definition"
              title="An AI receptionist, defined"
            />
            <div className="mt-8 flex flex-col gap-5 font-body text-white/80 text-base lg:text-lg leading-relaxed">
              <p>
                An <strong className="text-white">AI receptionist</strong> is
                purpose-built phone infrastructure for a business. It answers
                inbound calls in real time using conversational voice AI,
                follows a custom script tuned for the business, qualifies
                callers against defined rules, books appointments against the
                business's actual calendar, and writes everything back to
                the CRM during the call. It runs continuously — 24 hours a
                day, 7 days a week — and handles unlimited concurrent calls
                without staffing constraints.
              </p>
              <p>
                The category exists because most businesses lose meaningful
                pipeline to missed calls. Voicemail is silently expensive —
                roughly 75% of callers do not leave a message and instead
                call the next business on Google. Hiring a receptionist
                solves part of the problem at significant cost: a full-time
                hire runs $3,500-$5,000/month for 40 hours of coverage, and
                concurrent calls still get one answered and the rest routed
                to voicemail. Live answering services bridge the gap but
                bill per call or per minute, so cost rises with growth in
                exactly the wrong direction. AI receptionists fill the niche
                that none of those options cover: continuous coverage,
                unlimited concurrency, real-time integration, fixed cost.
              </p>
              <p>
                Underneath, the technology combines several components:
                conversational voice AI for the spoken interaction, natural
                language understanding for caller intent, telephony
                infrastructure (typically SIP) for the actual call routing,
                two-way integration with the business's CRM and calendar,
                and configurable rules for live transfer to a human when
                the call calls for it. The result is an agent that practically
                replaces the front-desk role for routine inbound work, while
                still routing the calls that genuinely need human attention
                to a real person in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="Not the same thing"
            title="AI receptionist vs related tools"
            description="The category gets confused with chatbots, IVRs, virtual assistants, and answering services. Each does something distinct."
            badgeVariant="purple"
          />
          <div className="mt-12">
            <ComparisonTable
              highlightColumn={0}
              columns={[
                'AI Receptionist',
                'Chatbot',
                'IVR',
                'Virtual Assistant',
              ]}
              rows={[
                { label: 'Handles spoken phone calls', cells: [true, false, true, true] },
                { label: 'Conversational (not menu-based)', cells: [true, true, false, true] },
                { label: 'Books appointments live', cells: [true, 'partial', false, true] },
                { label: 'Writes to CRM in real time', cells: [true, 'partial', false, 'partial'] },
                { label: '24/7 concurrent capacity', cells: [true, true, true, false] },
                { label: 'Industry-specific script', cells: [true, 'partial', false, 'partial'] },
                { label: 'Live transfer to human', cells: [true, false, true, true] },
              ]}
            />
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            <DistinctionCard
              label="vs Chatbot"
              note="Chatbots handle text on websites. AI receptionists handle spoken phone calls."
            />
            <DistinctionCard
              label="vs IVR"
              note="IVR is a menu (press 1, press 2). AI receptionists actually converse and resolve the request."
            />
            <DistinctionCard
              label="vs Virtual Assistant"
              note="A VA is a fractional human worker. An AI receptionist is dedicated phone infrastructure."
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="What it does"
            title="The five things an AI receptionist actually does on a call"
            description="The job is concrete, not abstract. Every call follows roughly this shape."
          />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                step: '01',
                title: 'Answers within one ring',
                body: 'Picks up immediately, greets in your brand voice.',
              },
              {
                step: '02',
                title: 'Qualifies the caller',
                body: 'Captures intent, scope, urgency, decision-maker.',
              },
              {
                step: '03',
                title: 'Books or routes',
                body: 'Books against your real calendar or transfers to a human per your rules.',
              },
              {
                step: '04',
                title: 'Syncs your CRM',
                body: 'Lead, transcript, recording, outcome all written back during the call.',
              },
              {
                step: '05',
                title: 'Sends confirmation',
                body: 'Customer gets an SMS or email confirmation before the call ends.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-black border border-brand-purple/20 p-5 flex flex-col gap-3"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan">
                  Step {item.step}
                </span>
                <p className="font-heading text-white text-base">{item.title}</p>
                <p className="text-xs font-body text-white/65 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="When to deploy"
            title="The break-even is usually clear"
            description="A few simple signals tell you whether AI receptionist is the right move now or later."
            badgeVariant="purple"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <div className="border border-brand-cyan/30 bg-black p-6 flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan">
                ▸ Deploy when
              </span>
              <ul className="flex flex-col gap-2.5 mt-2">
                {[
                  'Missed-call cost is meaningful — $1,500+/month in lost pipeline',
                  'You take inbound after hours and currently send to voicemail',
                  'Concurrent calls regularly hit voicemail during peak hours',
                  'Per-call billing with a live answering service is rising with growth',
                  'Hiring a receptionist costs more than the lost-pipeline math justifies',
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2 font-body text-sm text-white/85"
                  >
                    <Check size={14} className="text-brand-cyan mt-0.5 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-white/15 bg-black p-6 flex flex-col gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/55">
                ▸ Wait when
              </span>
              <ul className="flex flex-col gap-2.5 mt-2">
                {[
                  'Inbound volume is genuinely tiny (under 30 calls per month)',
                  'Your competitive positioning depends on a human voice answering',
                  'Most calls are emotionally complex / sensitive (crisis lines, etc.)',
                  'You have no budget tolerance for $300+/month subscription cost',
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2 font-body text-sm text-white/85"
                  >
                    <span className="w-1.5 h-1.5 bg-white/40 mt-2 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
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
            <Badge label="Run the math on your business" variant="purple" />
            <h2 className="font-heading text-3xl md:text-5xl mt-5 leading-[1.05]">
              See what missed calls are costing you right now.
            </h2>
            <p className="mt-4 font-body text-white/75 max-w-xl">
              60-second audit. Industry-grade estimate of your lost pipeline,
              then a deployment plan to recover it.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link
              href="/audit"
              data-cta-location="what-is-bottom"
              data-cta-type="primary"
              className="inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
            >
              Get my audit <ArrowRight size={16} />
            </Link>
            <Link
              href="/"
              data-cta-location="what-is-bottom"
              data-cta-type="secondary"
              className="inline-flex items-center justify-center gap-2 border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
            >
              See the product
            </Link>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 pb-16">
          <RelatedContent
            topic="Keep reading"
            type="resource"
            links={[
              { href: '/how-does-an-ai-receptionist-work', label: 'How does an AI receptionist work?' },
              {
                href: '/ai-receptionist-vs-human-receptionist',
                label: 'AI Receptionist vs Human Receptionist',
              },
              { href: '/pricing', label: 'AI Receptionist pricing' },
            ]}
          />
        </div>
      </section>
    </>
  );
}

function DistinctionCard({ label, note }: { label: string; note: string }) {
  return (
    <div className="bg-black border-l-[3px] border-brand-cyan p-4 flex flex-col gap-1">
      <span className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan">
        {label}
      </span>
      <p className="font-body text-sm text-white/80 leading-relaxed">{note}</p>
    </div>
  );
}
