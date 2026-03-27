import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © 2024 Kokou Armand Light DJOSSOU. <br />
            Tous droits réservés.
          </p>
        </div>


        <div className="flex gap-6">
          {[
            { icon: <Github size={20} />, href: "https://github.com/light667" },
            { icon: <Linkedin size={20} />, href: "#" },
            { icon: <Twitter size={20} />, href: "#" },
            { icon: <MessageCircle size={20} />, href: "https://wa.me/22870703111" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ y: -3, color: '#06b6d4' }}
              className="text-slate-400 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
