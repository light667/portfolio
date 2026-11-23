import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Github, MessageCircle, Send, CheckCircle, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
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
    <section id="contact" className="section bg-ink text-white">
      <div className="container-page">
        <SectionHeading tone="dark" label={t('contact.label')} title={t('contact.title')} subtitle={t('contact.intro')} />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="group flex items-center gap-4 py-5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border-2 border-white/20 text-white transition-colors group-hover:border-flame-500 group-hover:bg-flame-500">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-brand-200">{label}</span>
                      <span className="block truncate font-medium text-white">{value}</span>
                    </span>
                    <ArrowUpRight size={18} className="ml-auto shrink-0 text-white/40 transition-colors group-hover:text-flame-500" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl border-2 border-ink bg-white p-6 text-ink sm:p-8"
              style={{ boxShadow: '6px 6px 0 #F97316' }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-2 block text-sm font-semibold">{t('contact.name')}</label>
                  <input id="c-name" type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required placeholder={t('contact.name_ph')} className="field" />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-2 block text-sm font-semibold">{t('contact.email')}</label>
                  <input id="c-email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required placeholder={t('contact.email_ph')} className="field" />
                </div>
              </div>
              <div>
                <label htmlFor="c-type" className="mb-2 block text-sm font-semibold">{t('contact.type')}</label>
                <select id="c-type" name="type" value={formData.type} onChange={handleChange} className="field cursor-pointer">
                  <option value="">{t('contact.type_select')}</option>
                  <option value="opportunity">{t('contact.type_job')}</option>
                  <option value="collaboration">{t('contact.type_collab')}</option>
                  <option value="other">{t('contact.type_other')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="c-message" className="mb-2 block text-sm font-semibold">{t('contact.message')}</label>
                <textarea id="c-message" rows="5" name="message" value={formData.message} onChange={handleChange} required placeholder={t('contact.message_ph')} className="field resize-none" />
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn-cta w-full disabled:cursor-not-allowed disabled:opacity-70">
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
                  <p className="flex items-center gap-3 rounded-lg border border-green-600/30 bg-green-50 p-4 text-sm text-green-700">
                    <CheckCircle size={20} className="shrink-0" />
                    {t('contact.success')}
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-3 rounded-lg border border-red-600/30 bg-red-50 p-4 text-sm text-red-700">
                    <AlertCircle size={20} className="shrink-0" />
                    {t('contact.error')}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
