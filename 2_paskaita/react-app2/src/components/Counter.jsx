import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <button onClick={increase}>+</button>
      <h3>{count}</h3>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;
