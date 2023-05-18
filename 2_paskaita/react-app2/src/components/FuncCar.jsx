import { useState } from "react";

const FuncCar = (props) => {
  const [state, setState] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "red",
    year: 1964,
  });
  const changeColor = () => {
    //1) būdas pasiimti iš state objektą setState(...state, color: "blue");
    //2) būdas pasiimti iš setState objektą
    // setState((previouseState) => ({ ...previouseState, color: "blue" }));
    //3)būdas pasiimti iš setState objektas su return
    setState((previouseState) => {
      return { ...previouseState, color: "blue" };
    });
  };

  return (
    <div className="car-card">
      <h2>Functional Component</h2>
      <h3>My {state.brand}</h3>
      <p>
        It is a {state.color} {state.model} from {state.year}
      </p>
      <button className="btn" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default FuncCar;
