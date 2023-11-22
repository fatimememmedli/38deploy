import React from "react";
import style from "../../assets/style/Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
function index() {
  return (
    <>
      <div className={style.services}>
        <div className={style.container}>
          <div className={style.text}>
            <p className={style.headText}>Services</p>
            <p className={style.desc}>What We Offer</p>
          </div>
          <div className={style.boxes}>
            <div className={style.box}>
              <div className={style.iconBG}>
                <FontAwesomeIcon className={style.icon} icon={faMobileScreen} />
              </div>
              <div className={style.boxText}>
                <p className={style.boxHeadText}>Responsive</p>
                <p className={style.boxDesc}>Looks great on any screen size!</p>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.iconBG}>
                <FontAwesomeIcon className={style.icon} icon={faPencil} />
              </div>
              <div className={style.boxText}>
                <p className={style.boxHeadText}>Redesigned</p>
                <p className={style.boxDesc}>
                  Freshly redesigned for Bootstrap 5.
                </p>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.iconBG}>
                <FontAwesomeIcon className={style.icon} icon={faThumbsUp} />
              </div>
              <div className={style.boxText}>
                <p className={style.boxHeadText}>Favorited</p>
                <p className={style.boxDesc}>
                  Millions of users Start Bootstrap!
                </p>
              </div>
            </div>
            <div className={style.box}>
              <div className={style.iconBG}>
                <FontAwesomeIcon className={style.icon} icon={faQuestion} />
              </div>
              <div className={style.boxText}>
                <p className={style.boxHeadText}>Question</p>
                <p className={style.boxDesc}>I mustache you a question...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
