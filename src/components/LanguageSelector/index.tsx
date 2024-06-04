import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { localesList } from "../../i18nConfig";
import { LanguageSelectorContainer, LanguageSelect } from "./LanguageSelector.styled";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const activeLanguage = i18n.language;
  const [lang, setLang] = useState(activeLanguage);

  useEffect(() => {
    i18n.changeLanguage(lang);
    window.localStorage.setItem("language", lang);
  }, [i18n, lang]);

  return (
    <LanguageSelectorContainer>
      <LanguageSelect value={lang} onChange={(e) => setLang(e.target.value)}>
        {localesList.map((langResource) => (
          <option value={langResource} key={langResource}>
            {t(`language-${langResource}`)}
          </option>
        ))}
      </LanguageSelect>
    </LanguageSelectorContainer>
  );
};

export default LanguageSelector;
