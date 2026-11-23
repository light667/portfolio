import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { EXPERIENCES } from '../data/portfolio';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeading label={t('experience.label')} title={t('experience.title')} />

        <ol className="space-y-6">
          {EXPERIENCES.map((exp, i) => {
            const item = t(`experience.items.${exp.id}`, { returnObjects: true });
            return (
              <Reveal as="li" key={exp.id} delay={i * 0.06}>
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
    </section>
  );
};

export default Experience;
