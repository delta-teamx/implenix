import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  industry: string;
  resultHeadline: string;
  summary: string;
  href: string;
};

export function CaseStudyCard({
  industry,
  resultHeadline,
  summary,
  href,
}: Props) {
  return (
    <article className="bg-black border border-brand-purple/20 p-6 flex flex-col gap-4 h-full">
      <span className="self-start bg-brand-purple text-white text-[10px] uppercase tracking-widest font-medium px-2 py-1">
        {industry}
      </span>
      <h3 className="font-heading text-2xl text-white leading-tight">
        {resultHeadline}
      </h3>
      <p className="font-body text-sm text-white/70 leading-relaxed">{summary}</p>
      <Link
        href={href}
        data-cta-location="case-study-card"
        data-cta-type="link"
        className="mt-auto inline-flex items-center gap-1 text-brand-cyan text-sm hover:underline"
      >
        Read full study <ArrowRight size={14} />
      </Link>
    </article>
  );
}
