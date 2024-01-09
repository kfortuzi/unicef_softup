import i18n, { Locale } from 'src/locales';
import { LocalStorageKey, saveItem } from 'src/utils/storage';

const changeLanguage = (locale: Locale) => {
  i18n.changeLanguage(locale);
  saveItem(LocalStorageKey.SELECTED_LANGUAGE, locale);
};

export default changeLanguage;
