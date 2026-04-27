import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneOutgoing,
  BellRing,
  Clock,
  RefreshCw,
  ListChecks,
  Sparkles,
} from 'lucide-react';
import { AudioPlayer } from '@/components/common/AudioPlayer';
import { LeadForm } from '@/components/common/LeadForm';
import { RelatedContent } from '@/components/common/RelatedContent';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { faqSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

const FEATURES = [
  { Icon: PhoneOutgoing, label: 'Outbound follow-up at the right cadence' },
  { Icon: BellRing, label: 'Appointment reminders and confirmations' },
  { Icon: Clock, label: 'Time-zone aware call windows' },
  { Icon: RefreshCw, label: 'Two-way CRM sync after every call' },
  { Icon: ListChecks, label: 'Custom qualification logic' },
  { Icon: Sparkles, label: 'Re-engagement of cold and lost leads' },
];

const USE_CASES = [
  {
    title: 'New Lead Follow-up',
    body: 'Automatically call new leads within 60 seconds, qualify intent, and book a meeting.',
  },
  {
    title: 'Appointment Reminder',
    body: 'Confirm upcoming appointments, reschedule conflicts, and reduce no-shows.',
  },
  {
    title: 'No-show Re-engagement',
    body: 'Reach back out to no-shows the same day with a friendly path to rebook.',
  },
  {
    title: 'Estimate Follow-up',
    body: 'Follow up on quotes that went cold and route warm replies to your closer.',
  },
];

const FAQS = [
  {
    question: 'How fast can the agent call a new lead?',
    answer:
      'Inside 60 seconds of the lead arriving in your CRM. Speed-to-lead is the single biggest conversion lever.',
  },
  {
    question: 'Can the agent reschedule appointments live?',
    answer:
      'Yes. The agent can offer alternative times pulled from your calendar and write the new booking back.',
  },
  {
    question: 'How do you handle compliance?',
    answer:
      'We respect business hours, state-level call rules, and DNC lists. Your team approves every script.',
  },
  {
    question: 'What is the cap on outbound volume?',
    answer:
      'There is no practical cap. We scale concurrency to match your funnel.',
  },
  {
    question: 'Do callers know they are talking to AI?',
    answer:
      'We disclose where required and keep tone natural everywhere else. Your brand voice is preserved.',
  },
];

export const metadata: Metadata = buildMetadata({
  title: 'AI Follow-up Calls That Close While You Work | Implenix',
  description:
    'Implenix AI follow-up calls qualify new leads, confirm appointments, and re-engage no-shows — automatically, on your CRM.',
  path: '/solutions/ai-followup',
});

export default function AIFollowupPage() {
  return (
    <>
      <SchemaOrg schema={[faqSchema(FAQS)]} />
      <section className="grid-bg">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
            [ solution // ai follow-up ]
          </span>
          <h1 className="font-heading text-4xl md:text-6xl mt-4 max-w-4xl leading-tight">
            AI Follow-up Calls That{' '}
            <span className="text-brand-cyan">Close While You Work</span>
          </h1>
          <p className="mt-6 font-body text-lg text-white/80 max-w-3xl">
            Outbound sequences, lead nurture, appointment reminders, and
            re-engagement campaigns. The Implenix follow-up agent calls every
            lead at the right moment.
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
        <div className="max-w-content mx-auto px-6 py-20">
          <h2 className="font-heading text-3xl md:text-4xl">Use cases</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {USE_CASES.map((u) => (
              <div key={u.title} className="border-l-[3px] border-brand-purple bg-black p-6">
                <h3 className="font-heading text-xl text-white">{u.title}</h3>
                <p className="mt-2 font-body text-sm text-white/75 leading-relaxed">
                  {u.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">Hear a follow-up call</h2>
            <p className="mt-4 text-white/70 font-body">
              A real outbound qualification call routed back to a human closer.
            </p>
          </div>
          <AudioPlayer label="Demo: Real estate lead follow-up" />
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">Pricing</h2>
            <p className="mt-4 font-body text-white/80 max-w-md">
              Custom pricing based on outbound volume and the complexity of your
              workflows.
            </p>
            <Link
              href="/contact"
              data-cta-location="solutions-followup-pricing"
              data-cta-type="primary"
              className="mt-6 inline-flex bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
            >
              Get a Quote
            </Link>
          </div>
          <div className="border border-brand-cyan/30 p-6">
            <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
              [ what is included ]
            </span>
            <ul className="mt-4 space-y-2 font-body text-sm text-white/85">
              <li>Outbound campaign design</li>
              <li>CRM-triggered sequences</li>
              <li>Live transfer to human closer</li>
              <li>Reporting and ongoing optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black">
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

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">
              Get a custom Implenix demo
            </h2>
            <p className="mt-4 font-body text-white/75 max-w-md">
              We will design a follow-up sequence against your funnel and run a
              live test on your number.
            </p>
          </div>
          <div className="border border-brand-purple/30 bg-black p-6">
            <LeadForm variant="demo" ctaLocation="solutions-ai-followup" />
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 pb-16">
          <RelatedContent topic="AI Follow-up" type="industry" />
        </div>
      </section>
    </>
  );
}
