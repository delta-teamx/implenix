// GTM, Meta Pixel, and Google Ads conversion helpers.
// Replace placeholder IDs in /app/layout.tsx before launch.

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, unknown>;

export function trackEvent(eventName: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

export function trackConversion(type: string): void {
  if (typeof window === 'undefined') return;
  // Google Ads conversion event placeholder.
  // <!-- GOOGLE ADS CONVERSION: REPLACE AW-XXXXXXXXXX/CONVERSION_LABEL -->
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-XXXXXXXXXX/CONVERSION_LABEL',
      type,
    });
  }
  trackEvent('conversion', { type });
}

export function trackLead(source: string): void {
  if (typeof window === 'undefined') return;
  // Meta Pixel Lead event placeholder.
  // <!-- META PIXEL: REPLACE 000000000000000 -->
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', { source });
  }
  trackEvent('lead', { source });
}

export async function submitWebhook(
  payload: Record<string, unknown>,
  source: string,
): Promise<void> {
  // <!-- CONNECT FORM SUBMISSION TO CRM ENDPOINT HERE -->
  // Replace with fetch('/api/leads') or direct webhook URL when wiring CRM.
  if (typeof window === 'undefined') return;
  trackEvent('form_submit', { source, ...payload });
}
