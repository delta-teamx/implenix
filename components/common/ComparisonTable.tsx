import { Check, X, Minus } from 'lucide-react';

type Cell = boolean | 'partial' | string;

type Row = {
  label: string;
  cells: Cell[];
};

type Props = {
  columns: string[];
  rows: Row[];
  highlightColumn?: number;
};

// Koyeb-style comparison table. The highlighted column gets a colored
// header and a left/right border for emphasis.
export function ComparisonTable({ columns, rows, highlightColumn = 0 }: Props) {
  return (
    <div className="overflow-x-auto border border-brand-purple/20">
      <table className="w-full font-body text-sm min-w-[640px]">
        <thead>
          <tr>
            <th className="text-left p-4 border-b border-brand-purple/20 bg-black font-mono text-xs uppercase tracking-widest text-white/55">
              Capability
            </th>
            {columns.map((col, i) => (
              <th
                key={col}
                className={`text-left p-4 border-b border-brand-purple/20 bg-black font-heading text-base ${
                  i === highlightColumn
                    ? 'text-brand-cyan border-x border-x-brand-cyan/40'
                    : 'text-white/85'
                }`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.label} className="border-b border-brand-purple/15 last:border-b-0">
              <td className="p-4 text-white font-medium">{row.label}</td>
              {row.cells.map((cell, i) => (
                <td
                  key={i}
                  className={`p-4 align-top ${
                    i === highlightColumn ? 'border-x border-x-brand-cyan/40' : ''
                  } ${idx === rows.length - 1 && i === highlightColumn ? 'border-b border-b-brand-cyan/40' : ''}`}
                >
                  {renderCell(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderCell(cell: Cell) {
  if (cell === true) {
    return <Check size={18} className="text-brand-cyan" aria-label="yes" />;
  }
  if (cell === false) {
    return <X size={18} className="text-white/30" aria-label="no" />;
  }
  if (cell === 'partial') {
    return <Minus size={18} className="text-brand-purple" aria-label="partial" />;
  }
  return <span className="text-white/85">{cell}</span>;
}
