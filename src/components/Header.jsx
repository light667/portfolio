import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SocialLinks } from './ui/Buttons';

// The hero carries its own nav; this floating pill takes over once the hero scrolls away.
const Header = () => {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const lang = i18n.language === 'en' ? 'en' : 'fr';

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!visible) setOpen(false);
  }, [visible]);

  const links = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const LangSwitch = () => (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(lang === 'fr' ? 'en' : 'fr')}
      aria-label={t('nav.lang')}
      className="rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-mist transition-colors hover:bg-mist/10"
    >
      <span className={lang === 'fr' ? '' : 'opacity-40'}>FR</span>
      <span className="opacity-40"> / </span>
      <span className={lang === 'en' ? '' : 'opacity-40'}>EN</span>
    </button>
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5"
        >
          <div className="w-full max-w-4xl rounded-[28px] border border-mist/15 bg-night/80 px-3 py-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-2">
              <a href="#top" className="grid h-10 w-10 place-items-center rounded-full text-sm font-black text-white" style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 40%, #7621B0 75%, #BE4C00 100%)' }} aria-label="Light DJOSSOU">
                LD
              </a>
              <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="rounded-full px-3 py-2 text-sm font-medium uppercase tracking-wider text-mist transition-opacity hover:opacity-70">
                    {l.name}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-1.5">
                <SocialLinks size="sm" />
                <LangSwitch />
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-label={open ? t('nav.close') : t('nav.menu')}
                  aria-expanded={open}
                  className="grid h-10 w-10 place-items-center rounded-full border border-mist/25 text-mist md:hidden"
                >
                  {open ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>
            <AnimatePresence>
              {open && (
                <motion.nav
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden md:hidden"
                  aria-label="Navigation mobile"
                >
                  <div className="flex flex-col px-3 pb-3 pt-2">
                    {links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="border-b border-mist/10 py-3 text-2xl font-black uppercase tracking-tight text-mist last:border-0"
                      >
                        {l.name}
                      </a>
                    ))}
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
