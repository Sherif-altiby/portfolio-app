/* eslint-disable react/jsx-no-target-blank */
import "./Contact.scss";
import { useGlobalContext } from "../context/Globalcontext";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useRef } from "react";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { theme, language } = useGlobalContext();
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "1208Gg_silhg",
        "hh33ff20#@bv",
        form.current,
        "ueE29HG7sN5vEMgh9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);
  return (
    <div
      id="contact"
      className={
        theme === true ? "container contact" : "container contact light"
      }
    >
      <h2 data-aos="zoom-in" data-aos-duration="1000">
        {t("contact-me")}{" "}
      </h2>
      <div className="contact_container">
        <form
          data-aos="zoom-in"
          data-aos-duration="1000"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="name_mail">
            <input type="text" placeholder={t("name")} />
            <input type="text" placeholder={t("email")} />
          </div>
          <input type="text" className="suject" placeholder={t("subject")} />
          <textarea
            name="text-area"
            placeholder={t("message")}
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value={t("submit")} />
        </form>
        <div className="info" data-aos="zoom-in" data-aos-duration="1000">
          <div className="single-info">
            <i className="fa-solid fa-location-dot"></i>
            <p> {t("location")} </p>
          </div>
          <div className="single-info">
            <i className="fa-solid fa-mobile-screen"></i>
            <a href="https://wa.me/01017143343" target="_blank"> <p> 01017143343 </p> </a>
          </div>
          <div className="single-info">
            <i className="fa-regular fa-envelope"></i>
            <p> Sherifahmed852002@gmail.com </p>
          </div>
          <div className="single-info">
            <i className="fa-brands fa-github"></i>
            <a href="https://github.com/Sherif-altiby" target="_blank">
              <p>github.com/Sherif-altiby </p>
            </a>
          </div>
          <div className="single-info">
            <i className="fa-brands fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/sherif-altiby-38b350229/"
              target="_blank"
            >
              <p>linkedin.com/sherif-altiby/ </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
