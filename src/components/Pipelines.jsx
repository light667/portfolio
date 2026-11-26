import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { MessageSquare, Binary, Database, Layers, Sparkles, BadgeCheck, Table2, Eraser, Wand2, Cpu, Gauge, Server, Brain, Wrench, UserCheck, Zap, RotateCcw } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const MODES = ['rag', 'ml', 'agent'];
const ICONS = {
  rag: [MessageSquare, Binary, Database, Layers, Sparkles, BadgeCheck],
  ml: [Table2, Eraser, Wand2, Cpu, Gauge, Server],
  agent: [MessageSquare, Brain, Wrench, UserCheck, Zap],
};
const STEP_MS = 1500;

const Pipelines = () => {
  const { t } = useTranslation();
  const [mode, setMode] = useState('rag');
  const [active, setActive] = useState(0);
  const [run, setRun] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 });

  const data = t(`pipelines.modes.${mode}`, { returnObjects: true });
  const steps = data.steps;
  const finished = active >= steps.length;

  useEffect(() => {
    setActive(0);
  }, [mode, run]);

  useEffect(() => {
    if (!inView) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(steps.length);
      return undefined;
    }
    // Play the pipeline, hold the finished state, then loop.
    const delay = finished ? 3200 : STEP_MS;
    const id = setTimeout(() => setActive((a) => (a >= steps.length ? 0 : a + 1)), delay);
    return () => clearTimeout(id);
  }, [active, inView, steps.length, finished]);

  const icons = ICONS[mode];

  return (
    <section id="pipelines" className="section-dark">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <FadeIn as="h2" y={40} className="hero-heading heading-xl text-center">
          {t('pipelines.heading')}
        </FadeIn>
        <FadeIn delay={0.1} as="p" className="mx-auto mb-12 mt-6 max-w-2xl text-center font-light leading-relaxed text-mist/70 sm:mb-16" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)' }}>
          {t('pipelines.subtitle')}
        </FadeIn>

        <FadeIn className="mb-8 flex flex-wrap justify-center gap-2">
          {MODES.map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setMode(m);
                setRun((r) => r + 1);
              }}
              aria-pressed={mode === m}
              className={`relative rounded-full border-2 px-5 py-2.5 text-sm font-medium uppercase tracking-widest transition-colors ${
                mode === m ? 'border-transparent text-white' : 'border-mist/30 text-mist hover:border-mist'
              }`}
            >
              {mode === m && (
                <motion.span layoutId="pipeline-tab" className="absolute inset-0 rounded-full bg-gradient-to-r from-plum via-magenta to-grape" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
              )}
              <span className="relative">{t(`pipelines.modes.${m}.tab`)}</span>
            </button>
          ))}
        </FadeIn>

        <FadeIn delay={0.1} className="overflow-hidden rounded-[32px] border-2 border-mist/80 sm:rounded-[40px]">
          {/* Flow diagram */}
          <div className="border-b border-mist/15 bg-carbon p-5 sm:p-8">
            <ol className={`grid gap-3 ${steps.length === 6 ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'}`}>
              {steps.map((s, i) => {
                const Icon = icons[i];
                const state = i < active ? 'done' : i === active ? 'active' : 'idle';
                return (
                  <li key={`${mode}-${s.name}`} className="relative">
                    {i < steps.length - 1 && (
                      <svg className="absolute left-[calc(50%+2rem)] top-7 hidden h-2 w-[calc(100%-4rem+0.75rem)] overflow-visible lg:block" aria-hidden="true">
                        <line x1="0" y1="4" x2="100%" y2="4" stroke={i < active ? '#B600A8' : 'rgba(215,226,234,0.2)'} strokeWidth="2" strokeDasharray="6 6" className={i < active ? 'animate-flow' : ''} />
                        {i === active - 1 && !finished && (
                          <circle r="4" cy="4" fill="#BE4C00">
                            <animate attributeName="cx" from="0%" to="100%" dur="0.6s" fill="freeze" />
                          </circle>
                        )}
                      </svg>
                    )}
                    <div className="flex flex-col items-center text-center">
                      <motion.span
                        animate={state === 'active' ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                        transition={{ duration: 1.2, repeat: state === 'active' ? Infinity : 0 }}
                        className={`relative grid h-14 w-14 place-items-center rounded-2xl border transition-colors duration-300 ${
                          state === 'done' ? 'border-transparent bg-gradient-to-br from-grape to-magenta text-white' : state === 'active' ? 'border-transparent bg-ember text-white' : 'border-mist/20 bg-night text-mist/40'
                        }`}
                      >
                        <Icon size={24} />
                        {state === 'active' && <span className="absolute inset-0 animate-ping rounded-2xl border-2 border-ember" />}
                      </motion.span>
                      <span className={`mt-3 text-sm font-medium uppercase tracking-wide sm:text-base ${state === 'idle' ? 'text-mist/40' : 'text-mist'}`}>{s.name}</span>
                      <span className="mt-0.5 font-mono text-[11px] text-mist/40">{s.tool}</span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Console */}
          <div className="bg-[#0f0f12] p-5 font-mono text-[13px] leading-relaxed text-white sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-white/50">{mode}_pipeline.py — {finished ? 'exit 0' : t('pipelines.running')}</span>
              </div>
              <button type="button" onClick={() => setRun((r) => r + 1)} className="flex items-center gap-1.5 rounded-md border border-white/20 px-2.5 py-1 text-xs text-white/80 transition-colors hover:border-magenta hover:text-white">
                <RotateCcw size={12} />
                {t('pipelines.replay')}
              </button>
            </div>
            <div className="min-h-[11rem] space-y-1.5">
              <AnimatePresence initial={false}>
                {data.logs.slice(0, Math.min(active + 1, data.logs.length)).map((line, i) => {
                  const ok = line.startsWith('✓');
                  return (
                    <motion.p
                      key={`${mode}-${run}-${i}`}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`break-words ${ok ? 'text-green-400' : 'text-white/85'}`}
                    >
                      <span className="mr-2 select-none text-white/30">{String(i + 1).padStart(2, '0')}</span>
                      {!ok && <span className="text-[#ff9b5c]">❯ </span>}
                      {line}
                    </motion.p>
                  );
                })}
              </AnimatePresence>
              {!finished && <span className="inline-block h-4 w-2 animate-pulse bg-magenta align-middle" />}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Pipelines;
