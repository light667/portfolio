import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, Cpu, Smartphone } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="section-title">
            <span className="text-neon-cyan italic font-mono">01.</span>
            {t('about.title')}
          </h2>
          
          <p className="text-xl text-slate-400 leading-relaxed mb-8">
            {t('about.description')}
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-neon-cyan/10 rounded-lg text-neon-cyan">
                <Cpu size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">AI Specialist</h4>
                <p className="text-sm text-slate-500">LLM & RAG</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-neon-purple/10 rounded-lg text-neon-purple">
                <Smartphone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Mobile</h4>
                <p className="text-sm text-slate-500">Flutter Expert</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
