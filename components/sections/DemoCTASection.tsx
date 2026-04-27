import { LeadForm } from '@/components/common/LeadForm';

export function DemoCTASection() {
  return (
    <section id="demo-form" className="bg-black border-t border-brand-purple/20">
      <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-heading text-3xl md:text-5xl text-white">
            See the Implenix agent work in real time
          </h2>
          <p className="mt-4 font-body text-white/70 max-w-md">
            We will set up a live demo against your business profile and walk
            you through the agent end-to-end.
          </p>
          <p className="mt-6 text-xs uppercase tracking-widest text-brand-cyan font-mono">
            A member of the Implenix team will call you within 24 hours.
          </p>
        </div>
        <div className="lg:col-span-7 bg-brand-dark border border-brand-purple/30 p-6 md:p-8">
          {/* CONNECT TO CALENDLY OR CRM ENDPOINT */}
          <LeadForm variant="demo" ctaLocation="homepage-bottom" />
        </div>
      </div>
    </section>
  );
}
