import "./App.css";
import ClassDiv from "./components/ClassDiv";
import FuncDiv from "./components/FuncDiv";
import HeadingText from "./components/HeadingText";

function App() {
  const description =
    "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.";
  function addDescription() {
    return "React is the library for web and native user interfaces";
  }
  return (
    <>
      <div className="App">
        <HeadingText text={addDescription()}></HeadingText>
        <FuncDiv
          className="bg-dark"
          heading="React documentation"
          text={description}
        ></FuncDiv>
        {/* <ClassDiv heading="" text=""></ClassDiv> */}
      </div>
      <div>
        <ClassDiv
          className="App"
          heading="JavaScript is the programming language of the Web"
          text="JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. "
        ></ClassDiv>
      </div>
    </>
  );
}

export default App;
