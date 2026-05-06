'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';

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
      if (ratio > 0.4) setVisible(true);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 lg:left-auto lg:right-6 lg:bottom-6 lg:w-80 z-40 bg-black border border-brand-purple p-4 flex items-center gap-4">
      <div className="flex-1">
        <p className="font-heading text-white text-sm">
          Find out what you're losing
        </p>
        <p className="text-xs text-white/70 font-body mt-0.5">
          Free missed-call audit · 60 seconds.
        </p>
      </div>
      <Link
        href="/audit"
        data-cta-location="sticky"
        data-cta-type="primary"
        className="bg-brand-purple text-white text-xs font-medium px-3 py-2 rounded-sm inline-flex items-center gap-1"
      >
        Audit <ArrowRight size={12} />
      </Link>
      <button
        aria-label="Dismiss"
        onClick={() => setDismissed(true)}
        className="text-white/60 hover:text-white"
      >
        <X size={16} />
      </button>
    </div>
  );
}
