import "./Testmonials.scss";
import { useGlobalContext } from "../context/Globalcontext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import m1 from "../../assets/images/m1jpg.jpg";
import m2 from "../../assets/images/m2.jpg";
import m3 from "../../assets/images/m3.jpg";

const Testmonials = () => {
  const { theme, language } = useGlobalContext();
  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);
  return (
    <div
      className={
        theme === true ? "container testmonials" : "container testmonials light"
      }
      id="testmoniails"
      data-aos-duration="1000"
      data-aos="zoom-in"
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <div className="box">
            <div className="img-info">
              <img src={m1} alt="" />
              <div className="info">
                <h2> {t("name1")} </h2>
                <p> {t("jop1")} </p>
              </div>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              reprehenderit dolore molestiae soluta odit iusto alias suscipit
              minima consequatur ad?
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="img-info">
              <img src={m2} alt="" />
              <div className="info">
                <h2> {t("name2")} </h2>
                <p> {t("jop2")} </p>
              </div>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              reprehenderit dolore molestiae soluta odit iusto alias suscipit
              minima consequatur ad?
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <div className="img-info">
              <img src={m3} alt="" />
              <div className="info">
                <h2> {t("name3")} </h2>
                <p> {t("jop3")} </p>
              </div>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              reprehenderit dolore molestiae soluta odit iusto alias suscipit
              minima consequatur ad?
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testmonials;
