// Centralized lead-capture config — Calendly URL + agent phone number.
// Set these via env (NEXT_PUBLIC_CALENDLY_URL, NEXT_PUBLIC_AGENT_PHONE)
// without touching code. Both have safe fallbacks while the values are
// being provisioned.

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  'https://calendly.com/implenix/consultation-call';

export const AGENT_PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_AGENT_PHONE_DISPLAY ||
  process.env.NEXT_PUBLIC_AGENT_PHONE ||
  '(coming soon)';

// Stripped to digits-only for tel: links. If the env value is the
// "coming soon" placeholder this returns an empty string so the button
// degrades cleanly to a no-op.
export const AGENT_PHONE_TEL = (
  process.env.NEXT_PUBLIC_AGENT_PHONE || ''
).replace(/[^\d+]/g, '');

export const HAS_REAL_PHONE = AGENT_PHONE_TEL.length >= 7;
