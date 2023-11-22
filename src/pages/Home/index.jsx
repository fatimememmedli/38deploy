import React from "react";
import style from "../../assets/style/Home.module.css";
function index() {
  return (
    <>
      <div className={style.image}>
        <div className={style.container}>
          <div className={style.text}>
            <p className={style.headText}>Stylish Portfolio</p>
            <p className={style.desc}>
              A Free Bootstrap Theme by Start Bootstrap
            </p>
          </div>
          <div>
            <button className={style.button}>Find Out More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
