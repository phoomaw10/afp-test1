import "./HeroImg3Styles.css";

import Aboutimg from "../assets/cat10.jpg";
import React, { Component } from "react";

class HeroImg3 extends Component {
  render() {
    return (
      <div className="hero3-img" src={Aboutimg} alt="Aboutimg">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg3;
