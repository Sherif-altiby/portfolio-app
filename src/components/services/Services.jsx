import "./Services.scss";
import { useGlobalContext } from "../context/Globalcontext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";

const Services = () => {
  const { theme, language } = useGlobalContext();
  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <div
      id="services"
      className={
        theme === true ? "services container" : "services container light"
      }
    >
      <h2 data-aos="zoom-in" data-aos-duration="1000">
        {t("services")}
      </h2>
      <div className="boxs_container">
        <div className="box" data-aos="flip-left" data-aos-duration="1000">
          <i className="fa-solid fa-gear"></i>
          <h3> {t("creative-design")} </h3>
          <p> {t("creative-design-p")} </p>
        </div>
        <div className="box" data-aos="flip-right" data-aos-duration="1000">
          <i className="fa-solid fa-code"></i>
          <h3> {t("clean-code")} </h3>
          <p> {t("clean-code-p")} </p>
        </div>
        <div className="box" data-aos="flip-left" data-aos-duration="1000">
          <i className="fa-solid fa-crop"></i>
          <h3> {t("responsive")} </h3>
          <p> {t("responsive-p")} </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
