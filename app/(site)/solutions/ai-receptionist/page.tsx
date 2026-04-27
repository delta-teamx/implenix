import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock,
  FileText,
  PhoneForwarded,
  CalendarCheck,
  RefreshCw,
  Mic,
} from 'lucide-react';
import { AudioPlayer } from '@/components/common/AudioPlayer';
import { LeadForm } from '@/components/common/LeadForm';
import { RelatedContent } from '@/components/common/RelatedContent';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { faqSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

const FEATURES = [
  { Icon: Clock, label: 'Always-on 24/7 answering' },
  { Icon: FileText, label: 'Custom call scripts per industry' },
  { Icon: PhoneForwarded, label: 'Live transfer to human when needed' },
  { Icon: CalendarCheck, label: 'Appointment booking directly to calendar' },
  { Icon: RefreshCw, label: 'Full CRM sync after every call' },
  { Icon: Mic, label: 'Call recording and transcript log' },
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
      <section className="grid-bg">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
            [ solution // ai receptionist ]
          </span>
          <h1 className="font-heading text-4xl md:text-6xl mt-4 max-w-4xl leading-tight">
            AI Receptionist for{' '}
            <span className="text-brand-purple">Local Businesses</span>
          </h1>
          <p className="mt-6 font-body text-lg text-white/80 max-w-3xl">
            Never miss an inbound call. Never lose a qualified lead. The
            Implenix AI receptionist handles every call with a custom script
            built for your industry.
          </p>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/20">
        <div className="max-w-content mx-auto px-6 py-20">
          <h2 className="font-heading text-3xl md:text-4xl">What it does</h2>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ Icon, label }) => (
              <li
                key={label}
                className="border border-brand-purple/20 p-5 flex items-start gap-3"
              >
                <Icon size={22} className="text-brand-cyan shrink-0 mt-0.5" />
                <span className="font-body text-white text-sm">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">Hear it for yourself</h2>
            <p className="mt-4 text-white/70 font-body">
              A 90-second sample of an Implenix agent handling a real-world call.
            </p>
          </div>
          <AudioPlayer label="Demo: HVAC inbound emergency call" />
        </div>
      </section>

      <section className="bg-black">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">Pricing</h2>
            <p className="mt-4 font-body text-white/80 max-w-md">
              Custom pricing based on call volume and industry. Most clients
              are net-positive within the first 30 days.
            </p>
            <Link
              href="/contact"
              data-cta-location="solutions-pricing"
              data-cta-type="primary"
              className="mt-6 inline-flex bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
            >
              Get a Quote
            </Link>
          </div>
          <div className="border border-brand-cyan/30 bg-brand-dark p-6">
            <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
              [ what is included ]
            </span>
            <ul className="mt-4 space-y-2 font-body text-sm text-white/85">
              <li>Dedicated agent build with industry-specific script</li>
              <li>Phone number provisioning and SIP routing</li>
              <li>CRM and calendar integration</li>
              <li>Call recording, transcripts, and reporting</li>
              <li>Ongoing tuning and optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20">
          <h2 className="font-heading text-3xl md:text-4xl">Frequently asked</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {FAQS.map((f) => (
              <div key={f.question} className="border border-brand-purple/20 p-5">
                <p className="font-heading text-white text-lg">{f.question}</p>
                <p className="mt-2 font-body text-sm text-white/75 leading-relaxed">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">
              Get a custom Implenix demo
            </h2>
            <p className="mt-4 font-body text-white/75 max-w-md">
              We will run a live test against your business and walk you
              through the agent end to end.
            </p>
          </div>
          <div className="border border-brand-purple/30 bg-brand-dark p-6">
            <LeadForm variant="demo" ctaLocation="solutions-ai-receptionist" />
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 pb-16">
          <RelatedContent topic="AI Receptionist" type="industry" />
        </div>
      </section>
    </>
  );
}
