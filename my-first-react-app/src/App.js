import "./App.css";
import FuncButton from "./components/FuncButton";
import FuncText from "./components/FuncText";
import HeadingText from "./components/HeadingText";

function App() {
  const text = "from React learning app";
  function addDescription() {
    return "React is the library for web and native user interfaces";
  }
  return (
    <div className="App">
      <HeadingText text="Daiva"></HeadingText>
      <HeadingText text={text}></HeadingText>
      <FuncText text={addDescription()}></FuncText>
      <FuncButton className="btn" title="Login"></FuncButton>
      <FuncButton className="btn btn-accent" title="Signup"></FuncButton>
    </div>
  );
}

export default App;
