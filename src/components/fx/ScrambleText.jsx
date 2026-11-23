import React, { useEffect, useRef, useState } from 'react';

const GLYPHS = '01<>/{}[]=+*#%ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Decodes the text from random glyphs once it scrolls into view.
const ScrambleText = ({ text, className = '' }) => {
  const ref = useRef(null);
  const [out, setOut] = useState(text);

  useEffect(() => {
    setOut(text);
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let raf = 0;
    const run = () => {
      const start = performance.now();
      const duration = 900;
      const tick = (now) => {
        const p = Math.min(1, Math.max(0, (now - start) / duration));
        const revealed = Math.floor(p * text.length);
        let s = '';
        for (let i = 0; i < text.length; i++) {
          const c = text[i];
          s += i < revealed || c === ' ' ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        setOut(s);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{out}</span>
    </span>
  );
};

export default ScrambleText;
