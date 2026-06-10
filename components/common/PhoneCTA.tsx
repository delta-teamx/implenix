'use client';

import { Phone } from 'lucide-react';
import {
  AGENT_PHONE_DISPLAY,
  AGENT_PHONE_TEL,
  HAS_REAL_PHONE,
} from '@/lib/leadCapture';
import { trackConversion, GA4_EVENTS } from '@/lib/analytics';

type Variant = 'primary' | 'secondary' | 'inline' | 'nav';

type Props = {
  ctaLocation: string;
  variant?: Variant;
  label?: string;
  className?: string;
};

// Click-to-call CTA backed by the agent phone env var. The button
// dials the AI receptionist directly so prospects can experience the
// agent before booking. When the phone env var is not set yet, the
// button degrades to a non-interactive "coming soon" badge so layout
// does not collapse.
export function PhoneCTA({
  ctaLocation,
  variant = 'primary',
  label,
  className = '',
}: Props) {
  const computedLabel =
    label ?? (HAS_REAL_PHONE ? `Call our agent · ${AGENT_PHONE_DISPLAY}` : 'Live phone coming soon');

  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-sm transition-colors';

  const styles: Record<Variant, string> = {
    primary: 'bg-brand-purple text-white px-6 py-3 hover:opacity-90',
    secondary:
      'border border-brand-cyan text-brand-cyan px-6 py-3 hover:bg-brand-cyan/10',
    inline:
      'text-brand-cyan text-sm font-mono uppercase tracking-widest hover:opacity-80',
    nav: 'bg-brand-cyan/10 border border-brand-cyan text-brand-cyan px-4 py-2 text-sm hover:bg-brand-cyan/20',
  };

  const onClick = () => {
    trackConversion(GA4_EVENTS.agentPhoneClicked, {
      cta_location: ctaLocation,
      has_phone: HAS_REAL_PHONE,
    });
  };

  if (!HAS_REAL_PHONE) {
    return (
      <span
        className={`${base} ${styles[variant]} ${className} opacity-60 cursor-not-allowed`}
        aria-disabled="true"
        data-cta-location={ctaLocation}
        data-cta-type="phone-pending"
      >
        <Phone size={variant === 'inline' || variant === 'nav' ? 14 : 16} />
        {computedLabel}
      </span>
    );
  }

  return (
    <a
      href={`tel:${AGENT_PHONE_TEL}`}
      onClick={onClick}
      data-cta-location={ctaLocation}
      data-cta-type="phone"
      className={`${base} ${styles[variant]} ${className}`}
    >
      <Phone size={variant === 'inline' || variant === 'nav' ? 14 : 16} />
      {computedLabel}
    </a>
  );
}
