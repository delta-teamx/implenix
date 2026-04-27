import { LogoStrip } from '@/components/common/LogoStrip';

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
      <LogoStrip
        label="Connects to your existing CRM, calendar, and automation stack"
        names={INTEGRATIONS}
      />
    </section>
  );
}
