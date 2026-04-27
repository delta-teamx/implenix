import { Badge } from './Badge';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  badgeVariant?: 'cyan' | 'purple';
};

// Koyeb-style "eyebrow → headline → subhead" section header.
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  badgeVariant = 'cyan',
}: Props) {
  const wrap = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <header className={`max-w-3xl ${wrap}`}>
      <Badge label={eyebrow} variant={badgeVariant} />
      <h2 className="font-heading text-3xl md:text-5xl mt-5 leading-[1.05] text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 font-body text-white/70 text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
