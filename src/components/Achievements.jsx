import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, Award, Heart } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const Achievements = () => {
  const { t } = useTranslation();
  const hackathons = t('achievements.hackathons', { returnObjects: true });
  const certs = t('achievements.certs', { returnObjects: true });
  const interests = t('achievements.interests', { returnObjects: true });

  return (
    <section id="achievements" className="section border-y-2 border-ink bg-flame-50">
      <div className="container-page">
        <SectionHeading label={t('achievements.label')} title={t('achievements.title')} />

        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-xl border-2 border-ink bg-flame-500 p-6 text-white shadow-hard sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <Trophy size={24} />
                <h3 className="text-2xl font-bold">{t('achievements.hackathons_title')}</h3>
              </div>
              <ul className="divide-y-2 divide-white/25">
                {hackathons.map((h, i) => (
                  <li key={h} className="flex items-baseline gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="font-mono text-sm text-flame-100">0{i + 1}</span>
                    <span className="font-display text-xl font-bold sm:text-2xl">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="card-hard h-full p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <Award size={22} className="text-brand-600" />
                  <h3 className="text-xl font-bold text-ink">{t('achievements.certs_title')}</h3>
                </div>
                <ul className="space-y-4">
                  {certs.map((c) => (
                    <li key={c.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-semibold text-ink">{c.name}</p>
                        <p className="text-sm text-slate-500">{c.org}</p>
                      </div>
                      <span className="chip-brand">{c.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="card h-full border-2 border-ink/10 p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Heart size={20} className="text-flame-600" />
                  <h3 className="text-xl font-bold text-ink">{t('achievements.interests_title')}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {interests.map((it) => (
                    <li key={it} className="chip-flame">{it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
