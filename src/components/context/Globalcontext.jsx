import { useState, useContext, createContext, useEffect } from "react";

export const Context = createContext();


const Globalcontext = ({ children }) => {
 
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : true);
  const toggleTheme = ()=>{ setTheme(!theme) }

  const [language, setLanguage] = useState( localStorage.getItem("language")? localStorage.getItem("language") : "en" );
  const setLanAr = ()=> { setLanguage("ar") }
  const setLanEn = ()=> { setLanguage("en") }

  useEffect(()=> {localStorage.setItem("language", language)}, [language])
  useEffect(()=> {localStorage.setItem("theme", theme)}, [theme])

  return (
    <Context.Provider value={{toggleTheme, theme, setLanAr, setLanEn, language}} > 
      {children}
    </Context.Provider>
    
  )
}

export default Globalcontext;

export const useGlobalContext  = ()=>{ return useContext(Context) }