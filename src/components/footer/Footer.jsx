import "./Footer.scss";
import { useGlobalContext } from "../context/Globalcontext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";

const Footer = () => {
  const { theme, language } = useGlobalContext();

  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);
  return (
    <footer className={theme === true ? "" : "light"}>
      <p
        className={language === "ar" ? "ar" : ""}
        data-aos-duration="1000"
        data-aos="zoom-in"
      >
        {t("rights")} <span>&copy;</span>2023
      </p>
    </footer>
  );
};

export default Footer;
