import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LINES = ['import torch, sklearn, langchain', 'loading weights', 'warming up vector store', 'ready'];
const BARS = 24;

// Short "model boot" intro, shown once per browser session. Click to skip.
const BootScreen = () => {
  const [show, setShow] = useState(() => {
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
      return !sessionStorage.getItem('booted');
    } catch {
      return false;
    }
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!show) return undefined;
    try {
      sessionStorage.setItem('booted', '1');
    } catch {
      /* storage unavailable */
    }
    const start = performance.now();
    let raf = 0;
    let timer = 0;
    const tick = (now) => {
      const p = Math.min(1, Math.max(0, (now - start) / 1300));
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else timer = setTimeout(() => setShow(false), 220);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [show]);

  const lineCount = Math.min(LINES.length, Math.floor(progress * LINES.length) + 1);
  const filled = Math.round(progress * BARS);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="boot"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink px-6"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          onClick={() => setShow(false)}
          aria-hidden="true"
        >
          <div className="w-full max-w-md font-mono text-sm text-white">
            <p className="mb-6 font-display text-3xl font-bold tracking-tight">
              Light <span className="text-brand-300">DJOSSOU</span>
              <span className="text-flame-500">.</span>
            </p>
            <div className="space-y-1.5 text-white/70">
              {LINES.slice(0, lineCount).map((line, i) => (
                <p key={line}>
                  <span className="text-flame-500">&gt;</span> {line}
                  {i === lineCount - 1 && progress < 1 ? '…' : <span className="text-green-400"> ✓</span>}
                </p>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-brand-300">
                [{'█'.repeat(filled)}
                <span className="text-white/20">{'░'.repeat(BARS - filled)}</span>]
              </span>
              <span className="tabular-nums">{Math.round(progress * 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootScreen;
