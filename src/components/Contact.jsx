import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_dudg5uj';
const EMAILJS_TEMPLATE_ID = 'template_portfolio'; // Create this template in EmailJS dashboard
const EMAILJS_PUBLIC_KEY = 'h9un1D02pg4OBp08V';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', type: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">
          <span className="text-neon-cyan italic font-mono">06.</span>
          {t('contact.title')}
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-slate-400 mb-4 font-light leading-relaxed">
              {t('contact.intro')}
            </p>
            <p className="text-white font-bold uppercase tracking-tighter italic mb-12">
              {t('contact.motto')}
            </p>

            <div className="space-y-6">
              <a href="mailto:nethaniahdjossou@gmail.com" className="group flex items-center gap-6 p-6 glass-card border-none hover:bg-white/10 transition-all">
                <div className="p-4 bg-neon-cyan/20 text-neon-cyan rounded-2xl group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-medium text-sm sm:text-base">nethaniahdjossou@gmail.com</p>
                </div>
                <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-neon-cyan hidden sm:block" size={20} />
              </a>

              <a href="https://wa.me/22870703111" target="_blank" rel="noreferrer" className="group flex items-center gap-6 p-6 glass-card border-none hover:bg-white/10 transition-all">
                <div className="p-4 bg-neon-purple/20 text-neon-purple rounded-2xl group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-white font-medium text-sm sm:text-base">+228 70 70 31 11</p>
                </div>
                <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-neon-purple hidden sm:block" size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card neon-border"
          >
            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('contact.name')}</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors placeholder:text-slate-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('contact.email')}</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors placeholder:text-slate-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('contact.type')}</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-dark">— Sélectionnez —</option>
                  <option value="collaboration" className="bg-dark">{t('contact.type_collab')}</option>
                  <option value="service" className="bg-dark">{t('contact.type_service')}</option>
                  <option value="other" className="bg-dark">{t('contact.type_other')}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t('contact.message')}</label>
                <textarea 
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre projet..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none placeholder:text-slate-600"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`btn-primary w-full justify-center group ${
                  status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {status === 'sending' ? (
                  <>
                    {t('contact.sending')}
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    {t('contact.send')}
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
                >
                  <CheckCircle size={20} className="text-emerald-500 flex-shrink-0" />
                  <p className="text-emerald-400 text-sm">{t('contact.success')}</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                >
                  <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{t('contact.error')}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
