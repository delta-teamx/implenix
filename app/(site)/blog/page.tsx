import type { Metadata } from 'next';
import { allBlogPosts } from 'contentlayer/generated';
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
      <section className="grid-bg">
        <div className="max-w-content mx-auto px-6 py-20 md:py-24">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
            [ blog // implenix ]
          </span>
          <h1 className="font-heading text-4xl md:text-6xl mt-4">
            Implenix Blog
          </h1>
          <p className="mt-4 font-body text-white/75 max-w-2xl">
            Field notes, operator playbooks, and case studies from teams that
            run on calls.
          </p>
        </div>
      </section>
      <section className="bg-black border-t border-brand-purple/20">
        <BlogIndexClient posts={posts} />
      </section>
    </>
  );
}
