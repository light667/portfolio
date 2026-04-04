import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CookieNotice = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto glass-card border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl shadow-black/50">
            <div className="flex items-start gap-3 flex-1">
              <div className="p-2 bg-neon-cyan/10 rounded-lg text-neon-cyan flex-shrink-0 mt-0.5">
                <Cookie size={20} />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Ce site utilise des cookies et Firebase Analytics pour améliorer votre expérience.
                Consultez notre{' '}
                <a href="/privacy" className="text-neon-cyan hover:underline">
                  Politique de Confidentialité
                </a>{' '}
                pour en savoir plus.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={decline}
                className="flex-1 sm:flex-none px-4 py-2 text-sm text-slate-400 hover:text-white border border-white/10 rounded-full hover:bg-white/5 transition-all"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="flex-1 sm:flex-none px-4 py-2 text-sm bg-neon-cyan text-dark font-bold rounded-full hover:bg-white transition-all"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieNotice;
