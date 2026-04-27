import { z } from 'zod';

export const demoFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  businessType: z.string().min(1, 'Select your business type'),
  phone: z
    .string()
    .min(7, 'Enter a valid phone number')
    .regex(/^[+\d\s()-]+$/, 'Phone numbers only'),
  email: z.string().email('Enter a valid email'),
  callVolume: z.enum(['under-100', '100-500', '500-plus'], {
    errorMap: () => ({ message: 'Select a call volume' }),
  }),
});

export type DemoFormValues = z.infer<typeof demoFormSchema>;

export const gateFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
});

export type GateFormValues = z.infer<typeof gateFormSchema>;

export const newsletterFormSchema = z.object({
  email: z.string().email('Enter a valid email'),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  businessType: z.string().min(1, 'Select your business type'),
  message: z.string().min(10, 'Tell us a bit more (10+ characters)'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const lpFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  businessType: z.string().min(1, 'Select your business type'),
});

export type LpFormValues = z.infer<typeof lpFormSchema>;

export const BUSINESS_TYPES = [
  { value: 'hvac', label: 'HVAC' },
  { value: 'dental', label: 'Dental' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'law-firms', label: 'Law Firm' },
  { value: 'plumbing', label: 'Plumbing' },
  { value: 'med-spa', label: 'Med Spa' },
  { value: 'auto-repair', label: 'Auto Repair' },
  { value: 'roofing', label: 'Roofing' },
];
