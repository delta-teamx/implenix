type Line = {
  speaker?: 'agent' | 'caller' | 'system';
  text: string;
  ts?: string;
};

type Props = {
  title?: string;
  lines: Line[];
  caption?: string;
};

// Koyeb-style terminal/code block with window chrome — used to show a
// sample AI call transcript below hero sections.
export function CodeWindow({ title = 'call.log', lines, caption }: Props) {
  return (
    <div className="bg-black border border-brand-cyan/25 rounded-sm overflow-hidden">
      <div className="flex items-center gap-2 border-b border-brand-cyan/20 px-4 py-2.5 bg-black">
        <span className="w-2.5 h-2.5 bg-brand-purple rounded-full" />
        <span className="w-2.5 h-2.5 bg-brand-cyan rounded-full" />
        <span className="w-2.5 h-2.5 bg-white/40 rounded-full" />
        <span className="ml-3 font-mono text-[11px] text-white/50 uppercase tracking-widest">
          {title}
        </span>
      </div>
      <pre className="font-mono text-[12.5px] leading-6 p-5 overflow-x-auto whitespace-pre-wrap text-white/90">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-white/30 select-none">
              {line.ts ?? `00:${String(i * 3).padStart(2, '0')}`}
            </span>
            {line.speaker ? (
              <span
                className={
                  line.speaker === 'agent'
                    ? 'text-brand-cyan'
                    : line.speaker === 'caller'
                      ? 'text-brand-purple'
                      : 'text-white/50'
                }
              >
                {line.speaker.toUpperCase()}
              </span>
            ) : null}
            <span>{line.text}</span>
          </div>
        ))}
      </pre>
      {caption ? (
        <div className="border-t border-brand-cyan/20 px-4 py-2 text-[11px] font-mono text-white/50 uppercase tracking-widest">
          {caption}
        </div>
      ) : null}
    </div>
  );
}
