import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, MapPin, Phone, Briefcase } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { SectionHeader } from '@/components/common/SectionHeader';
import { MetricGrid } from '@/components/common/MetricGrid';
import { Timeline } from '@/components/common/Timeline';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Implenix — Building AI Calling for Local Business',
  description:
    'Implenix is 10 specialists deploying AI receptionist and automated calling systems for local businesses. Read why we exist and who we are.',
  path: '/about',
});

const PLACEHOLDER_TEAM = Array.from({ length: 10 }, (_, i) => ({
  initials: `T${i + 1}`,
  name: 'PLACEHOLDER NAME',
  role:
    i % 4 === 0
      ? 'Voice AI engineer'
      : i % 4 === 1
        ? 'Implementation lead'
        : i % 4 === 2
          ? 'Customer success'
          : 'Founding team',
  bio: 'PLACEHOLDER BIO — replace with one-line bio.',
}));

const TIMELINE = [
  {
    title: 'Discovery',
    description:
      'We map your current call flow, top intents, and CRM stack in a 30-minute working session.',
  },
  {
    title: 'Agent build',
    description:
      'We assemble your call script, voice, qualification logic, and transfer rules.',
  },
  {
    title: 'Integration',
    description:
      'We connect to your CRM, calendar, and phone routing — and run live tests against your business.',
  },
  {
    title: 'Go-live',
    description:
      'We route real traffic, monitor the first week, and tune scripts based on outcomes.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="max-w-4xl flex flex-col gap-6">
            <Badge label="About Implenix" variant="purple" />
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.04]">
              The 10 people building the{' '}
              <span className="text-brand-cyan">AI calling infrastructure</span>{' '}
              for local business.
            </h1>
            <p className="font-body text-white/80 text-lg max-w-3xl leading-relaxed">
              Implenix exists because local businesses lose deals every day to
              a missed phone call. We design, deploy, and operate the AI voice
              infrastructure that answers, qualifies, and books — every call,
              every hour, without exception.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contact"
                data-cta-location="about-hero"
                data-cta-type="primary"
                className="inline-flex items-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
              >
                Talk to the team <ArrowRight size={16} />
              </Link>
              <Link
                href="/case-studies"
                data-cta-location="about-hero"
                data-cta-type="secondary"
                className="inline-flex items-center gap-2 border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
              >
                See what we have shipped
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="By the numbers"
            title="A small team. A focused stack."
          />
          <div className="mt-12">
            <MetricGrid
              metrics={[
                {
                  Icon: Users,
                  number: '10',
                  label: 'specialists',
                  description: 'Voice engineers, implementers, and customer success.',
                },
                {
                  Icon: Phone,
                  number: '24/7',
                  label: 'coverage',
                  description: 'Continuous call answering across every deployment.',
                },
                {
                  Icon: MapPin,
                  number: '8',
                  label: 'industries',
                  description: 'Verticals with shipped, tuned playbooks.',
                },
                {
                  Icon: Briefcase,
                  number: '7–14d',
                  label: 'deploy cycle',
                  description: 'From kickoff to live traffic in two weeks.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Mission"
              title="Build the voice infrastructure local business runs on."
              badgeVariant="purple"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5 font-body text-white/80 leading-relaxed text-base">
            <p>
              Local businesses are the backbone of the call economy. They run
              on phones — and most of them quietly lose deals every single day
              to a missed inbound. That is the problem worth solving.
            </p>
            <p>
              Implenix is the team that solves it. We design industry-specific
              voice agents, deploy them on real phone lines, and integrate
              them into your CRM, calendar, and dispatch. We do one thing. We
              do it well.
            </p>
            <p>
              We are 10 specialists. We do not aspire to be a platform, a
              marketplace, or a horizontal SaaS. We deploy. We tune. We ship.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="How we work"
              title="Four phases. Two weeks. Live traffic."
            />
          </div>
          <div className="lg:col-span-7">
            <Timeline steps={TIMELINE} />
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="The team"
            title="Ten people. One system."
            description="The full Implenix team. Each member ships customer-facing work."
            badgeVariant="purple"
          />
          {/* REPLACE WITH REAL TEAM PHOTOS AND BIOS */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PLACEHOLDER_TEAM.map((member, idx) => (
              <article
                key={idx}
                className="bg-black border border-brand-purple/20 hover:border-brand-purple transition-colors duration-200 p-5 flex flex-col gap-3"
              >
                <div className="w-12 h-12 bg-brand-purple text-white flex items-center justify-center font-heading text-lg">
                  {member.initials}
                </div>
                <div>
                  <p className="font-heading text-white">{member.name}</p>
                  <p className="font-mono text-[10px] text-brand-cyan uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
                <p className="font-body text-sm text-white/65 leading-relaxed">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Badge label="Work with us" variant="cyan" />
            <h2 className="font-heading text-3xl md:text-5xl mt-5 leading-[1.05]">
              Want Implenix on your phones?
            </h2>
            <p className="mt-4 font-body text-white/75 max-w-xl">
              Book a 15-minute call. We will quote a deployment timeline and
              run a live audit on your current inbound flow.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Link
              href="/contact"
              data-cta-location="about-bottom"
              data-cta-type="primary"
              className="inline-flex items-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
            >
              Book a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
