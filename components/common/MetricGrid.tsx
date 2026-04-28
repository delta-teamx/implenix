import type { LucideIcon } from 'lucide-react';

type Metric = {
  Icon: LucideIcon;
  number: string;
  label: string;
  description?: string;
};

type Props = {
  metrics: Metric[];
};

// Koyeb-style 4-up metric grid: small icon, big number, label, optional
// short description.
export function MetricGrid({ metrics }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-brand-purple/20">
      {metrics.map(({ Icon, number, label, description }) => (
        <div
          key={label}
          className="p-6 lg:p-8 border-b border-r border-brand-purple/20 flex flex-col gap-3"
        >
          <span className="w-9 h-9 border border-brand-cyan/30 bg-black flex items-center justify-center">
            <Icon size={16} className="text-brand-cyan" />
          </span>
          <p className="font-heading text-3xl md:text-4xl text-white leading-none">
            {number}
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
            {label}
          </p>
          {description ? (
            <p className="font-body text-sm text-white/65 leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
