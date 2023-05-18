import React, { useState } from "react";

const FuncBestCar = () => {
  const brand = "Ford";
  const [color, setColor] = useState("red");
  const model = "Ford";
  const year = 1964;

  const changeColor = () => {
    setColor("blue");
  };
  return (
    <div className="car-card">
      <h2>Functional Component</h2>
      <h3>My {brand}</h3>
      <p>
        It is a {color} {model} from {year}
      </p>
      <button className="btn" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default FuncBestCar;
