import React from "react";
import style from "../../assets/style/About.module.css";
function index() {
  return (
    <>
      <div className={style.about}>
        <div className={style.container}>
          <div className={style.text}>
            <p className={style.headText}>
              Stylish Portfolio is the perfect theme for your next project!
            </p>
            <p className={style.desc}>
              This theme features a flexible, UX friendly sidebar menu and stock
              photos from our friends at <a href=""> Unsplash</a>!
            </p>
          </div>
          <div>
            <button className={style.button}>What We Offer</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
