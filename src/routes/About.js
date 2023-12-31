import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg3 from '../components/HeroImg3';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg3 heading="ABOUT." text="Im a friendly Cat Lover"/>
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About