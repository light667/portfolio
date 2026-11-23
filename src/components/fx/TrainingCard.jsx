import React, { useEffect, useState } from 'react';

const EPOCHS = 40;

// Decorative live "training run": epoch counter, a loss curve that converges, accuracy climbing.
const lossAt = (e) => 0.08 + 0.62 * Math.exp(-e / 9) + Math.sin(e * 1.7) * 0.015;

const TrainingCard = ({ className = '' }) => {
  const [epoch, setEpoch] = useState(EPOCHS);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    setEpoch(1);
    const id = setInterval(() => setEpoch((e) => (e >= EPOCHS + 14 ? 1 : e + 1)), 140);
    return () => clearInterval(id);
  }, []);

  const shown = Math.min(epoch, EPOCHS);
  const W = 150;
  const H = 44;
  const points = Array.from({ length: shown }, (_, i) => {
    const x = (i / (EPOCHS - 1)) * W;
    const y = H - ((0.75 - lossAt(i + 1)) / 0.7) * H;
    return `${x.toFixed(1)},${Math.min(H, Math.max(0, y)).toFixed(1)}`;
  }).join(' ');
  const loss = lossAt(shown);
  const acc = 0.62 + 0.3 * (1 - Math.exp(-shown / 10));
  const done = epoch >= EPOCHS;

  return (
    <div className={`w-[13.5rem] rounded-xl border-2 border-ink bg-white p-3 shadow-hard ${className}`} aria-hidden="true">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-slate-500">
        <span>model.fit()</span>
        <span className={`flex items-center gap-1 ${done ? 'text-green-600' : 'text-flame-600'}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${done ? 'bg-green-600' : 'animate-pulse bg-flame-500'}`} />
          {done ? 'done' : 'training'}
        </span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 h-11 w-full overflow-visible">
        <line x1="0" y1={H} x2={W} y2={H} stroke="#E2E8F0" />
        <polyline points={points} fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
      <div className="mt-2 grid grid-cols-3 gap-1 font-mono text-[10px] text-slate-500">
        <span>
          ep <b className="text-ink">{String(shown).padStart(2, '0')}</b>
        </span>
        <span>
          loss <b className="text-brand-700">{loss.toFixed(3)}</b>
        </span>
        <span>
          acc <b className="text-flame-600">{(acc * 100).toFixed(1)}</b>
        </span>
      </div>
    </div>
  );
};

export default TrainingCard;
