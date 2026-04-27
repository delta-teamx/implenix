import Image from 'next/image';

type Props = {
  name: string;
  logoSrc?: string;
};

export function IntegrationLogo({ name, logoSrc }: Props) {
  if (logoSrc) {
    return (
      <div className="shrink-0 w-[120px] h-[40px] flex items-center justify-center">
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          width={120}
          height={40}
          className="object-contain"
        />
      </div>
    );
  }
  return (
    <div className="shrink-0 w-[120px] h-[40px] border border-brand-cyan/30 flex items-center justify-center">
      <span className="font-body text-white text-[12px]">{name}</span>
    </div>
  );
}
