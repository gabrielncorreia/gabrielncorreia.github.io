import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import pt from './locales/pt.json';

export const LANGUAGES = ['en', 'pt'];
const STORAGE_KEY = 'lang';

// localStorage can throw (private mode, blocked storage); English is the fallback.
function savedLanguage() {
  try {
    const lang = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(lang) ? lang : 'en';
  } catch {
    return 'en';
  }
}

i18n.on('languageChanged', (lang) => {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Choice just won't persist.
  }
});

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, pt: { translation: pt } },
  lng: savedLanguage(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
