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
    <footer className="border-t border-white/10 bg-ink py-10 text-white">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold">
            Light <span className="text-brand-300">DJOSSOU</span>
          </p>
          <p className="mt-1 text-sm text-brand-100/80">{t('footer.tagline')}</p>
          <p className="mt-4 text-xs text-white/50">
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
              className="grid h-10 w-10 place-items-center rounded-lg border-2 border-white/15 text-white/80 transition-colors hover:border-flame-500 hover:bg-flame-500 hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
          <a
            href="#top"
            aria-label={t('footer.top')}
            className="ml-2 grid h-10 w-10 place-items-center rounded-lg border-2 border-white bg-white text-ink transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
