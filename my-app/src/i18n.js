import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import de from "./locales/de.json";
import ja from "./locales/ja.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    ja: { translation: ja },
  },
  lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
