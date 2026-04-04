import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, Send } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neon-cyan font-mono font-bold tracking-widest mb-4 flex items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-neon-cyan" />
            {t('hero.greeting')}
          </motion.p>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-none mb-6">
            Kokou Armand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
              Light DJOSSOU
            </span>
          </h1>

          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-slate-400">
              {t('hero.title1')}
            </h2>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-slate-400">
              {t('hero.title2')}
            </h2>
          </div>

          {/* User's Tagline */}
          <p className="text-slate-500 italic mb-8 max-w-md">
            "{t('hero.tagline')}"
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              {t('hero.cta')}
              <Send size={18} />
            </motion.a>
            
            <motion.a
              href="/cv.pdf"
              download="CV_Kokou_Armand_Light_DJOSSOU.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-white/20 rounded-full font-bold hover:bg-white/5 transition-all flex items-center gap-2 text-slate-300 cursor-pointer hover:border-neon-cyan/50"
            >
              {t('hero.download_cv')}
              <Download size={18} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group hidden sm:block"
        >
          {/* Animated Rings */}
          <div className="absolute inset-0 border-2 border-neon-cyan/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute -inset-4 border border-neon-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
             <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan to-neon-purple rounded-[40%] animate-[morph_8s_ease-in-out_infinite] blur-2xl opacity-20" />
             <div className="relative w-full h-full rounded-[40%] animate-[morph_8s_ease-in-out_infinite] overflow-hidden border-2 border-white/10 group-hover:border-neon-cyan/50 transition-colors">
               <img 
                 src="/photo.jpg" 
                 alt="Kokou Armand Light DJOSSOU - Ingénieur IA & Développeur Flutter" 
                 className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
               />
             </div>
          </div>

          {/* Floaters */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-10 -left-8 sm:-left-12 glass-card px-4 py-2 border-neon-cyan/30 z-20"
          >
            <span className="text-[10px] font-bold text-neon-cyan uppercase">AI Engineer</span>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 -right-8 sm:-right-12 glass-card px-4 py-2 border-neon-purple/30 z-20"
          >
            <span className="text-[10px] font-bold text-neon-purple uppercase">Flutter Dev</span>
          </motion.div>
          
          <motion.div 
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute top-1/2 -left-16 sm:-left-20 glass-card px-4 py-2 border-neon-lime/30 z-20 hidden lg:block"
          >
            <span className="text-[10px] font-bold text-neon-lime uppercase">ML Engineer</span>
          </motion.div>
          <motion.div 
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute top-1/2 -right-16 sm:-right-20 glass-card px-4 py-2 border-blue-500/30 z-20 hidden lg:block"
          >
            <span className="text-[10px] font-bold text-blue-500 uppercase">Web Dev</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
