import React from "react";
import "./button.css";
const Button = ({ title, variant }) => {
  return (
    <div>
      <button className={`btn ${variant}`}>{title}</button>
    </div>
  );
};

export default Button;
