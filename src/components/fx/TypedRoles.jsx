import React, { useEffect, useState } from 'react';

// Types each role, holds it, deletes it, then moves on, like a model streaming tokens.
const TypedRoles = ({ roles = [], className = '' }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!roles.length) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const full = roles[index % roles.length];
    if (reduced) {
      setText(full);
      const id = setTimeout(() => setIndex((i) => i + 1), 2600);
      return () => clearTimeout(id);
    }
    let delay = deleting ? 28 : 55;
    if (!deleting && text === full) delay = 1800;
    if (deleting && text === '') delay = 250;
    const id = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, roles]);

  return (
    <span className={className}>
      <span className="text-flame-500">&gt;</span> {text}
      <span className="ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.18em] animate-pulse bg-brand-600" />
    </span>
  );
};

export default TypedRoles;
