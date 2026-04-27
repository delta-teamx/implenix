import {
  PhoneCall,
  ListChecks,
  CalendarCheck,
  Database,
  ShieldCheck,
  Mic,
} from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { BentoCard } from '@/components/common/BentoCard';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black border-t border-brand-purple/15">
      <div className="max-w-content mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="How it works"
          title="Three steps. Zero missed calls."
          description="From the first ring to the CRM update — Implenix handles the entire call cycle without anyone on your team picking up the phone."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-4 gap-5">
          <BentoCard
            Icon={PhoneCall}
            title="01 · AI answers every call"
            description="Your dedicated agent picks up every inbound call within one ring, 24 hours a day, 7 days a week — with a script tuned for your industry."
            span="lg"
            accent="purple"
          >
            <div className="grid grid-cols-3 gap-2 mt-2 text-[10px] uppercase tracking-widest font-mono text-white/55">
              <Cell>Ring 1</Cell>
              <Cell>Connected</Cell>
              <Cell>Greeting played</Cell>
            </div>
          </BentoCard>

          <BentoCard
            Icon={Mic}
            title="Multi-language"
            description="Deploy in English, Spanish, or both. Tone, pacing, and accent tuned for your audience."
          />
          <BentoCard
            Icon={ShieldCheck}
            title="Live transfer"
            description="Defined transfer rules route VIPs and complex cases to the right human in real time."
          />

          <BentoCard
            Icon={ListChecks}
            title="02 · Qualifies and books"
            description="The agent follows your custom script, qualifies the lead, and books the appointment directly into your calendar."
          />
          <BentoCard
            Icon={CalendarCheck}
            title="03 · CRM updates itself"
            description="Every call is logged, every lead is created, every follow-up is scheduled — without you touching anything."
            span="lg"
            accent="purple"
          >
            <div className="grid grid-cols-3 gap-2 mt-2 text-[10px] uppercase tracking-widest font-mono text-white/55">
              <Cell>Lead created</Cell>
              <Cell>Calendar synced</Cell>
              <Cell>Recording stored</Cell>
            </div>
          </BentoCard>

          <BentoCard
            Icon={Database}
            title="Two-way sync"
            description="Bookings, transcripts, recordings, and follow-ups write back to your CRM automatically."
            span="lg"
          />
        </div>
      </div>
    </section>
  );
}

function Cell({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-brand-cyan/25 px-2 py-1 text-center">
      {children}
    </span>
  );
}
