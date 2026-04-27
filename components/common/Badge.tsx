import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type Props = {
  href?: string;
  label: string;
  variant?: 'cyan' | 'purple';
};

// Koyeb-style pill eyebrow above hero headlines.
export function Badge({ href, label, variant = 'cyan' }: Props) {
  const tone =
    variant === 'cyan'
      ? 'border-brand-cyan/40 text-brand-cyan'
      : 'border-brand-purple/50 text-brand-purple';
  const inner = (
    <span
      className={`inline-flex items-center gap-2 border ${tone} bg-black/40 px-3 py-1 rounded-sm text-xs font-mono uppercase tracking-widest`}
    >
      <span className="w-1.5 h-1.5 bg-current" />
      {label}
      {href ? <ArrowRight size={12} /> : null}
    </span>
  );
  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {inner}
      </Link>
    );
  }
  return inner;
}
