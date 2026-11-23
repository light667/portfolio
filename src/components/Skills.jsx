import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrainCircuit, Sparkles, Database, Wrench } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const ICONS = { ml: BrainCircuit, genai: Sparkles, data: Database, dev: Wrench };

const Skills = () => {
  const { t } = useTranslation();
  const groups = t('skills.groups', { returnObjects: true });

  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeading label={t('skills.label')} title={t('skills.title')} />

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group, i) => {
            const Icon = ICONS[group.id];
            const primary = i < 2;
            return (
              <Reveal key={group.id} delay={i * 0.06}>
                <div className="card h-full border-2 border-ink/10 p-6 transition-colors hover:border-ink sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-lg border-2 border-ink ${
                        primary ? 'bg-brand-600 text-white' : 'bg-flame-100 text-flame-600'
                      }`}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className="text-2xl font-bold text-ink">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li key={skill} className={primary ? 'chip-brand !text-sm' : 'chip-neutral !text-sm'}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
