import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDownRight, Download, MapPin } from 'lucide-react';
import { PROFILE, MARQUEE } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1];

const Hero = () => {
  const { t } = useTranslation();
  const stats = t('hero.stats', { returnObjects: true });

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="container-page relative grid items-center gap-14 pb-16 pt-28 md:pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="lg:col-span-7"
        >
          <p className="eyebrow mb-3 text-brand-700">
            <span className="h-[2px] w-8 bg-flame-500" />
            {t('hero.eyebrow')}
          </p>

          <h1 className="font-display font-bold leading-[0.92] tracking-tight text-ink">
            <span className="block text-2xl font-medium text-slate-500 sm:text-3xl">{t('hero.first_names')}</span>
            <span className="mt-2 block text-[3.4rem] sm:text-7xl lg:text-[5.5rem]">Light</span>
            <span className="block text-[3.4rem] text-brand-600 sm:text-7xl lg:text-[5.5rem]">DJOSSOU</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">{t('hero.lead')}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="btn-cta">
              {t('hero.cta_projects')}
              <ArrowDownRight size={18} />
            </a>
            <a href={PROFILE.cv} download={PROFILE.cvFileName} className="btn-ghost">
              {t('hero.cta_cv')}
              <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-[22rem] sm:max-w-sm lg:col-span-5 lg:max-w-none lg:pl-6"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-ink bg-brand-600 lg:left-6" />
          <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-brand-100">
            <img
              src="/photo.jpg"
              alt={t('hero.photo_alt')}
              width="900"
              height="1080"
              fetchpriority="high"
              className="aspect-[4/5] w-full object-cover object-[50%_20%]"
            />
          </div>

          <div className="absolute -left-3 top-8 rotate-[-6deg] rounded-lg border-2 border-ink bg-flame-500 px-3 py-2 font-mono text-xs font-medium text-white shadow-hard-sm sm:-left-6">
            {t('hero.sticker')}
          </div>

          <div className="absolute -bottom-6 -right-2 rounded-xl border-2 border-ink bg-white px-4 py-3 shadow-hard sm:-right-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">model.fit()</p>
          </div>
        </motion.div>
      </div>

      <div className="relative border-y-2 border-ink bg-brand-600 py-4 text-white" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-widest">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              {item}
              <span className="text-flame-200">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
