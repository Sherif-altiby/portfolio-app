/* eslint-disable react/jsx-no-target-blank */
import "./Projects.scss";
import { useGlobalContext } from "../context/Globalcontext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";
import m1 from "../../assets/images/bookstore-mini.jpg";
import m2 from "../../assets/images/devices.jpg";
import m3 from "../../assets/images/food-full (2).jpg";
import m4 from '../../assets/images/bb.jpg'
import m5 from '../../assets/images/chrip.jpg'

const Projects = () => {
  const { theme, language } = useGlobalContext();
  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <div
      id="portfolio" data-aos="zoom-in" data-aos-duration="1000"
      className={
        theme === true ? "portfolio container" : "portfolio container light"
      }
    >
      <h2> {t("portfolio")} </h2>
      <div className="portfolio_content">
        <div className="box" data-aos="zoom-in" data-aos-duration="1000" >
          <img src={m1} alt="" />
          <a href="https://sherif-altiby.github.io/bookstore/" target="_blank">  <i className="fa-regular fa-eye"></i>  </a>
          <span className="top"></span> <span className="right"></span>
          <span className="corner_right"></span>
          <span className="corner_left"></span>
        </div>
        <div className="box" data-aos="zoom-in" data-aos-duration="1000" >
          <img src={m2} alt="" />
          <a href="https://sherif-altiby.github.io/devices-ecommerce/" target="_blank">  <i className="fa-regular fa-eye"></i>  </a>
          <span className="top"></span> <span className="right"></span>
          <span className="corner_right"></span>
          <span className="corner_left"></span>
        </div>
        <div className="box" data-aos="zoom-in" data-aos-duration="1000" >
          <img src={m3} alt="" />
          <a href="https://sherif-altiby.github.io/foodres.github.io/" target="_blank">  <i className="fa-regular fa-eye"></i>  </a>
          <span className="top"></span> <span className="right"></span>
          <span className="corner_right"></span>
          <span className="corner_left"></span>
        </div>
        <div className="box" data-aos="zoom-in" data-aos-duration="1000" >
          <img src={m4} alt="" />
          <a href="https://gleeful-faun-1de51e.netlify.app/ " target="_blank">  <i className="fa-regular fa-eye"></i>  </a>
          <span className="top"></span> <span className="right"></span>
          <span className="corner_right"></span>
          <span className="corner_left"></span>
        </div>
        <div className="box" data-aos="zoom-in" data-aos-duration="1000" >
          <img src={m5} alt="" />
          <a href="https://euphonious-trifle-9205a8.netlify.app/" target="_blank">  <i className="fa-regular fa-eye"></i>  </a>
          <span className="top"></span> <span className="right"></span>
          <span className="corner_right"></span>
          <span className="corner_left"></span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
