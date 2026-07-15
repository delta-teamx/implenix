'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Phone, CalendarCheck } from 'lucide-react';
import {
  AGENT_PHONE_TEL,
  HAS_REAL_PHONE,
} from '@/lib/leadCapture';
import { trackConversion, GA4_EVENTS } from '@/lib/analytics';

export function StickyDemoCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const ratio = scrolled / total;
      if (ratio > 0.35) setVisible(true);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 lg:left-auto lg:right-6 lg:bottom-6 lg:w-[360px] z-40 bg-black border border-brand-purple p-3 sm:p-4 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-heading text-white text-sm">
            Talk to the AI agent now
          </p>
          <p className="text-xs text-white/70 font-body mt-0.5 leading-relaxed">
            Hear it run a real call, or pick a slot on the calendar.
          </p>
        </div>
        <button
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="text-white/60 hover:text-white shrink-0"
        >
          <X size={16} />
        </button>
      </div>
      <div className="flex gap-2">
        {HAS_REAL_PHONE ? (
          <a
            href={`tel:${AGENT_PHONE_TEL}`}
            onClick={() =>
              trackConversion(GA4_EVENTS.agentPhoneClicked, {
                cta_location: 'sticky',
              })
            }
            data-cta-location="sticky-phone"
            data-cta-type="phone"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-brand-purple text-white text-xs font-medium px-3 py-2.5 rounded-sm hover:opacity-90"
          >
            <Phone size={12} /> Call agent
          </a>
        ) : null}
        <Link
          href="/contact"
          data-cta-location="sticky-calendar"
          data-cta-type="calendar"
          className="flex-1 inline-flex items-center justify-center gap-1.5 border border-brand-cyan text-brand-cyan text-xs font-medium px-3 py-2.5 rounded-sm hover:bg-brand-cyan/10"
        >
          <CalendarCheck size={12} /> Book slot
        </Link>
      </div>
    </div>
  );
}
