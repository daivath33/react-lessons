import "./App.css";
import Car from "./components/Car";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

import FuncBestCar from "./components/FuncBestCar";
import FuncCar from "./components/FuncCar";

function App() {
  return (
    <>
      <div className="flex-box">
        <Car />
        <FuncCar />
        <FuncBestCar />
      </div>
      <h1>FUNCTIONAL COUNTER</h1>
      <div className="flex-box">
        <Counter />
      </div>
      <div>
        <h1>CLASS COUNTER</h1>
        <ClassCounter />
      </div>
    </>
  );
}

export default App;
