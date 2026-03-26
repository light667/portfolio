import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Journey = () => {
  const { t } = useTranslation();

  const steps = [
    {
      id: "step1",
      date: t('journey.step1.date'),
      title: t('journey.step1.title'),
      desc: t('journey.step1.desc'),
      icon: <Briefcase size={20} />,
      type: "work"
    },
    {
      id: "step2",
      date: t('journey.step2.date'),
      title: t('journey.step2.title'),
      desc: t('journey.step2.desc'),
      icon: <GraduationCap size={20} />,
      type: "education"
    }
  ];

  return (
    <section id="journey" className="py-24 bg-dark/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">
          <span className="text-neon-cyan italic font-mono">06.</span>
          {t('journey.title')}
        </h2>

        <div className="relative border-l-2 border-white/5 ml-4 md:ml-8 space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 group"
            >
              <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-2 border-dark bg-slate-800 group-hover:bg-neon-cyan transition-colors z-10`} />
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-4">
                 <span className="text-sm font-mono text-neon-cyan flex items-center gap-2">
                   <Calendar size={14} />
                   {step.date}
                 </span>
                 <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors uppercase tracking-tight">
                   {step.title}
                 </h3>
              </div>
              
              <p className="max-w-2xl text-slate-400 leading-relaxed border-l-4 border-white/5 pl-6 py-2">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
