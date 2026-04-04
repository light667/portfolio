import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Calendar } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 'exp1',
      role: t('experience.exp1.role'),
      company: 'Mawaba Technologies',
      companyUrl: 'https://mawabatechnologies.com/',
      date: t('experience.exp1.date'),
      description: t('experience.exp1.desc'),
      tags: ['Generative AI', 'LLM', 'RAG', 'Python', 'Langchain'],
      color: 'neon-cyan',
    },
    {
      id: 'exp2',
      role: t('experience.exp2.role'),
      company: 'Neuractif Initiatives',
      companyUrl: null,
      date: t('experience.exp2.date'),
      description: t('experience.exp2.desc'),
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Web Solutions'],
      color: 'neon-purple',
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">
          <span className="text-neon-cyan italic font-mono">02.</span>
          {t('experience.title')}
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={`relative flex flex-col sm:flex-row items-start gap-8 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark border-2 border-neon-cyan shadow-[0_0_12px_rgba(6,182,212,0.5)] z-10 hidden sm:block" />

                {/* Card */}
                <div className={`w-full sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:pr-0' : 'sm:pl-0'}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card neon-border group relative overflow-hidden"
                  >
                    {/* Decorative gradient */}
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-${exp.color}/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      {/* Date badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar size={14} className="text-slate-500" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                          {exp.date}
                        </span>
                      </div>

                      {/* Role */}
                      <h3 className={`text-xl font-bold text-white mb-1 group-hover:text-${exp.color} transition-colors`}>
                        {exp.role}
                      </h3>

                      {/* Company */}
                      <div className="flex items-center gap-2 mb-4">
                        <Briefcase size={14} className={`text-${exp.color}`} />
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`text-${exp.color} font-semibold text-sm hover:underline flex items-center gap-1`}
                          >
                            {exp.company}
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className={`text-${exp.color} font-semibold text-sm`}>
                            {exp.company}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
