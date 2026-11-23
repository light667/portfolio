import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { EXPERIENCES } from '../data/portfolio';

const Experience = () => {
  const { t } = useTranslation();
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 55%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeading label={t('experience.label')} title={t('experience.title')} />

        <div ref={listRef} className="relative md:pl-14">
          <span className="absolute bottom-2 left-[13px] top-2 hidden w-[3px] rounded-full bg-ink/10 md:block" aria-hidden="true" />
          <motion.span
            style={{ scaleY: progress }}
            className="absolute bottom-2 left-[13px] top-2 hidden w-[3px] origin-top rounded-full bg-gradient-to-b from-brand-600 via-brand-500 to-flame-500 md:block"
            aria-hidden="true"
          />
        <ol className="space-y-6">
          {EXPERIENCES.map((exp, i) => {
            const item = t(`experience.items.${exp.id}`, { returnObjects: true });
            return (
              <Reveal as="li" key={exp.id} delay={i * 0.06} className="relative">
                <span className="absolute -left-14 top-8 hidden h-[29px] w-[29px] place-items-center rounded-full border-2 border-ink bg-cream md:grid" aria-hidden="true">
                  <span className={`h-3 w-3 rounded-full ${i === 0 ? 'animate-pulse bg-flame-500' : 'bg-brand-600'}`} />
                </span>
                <article className="grid gap-6 rounded-xl border-2 border-ink bg-white p-6 transition-shadow duration-200 hover:shadow-hard sm:p-8 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <p className="font-mono text-sm font-medium text-flame-600">{item.date}</p>
                    <p className="mt-3 font-display text-2xl font-bold text-ink">{exp.company}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.place}</p>
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
                      >
                        {t('experience.view')}
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>

                  <div className="md:col-span-8 md:border-l-2 md:border-ink/10 md:pl-8">
                    <h3 className="text-xl font-bold text-ink sm:text-2xl">{item.role}</h3>
                    <p className="mt-1 font-medium text-brand-700">{item.context}</p>
                    <ul className="mt-5 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed text-slate-700">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-flame-500" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="chip-brand">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
