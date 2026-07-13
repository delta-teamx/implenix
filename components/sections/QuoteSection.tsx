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
          <QuoteBlock
            quote="The best AI employee I have ever hired. It talks to every incoming call, nurtures my leads, books appointments, and sends follow-ups to me and the customer. Thank you Implenix."
            author="Alex"
            role="PA HVAC Experts · 5 trucks, 1 front-desk operator"
          />
        </div>
      </div>
    </section>
  );
}
