import "./App.css";
import Hero from "./components/hero/Hero";
import Button from "./components/button/Button";
import MoodChecker from "./components/moodChecker/MoodChecker";

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
    </>
  );
}

export default App;
