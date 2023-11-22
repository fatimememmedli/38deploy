import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import NewWebsite from "./pages/NewWebsite";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import style from "./assets/style/App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <div className={style.navIcon}>
        <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
      </div>
      {/* <div className={style.navigation}>salam</div> */}
      <Home />
      <About />
      <Services />
      <NewWebsite />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
