// Centralized lead-capture config — Calendly URL + agent phone number.
// Both use env vars when set (NEXT_PUBLIC_CALENDLY_URL,
// NEXT_PUBLIC_AGENT_PHONE, NEXT_PUBLIC_AGENT_PHONE_DISPLAY) and fall
// back to the production defaults hardcoded here.

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  'https://calendly.com/implenix/consultation-call';

export const AGENT_PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_AGENT_PHONE_DISPLAY || '(863) 417-1726';

// Stripped to digits-only (with leading +) for tel: links. Defaults to
// the production Implenix agent number so PhoneCTA / /try-it / nav all
// wire up immediately without waiting on Vercel env vars.
export const AGENT_PHONE_TEL = (
  process.env.NEXT_PUBLIC_AGENT_PHONE || '+18634171726'
).replace(/[^\d+]/g, '');

export const HAS_REAL_PHONE = AGENT_PHONE_TEL.length >= 7;
