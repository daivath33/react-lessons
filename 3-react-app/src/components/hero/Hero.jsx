import React from "react";
import "./hero.css";
const Hero = ({ title, subtitle }) => {
  if (title && subtitle) {
    return (
      <div className="hero">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    );
  }
  return <div></div>;
};

export default Hero;
