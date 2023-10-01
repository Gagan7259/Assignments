import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="_blank">
        <BsLinkedin />
        
      </a>{" "}
      <a href="http://github.com" target="_blank"><BsGithub /></a>
      <a href="http://linkedin.com" target="_blank"></a>
    </div>
  );
};

export default HeaderSocial;
