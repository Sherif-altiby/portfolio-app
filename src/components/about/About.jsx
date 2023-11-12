import './About.scss'
import { useGlobalContext } from "../context/Globalcontext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import m from '../../assets/images/about.avif'

const About = () => {

  const {theme, language } =useGlobalContext();
  const { t } = useTranslation();

  useEffect(() => {i18next.changeLanguage(language)}, [language]);

  return (
    <div id='about' className={ theme === true ? "about container" : "about container light" } >
      <div data-aos="zoom-in" data-aos-duration="1000" className="about_text"  >
        <h2> {t('about-me')} </h2>
        <p> {t('about-me-p')} </p>
        <button> <Link> {t('cv')} </Link> </button>
      </div>
      <div className="img" data-aos="zoom-in" data-aos-duration="1000" > 
       <img src={m} alt="" />
      </div>
    </div>
  )
}

export default About