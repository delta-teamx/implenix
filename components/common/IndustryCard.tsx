import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  industry: string;
  painPoint: string;
  href: string;
};

export function IndustryCard({ industry, painPoint, href }: Props) {
  return (
    <Link
      href={href}
      data-cta-location="industries-grid"
      data-cta-type="industry"
      className="group block bg-black border border-brand-purple/20 hover:border-brand-purple p-6 transition-colors duration-200"
    >
      <h3 className="font-heading text-2xl text-white">{industry}</h3>
      <p className="mt-2 text-white/70 text-sm font-body">{painPoint}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-brand-cyan text-sm">
        See solution
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
