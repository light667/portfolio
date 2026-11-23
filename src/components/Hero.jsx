import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDownRight, Download } from 'lucide-react';
import { PROFILE, MARQUEE } from '../data/portfolio';
import NeuralBackground from './fx/NeuralBackground';
import TypedRoles from './fx/TypedRoles';
import Magnetic from './fx/Magnetic';
import TrainingCard from './fx/TrainingCard';

const ease = [0.22, 1, 0.36, 1];

const Letters = ({ text, delay = 0, className = '' }) => (
  <span className={`block overflow-hidden pb-[0.06em] ${className}`} aria-hidden="true">
    {text.split('').map((ch, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: delay + i * 0.045, ease }}
      >
        {ch}
      </motion.span>
    ))}
  </span>
);

const Hero = () => {
  const { t } = useTranslation();
  const roles = t('hero.roles', { returnObjects: true });

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
        <NeuralBackground />
      </div>
      <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-brand-300/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-flame-200/50 blur-3xl" aria-hidden="true" />

      <div className="container-page relative grid items-center gap-14 pb-20 pt-28 md:pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-3 text-brand-700"
          >
            <span className="h-[2px] w-8 bg-flame-500" />
            {t('hero.eyebrow')}
          </motion.p>

          <h1 className="font-display font-bold leading-[0.92] tracking-tight text-ink">
            <span className="sr-only">Kokou Armand Light DJOSSOU</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block text-2xl font-medium text-slate-500 sm:text-3xl"
              aria-hidden="true"
            >
              {t('hero.first_names')}
            </motion.span>
            <Letters text="Light" delay={0.15} className="mt-2 text-[3.4rem] sm:text-7xl lg:text-[5.5rem]" />
            <Letters text="DJOSSOU" delay={0.35} className="text-[3.4rem] text-brand-600 sm:text-7xl lg:text-[5.5rem]" />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-5 h-8 font-mono text-base text-ink sm:text-lg"
          >
            <TypedRoles roles={roles} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl"
          >
            {t('hero.lead')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Magnetic>
              <a href="#projects" className="btn-cta w-full sm:w-auto">
                {t('hero.cta_projects')}
                <ArrowDownRight size={18} />
              </a>
            </Magnetic>
            <Magnetic strength={0.18}>
              <a href={PROFILE.cv} download={PROFILE.cvFileName} className="btn-ghost w-full sm:w-auto">
                {t('hero.cta_cv')}
                <Download size={18} />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
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
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,27,75,0.06)_1px,transparent_1px)] bg-[size:100%_4px]" aria-hidden="true" />
            <span className="pointer-events-none absolute inset-x-0 h-16 animate-scan bg-gradient-to-b from-transparent via-brand-500/25 to-transparent" aria-hidden="true">
              <span className="absolute inset-x-0 top-1/2 h-px bg-brand-300" />
            </span>
          </div>

          <div className="absolute -left-3 top-[46%] animate-float lg:top-8 rounded-lg border-2 border-ink bg-flame-500 px-3 py-2 font-mono text-xs font-medium text-white shadow-hard-sm [rotate:-6deg] sm:-left-6">
            {t('hero.sticker')}
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
