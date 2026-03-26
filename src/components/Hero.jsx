import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, Send, Zap, ChevronRight } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-20" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 py-1.5 px-5 bg-white/5 border border-white/10 rounded-full flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-ping" />
            <span className="text-[10px] font-bold text-slate-300 tracking-[0.3em] uppercase">Disponible Immédiatement</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-8"
          >
            <span className="block text-2xl md:text-3xl font-light text-slate-500 mb-4 font-mono">{t('hero.greeting')}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neon-cyan/50 drop-shadow-sm uppercase tracking-tighter">
              Kokou Armand <br />
              Light DJOSSOU
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4 mb-8 border-l-2 border-neon-cyan/30 pl-8"
          >
             <h2 className="text-2xl md:text-3xl text-slate-200 font-bold tracking-tight uppercase">
                {t('hero.title1')}
             </h2>
             <h2 className="text-2xl md:text-3xl text-slate-400 font-light tracking-tight uppercase">
                {t('hero.title2')}
             </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-xl text-lg text-slate-500 font-light mb-12 italic leading-relaxed border-b border-white/5 pb-8"
          >
            "{t('hero.tagline')}"
          </motion.p>

          <div className="flex flex-wrap gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              {t('hero.cta')}
              <Send size={18} />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/10 rounded-full text-slate-300 font-bold flex items-center gap-3 transition-all"
            >
              Consult CV
              <Download size={18} />
            </motion.button>
          </div>
        </div>

        {/* Right Photo */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="lg:col-span-5 relative group hidden lg:block"
        >
           {/* Geometric Frames */}
           <div className="absolute -inset-4 border border-neon-cyan/20 rounded-2xl -rotate-6 transition-transform group-hover:rotate-0 duration-700" />
           <div className="absolute -inset-4 border border-neon-purple/20 rounded-2xl rotate-3 transition-transform group-hover:rotate-0 duration-700" />
           
           <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-card p-0 border-white/10 ring-1 ring-white/5 group-hover:ring-neon-cyan/30 transition-all duration-500 shadow-2xl">
              <img 
                src="/photo.jpg" 
                alt="Kokou Armand Light DJOSSOU" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
              
              {/* Floating Tag */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-1 bg-dark/80 backdrop-blur-md rounded-lg border border-white/10">
                 <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse" />
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest font-mono">Verified_ID</span>
              </div>
           </div>

           {/* Decorative UI elements */}
           <div className="absolute -top-10 -right-10 w-20 h-20 bg-neon-cyan/5 rounded-full blur-2xl group-hover:bg-neon-cyan/20 transition-all" />
           <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-neon-purple/5 rounded-full blur-2xl group-hover:bg-neon-purple/20 transition-all" />
        </motion.div>
      </div>

      {/* Mobile Scroll Indicator */}
      <motion.div 
         animate={{ y: [0, 10, 0] }}
         transition={{ duration: 2, repeat: Infinity }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 lg:hidden"
      >
        <ChevronRight size={24} className="rotate-90" />
      </motion.div>
    </section>
  );
};

export default Hero;
