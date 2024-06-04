import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_US from "./locales/en_US/translations.json";
import es_ES from "./locales/es_ES/translations.json";

const languageResources = {
  en_US: { translation: en_US },
  es_ES: { translation: es_ES },
};

export const localesList = Object.keys(languageResources);

const simplifyLanguage = (language: string): string => {
  return language.replace("_", "").replace("-", "").toLowerCase();
};

const getDefaultLanguage = () => {
  const storedLanguage = window.localStorage.getItem("language");
  if (storedLanguage) return storedLanguage;

  const browserLanguage = navigator.language;
  const language = localesList.find(
    (lang) => simplifyLanguage(lang) === simplifyLanguage(browserLanguage)
  );

  return language ? language : localesList[0];
};

const initI18n = () => {
  i18n.use(initReactI18next).init({
    resources: languageResources,
    lng: getDefaultLanguage(),
  });
};

export default initI18n;
