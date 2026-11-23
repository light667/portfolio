import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const About = () => {
  const { t } = useTranslation();
  const pipeline = t('about.pipeline', { returnObjects: true });
  const facts = t('about.facts', { returnObjects: true });

  return (
    <section id="about" className="section bg-white">
      <div className="container-page">
        <SectionHeading label={t('about.label')} title={t('about.title')} />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="space-y-6 text-lg leading-relaxed text-slate-700 lg:col-span-7">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>

            <dl className="mt-10 divide-y divide-ink/10 border-y-2 border-ink">
              {facts.map((f) => (
                <div key={f.label} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6">
                  <dt className="font-mono text-xs uppercase tracking-widest text-brand-700 sm:pt-1">{f.label}</dt>
                  <dd className="text-base font-medium text-ink sm:col-span-2">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="card-hard p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-ink">{t('about.pipeline_title')}</h3>
              <ol className="relative space-y-6">
                <span className="absolute bottom-3 left-[19px] top-3 w-[2px] bg-brand-200" aria-hidden="true" />
                {pipeline.map((p, i) => (
                  <li key={p.step} className="relative flex gap-4">
                    <span
                      className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-lg border-2 border-ink font-mono text-sm font-medium ${
                        i === pipeline.length - 1 ? 'bg-flame-500 text-white' : 'bg-brand-600 text-white'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <div className="pt-1">
                      <p className="font-display text-lg font-bold text-ink">{p.step}</p>
                      <p className="text-sm leading-relaxed text-slate-600">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
