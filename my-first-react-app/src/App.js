import "./App.css";
import Card from "./components/Card";
import ClassDiv from "./components/ClassDiv";
import Clock from "./components/Clock";
import FuncDiv from "./components/FuncDiv";
import Greeiting from "./components/Greeting";

function App() {
  const description =
    "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.";
  function addDescription() {
    return "how are you?";
  }
  return (
    <>
      <div className="App">
        <Clock className="bg-dark text-primary"></Clock>
        <Greeiting text={addDescription()}></Greeiting>
        <FuncDiv
          className="bg-dark"
          heading="React documentation"
          text={description}
        ></FuncDiv>
      </div>
      <div>
        <ClassDiv
          className="App"
          heading="JavaScript is the programming language of the Web"
          text="JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. "
        ></ClassDiv>
      </div>
      <div className="flex-box dark-mode">
        <Card
          imageUrl="image1.jpg"
          title="Image Nr. 1"
          subtitle="A Person working with computer"
        ></Card>
        <Card
          imageUrl="image2.jpg"
          title="Image Nr. 2"
          subtitle="Buro image with computer"
        ></Card>
      </div>
    </>
  );
}

export default App;
