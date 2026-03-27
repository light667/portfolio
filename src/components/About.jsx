import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { User, Cpu, Smartphone, Database } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
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
          </div>

          <div className="relative">
             <div className="aspect-video glass-card border-white/5 overflow-hidden flex items-center justify-center p-0">
                <div className="w-full h-full bg-grid-pattern opacity-10 absolute inset-0" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="z-10 text-center"
                >
                   <div className="w-20 h-20 bg-neon-cyan/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neon-cyan/20">
                      <Cpu size={40} className="text-neon-cyan" />
                   </div>
                   <h4 className="text-white font-bold tracking-widest uppercase text-xs">Innovation Focused</h4>
                </motion.div>
             </div>
             {/* Decorative lines */}
             <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-white/10 rounded-tr-3xl" />
             <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-white/10 rounded-bl-3xl" />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
