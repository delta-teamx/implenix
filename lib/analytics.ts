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

// POSTs the form payload to the internal /api/leads route, which forwards to
// CRM_WEBHOOK_URL when configured. Failures are swallowed so the UI can still
// complete its success state — analytics events still fire either way.
export async function submitWebhook(
  data: Record<string, unknown>,
  source: string,
): Promise<void> {
  if (typeof window === 'undefined') return;
  trackEvent('form_submit', { source, ...data });
  try {
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source,
        data,
        page: window.location.pathname,
        ts: new Date().toISOString(),
      }),
      keepalive: true,
    });
  } catch {
    // Never block the success state on a webhook failure.
  }
}
