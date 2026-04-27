import { IntegrationLogo } from './IntegrationLogo';

type Props = {
  label: string;
  names: string[];
};

// Koyeb-style centered logo row with thin top/bottom dividers.
export function LogoStrip({ label, names }: Props) {
  return (
    <div className="border-y border-brand-purple/20">
      <div className="max-w-content mx-auto px-6 py-10 flex flex-col gap-6 items-center">
        <p className="text-xs uppercase tracking-widest text-white/55 font-mono">
          {label}
        </p>
        {/* REPLACE PLACEHOLDER BOXES WITH ACTUAL SVG LOGOS WHEN PROVIDED */}
        <div className="w-full overflow-x-auto">
          <div className="flex items-center justify-center gap-4 lg:gap-6 min-w-max mx-auto">
            {names.map((n) => (
              <IntegrationLogo key={n} name={n} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
