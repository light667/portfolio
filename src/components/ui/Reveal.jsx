import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, className = '', as = 'div' }) => {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default Reveal;
