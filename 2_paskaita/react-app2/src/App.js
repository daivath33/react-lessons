import "./App.css";
import Car from "./components/Car";
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
      <h1>COUNTER</h1>
      <div className="flex-box">
        <Counter />
      </div>
    </>
  );
}

export default App;
