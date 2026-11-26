import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

const KEY = 'cookie-consent';

const CookieNotice = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let consent = null;
    try {
      consent = localStorage.getItem(KEY);
    } catch {
      /* storage unavailable */
    }
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage unavailable */
    }
    if (value === 'accepted') window.__initAnalytics?.();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="fixed inset-x-0 bottom-0 z-[60] p-4"
          role="dialog"
          aria-live="polite"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-[28px] border border-mist/20 bg-carbon/95 p-4 text-mist shadow-2xl shadow-black/50 backdrop-blur-xl sm:flex-row sm:items-center">
            <div className="flex flex-1 items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-magenta/20 text-mist">
                <Cookie size={18} />
              </span>
              <p className="text-sm font-light leading-relaxed text-mist/70">
                {t('cookie.message')}{' '}
                <Link to="/privacy" className="font-medium text-mist underline-offset-2 hover:underline">
                  {t('cookie.privacy_link')}
                </Link>
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={() => save('declined')} className="flex-1 rounded-full border border-mist/30 px-4 py-2 text-xs font-medium uppercase tracking-widest text-mist transition-colors hover:bg-mist/10 sm:flex-none">
                {t('cookie.decline')}
              </button>
              <button type="button" onClick={() => save('accepted')} className="btn-gradient flex-1 !px-5 !py-2 !text-xs sm:flex-none">
                {t('cookie.accept')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieNotice;
