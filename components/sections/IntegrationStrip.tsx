import { IntegrationLogo } from '@/components/common/IntegrationLogo';

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
    <section className="bg-black">
      <div className="max-w-content mx-auto px-6 py-20">
        <h2 className="font-heading text-2xl md:text-4xl text-white">
          Works with your existing stack
        </h2>
        <p className="font-body text-white/70 mt-3 max-w-xl">
          Implenix connects to every major CRM, calendar, and automation
          platform.
        </p>
        {/* REPLACE PLACEHOLDER BOXES WITH ACTUAL SVG LOGOS WHEN PROVIDED */}
        <div className="mt-10 overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-2">
            {INTEGRATIONS.map((name) => (
              <IntegrationLogo key={name} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
