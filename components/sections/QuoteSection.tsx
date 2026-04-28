import { SectionHeader } from '@/components/common/SectionHeader';
import { QuoteBlock } from '@/components/common/QuoteBlock';

export function QuoteSection() {
  return (
    <section className="bg-black border-t border-brand-purple/15">
      <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Owner perspective"
            title="What deploying Implenix actually feels like."
          />
        </div>
        <div className="lg:col-span-7">
          {/* REPLACE WITH REAL OWNER QUOTE */}
          <QuoteBlock
            quote="The phones used to dictate my day. Now they don't. Every call gets answered, every job gets booked, and my team only sees calls that actually need them."
            author="PLACEHOLDER OWNER"
            role="Multi-location HVAC operator · 22 techs"
          />
        </div>
      </div>
    </section>
  );
}
