import "./Navbar.scss";
import { useGlobalContext } from "../context/Globalcontext";
import m1 from "../../assets/images/sherif-altiby-low-resolution-logo-black-on-transparent-background.png";
import m2 from "../../assets/images/sherif-altiby-low-resolution-logo-white-on-transparent-background.png";
import m3 from "../../assets/images/eg.webp";
import m4 from "../../assets/images/us.webp";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";



const Navbar = () => {
  const { toggleTheme, theme, setLanAr, setLanEn, language } =useGlobalContext();
  const [menue, setMenue] = useState(true);
  const [block, setBlock] = useState(true)
  const toggleMenue = () => { setMenue(!menue) };
  const { t } = useTranslation();
  const toggleBlock = ()=>{setBlock(!block) }

  useEffect(() => {i18next.changeLanguage(language)}, [language]);


  return (
    <div className={theme === true ? "navbar container" : "navbar container light"} >
      <div className="logo">
        <img src={theme === true ? m2 : m1} alt="" />
      </div>
      <div className={block === true ? "menu" : "menu block"}>
        <ul>
          <li>  <a href="#intro" > {t('home')}       </a>  </li>
          <li>  <a href="#about" > {t('about')}      </a>  </li>
          <li>  <a href="#services" > {t('services')}  </a>  </li>
          <li>  <a href="#portfolio" > {t('portfolio')}  </a>  </li>
          <li>  <a href="#testmoniails" > {t('testmonials')}</a>  </li>
          <li>  <a href="#contact" > {t('contact')}     </a>  </li>
        </ul>
      </div>  
    
      <div className="mode_translation">
      <div className="bars" onClick={toggleBlock} >
      <i className="fa-solid fa-bars"></i>
      </div>
        <div className="dark_light_mode" onClick={toggleTheme}>
          <i className="fa-solid fa-sun"></i>
          <i className="fa-solid fa-moon"></i>
        </div>
        <div className="translation" onClick={toggleMenue}>
          <i className="fa-solid fa-globe"></i>
          <ul className={menue === true ? "" : "opacity_1"}>
            <li onClick={setLanEn}> <img src={m4} alt="" /> English </li>
            <li onClick={setLanAr}> <img src={m3} alt="" /> Arbic </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
