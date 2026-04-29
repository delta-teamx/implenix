import { LogoMarquee } from '@/components/common/LogoMarquee';

const INTEGRATIONS = [
  'GoHighLevel',
  'HubSpot',
  'Salesforce',
  'Zoho',
  'Google Calendar',
  'Calendly',
  'Twilio',
  'Zapier',
  'Make',
  'Stripe',
];

export function IntegrationStrip() {
  return (
    <section className="bg-black border-y border-brand-purple/20">
      <div className="max-w-content mx-auto px-6 py-14 flex flex-col gap-8 items-center">
        <p className="text-xs uppercase tracking-widest text-white/55 font-mono text-center">
          ▸ Connects to your existing CRM, calendar, and automation stack
        </p>
        <div className="w-full">
          <LogoMarquee names={INTEGRATIONS} />
        </div>
      </div>
    </section>
  );
}
