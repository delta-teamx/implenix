'use client';

import { Play, Pause } from 'lucide-react';
import { useRef, useState } from 'react';

type Props = {
  src?: string;
  label: string;
};

const BAR_HEIGHTS = [
  10, 18, 24, 14, 30, 22, 12, 28, 20, 32, 16, 24,
  10, 26, 18, 22, 14, 30, 20, 12, 24, 16, 28, 18,
];

export function AudioPlayer({ src, label }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) {
      // No real audio attached yet — placeholder behavior.
      setPlaying((p) => !p);
      return;
    }
    if (playing) {
      el.pause();
    } else {
      void el.play();
    }
    setPlaying((p) => !p);
  };

  return (
    <div className="bg-black border border-brand-cyan/30 p-5 flex items-center gap-4">
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause demo audio' : 'Play demo audio'}
        className="w-12 h-12 flex items-center justify-center bg-brand-purple text-white rounded-sm hover:opacity-90 shrink-0"
      >
        {playing ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <div className="flex-1">
        <span className="block text-white font-body text-sm mb-2">{label}</span>
        <svg
          width="100%"
          height="32"
          viewBox={`0 0 ${BAR_HEIGHTS.length * 8} 32`}
          aria-hidden="true"
        >
          {BAR_HEIGHTS.map((h, i) => (
            <rect
              key={i}
              x={i * 8}
              y={(32 - h) / 2}
              width="4"
              height={h}
              fill="#3dfaff"
            />
          ))}
        </svg>
      </div>
      {src ? (
        <audio ref={audioRef} src={src} preload="none" className="hidden" />
      ) : null}
      {/* EMBED REAL DEMO AUDIO FILE HERE */}
    </div>
  );
}
