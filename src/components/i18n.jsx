import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import translationEN from '../../public/locales/en/translation.json';
// import translationAR from '../../public/locales/ar/translation.json';

import translationEN from './locales/en/translation.json'
import translationAR from './locales/ar/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      ar: {
        translation: translationAR
      }
    },
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false // React already escapes the values
    }
  });

export default i18n;