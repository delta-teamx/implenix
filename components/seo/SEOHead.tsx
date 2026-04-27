import { SchemaOrg } from './SchemaOrg';

type Props = {
  jsonLd?: unknown[];
};

// Per-page <head> additions. Title/description/OG tags are set via the App
// Router metadata API in each page; this component handles JSON-LD injection.
export function SEOHead({ jsonLd = [] }: Props) {
  if (!jsonLd.length) return null;
  return <SchemaOrg schema={jsonLd} />;
}
