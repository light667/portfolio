import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Char = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

// Each character brightens from 0.2 to 1 as the paragraph scrolls through the viewport.
const AnimatedText = ({ text, className = '', style }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const words = text.split(' ');
  const total = text.length;
  let index = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, w) => {
          const chars = word.split('');
          const node = (
            <span key={w} className="inline-block whitespace-nowrap">
              {chars.map((c, i) => {
                const start = (index + i) / total;
                return <Char key={i} char={c} progress={scrollYProgress} range={[start, Math.min(1, start + 1 / total)]} />;
              })}
              {w < words.length - 1 && <span>&nbsp;</span>}
            </span>
          );
          index += chars.length + 1;
          return node;
        })}
      </span>
    </p>
  );
};

export default AnimatedText;
