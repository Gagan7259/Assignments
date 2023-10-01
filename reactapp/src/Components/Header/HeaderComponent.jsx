import React from "react";
import Cta from "./Cta";
import Me from "../../Assets/assets/me.png";
import "./header.css";
import HeaderSocial from "./HeaderSocial";

const HeaderComponent = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>GAGANKUMAR S</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default HeaderComponent;
