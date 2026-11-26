import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../../data/portfolio';

export const ContactButton = ({ href = '#contact', label, className = '' }) => {
  const { t } = useTranslation();
  return (
    <a href={href} className={`btn-gradient ${className}`}>
      {label ?? t('nav.cta')}
    </a>
  );
};

export const GhostButton = ({ href, children, light = false, className = '', ...rest }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`${light ? 'btn-ghost-light' : 'btn-ghost-dark'} ${className}`}
    {...rest}
  >
    {children}
  </a>
);

// GitHub + LinkedIn shortcuts, used in both navigation bars.
export const SocialLinks = ({ size = 'md' }) => {
  const box = size === 'sm' ? 'h-9 w-9' : 'h-9 w-9 md:h-11 md:w-11';
  const icon = size === 'sm' ? 16 : 18;
  return (
    <>
      {[
        { Icon: Github, href: PROFILE.github, label: 'GitHub' },
        { Icon: Linkedin, href: PROFILE.linkedin, label: 'LinkedIn' },
      ].map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className={`grid ${box} shrink-0 place-items-center rounded-full border border-mist/30 text-mist transition-colors duration-200 hover:border-transparent hover:bg-magenta hover:text-white`}
        >
          <Icon size={icon} />
        </a>
      ))}
    </>
  );
};
