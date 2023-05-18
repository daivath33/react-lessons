import "./App.css";
import Car from "./components/Car";
import FuncBestCar from "./components/FuncBestCar";
import FuncCar from "./components/FuncCar";

function App() {
  return (
    <div className="flex-box">
      <Car />
      <FuncCar />
      <FuncBestCar />
    </div>
  );
}

export default App;
