import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

// Fades and slides its children in once they enter the viewport.
const FadeIn = ({ as = 'div', children, delay = 0, duration = 0.7, x = 0, y = 30, className = '', ...rest }) => {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
