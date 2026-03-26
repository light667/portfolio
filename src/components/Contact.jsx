import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">
          <span className="text-neon-cyan italic font-mono">05.</span>
          {t('contact.title')}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-slate-400 mb-12">
              Prêt à propulser votre prochain projet avec une IA sur-mesure ou une application mobile d'excellence ?
            </p>

            <div className="space-y-6">
              <a href="mailto:nethaniahdjossou@gmail.com" className="group flex items-center gap-6 p-6 glass-card border-none hover:bg-white/10 transition-all">
                <div className="p-4 bg-neon-cyan/20 text-neon-cyan rounded-2xl group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-medium">nethaniahdjossou@gmail.com</p>
                </div>
                <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-neon-cyan" size={20} />
              </a>

              <a href="https://wa.me/22870703111" target="_blank" rel="noreferrer" className="group flex items-center gap-6 p-6 glass-card border-none hover:bg-white/10 transition-all">
                <div className="p-4 bg-neon-purple/20 text-neon-purple rounded-2xl group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-white font-medium">+228 70 70 31 11</p>
                </div>
                <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-neon-purple" size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card neon-border"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('contact.name')}</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('contact.email')}</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('contact.message')}</label>
                <textarea 
                  rows="4"
                  placeholder="Votre projet..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                />
              </div>
              <button className="btn-primary w-full justify-center group">
                {t('contact.send')}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
