import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const STORAGE_KEY = 'lang';

const readSavedLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {
    /* storage unavailable */
  }
  return 'fr';
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    fr: { translation: translationFR },
  },
  lng: readSavedLang(),
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
});

const syncDocument = (lng) => {
  document.documentElement.lang = lng;
  document.title = i18n.t('meta.title');
};

syncDocument(i18n.language);
i18n.on('languageChanged', (lng) => {
  syncDocument(lng);
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    /* storage unavailable */
  }
});

export default i18n;
