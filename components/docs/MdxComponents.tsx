import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="font-heading text-4xl text-white mt-8 mb-4" {...props} />
  ),
  h2: (props) => (
    <h2 className="font-heading text-2xl text-white mt-10 mb-3" {...props} />
  ),
  h3: (props) => (
    <h3 className="font-heading text-xl text-white mt-8 mb-2" {...props} />
  ),
  p: (props) => (
    <p className="font-body text-white/80 leading-relaxed my-4" {...props} />
  ),
  a: ({ href = '#', ...props }) => (
    <Link
      href={href}
      className="text-brand-cyan underline-offset-4 hover:underline"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc list-outside pl-6 space-y-2 my-4 marker:text-brand-purple" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-outside pl-6 space-y-2 my-4 marker:text-brand-purple" {...props} />
  ),
  code: (props) => (
    <code
      className="font-mono text-brand-cyan bg-black px-1.5 py-0.5 rounded-sm text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="font-mono bg-black border border-brand-cyan/20 p-4 my-6 overflow-x-auto text-sm"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-[3px] border-brand-purple pl-4 italic text-white/80 my-6"
      {...props}
    />
  ),
};
