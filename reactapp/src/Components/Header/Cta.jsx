import React from "react";
import cv from '../../Assets/assets/cv.pdf';
const Cta = () => {
  return (
    <div className="cta">
      <a href={cv} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Lets Talk</a>
    </div>
  );
};

export default Cta;
