'use client';

import { useEffect, useRef, useState } from 'react';

type Line = {
  speaker: 'agent' | 'caller';
  text: string;
};

type Props = {
  title?: string;
  caption?: string;
  lines: Line[];
  /** ms per character while typing. Lower = faster. */
  typingSpeedMs?: number;
  /** ms between completed turns. */
  turnPauseMs?: number;
  /** ms before the whole sequence restarts. */
  restartPauseMs?: number;
};

// Animated call transcript that types each turn out character-by-
// character, advances to the next turn after a pause, and loops back
// to the start once the full conversation has rendered. Designed to
// sit inline in a section without auto-scrolling the page — only the
// transcript container scrolls.
export function AnimatedCallTranscript({
  title = 'live-call.log',
  caption,
  lines,
  typingSpeedMs = 22,
  turnPauseMs = 700,
  restartPauseMs = 2200,
}: Props) {
  const [turnIndex, setTurnIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const current = lines[turnIndex];
    if (!current) return;

    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), typingSpeedMs);
      return () => clearTimeout(t);
    }

    // Finished typing this turn — pause, then advance.
    const isLast = turnIndex === lines.length - 1;
    const wait = isLast ? restartPauseMs : turnPauseMs;
    const t = setTimeout(() => {
      if (isLast) {
        setTurnIndex(0);
        setCharIndex(0);
      } else {
        setTurnIndex((i) => i + 1);
        setCharIndex(0);
      }
    }, wait);
    return () => clearTimeout(t);
  }, [turnIndex, charIndex, lines, typingSpeedMs, turnPauseMs, restartPauseMs]);

  // Auto-scroll within the transcript container — but only the
  // container, not the page.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [turnIndex, charIndex]);

  return (
    <div
      ref={containerRef}
      className="bg-black border border-brand-cyan/25 rounded-sm overflow-hidden"
    >
      <div className="flex items-center gap-2 border-b border-brand-cyan/20 px-4 py-2.5 bg-black">
        <span className="w-2.5 h-2.5 bg-brand-purple rounded-full" />
        <span className="w-2.5 h-2.5 bg-brand-cyan rounded-full" />
        <span className="w-2.5 h-2.5 bg-white/40 rounded-full" />
        <span className="ml-3 font-mono text-[11px] text-white/50 uppercase tracking-widest flex-1">
          {title}
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-brand-cyan">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
          </span>
          Live
        </span>
      </div>
      <div
        ref={scrollRef}
        className="font-mono text-[12.5px] leading-6 p-5 overflow-y-auto h-[340px] md:h-[400px] whitespace-pre-wrap text-white/90"
        aria-live="polite"
      >
        {lines.map((line, i) => {
          if (i > turnIndex) return null;
          const text =
            i < turnIndex ? line.text : line.text.slice(0, charIndex);
          return (
            <div key={i} className="flex gap-3 mb-3">
              <span className="text-white/30 select-none shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className={`shrink-0 ${
                  line.speaker === 'agent'
                    ? 'text-brand-cyan'
                    : 'text-brand-purple'
                }`}
              >
                {line.speaker === 'agent' ? 'AGENT' : 'CALLER'}
              </span>
              <span className="flex-1">
                {text}
                {i === turnIndex && charIndex < line.text.length ? (
                  <span className="inline-block w-2 h-4 bg-brand-cyan align-middle ml-0.5 animate-pulse" />
                ) : null}
              </span>
            </div>
          );
        })}
      </div>
      {caption ? (
        <div className="border-t border-brand-cyan/20 px-4 py-2 text-[11px] font-mono text-white/50 uppercase tracking-widest">
          {caption}
        </div>
      ) : null}
    </div>
  );
}
