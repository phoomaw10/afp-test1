import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/cat.jpg";

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, WE ARE AFP INTERTRADE.</p>
        <h1>Welcome to AFP's website hope you enjoy with us.</h1>
        <div>
          <Link to="/product" className="btn">
            Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
