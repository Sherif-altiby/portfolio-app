import './Intro.scss'
import { useGlobalContext } from "../context/Globalcontext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from 'react';
import TextAnimate from '../textAnimate/TextAnimate';


const Intro = () => {

  const {theme, language } =useGlobalContext();
  const { t } = useTranslation();

  useEffect(() => {i18next.changeLanguage(language)}, [language]);

  return (
    <div className="intro_container">
      <div id='intro' className={theme === true ? "intro container" : "intro container light"}  >
      <h4 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000"  > {t('hello')} </h4>
      <h2> <TextAnimate /> </h2> 
      <p data-aos="fade-right" data-aos-duration="1000" > {t('intro')} </p>
    </div>
    </div>
  )
}

export default Intro

