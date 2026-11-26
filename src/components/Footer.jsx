import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const socials = [
    { icon: Github, href: PROFILE.github, label: 'GitHub' },
    { icon: Linkedin, href: PROFILE.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: PROFILE.instagram, label: 'Instagram' },
    { icon: MessageCircle, href: PROFILE.whatsapp, label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-night px-5 pb-10 text-mist sm:px-8 md:px-10" style={{ overflowX: 'clip' }}>
      <p className="hero-heading select-none whitespace-nowrap text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: '12.4vw' }} aria-hidden="true">
        Light Djossou
      </p>
      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-6 border-t border-mist/15 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-light uppercase tracking-widest text-mist/70">{t('footer.tagline')}</p>
          <p className="mt-2 text-xs font-light text-mist/40">
            © {year} Kokou Armand Light DJOSSOU. {t('footer.rights')}{' '}
            <Link to="/privacy" className="underline-offset-2 hover:underline">{t('footer.privacy')}</Link>
            {' · '}
            <Link to="/terms" className="underline-offset-2 hover:underline">{t('footer.terms')}</Link>
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-mist/25 text-mist transition-colors hover:border-transparent hover:bg-magenta hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
          <a href="#top" aria-label={t('footer.top')} className="ml-2 grid h-11 w-11 place-items-center rounded-full bg-mist text-night transition-transform hover:-translate-y-0.5">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
