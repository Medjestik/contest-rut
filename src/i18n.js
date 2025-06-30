import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    supportedLngs: ['en', 'ru', 'cn', 'fr'],
    debug: false,
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}-translation.json',
    },
    resources: {
      en: { translation: require('./locales/en-translation.json') },
      ru: { translation: require('./locales/ru-translation.json') },
      cn: { translation: require('./locales/cn-translation.json') },
      fr: { translation: require('./locales/fr-translation.json') },
    },
  });

export default i18n;
