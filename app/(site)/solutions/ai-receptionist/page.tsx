import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock,
  FileText,
  PhoneForwarded,
  CalendarCheck,
  RefreshCw,
  Mic,
  ArrowRight,
} from 'lucide-react';
import { AudioPlayer } from '@/components/common/AudioPlayer';
import { GhlForm } from '@/components/common/GhlForm';
import { RelatedContent } from '@/components/common/RelatedContent';
import { Badge } from '@/components/common/Badge';
import { SectionHeader } from '@/components/common/SectionHeader';
import { BentoCard } from '@/components/common/BentoCard';
import { CodeWindow } from '@/components/common/CodeWindow';
import { DividedStats } from '@/components/common/DividedStats';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { faqSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

const FEATURES = [
  {
    Icon: Clock,
    title: 'Always-on 24/7 answering',
    description: 'Inbound calls answered within one ring, every hour of every day.',
    span: 'lg' as const,
    accent: 'purple' as const,
  },
  {
    Icon: FileText,
    title: 'Custom call scripts',
    description: 'Industry-specific dialog tuned with you.',
  },
  {
    Icon: PhoneForwarded,
    title: 'Live transfer',
    description: 'Hand off to a human when the rules say so.',
  },
  {
    Icon: CalendarCheck,
    title: 'Direct calendar booking',
    description: 'Bookings land in the right calendar, with capacity rules respected.',
  },
  {
    Icon: RefreshCw,
    title: 'Full CRM sync',
    description: 'Lead, transcript, recording, and outcome — written back automatically.',
    span: 'lg' as const,
    accent: 'purple' as const,
  },
  {
    Icon: Mic,
    title: 'Recording + transcript',
    description: 'Every call logged and searchable.',
  },
];

const SAMPLE_TRANSCRIPT = [
  { ts: '00:00', speaker: 'system' as const, text: 'Inbound · plumbing emergency' },
  { ts: '00:02', speaker: 'agent' as const, text: 'Riverstone Plumbing — this is Eli. How can I help?' },
  { ts: '00:06', speaker: 'caller' as const, text: 'My basement is flooding. I need someone now.' },
  { ts: '00:09', speaker: 'agent' as const, text: 'I can dispatch a tech immediately. Address?' },
  { ts: '00:13', speaker: 'caller' as const, text: '47 Birch Avenue, apartment 3B.' },
  { ts: '00:18', speaker: 'agent' as const, text: 'Tech en route. ETA 22 minutes. Confirmation by text now.' },
  { ts: '00:22', speaker: 'system' as const, text: 'Job created · CRM updated · tech notified' },
];

const FAQS = [
  {
    question: 'How does the Implenix AI receptionist sound on a call?',
    answer:
      'Natural and on-brand. We tune voice, pacing, and language for your industry. Most callers cannot tell it is not a human.',
  },
  {
    question: 'How quickly can the agent be deployed for my business?',
    answer:
      'A standard deployment takes 7–14 business days, including script tuning, integrations, and live call testing.',
  },
  {
    question: 'Will the agent transfer to a real person when needed?',
    answer:
      'Yes. We define transfer rules with you. Sensitive cases, urgent emergencies, or VIP callers are routed to your team.',
  },
  {
    question: 'Which CRMs and calendars do you support?',
    answer:
      'GoHighLevel, HubSpot, Salesforce, Zoho, Google Calendar, Calendly, plus custom webhooks.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Custom pricing based on call volume and industry. We will quote after a 15-minute discovery call.',
  },
];

export const metadata: Metadata = buildMetadata({
  title: 'AI Receptionist for Local Businesses | Implenix',
  description:
    'The Implenix AI receptionist answers every inbound call, qualifies leads, and books appointments — 24/7, with custom scripts per industry.',
  path: '/solutions/ai-receptionist',
});

export default function AIReceptionistPage() {
  return (
    <>
      <SchemaOrg schema={[faqSchema(FAQS)]} />

      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge label="Solution · AI receptionist" variant="cyan" />
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
                AI receptionist for{' '}
                <span className="text-brand-purple">local businesses</span>
              </h1>
              <p className="font-body text-white/80 text-lg max-w-2xl leading-relaxed">
                Never miss an inbound call. Never lose a qualified lead. The
                Implenix AI receptionist handles every call with a custom
                script built for your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  data-cta-location="solutions-hero"
                  data-cta-type="primary"
                  className="inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
                >
                  Book a Demo <ArrowRight size={16} />
                </Link>
                <Link
                  href="#faq"
                  data-cta-location="solutions-hero"
                  data-cta-type="secondary"
                  className="inline-flex items-center justify-center border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
                >
                  Read FAQ
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <CodeWindow
                title="riverstone-plumbing.call.log"
                lines={SAMPLE_TRANSCRIPT}
                caption="Sample emergency dispatch · 22s end-to-end"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="Capabilities"
            title="Everything the agent does, end-to-end"
            description="Implenix is not a chatbot bolted onto a phone. It is a deployed voice agent integrated with your CRM, calendar, and routing rules."
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
          <SectionHeader
            eyebrow="By the numbers"
            title="What deployments tend to look like"
            badgeVariant="purple"
          />
          <div className="mt-12">
            <DividedStats
              stats={[
                { number: '7–14d', label: 'standard deployment timeline' },
                { number: '24/7', label: 'continuous coverage' },
                { number: '<60s', label: 'average pickup time' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader
              eyebrow="Hear it"
              title="A 90-second sample call"
              description="The Implenix agent handling a real-world inbound. No scripts read like scripts."
            />
          </div>
          <AudioPlayer label="Demo: HVAC inbound emergency call" />
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader
              eyebrow="Pricing"
              title="Custom by volume and industry"
              description="Most clients are net-positive within the first 30 days."
              badgeVariant="purple"
            />
            <Link
              href="/contact"
              data-cta-location="solutions-pricing"
              data-cta-type="primary"
              className="mt-8 inline-flex items-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>
          <div className="border border-brand-cyan/30 bg-black p-6">
            <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
              ▸ what is included
            </span>
            <ul className="mt-4 space-y-3 font-body text-sm text-white/85">
              {[
                'Dedicated agent build with industry-specific script',
                'Phone number provisioning and SIP routing',
                'CRM and calendar integration',
                'Call recording, transcripts, and reporting',
                'Ongoing tuning and optimization',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-cyan mt-2 shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions we hear before deployment"
          />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {FAQS.map((f) => (
              <div key={f.question} className="border border-brand-purple/20 p-6">
                <p className="font-heading text-white text-lg">{f.question}</p>
                <p className="mt-3 font-body text-sm text-white/75 leading-relaxed">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10">
          <SectionHeader
            eyebrow="Get started"
            title="Get a custom Implenix demo"
            description="We will run a live test against your business and walk you through the agent end to end."
            badgeVariant="purple"
          />
          <GhlForm formKey="demo" ctaLocation="solutions-ai-receptionist" height={620} />
        </div>
        <div className="max-w-content mx-auto px-6 pb-16">
          <RelatedContent topic="AI Receptionist" type="industry" />
        </div>
      </section>
    </>
  );
}
