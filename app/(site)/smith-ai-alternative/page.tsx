import type { Metadata } from 'next';
import { CompetitorAlternativePage } from '@/components/seo/CompetitorAlternativePage';
import { getCompetitorProfile } from '@/lib/seo/competitors';
import { buildMetadata } from '@/lib/seo';

const profile = getCompetitorProfile('smith-ai')!;

export const metadata: Metadata = buildMetadata({
  title: profile.metaTitle,
  description: profile.metaDescription,
  path: `/${profile.routeSlug}`,
});

export default function SmithAIAlternativePage() {
  return <CompetitorAlternativePage profile={profile} />;
}
