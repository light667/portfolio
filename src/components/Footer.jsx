import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm">
              © 2024-2026 Kokou Armand Light DJOSSOU. <br />
              {t('footer.rights')}
            </p>
          </div>

          <div className="flex gap-5">
            {[
              { icon: <Github size={20} />, href: "https://github.com/light667", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/kokou-light-djossou-90216233b/", label: "LinkedIn" },
              { icon: <Instagram size={20} />, href: "https://www.instagram.com/l_ight.ai/", label: "Instagram" },
              { icon: <MessageCircle size={20} />, href: "https://wa.me/22870703111", label: "WhatsApp" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ y: -3, color: '#06b6d4' }}
                className="text-slate-400 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
