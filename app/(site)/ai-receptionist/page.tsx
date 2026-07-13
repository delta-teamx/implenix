import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Phone,
  CalendarCheck,
  Database,
  PhoneForwarded,
  Mic,
  Clock,
  ShieldCheck,
  Headphones,
} from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { SectionHeader } from '@/components/common/SectionHeader';
import { BentoCard } from '@/components/common/BentoCard';
import { CodeWindow } from '@/components/common/CodeWindow';
import { DividedStats } from '@/components/common/DividedStats';
import { ComparisonTable } from '@/components/common/ComparisonTable';
import { IPhoneMock } from '@/components/common/IPhoneMock';
import { LogoMarquee } from '@/components/common/LogoMarquee';
import { IndustryCard } from '@/components/common/IndustryCard';
import { RelatedContent } from '@/components/common/RelatedContent';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import {
  faqSchema,
  serviceSchema,
  softwareApplicationSchema,
} from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { INDUSTRIES, industryUrl } from '@/lib/industries';

export const metadata: Metadata = buildMetadata({
  title: 'AI Receptionist | Never Miss a Client Call Again | Implenix',
  description:
    'AI receptionist that answers, qualifies, and books every call 24/7. Capture every lead, sync your CRM live, and stop losing clients to voicemail.',
  path: '/ai-receptionist',
});

const FAQS = [
  {
    question: 'What is an AI receptionist?',
    answer:
      'An AI receptionist is a voice-AI agent that answers your business phone in real time, follows a custom script you define, qualifies callers, books appointments, and writes everything back to your CRM and calendar — without a human operator on the line.',
  },
  {
    question: 'How does an AI receptionist work?',
    answer:
      'When a call lands on your business number, the AI picks up within one ring with a natural greeting tuned for your industry. It listens, asks the qualification questions you defined, books against your real calendar, and routes to a human via live transfer when your rules say so. Every call is recorded and logged.',
  },
  {
    question: 'How much does an AI receptionist cost?',
    answer:
      'Implenix plans start at $297/month for solo operators and $597/month for growing teams, billed at a fixed rate regardless of call volume. Compare that to a full-time human receptionist at $3,500–$5,000/month for 40 hours of coverage.',
  },
  {
    question: 'Will my callers know they are talking to an AI?',
    answer:
      'For routine booking, qualification, and intake calls, most callers do not realize. For sensitive or emotionally complex calls, our live-transfer rules route to your team in real time. We disclose AI use where required by jurisdiction.',
  },
  {
    question: 'Which CRMs and calendars does it work with?',
    answer:
      'GoHighLevel, HubSpot, Salesforce, Zoho, Google Calendar, Outlook, Calendly, plus custom webhooks for anything else. Industry-specific integrations are scoped during onboarding.',
  },
  {
    question: 'How long does deployment take?',
    answer:
      'Most deployments go live in 7 to 14 business days. We tune your call script, voice, integrations, and routing rules with you, then run a parallel test period before cutting over real traffic.',
  },
  {
    question: 'Can it handle emergencies and urgent calls?',
    answer:
      'Yes. We define your urgent-criteria rules during scoping (e.g., "burst pipe," "no power," "chest pain"). Flagged emergency calls route to your on-call line, dispatch software, or escalation path within seconds.',
  },
  {
    question: 'Is the AI receptionist HIPAA compliant for medical practices?',
    answer:
      'Yes. We sign a BAA, encrypt PHI in transit and at rest, restrict access by role, and follow HIPAA minimum-necessary principles. Audit logs are available on request.',
  },
];

const FEATURES = [
  {
    Icon: Phone,
    title: '24/7 inbound answering',
    description:
      'Every inbound call answered within one ring, every hour of every day, with a script tuned for your industry.',
    span: 'lg' as const,
    accent: 'purple' as const,
  },
  {
    Icon: CalendarCheck,
    title: 'Live calendar booking',
    description:
      'Books real appointments against your actual availability — Google, Outlook, Calendly, or your industry PMS.',
  },
  {
    Icon: Database,
    title: 'Two-way CRM sync',
    description:
      'Lead, transcript, recording, and outcome write back to your CRM during the call, not the next morning.',
  },
  {
    Icon: PhoneForwarded,
    title: 'Live transfer to human',
    description:
      'Defined rules route VIPs, emergencies, and complex cases to a real person in real time.',
  },
  {
    Icon: Mic,
    title: 'Recordings + transcripts',
    description:
      'Every call recorded, transcribed, and searchable. Your team spot-checks the first 50 then trusts the rest.',
    span: 'lg' as const,
    accent: 'purple' as const,
  },
  {
    Icon: ShieldCheck,
    title: 'Configurable handoff rules',
    description:
      'Allow-listed VIPs, urgent-criteria triggers, and frustration detection — you set the rules, the agent obeys.',
  },
];

const SAMPLE_TRANSCRIPT = [
  { ts: '00:00', speaker: 'system' as const, text: 'Inbound · plumbing emergency · +1 (415) 555-0184' },
  { ts: '00:02', speaker: 'agent' as const, text: 'Riverstone Plumbing, this is Eli. How can I help?' },
  { ts: '00:05', speaker: 'caller' as const, text: 'Pipe burst in my basement. I need someone now.' },
  { ts: '00:09', speaker: 'agent' as const, text: 'Dispatching a tech immediately. Address?' },
  { ts: '00:13', speaker: 'caller' as const, text: '47 Birch Ave, apartment 3B.' },
  { ts: '00:18', speaker: 'agent' as const, text: 'Tech en route. ETA 22 minutes. Confirmation by text now.' },
  { ts: '00:22', speaker: 'system' as const, text: 'Job created · CRM updated · tech notified' },
];

const INTEGRATIONS = [
  'GoHighLevel',
  'HubSpot',
  'Salesforce',
  'Zoho',
  'Google Calendar',
  'Outlook',
  'Calendly',
  'Twilio',
  'Zapier',
  'Make',
];

export default function AIReceptionistPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          softwareApplicationSchema({ ratingValue: 5, ratingCount: 6 }),
          faqSchema(FAQS),
          serviceSchema({
            name: 'AI Receptionist',
            description:
              'AI receptionist that answers, qualifies, and books every inbound call 24/7 for local businesses.',
            serviceType: 'AI Receptionist',
            url: '/ai-receptionist',
          }),
        ]}
      />

      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-20 pb-20 md:pt-24 md:pb-24">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'AI Receptionist', href: '/ai-receptionist' },
            ]}
            className="mb-8"
          />
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge label="AI Receptionist · Implenix" variant="cyan" />
              <h1 className="font-heading text-4xl md:text-6xl lg:text-[5rem] leading-[1.04] tracking-tight">
                AI Receptionist that{' '}
                <span className="text-brand-purple">never misses</span> a client
                call.
              </h1>
              <p className="font-body text-white/80 text-lg max-w-2xl leading-relaxed">
                Implenix is the AI receptionist for local businesses, agencies,
                and professional firms. Answer every inbound call within one
                ring, qualify the lead against your script, book the appointment
                live, and sync your CRM — 24/7, for less than the cost of a
                part-time hire.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/audit"
                  data-cta-location="ai-receptionist-hero"
                  data-cta-type="primary"
                  className="inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
                >
                  Get my free missed-call audit <ArrowRight size={16} />
                </Link>
                <Link
                  href="/try-it"
                  data-cta-location="ai-receptionist-hero"
                  data-cta-type="secondary"
                  className="inline-flex items-center justify-center gap-2 border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
                >
                  Hear the agent live
                </Link>
              </div>
              <dl className="grid grid-cols-3 max-w-lg pt-8 border-t border-brand-purple/15">
                <Stat label="Pickup" value="<1 ring" />
                <Stat label="Coverage" value="24 / 7" />
                <Stat label="Live in" value="7–14 d" />
              </dl>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <IPhoneMock />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20">
          <aside
            data-answer
            data-speakable
            className="max-w-3xl border-l-[3px] border-brand-cyan bg-black p-6 md:p-8 mb-16 flex flex-col gap-3 rounded-r-sm"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan">
              ▸ Quick answer
            </span>
            <p className="font-heading text-white text-xl md:text-2xl leading-snug">
              What is an AI receptionist?
            </p>
            <p className="font-body text-white/85 leading-relaxed text-base md:text-lg">
              An AI receptionist is a voice-AI agent that answers your business
              phone 24/7, holds a natural conversation with the caller,
              qualifies the lead, books appointments live against your
              calendar, and writes every call to your CRM in real time. It
              replaces the missed-call cost of voicemail and the per-minute
              cost of live answering services with fixed monthly pricing —
              typically $297-$697/month — and handles unlimited concurrent
              calls without extra headcount. In 2026 it is indistinguishable
              from a human operator for routine booking, qualification, and
              intake calls.
            </p>
          </aside>
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="What an AI receptionist actually is"
              title="A voice agent that answers, qualifies, and books — without you on the line"
            />
            <div className="mt-8 flex flex-col gap-5 font-body text-white/80 text-base lg:text-lg leading-relaxed">
              <p>
                An AI receptionist is dedicated phone infrastructure for your
                business. Where a human receptionist can answer one call at a
                time during their shift, the AI receptionist answers every
                inbound call within one ring, runs a script tuned for your
                industry, and writes everything back to your CRM in real time.
                Concurrent capacity is unlimited. Coverage is continuous. The
                cost is fixed.
              </p>
              <p>
                The technology underneath is conversational voice AI: natural
                language understanding for caller intent, live calendar lookup
                for appointment booking, two-way integration with your CRM and
                phone routing, and configurable handoff rules that route the
                right calls to a human in real time. The result is the same
                practical outcome you would get from a great senior
                receptionist — appointments booked, leads qualified, callers
                routed correctly — at a price that does not scale with call
                volume.
              </p>
              <p>
                Implenix exists because most local businesses, agencies, and
                professional firms are losing significant pipeline to missed
                calls and voicemail every week. The fix is not another
                automated phone tree or a per-minute answering service. The fix
                is a deployed AI receptionist tuned for your specific call
                profile — and that is what we ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="Capabilities"
            title="What the AI receptionist does, end to end"
            description="Booking, qualification, intake, recording, transfer, sync. Tuned for your industry from day one."
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
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Badge label="How a real call sounds" variant="cyan" />
            <h2 className="font-heading text-3xl md:text-5xl leading-[1.05]">
              22 seconds from incoming call to booked job.
            </h2>
            <p className="font-body text-white/75 leading-relaxed max-w-xl">
              A real-world emergency dispatch handled end-to-end. Caller
              describes the issue, the agent triages, books the dispatch,
              writes the job to your CRM, notifies the tech.
            </p>
            <Link
              href="/try-it"
              data-cta-location="ai-receptionist-transcript"
              data-cta-type="secondary"
              className="inline-flex items-center gap-2 border border-brand-cyan text-brand-cyan font-medium px-5 py-3 rounded-sm hover:bg-brand-cyan/10 self-start"
            >
              Hear it on a real number <ArrowRight size={14} />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <CodeWindow
              title="riverstone-plumbing.call.log"
              lines={SAMPLE_TRANSCRIPT}
              caption="Sample emergency dispatch · 22s end-to-end"
            />
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="Built for"
            title="Industries that run on phone calls"
            description="25 industries with shipped, tuned playbooks. Pick yours."
            badgeVariant="purple"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((industry) => (
              <IndustryCard
                key={industry.slug}
                industry={industry.name}
                painPoint={industry.painPoint}
                href={industryUrl(industry.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="Outcomes"
            title="What deployments tend to deliver"
            description="Conservative across the portfolio. Run the audit to see your specific upside."
          />
          <div className="mt-12">
            <DividedStats
              stats={[
                { number: '<60s', label: 'average pickup time across deployments' },
                { number: '+38%', label: 'qualified bookings inside 30 days' },
                { number: '24/7', label: 'continuous coverage at fixed monthly cost' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-black border-y border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-14 flex flex-col gap-8 items-center">
          <p className="text-xs uppercase tracking-widest text-white/55 font-mono text-center">
            ▸ Native two-way integrations
          </p>
          <div className="w-full">
            <LogoMarquee names={INTEGRATIONS} />
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="vs the alternatives"
            title="AI Receptionist vs other ways to handle calls"
            description="Voicemail loses leads. Hiring is expensive and only covers business hours. Generic IVR cannot pick up a phone."
            badgeVariant="purple"
          />
          <div className="mt-12">
            <ComparisonTable
              highlightColumn={0}
              columns={[
                'Implenix',
                'Receptionist',
                'Answering Service',
                'Voicemail',
              ]}
              rows={[
                { label: '24/7 coverage', cells: [true, false, 'partial', false] },
                { label: 'Direct calendar booking', cells: [true, true, 'partial', false] },
                { label: 'Two-way CRM sync', cells: [true, 'partial', false, false] },
                { label: 'Concurrent calls', cells: ['unlimited', '1', 'staff-bound', 'n/a'] },
                { label: 'Recordings + transcripts', cells: [true, false, 'partial', 'partial'] },
                { label: 'Industry-specific script', cells: [true, true, 'partial', false] },
                {
                  label: 'Monthly cost',
                  cells: ['from $297', '$3,500–$5,000', '$300–$1,500', '$0'],
                },
              ]}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/ai-receptionist-vs-answering-service"
              className="inline-flex items-center gap-1.5 text-sm text-brand-cyan hover:underline"
            >
              vs Answering Service <ArrowRight size={14} />
            </Link>
            <Link
              href="/ai-receptionist-vs-voicemail"
              className="inline-flex items-center gap-1.5 text-sm text-brand-cyan hover:underline"
            >
              vs Voicemail <ArrowRight size={14} />
            </Link>
            <Link
              href="/ai-receptionist-vs-ivr-system"
              className="inline-flex items-center gap-1.5 text-sm text-brand-cyan hover:underline"
            >
              vs IVR <ArrowRight size={14} />
            </Link>
            <Link
              href="/ai-receptionist-vs-call-center"
              className="inline-flex items-center gap-1.5 text-sm text-brand-cyan hover:underline"
            >
              vs Call Center <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <Badge label="Pricing" variant="purple" />
            <h2 className="font-heading text-3xl md:text-4xl mt-5 leading-[1.05]">
              Cheaper than a receptionist. Better at the job.
            </h2>
            <p className="mt-4 font-body text-white/75 leading-relaxed max-w-md">
              A human receptionist runs $3,500–$5,000/month for 40 hours of
              coverage. Implenix runs 24/7, never misses a call, and starts at
              $297/month at fixed cost.
            </p>
            <Link
              href="/pricing"
              data-cta-location="ai-receptionist-pricing"
              data-cta-type="primary"
              className="mt-6 inline-flex items-center gap-2 bg-brand-purple text-white font-medium px-5 py-3 rounded-sm hover:opacity-90 self-start"
            >
              See full pricing <ArrowRight size={14} />
            </Link>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-3">
            <PricingTeaser tier="Solo" price="$297" target="solo operators" />
            <PricingTeaser
              tier="Growing"
              price="$597"
              target="teams of 2–10"
              highlight
            />
            <PricingTeaser
              tier="Established"
              price="$997"
              target="multi-location"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked"
            description="The most common questions buyers ask before deployment."
          />
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
            <Badge label="Stop losing calls" variant="purple" />
            <h2 className="font-heading text-3xl md:text-5xl mt-5 leading-[1.05]">
              Find out what missed calls cost you last month.
            </h2>
            <p className="mt-4 font-body text-white/75 max-w-xl">
              60-second audit. Industry-grade estimate of your lost pipeline,
              then a deployment plan to recover it.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link
              href="/audit"
              data-cta-location="ai-receptionist-bottom"
              data-cta-type="primary"
              className="inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
            >
              Get my audit <ArrowRight size={16} />
            </Link>
            <Link
              href="/try-it"
              data-cta-location="ai-receptionist-bottom"
              data-cta-type="secondary"
              className="inline-flex items-center justify-center gap-2 border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
            >
              Hear it live
            </Link>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 pb-16">
          <RelatedContent
            topic="Keep reading"
            type="resource"
            links={[
              { href: '/pricing', label: 'AI Receptionist pricing' },
              { href: '/preview/dashboard', label: 'Inside the Implenix dashboard' },
              { href: '/case-studies', label: 'Verified case studies' },
            ]}
          />
        </div>
      </section>
    </>
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

function PricingTeaser({
  tier,
  price,
  target,
  highlight,
}: {
  tier: string;
  price: string;
  target: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`bg-black p-5 flex flex-col gap-2 border ${
        highlight ? 'border-brand-purple' : 'border-brand-purple/20'
      }`}
    >
      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan">
        {tier}
      </span>
      <p className="font-heading text-3xl text-white leading-none">
        {price}
        <span className="text-sm text-white/55 font-body"> /mo</span>
      </p>
      <p className="text-xs font-body text-white/65 mt-1">For {target}</p>
    </div>
  );
}
