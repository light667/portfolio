import React from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from './ui/FadeIn';

const Services = () => {
  const { t } = useTranslation();
  const items = t('expertise.items', { returnObjects: true });

  return (
    <section id="expertise" className="section-light">
      <FadeIn as="h2" y={40} className="heading-xl mb-16 text-center text-night sm:mb-20 md:mb-28">
        {t('expertise.heading')}
      </FadeIn>

      <ul className="mx-auto max-w-5xl">
        {items.map((item, i) => (
          <FadeIn
            as="li"
            key={item.title}
            delay={i * 0.1}
            className="group flex items-start gap-6 border-t py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
            style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
          >
            <span
              className="shrink-0 font-black leading-none text-night transition-colors duration-300 group-hover:text-magenta"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              0{i + 1}
            </span>
            <div className="flex flex-col gap-2 pt-2 sm:gap-3 md:pt-4">
              <h3 className="font-medium uppercase text-night" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {item.title}
              </h3>
              <p className="max-w-2xl font-light leading-relaxed text-night/60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </ul>
    </section>
  );
};

export default Services;
