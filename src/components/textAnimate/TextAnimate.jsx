import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from 'react';
import { useGlobalContext } from "../context/Globalcontext";

const TextAnimate = () => {
  const { language } =useGlobalContext();
  const { t } = useTranslation();
  
  useEffect(() => {i18next.changeLanguage(language)}, [language]);
  const [ text ] = useTypewriter({
    words: [ `${t('sherif')}`,`${t('front')}`],
    loop: {},
    typeSpeed: 10,
    deleteSpeed: 10,
  });
  return (
    <>
      <span>
        {text}
        <Cursor />
      </span>
    </>
  );
};

export default TextAnimate;




