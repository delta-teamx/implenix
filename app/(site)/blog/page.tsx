import type { Metadata } from 'next';
import { allBlogPosts } from 'contentlayer/generated';
import { Badge } from '@/components/common/Badge';
import { buildMetadata } from '@/lib/seo';
import { BlogIndexClient } from './BlogIndexClient';

export const metadata: Metadata = buildMetadata({
  title: 'Implenix Blog — AI Voice Agents and Local Business',
  description:
    'Field notes, operator playbooks, and case studies from teams that run on calls. The Implenix blog.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = [...allBlogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    )
    .map((p) => ({
      url: p.url,
      title: p.title,
      description: p.description,
      category: p.category,
      publishedAt: p.publishedAt,
      readTime: p.readTime,
    }));

  return (
    <>
      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="max-w-3xl flex flex-col gap-5">
            <Badge label="Implenix · Blog" variant="cyan" />
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.04]">
              Field notes from teams that{' '}
              <span className="text-brand-purple">run on calls</span>.
            </h1>
            <p className="font-body text-white/75 text-lg max-w-2xl leading-relaxed">
              Operator playbooks, agent tuning notes, and verified case
              studies — published by the team deploying voice AI for local
              business.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black border-t border-brand-purple/20">
        <BlogIndexClient posts={posts} />
      </section>
    </>
  );
}
