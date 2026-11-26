import React from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from './ui/FadeIn';
import AnimatedText from './ui/AnimatedText';
import { ContactButton } from './ui/Buttons';

// Four glossy "3D" objects, drawn in SVG with the brand gradient, one per corner.
const Defs = ({ id }) => (
  <defs>
    <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#F0A3FF" />
      <stop offset="40%" stopColor="#B600A8" />
      <stop offset="100%" stopColor="#18011F" />
    </linearGradient>
    <linearGradient id={`${id}-b`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#C79BFF" />
      <stop offset="55%" stopColor="#7621B0" />
      <stop offset="100%" stopColor="#1a0630" />
    </linearGradient>
    <linearGradient id={`${id}-c`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#FFC08A" />
      <stop offset="50%" stopColor="#BE4C00" />
      <stop offset="100%" stopColor="#3a1300" />
    </linearGradient>
    <radialGradient id={`${id}-s`} cx="0.35" cy="0.3" r="0.75">
      <stop offset="0%" stopColor="#FFD9FB" />
      <stop offset="35%" stopColor="#B600A8" />
      <stop offset="100%" stopColor="#18011F" />
    </radialGradient>
  </defs>
);

const Orb = () => (
  <svg viewBox="0 0 200 200" className="w-full drop-shadow-[0_30px_40px_rgba(182,0,168,0.35)]">
    <Defs id="orb" />
    <ellipse cx="100" cy="104" rx="96" ry="26" fill="none" stroke="url(#orb-c)" strokeWidth="7" transform="rotate(-18 100 104)" />
    <circle cx="100" cy="100" r="62" fill="url(#orb-s)" />
    <path d="M38,118 A96,26 -18 0 0 170,72" fill="none" stroke="url(#orb-c)" strokeWidth="7" transform="rotate(0)" />
    <ellipse cx="78" cy="74" rx="18" ry="10" fill="white" opacity="0.35" transform="rotate(-30 78 74)" />
  </svg>
);

const Cube = () => (
  <svg viewBox="0 0 200 200" className="w-full drop-shadow-[0_30px_40px_rgba(118,33,176,0.4)]">
    <Defs id="cube" />
    <polygon points="100,20 175,62 100,104 25,62" fill="url(#cube-a)" />
    <polygon points="25,62 100,104 100,186 25,144" fill="url(#cube-b)" />
    <polygon points="175,62 100,104 100,186 175,144" fill="url(#cube-c)" />
    <polygon points="100,20 175,62 100,104 25,62" fill="white" opacity="0.12" />
  </svg>
);

const Chip = () => (
  <svg viewBox="0 0 200 200" className="w-full drop-shadow-[0_30px_40px_rgba(190,76,0,0.35)]">
    <Defs id="chip" />
    {[52, 76, 100, 124, 148].map((p) => (
      <g key={p} stroke="#D7E2EA" strokeWidth="6" strokeLinecap="round" opacity="0.7">
        <line x1={p} y1="18" x2={p} y2="40" />
        <line x1={p} y1="160" x2={p} y2="182" />
        <line x1="18" y1={p} x2="40" y2={p} />
        <line x1="160" y1={p} x2="182" y2={p} />
      </g>
    ))}
    <rect x="40" y="40" width="120" height="120" rx="24" fill="url(#chip-b)" />
    <rect x="66" y="66" width="68" height="68" rx="14" fill="url(#chip-c)" />
    <text x="100" y="109" textAnchor="middle" fontFamily="Kanit, sans-serif" fontWeight="900" fontSize="26" fill="white">AI</text>
  </svg>
);

const Layers = () => (
  <svg viewBox="0 0 200 200" className="w-full drop-shadow-[0_30px_40px_rgba(182,0,168,0.35)]">
    <Defs id="lay" />
    {[
      [150, 'url(#lay-c)'],
      [112, 'url(#lay-b)'],
      [74, 'url(#lay-a)'],
    ].map(([y, f]) => (
      <polygon key={y} points={`100,${y - 40} 180,${y} 100,${y + 40} 20,${y}`} fill={f} stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
    ))}
  </svg>
);

const Floating = ({ children, className, delay, x }) => (
  <FadeIn delay={delay} x={x} y={0} duration={0.9} className={`pointer-events-none absolute ${className}`}>
    <div className="animate-float" style={{ animationDelay: `${delay * 3}s`, animationDuration: '6s' }}>
      {children}
    </div>
  </FadeIn>
);

const About = () => {
  const { t } = useTranslation();
  const facts = t('about.facts', { returnObjects: true });

  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10" style={{ overflowX: 'clip' }}>
      <Floating className="left-[1%] top-[4%] w-[110px] sm:left-[2%] sm:w-[150px] md:left-[4%] md:w-[200px]" delay={0.1} x={-80}>
        <Orb />
      </Floating>
      <Floating className="bottom-[8%] left-[3%] w-[90px] sm:left-[6%] sm:w-[130px] md:left-[10%] md:w-[170px]" delay={0.25} x={-80}>
        <Cube />
      </Floating>
      <Floating className="right-[1%] top-[4%] w-[110px] sm:right-[2%] sm:w-[150px] md:right-[4%] md:w-[200px]" delay={0.15} x={80}>
        <Chip />
      </Floating>
      <Floating className="bottom-[8%] right-[3%] w-[120px] sm:right-[6%] sm:w-[160px] md:right-[10%] md:w-[210px]" delay={0.3} x={80}>
        <Layers />
      </Floating>

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn as="h2" delay={0} y={40} className="hero-heading heading-xl text-center">
            {t('about.heading')}
          </FadeIn>
          <AnimatedText
            text={t('about.animated')}
            className="max-w-[560px] text-center font-medium leading-relaxed text-mist"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <div className="flex flex-col items-center gap-8">
          <ContactButton />
          <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center text-xs font-light uppercase tracking-wider text-mist/60 sm:text-sm">
            {facts.map((f) => (
              <span key={f.label}>{f.value}</span>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
