import React from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from './ui/FadeIn';
import Magnet from './ui/Magnet';
import { ContactButton } from './ui/Buttons';
import NeuralBackground from './fx/NeuralBackground';
import { SocialLinks } from './ui/Buttons';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'fr';
  const greetingWords = t('hero.greeting').split(' ');
  const greetingEnd = greetingWords.pop();
  const greetingStart = greetingWords.join(' ');

  const links = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <section id="top" className="relative flex h-screen min-h-[600px] flex-col" style={{ overflowX: 'clip' }}>
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_40%,transparent_95%)]">
        <NeuralBackground />
      </div>

      <FadeIn as="nav" delay={0} y={-20} className="relative z-20 flex flex-wrap items-center gap-x-8 gap-y-3 px-5 pt-6 sm:flex-nowrap sm:px-6 md:px-10 md:pt-8" aria-label="Navigation">
        <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:flex-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-mist transition-opacity duration-200 hover:opacity-70 sm:text-sm sm:tracking-wider md:text-lg lg:text-[1.4rem]"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <SocialLinks />
          <button
            type="button"
            onClick={() => i18n.changeLanguage(lang === 'fr' ? 'en' : 'fr')}
            aria-label={t('nav.lang')}
            className="ml-1 whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-mist transition-opacity duration-200 hover:opacity-70 sm:text-sm sm:tracking-wider md:text-lg lg:text-[1.4rem]"
          >
            <span className={lang === 'fr' ? '' : 'opacity-40'}>FR</span>
            <span className="opacity-40"> / </span>
            <span className={lang === 'en' ? '' : 'opacity-40'}>EN</span>
          </button>
        </div>
      </FadeIn>

      <div className="relative z-0 overflow-hidden">
        <FadeIn as="h1" delay={0.15} y={40} className="hero-heading mt-6 w-full whitespace-nowrap text-center font-black uppercase leading-none tracking-tight text-[21vw] sm:mt-4 sm:text-[13vw] md:-mt-5 md:text-[14vw] lg:text-[14.6vw]">
          {greetingStart}
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          {greetingEnd}
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 bg-gradient-to-t from-night via-night/85 to-transparent px-6 pb-7 pt-16 sm:bg-none sm:pb-8 sm:pt-0 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-mist sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {t('hero.tagline')}
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-1/2 z-10 w-[300px] -translate-x-1/2 sm:w-[320px] md:w-[380px] lg:w-[420px] 2xl:w-[460px]">
      <div
        className="pointer-events-none absolute inset-x-[-25%] bottom-[-10%] top-[10%] -z-10 rounded-full opacity-80 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(182,0,168,0.55), rgba(118,33,176,0.35) 55%, transparent)' }}
        aria-hidden="true"
      />
      <FadeIn delay={0.6} y={30}>
        <Magnet padding={150} strength={3}>
          <img
            src="/portrait.png"
            alt={t('hero.photo_alt')}
            width="365"
            height="478"
            fetchpriority="high"
            draggable="false"
            className="w-full select-none [-webkit-mask-image:linear-gradient(to_bottom,black_72%,transparent)] [mask-image:linear-gradient(to_bottom,black_72%,transparent)] sm:[-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent)] sm:[mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
          />
        </Magnet>
      </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
