import { SectionHeader } from '@/components/common/SectionHeader';
import { LeadForm } from '@/components/common/LeadForm';

export function DemoCTASection() {
  return (
    <section
      id="demo-form"
      className="bg-brand-dark border-t border-brand-purple/20"
    >
      <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="See it live"
            title="See the Implenix agent work in real time"
            description="We will set up a live demo against your business profile and walk you through the agent end-to-end."
          />
          <p className="mt-8 text-xs uppercase tracking-widest text-brand-cyan font-mono">
            ▸ A member of the Implenix team will call you within 24 hours.
          </p>
        </div>
        <div className="lg:col-span-7 bg-black border border-brand-purple/30 p-6 md:p-8">
          {/* CONNECT TO CALENDLY OR CRM ENDPOINT */}
          <LeadForm variant="demo" ctaLocation="homepage-bottom" />
        </div>
      </div>
    </section>
  );
}
