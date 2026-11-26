import React from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from './ui/FadeIn';

const Skills = () => {
  const { t } = useTranslation();
  const groups = t('skills.groups', { returnObjects: true });

  return (
    <section id="skills" className="section-light !pb-10 sm:!pb-12 md:!pb-16">
      <FadeIn as="h2" y={40} className="heading-xl mb-16 text-center text-night sm:mb-20 md:mb-28">
        {t('skills.heading')}
      </FadeIn>

      <ul className="mx-auto max-w-5xl">
        {groups.map((group, i) => (
          <FadeIn
            as="li"
            key={group.id}
            delay={i * 0.1}
            className="grid gap-5 border-t py-8 sm:py-10 md:grid-cols-12 md:gap-10 md:py-12"
            style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
          >
            <div className="flex items-baseline gap-4 md:col-span-5">
              <span className="font-black leading-none text-night/15" style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}>
                0{i + 1}
              </span>
              <h3 className="font-medium uppercase text-night" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.9rem)' }}>
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap content-start gap-2 md:col-span-7">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-full border border-night/20 px-4 py-1.5 text-sm font-light text-night transition-colors duration-200 hover:border-transparent hover:bg-night hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
