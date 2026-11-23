import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrainCircuit, FileSearch, Bot, DatabaseZap } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const ICONS = [BrainCircuit, FileSearch, Bot, DatabaseZap];

const Services = () => {
  const { t } = useTranslation();
  const items = t('expertise.items', { returnObjects: true });

  return (
    <section id="expertise" className="section relative overflow-hidden border-y-2 border-ink bg-brand-600">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-2 border-white/15" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border-2 border-white/15" aria-hidden="true" />

      <div className="container-page relative">
        <SectionHeading
          tone="dark"
          label={t('expertise.label')}
          title={t('expertise.title')}
          subtitle={t('expertise.subtitle')}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="group h-full rounded-xl border-2 border-ink bg-white p-6 shadow-hard transition-transform duration-200 hover:-translate-y-1 sm:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-lg border-2 border-ink ${
                        i % 2 === 0 ? 'bg-brand-100 text-brand-700' : 'bg-flame-100 text-flame-600'
                      }`}
                    >
                      <Icon size={24} />
                    </span>
                    <span className="font-mono text-sm text-slate-400">0{i + 1}</span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-ink">{item.title}</h3>
                  <p className="leading-relaxed text-slate-600">{item.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
