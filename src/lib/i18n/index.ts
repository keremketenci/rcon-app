import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import translation files
import en from "@/lib/i18n/en.json";
import tr from "@/lib/i18n/tr.json";

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, tr: { translation: tr } },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
