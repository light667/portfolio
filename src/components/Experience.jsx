import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import { EXPERIENCES } from '../data/portfolio';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section-light">
      <FadeIn as="h2" y={40} className="heading-xl mb-16 text-center text-night sm:mb-20 md:mb-28">
        {t('experience.heading')}
      </FadeIn>

      <ol className="mx-auto max-w-5xl">
        {EXPERIENCES.map((exp, i) => {
          const item = t(`experience.items.${exp.id}`, { returnObjects: true });
          return (
            <FadeIn
              as="li"
              key={exp.id}
              delay={i * 0.1}
              className="grid gap-6 border-t py-10 md:grid-cols-12 md:gap-10 md:py-14"
              style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
            >
              <div className="md:col-span-4">
                <p className="text-sm font-light uppercase tracking-widest text-night/50">{item.date}</p>
                <p className="mt-2 font-black uppercase leading-none text-night" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>
                  {exp.company}
                </p>
                <p className="mt-2 text-sm font-light uppercase tracking-wider text-night/50">{item.place}</p>
                {exp.url && (
                  <a href={exp.url} target="_blank" rel="noreferrer" className="btn-ghost-light mt-5 !px-5 !py-2 !text-xs">
                    {t('experience.view')}
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
              <div className="md:col-span-8">
                <h3 className="font-medium uppercase text-night" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.9rem)' }}>
                  {item.role}
                </h3>
                <p className="mt-1 font-light text-magenta">{item.context}</p>
                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 font-light leading-relaxed text-night/70" style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}>
                      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-magenta to-ember" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="chip-light">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </ol>
    </section>
  );
};

export default Experience;
