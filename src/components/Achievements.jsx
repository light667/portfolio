import React from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from './ui/FadeIn';

const Achievements = () => {
  const { t } = useTranslation();
  const hackathons = t('achievements.hackathons', { returnObjects: true });
  const certs = t('achievements.certs', { returnObjects: true });
  const interests = t('achievements.interests', { returnObjects: true });

  return (
    <section id="achievements" className="relative bg-white px-5 pb-28 text-night sm:px-8 sm:pb-32 md:px-10 md:pb-40">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-12">
        <FadeIn className="relative overflow-hidden rounded-[32px] p-7 text-white sm:rounded-[40px] sm:p-10 md:col-span-7" style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 45%, #7621B0 78%, #BE4C00 110%)' }}>
          <p className="text-sm font-light uppercase tracking-widest text-white/70">{t('achievements.hackathons_title')}</p>
          <ul className="mt-6 space-y-1">
            {hackathons.map((h) => (
              <li key={h} className="font-black uppercase leading-tight tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3.2vw, 2.6rem)' }}>
                {h}
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="grid gap-6 md:col-span-5">
          <FadeIn delay={0.1} className="rounded-[32px] border border-night/15 p-7 sm:rounded-[40px] sm:p-9">
            <p className="text-sm font-light uppercase tracking-widest text-night/50">{t('achievements.certs_title')}</p>
            <ul className="mt-5 space-y-4">
              {certs.map((c) => (
                <li key={c.name} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium uppercase">{c.name}</p>
                    <p className="text-sm font-light text-night/60">{c.org}</p>
                  </div>
                  <span className="font-light text-night/50">{c.year}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.2} className="rounded-[32px] border border-night/15 p-7 sm:rounded-[40px] sm:p-9">
            <p className="text-sm font-light uppercase tracking-widest text-night/50">{t('achievements.interests_title')}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {interests.map((it) => (
                <span key={it} className="chip-light">{it}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
