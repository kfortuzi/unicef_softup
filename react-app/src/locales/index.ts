import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LocalStorageKey, getItem } from 'src/utils/storage';

import en from './en.json';
import sq from './sq.json';

export enum Locale {
  ENGLISH = 'en',
  ALBANIAN = 'sq',
}

const selectedLanguage = getItem<Locale>(LocalStorageKey.SELECTED_LANGUAGE) || Locale.ALBANIAN;

i18n.use(initReactI18next).init({
  resources: { en, sq },
  lng: selectedLanguage,
  fallbackLng: 'sq',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
