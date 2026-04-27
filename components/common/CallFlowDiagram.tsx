'use client';

import { motion } from 'framer-motion';

const NODES = [
  { x: 60, y: 120, label: 'Phone Rings' },
  { x: 240, y: 120, label: 'AI Answers' },
  { x: 420, y: 120, label: 'Qualifies Lead' },
  { x: 600, y: 60, label: 'Books Appointment' },
  { x: 600, y: 180, label: 'Transfers to Human' },
];

const PATHS = [
  'M 130 120 L 200 120',
  'M 310 120 L 380 120',
  'M 490 120 L 555 80',
  'M 490 120 L 555 160',
];

export function CallFlowDiagram() {
  return (
    <div className="w-full overflow-hidden">
      <svg
        role="img"
        aria-label="Implenix call flow: phone rings, AI answers, qualifies lead, then books or transfers"
        viewBox="0 0 720 240"
        className="w-full h-auto"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#3dfaff"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="720" height="240" fill="url(#grid)" />

        {PATHS.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="#3dfaff"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
          />
        ))}

        {NODES.map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.4 }}
          >
            <rect
              x={node.x - 70}
              y={node.y - 22}
              width="140"
              height="44"
              fill="#070538"
              stroke="#3dfaff"
              strokeWidth="1"
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fontFamily="var(--font-heading), sans-serif"
              fontSize="13"
              fill="#ffffff"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
