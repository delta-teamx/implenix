// GoHighLevel form IDs.
//
// REPLACE these placeholder IDs with real GHL form IDs once the forms
// have been built in your GHL sub-account. Form IDs are visible in
// the GHL form builder URL: .../v2/location/.../forms/builder/{FORM_ID}.
//
// You can also override per-environment via NEXT_PUBLIC_GHL_FORM_*.

const env = (key: string, fallback: string) =>
  (process.env[key] as string | undefined) ?? fallback;

export const GHL_FORM_IDS = {
  demo: env('NEXT_PUBLIC_GHL_FORM_DEMO', 'GHL_FORM_ID_DEMO'),
  contact: env('NEXT_PUBLIC_GHL_FORM_CONTACT', 'GHL_FORM_ID_CONTACT'),
  lp: env('NEXT_PUBLIC_GHL_FORM_LP', 'GHL_FORM_ID_LP'),
  industry: env('NEXT_PUBLIC_GHL_FORM_INDUSTRY', 'GHL_FORM_ID_INDUSTRY'),
  caseStudy: env('NEXT_PUBLIC_GHL_FORM_CASESTUDY', 'GHL_FORM_ID_CASESTUDY'),
  newsletter: env('NEXT_PUBLIC_GHL_FORM_NEWSLETTER', 'GHL_FORM_ID_NEWSLETTER'),
  roiGate: env('NEXT_PUBLIC_GHL_FORM_ROI_GATE', 'GHL_FORM_ID_ROI_GATE'),
} as const;

export type GhlFormKey = keyof typeof GHL_FORM_IDS;

// GHL form embed URL pattern. Adjust if your account uses a different
// hostname (e.g., regional or white-labeled sub-account).
export function ghlEmbedUrl(formId: string): string {
  return `https://api.leadconnectorhq.com/widget/form/${formId}`;
}
