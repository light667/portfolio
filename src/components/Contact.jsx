import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Github, MessageCircle, Send, CheckCircle, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import { PROFILE } from '../data/portfolio';

const FORMSPREE_URL = 'https://formspree.io/f/xgoppyvo';
const EMPTY = { name: '', email: '', type: '', message: '' };

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData(EMPTY);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 6000);
  };

  const channels = [
    { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'Kokou Light DJOSSOU', href: PROFILE.linkedin },
    { icon: Github, label: 'GitHub', value: 'github.com/light667', href: PROFILE.github },
    { icon: MessageCircle, label: 'WhatsApp', value: PROFILE.phone, href: PROFILE.whatsapp },
  ];

  return (
    <section id="contact" className="section-dark">
      <div className="mx-auto max-w-6xl">
        <FadeIn as="h2" y={40} className="hero-heading heading-xl text-center">
          {t('contact.heading')}
        </FadeIn>
        <FadeIn delay={0.1} as="p" className="mx-auto mb-14 mt-6 max-w-2xl text-center font-light leading-relaxed text-mist/70 sm:mb-20" style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.25rem)' }}>
          {t('contact.title')} {t('contact.intro')}
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <ul className="divide-y divide-mist/15 border-y border-mist/15">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="group flex items-center gap-4 py-5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-mist/30 text-mist transition-colors group-hover:border-transparent group-hover:bg-magenta group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-light uppercase tracking-widest text-mist/50">{label}</span>
                      <span className="block truncate font-medium text-mist">{value}</span>
                    </span>
                    <ArrowUpRight size={18} className="ml-auto shrink-0 text-mist/40 transition-colors group-hover:text-mist" />
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-[32px] border-2 border-mist/80 bg-carbon p-6 text-mist sm:rounded-[40px] sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-2 block text-xs font-light uppercase tracking-widest text-mist/60">{t('contact.name')}</label>
                  <input id="c-name" type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required placeholder={t('contact.name_ph')} className="field-dark" />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-2 block text-xs font-light uppercase tracking-widest text-mist/60">{t('contact.email')}</label>
                  <input id="c-email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required placeholder={t('contact.email_ph')} className="field-dark" />
                </div>
              </div>
              <div>
                <label htmlFor="c-type" className="mb-2 block text-xs font-light uppercase tracking-widest text-mist/60">{t('contact.type')}</label>
                <select id="c-type" name="type" value={formData.type} onChange={handleChange} className="field-dark cursor-pointer [&>option]:bg-night">
                  <option value="">{t('contact.type_select')}</option>
                  <option value="opportunity">{t('contact.type_job')}</option>
                  <option value="collaboration">{t('contact.type_collab')}</option>
                  <option value="other">{t('contact.type_other')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="c-message" className="mb-2 block text-xs font-light uppercase tracking-widest text-mist/60">{t('contact.message')}</label>
                <textarea id="c-message" rows="5" name="message" value={formData.message} onChange={handleChange} required placeholder={t('contact.message_ph')} className="field-dark resize-none" />
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn-gradient w-full disabled:cursor-not-allowed disabled:opacity-70">
                {status === 'sending' ? (
                  <>
                    {t('contact.sending')}
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    {t('contact.send')}
                    <Send size={18} />
                  </>
                )}
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <p className="flex items-center gap-3 rounded-2xl border border-green-400/30 bg-green-400/10 p-4 text-sm text-green-300">
                    <CheckCircle size={20} className="shrink-0" />
                    {t('contact.success')}
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-3 rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-300">
                    <AlertCircle size={20} className="shrink-0" />
                    {t('contact.error')}
                  </p>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
