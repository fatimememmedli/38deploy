import React from "react";
import style from "../../assets/style/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function index() {
  return (
    <>
      <div className={style.contact}>
        <div className={style.container}>
          <p className={style.text}>
            The buttons below are impossible to resist...
          </p>
          <div className={style.buttons}>
            <button className={style.buttonClick}>Click me!</button>
            <button className={style.buttonLook}>Look at me!</button>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.547629386189!2d49.80889017596246!3d40.37455387144636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dea2b26aff9%3A0x8bf044493464664c!2zQmFrxLEgRMO2dmzJmXQgVW5pdmVyc2l0ZXRp!5e0!3m2!1saz!2saz!4v1700632142274!5m2!1saz!2saz"
          width="100%"
          height="450"
        ></iframe>
      </div>
      <div className={style.socialMedia}>
        <div className={style.container}>
          <div className={style.iconText}>
            <div className={style.icons}>
              <div className={style.icon}>
                <FontAwesomeIcon
                  className={style.awesome}
                  icon={faFacebookF}
                  style={{ color: "#ffffff" }}
                />
              </div>
              <div className={style.icon}>
                <FontAwesomeIcon
                  className={style.awesome}
                  icon={faTwitter}
                  style={{ color: "#ffffff" }}
                />
              </div>
              <div className={style.icon}>
                <FontAwesomeIcon
                  className={style.awesome}
                  icon={faGithub}
                  style={{ color: "white" }}
                />
              </div>
            </div>
            <p>Copyright © Your Website 2023</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
