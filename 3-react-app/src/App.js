import "./App.css";
import Hero from "./components/hero/Hero";
import Button from "./components/button/Button";
import MoodChecker from "./components/moodChecker/MoodChecker";
import Product from "./components/product/Product";
function App() {
  return (
    <>
      <div>
        <Hero title="Info Hero" subtitle="Info subtitle" />
      </div>
      <div className="mg-t-30 flex-box">
        <Button title="text" variant="text" />

        <Button title="contained" variant="contained" />
        <Button title="outlined" variant="outlined" />
      </div>
      <hr />
      <div className="mg-t-30 flex-box">
        <MoodChecker />
      </div>
      <hr />
      <Product />
    </>
  );
}

export default App;
