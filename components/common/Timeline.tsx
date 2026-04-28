type Step = {
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
};

// Koyeb-style numbered vertical timeline. Used to visualize a deployment
// sequence or multi-step workflow.
export function Timeline({ steps }: Props) {
  return (
    <ol className="relative flex flex-col">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative grid grid-cols-[64px_1fr] gap-6 pb-10 last:pb-0"
        >
          {i < steps.length - 1 ? (
            <span
              aria-hidden
              className="absolute left-[31px] top-12 bottom-0 w-px bg-brand-purple/30"
            />
          ) : null}
          <div className="relative">
            <span className="w-16 h-16 border border-brand-cyan/30 bg-black flex items-center justify-center font-heading text-brand-cyan text-2xl">
              0{i + 1}
            </span>
          </div>
          <div className="pt-2">
            <h3 className="font-heading text-xl text-white">{step.title}</h3>
            <p className="mt-2 font-body text-sm text-white/75 leading-relaxed max-w-prose">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
