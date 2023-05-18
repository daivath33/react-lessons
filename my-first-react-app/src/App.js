import "./App.css";
import Card from "./components/Card";
import ClassDiv from "./components/ClassDiv";
import Clock from "./components/Clock";
import FuncDiv from "./components/FuncDiv";
import Greeiting from "./components/Greeting";
import Avatar from "./components/Avatar";
import Product from "./components/Product";
import FuncText from "./components/FuncText";

function App() {
  const description =
    "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.";
  function addDescription() {
    return "how are you?";
  }
  const products = [
    {
      category: "canvases",
      name: "off-white air jordan 1 canvas",
      price: "16.00€ - 32.00€",
    },
  ];
  return (
    <>
      <div className="App">
        <Clock className="bg-dark text-primary" />
        <Greeiting text={addDescription()} />
        <FuncDiv
          className="bg-dark"
          heading="React documentation"
          text={description}
        />
      </div>
      <div>
        <ClassDiv
          className="App"
          heading="JavaScript is the programming language of the Web"
          text="JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. "
        />
      </div>
      <div className="flex-box dark-mode">
        <Card
          imageUrl="image1.jpg"
          title="Image Nr. 1"
          subtitle="A Person working with computer"
        />
        <Card
          imageUrl="image2.jpg"
          title="Image Nr. 2"
          subtitle="Buro image with computer"
        />
      </div>
      <div class="flex-box dark-mode">
        <Avatar name="Jonas Jonaitis" className="avatar flex-box bg-green" />
        <Avatar
          name="Rita Jonaitiene"
          className="avatar flex-box bg-deeppink "
        />
        <Avatar name="Petras Petraitis" className="avatar flex-box bg-blue" />
      </div>
      <FuncText text="BEST SELLERS" className="prod-box-heading" />
      <div className="flex-box">
        <Product
          className="product-card"
          category="canvases"
          name="off-white air jordan 1 canvas"
          price="32.00€ - 120.00€"
        />
        <Product
          className="product-card"
          category="posters"
          name="yeezy boost 350 v2 frozen yellow poster"
          price="16.00€ - 32.00€"
        />
        <Product
          className="product-card"
          category="stikers"
          name="yeezy boost 350 v2 zebra"
          price="5.00€"
        />
        <Product
          className="product-card"
          category="adidas"
          name="adidas yeezy powerphse calabasas poster"
          price="16.00€ - 32.00€"
        />
        <Product
          className="product-card"
          category="jordans"
          name="air jordans 4 red suede poster"
          price="16.00€ - 32.00€"
        />
        <Product
          className="product-card"
          category="balenciaga"
          name="balenciaga tripple 5 poster"
          price="16.00€ - 32.00€"
        />
        <Product
          className="product-card"
          category="jnike"
          name="nike blazer mid sacai poster"
          price="16.00€ - 32.00€"
        />
        <Product
          className="product-card"
          category="artists"
          name="lil peep poster"
          price="16.00€ - 32.00€"
        />
      </div>
    </>
  );
}

export default App;
