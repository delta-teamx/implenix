'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactFormSchema,
  type ContactFormValues,
  BUSINESS_TYPES,
} from '@/lib/forms';
import { trackLead, submitWebhook } from '@/lib/analytics';

const inputClass =
  'w-full bg-black border border-brand-purple/30 focus:border-brand-purple text-white px-4 py-3 rounded-sm font-body text-sm placeholder:text-white/40 transition-colors';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await submitWebhook(data, 'contact');
    trackLead('contact');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border-l-[3px] border-brand-cyan bg-brand-dark p-6">
        <p className="font-heading text-brand-cyan text-2xl">Thank you.</p>
        <p className="mt-2 font-body text-white/80">
          A member of the Implenix team will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <Field
        label="Name"
        htmlFor="contact-name"
        error={form.formState.errors.name?.message}
      >
        <input id="contact-name" className={inputClass} {...form.register('name')} />
      </Field>
      <Field
        label="Email"
        htmlFor="contact-email"
        error={form.formState.errors.email?.message}
      >
        <input
          id="contact-email"
          type="email"
          className={inputClass}
          {...form.register('email')}
        />
      </Field>
      <Field
        label="Phone"
        htmlFor="contact-phone"
        error={form.formState.errors.phone?.message}
      >
        <input
          id="contact-phone"
          type="tel"
          className={inputClass}
          {...form.register('phone')}
        />
      </Field>
      <Field
        label="Business Type"
        htmlFor="contact-business"
        error={form.formState.errors.businessType?.message}
      >
        <select
          id="contact-business"
          defaultValue=""
          className={inputClass}
          {...form.register('businessType')}
        >
          <option value="" disabled>Select...</option>
          {BUSINESS_TYPES.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </Field>
      <Field
        label="Message"
        htmlFor="contact-message"
        error={form.formState.errors.message?.message}
        full
      >
        <textarea
          id="contact-message"
          rows={5}
          className={inputClass}
          {...form.register('message')}
        />
      </Field>
      <button
        type="submit"
        data-cta-location="contact"
        data-cta-type="primary"
        disabled={form.formState.isSubmitting}
        className="sm:col-span-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90 disabled:opacity-50"
      >
        Send Message
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  full,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? 'sm:col-span-2' : undefined}>
      <label
        htmlFor={htmlFor}
        className="text-xs uppercase tracking-widest text-white/70 font-body"
      >
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error ? <p className="text-brand-purple text-xs mt-1">{error}</p> : null}
    </div>
  );
}
