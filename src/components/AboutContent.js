import "./AboutContentStyles.css";

import React from "react";
import cat5 from "../assets/cat5.jpg";
import cat6 from "../assets/cat6.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>What is AFP Intertrade?</h1>
        <p>We are an independent organization in Thailand that imports and sells cat products. If you love cats like us, Pls let us take care of your cat.</p>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={cat5} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={cat6} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
