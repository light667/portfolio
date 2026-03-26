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
             <div className="aspect-video glass-card border-neon-cyan/20 overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <div className="w-8 h-8 bg-neon-cyan rounded-full shadow-[0_0_20px_#06b6d4]" />
                  </motion.div>
                  <p className="font-mono text-neon-cyan animate-pulse">SYSTEM_ONLINE</p>
                </div>
             </div>
             {/* Decorative lines */}
             <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-neon-cyan/30 rounded-tr-3xl" />
             <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-neon-purple/30 rounded-bl-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
