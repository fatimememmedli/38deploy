import React from "react";
import style from "../../assets/style/Portfolio.module.css";
function index() {
  return (
    <>
      <div className={style.container}>
        <div>
          <p className={style.headText}>PORTFOLIO</p>
          <p className={style.desc}>Recent Projects</p>
        </div>
        <div className={style.boxes}>
          <div className={style.box1}>
            <p className={style.boxHeadText}>Stationary</p>
            <p className={style.boxDesc}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className={style.box2}>
            <p className={style.boxHeadText}>Stationary</p>
            <p className={style.boxDesc}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className={style.box3}>
            <p className={style.boxHeadText}>Stationary</p>
            <p className={style.boxDesc}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className={style.box4}>
            <p className={style.boxHeadText}>Stationary</p>
            <p className={style.boxDesc}>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
