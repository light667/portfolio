import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lang = i18n.language === 'en' ? 'en' : 'fr';

  const toggleLanguage = () => i18n.changeLanguage(lang === 'fr' ? 'en' : 'fr');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const LangSwitch = ({ className = '' }) => (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t('nav.lang')}
      className={`flex items-center rounded-full border-2 border-ink bg-white p-0.5 font-mono text-[11px] font-medium ${className}`}
    >
      {['fr', 'en'].map((code) => (
        <span
          key={code}
          className={`rounded-full px-2 py-1 uppercase transition-colors ${
            lang === code ? 'bg-ink text-white' : 'text-ink'
          }`}
        >
          {code}
        </span>
      ))}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || isOpen ? 'border-b-2 border-ink bg-cream/90 backdrop-blur-md' : 'border-b-2 border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[72px]">
        <a href="#top" className="group flex items-center gap-3" aria-label="Light DJOSSOU">
          <span className="grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-brand-600 font-display text-sm font-bold text-white shadow-hard-sm transition-transform group-hover:-translate-y-0.5">
            LD
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            Light <span className="text-brand-600">DJOSSOU</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-brand-100 hover:text-brand-700"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2 text-ink/70 transition-colors hover:bg-brand-100 hover:text-brand-700">
            <Github size={18} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 text-ink/70 transition-colors hover:bg-brand-100 hover:text-brand-700">
            <Linkedin size={18} />
          </a>
          <LangSwitch />
          <a href="#contact" className="btn-primary !px-4 !py-2 !text-sm">
            {t('nav.cta')}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitch />
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? t('nav.close') : t('nav.menu')}
            aria-expanded={isOpen}
            className="grid h-10 w-10 place-items-center rounded-lg border-2 border-ink bg-white text-ink"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t-2 border-ink bg-cream lg:hidden"
            aria-label="Navigation mobile"
          >
            <div className="container-page flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-ink/10 py-4 font-display text-2xl font-bold tracking-tight text-ink last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 flex items-center gap-3">
                <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-lg border-2 border-ink bg-white">
                  <Github size={20} />
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-lg border-2 border-ink bg-white">
                  <Linkedin size={20} />
                </a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="btn-cta ml-auto">
                  {t('nav.cta')}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
