import React from 'react';
import Reveal from './Reveal';
import ScrambleText from '../fx/ScrambleText';

const SectionHeading = ({ label, title, subtitle, tone = 'light', children }) => {
  const dark = tone === 'dark';
  return (
    <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className={`eyebrow mb-4 ${dark ? 'text-flame-200' : 'text-brand-700'}`}>
          <span className={`h-[2px] w-8 ${dark ? 'bg-flame-500' : 'bg-flame-500'}`} />
          <ScrambleText text={label} />
        </p>
        <h2 className={`section-title ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
        {subtitle && (
          <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${dark ? 'text-brand-100' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </Reveal>
  );
};

export default SectionHeading;
