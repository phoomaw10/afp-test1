import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";

const Product = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PRODUCTS." text="This is all products that we have."/>
      <Work />
      <Footer />
    </div>
  );
};

export default Product;
