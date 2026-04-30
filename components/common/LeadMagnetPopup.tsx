'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Download, ShieldCheck } from 'lucide-react';
import { Badge } from './Badge';
import { trackLead, submitWebhook } from '@/lib/analytics';

// Trigger thresholds
const SHOW_AFTER_MS = 25_000;
const SHOW_AFTER_SCROLL = 0.5;
const PAGES_BEFORE_SHOW = 2;

// Cooldowns
const COOLDOWN_DISMISS_MS = 4 * 60 * 60 * 1000; // 4 hours after dismiss
const COOLDOWN_SUBSCRIBE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days after submit

// Storage keys
const KEY_DISMISSED = 'implenix.lead_dismissed_at';
const KEY_SUBSCRIBED = 'implenix.lead_subscribed_at';
const KEY_PAGES = 'implenix.lead_pages_viewed';

// Pages where the popup is intentionally suppressed — already
// conversion-focused or noindexed.
const EXCLUDED_PREFIXES = ['/lp/', '/contact', '/docs/', '/api/'];

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
});
type Values = z.infer<typeof formSchema>;

function readTs(key: string): number | null {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(key);
  if (!raw) return null;
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

function shouldShow(): boolean {
  if (typeof window === 'undefined') return false;
  const subbed = readTs(KEY_SUBSCRIBED);
  if (subbed && Date.now() - subbed < COOLDOWN_SUBSCRIBE_MS) return false;
  const dismissed = readTs(KEY_DISMISSED);
  if (dismissed && Date.now() - dismissed < COOLDOWN_DISMISS_MS) return false;
  return true;
}

export function LeadMagnetPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const triggeredRef = useRef(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const isExcluded = EXCLUDED_PREFIXES.some((p) => pathname?.startsWith(p));

  // Bump page counter on every route change so the popup can fire on
  // page-N navigation if other triggers haven't kicked in yet.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const current = Number(window.localStorage.getItem(KEY_PAGES) ?? '0');
    const next = current + 1;
    window.localStorage.setItem(KEY_PAGES, String(next));

    if (isExcluded) return;
    if (triggeredRef.current) return;
    if (!shouldShow()) return;

    if (next >= PAGES_BEFORE_SHOW) {
      // Slight delay so the page has time to paint first
      const t = window.setTimeout(() => {
        if (!triggeredRef.current && shouldShow()) {
          triggeredRef.current = true;
          setOpen(true);
        }
      }, 1500);
      return () => window.clearTimeout(t);
    }
  }, [pathname, isExcluded]);

  // Time + scroll + exit-intent triggers
  useEffect(() => {
    if (isExcluded) return;
    if (triggeredRef.current) return;
    if (!shouldShow()) return;

    const fire = (reason: string) => {
      if (triggeredRef.current) return;
      if (!shouldShow()) return;
      triggeredRef.current = true;
      setOpen(true);
      // Surface why it fired in dataLayer for analytics
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'lead_popup_open',
          trigger: reason,
        });
      }
    };

    const timer = window.setTimeout(
      () => fire('time'),
      SHOW_AFTER_MS,
    );

    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const ratio = window.scrollY / max;
      if (ratio >= SHOW_AFTER_SCROLL) {
        fire('scroll');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Exit-intent: only on devices with a real cursor
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    let onMouseLeave: ((e: MouseEvent) => void) | null = null;
    if (supportsHover) {
      onMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) fire('exit-intent');
      };
      document.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      if (onMouseLeave) document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isExcluded]);

  // Keyboard + body scroll lock when open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleDismiss();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleDismiss = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(KEY_DISMISSED, String(Date.now()));
    }
    setOpen(false);
  };

  const handleSuccess = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(KEY_SUBSCRIBED, String(Date.now()));
    }
    setSubmitted(true);
  };

  if (isExcluded) return null;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="popup"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-magnet-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center px-4"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={handleDismiss}
            className="absolute inset-0 bg-black/70"
          />
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-md bg-brand-dark border border-brand-purple/40 grid-bg"
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Dismiss"
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-white/55 hover:text-white"
            >
              <X size={18} />
            </button>

            {submitted ? <SubmittedView onClose={handleDismiss} /> : <OfferView onSuccess={handleSuccess} />}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function OfferView({ onSuccess }: { onSuccess: () => void }) {
  const form = useForm<Values>({ resolver: zodResolver(formSchema) });
  const onSubmit = async (data: Values) => {
    await submitWebhook({ ...data, magnet: 'missed-call-playbook' }, 'lead-popup');
    trackLead('lead-popup');
    onSuccess();
  };
  return (
    <div className="p-7 flex flex-col gap-5">
      <Badge label="Free · Implenix Playbook" variant="cyan" />
      <h2
        id="lead-magnet-heading"
        className="font-heading text-2xl md:text-3xl text-white leading-snug"
      >
        Stop losing deals to missed calls.
      </h2>
      <p className="font-body text-sm text-white/75 leading-relaxed">
        Get the 7-step Local Business Missed-Call Recovery Playbook —
        the same framework Implenix uses on every deployment. Free PDF,
        delivered to your inbox in under a minute.
      </p>

      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <Field label="First name" htmlFor="lm-name" error={form.formState.errors.name?.message}>
          <input
            id="lm-name"
            autoComplete="given-name"
            className="w-full bg-black border border-brand-purple/30 focus:border-brand-purple text-white px-3 py-2.5 rounded-sm font-body text-sm placeholder:text-white/40"
            {...form.register('name')}
          />
        </Field>
        <Field label="Work email" htmlFor="lm-email" error={form.formState.errors.email?.message}>
          <input
            id="lm-email"
            type="email"
            autoComplete="email"
            className="w-full bg-black border border-brand-purple/30 focus:border-brand-purple text-white px-3 py-2.5 rounded-sm font-body text-sm placeholder:text-white/40"
            {...form.register('email')}
          />
        </Field>
        <button
          type="submit"
          data-cta-location="lead-popup"
          data-cta-type="gate"
          disabled={form.formState.isSubmitting}
          className="mt-1 inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-5 py-3 rounded-sm hover:opacity-90 disabled:opacity-50"
        >
          <Download size={16} /> Send me the playbook
        </button>
      </form>

      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/45">
        <ShieldCheck size={12} className="text-brand-cyan" />
        No spam · unsubscribe anytime
      </div>
    </div>
  );
}

function SubmittedView({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-7 flex flex-col gap-5">
      <Badge label="Sent" variant="cyan" />
      <h2 className="font-heading text-2xl md:text-3xl text-white leading-snug">
        Check your inbox.
      </h2>
      <p className="font-body text-sm text-white/75 leading-relaxed">
        The Implenix Missed-Call Recovery Playbook is on its way. Give it
        60 seconds — if it does not land, peek in spam.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="inline-flex items-center justify-center gap-2 border border-brand-cyan text-brand-cyan font-medium px-5 py-3 rounded-sm hover:bg-brand-cyan/10 self-start"
      >
        Keep browsing <ArrowRight size={14} />
      </button>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-[10px] uppercase tracking-widest text-white/65 font-mono"
      >
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error ? <p className="text-brand-purple text-xs mt-1">{error}</p> : null}
    </div>
  );
}
