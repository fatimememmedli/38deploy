import React from "react";
import style from "../../assets/style/NewWebsite.module.css";
function index() {
  return (
    <>
      <div className={style.image}>
        <div className={style.container}>
          <p className={style.headText}>Welcome to your next website!</p>
          <button className={style.button}>Download Now!</button>
        </div>
      </div>
    </>
  );
}

export default index;
