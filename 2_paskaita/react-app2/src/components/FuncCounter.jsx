import React, { useState } from "react";

const FuncCounter = () => {
  const [state, setState] = useState({ count: 0 });

  const increase = () => setState({ count: state.count + 1 });
  const decrease = () => {
    setState({ count: state.count - 1 });
  };

  return (
    <div className="counter">
      <button onClick={increase}>+</button>
      <h3>{state.count}</h3>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default FuncCounter;
