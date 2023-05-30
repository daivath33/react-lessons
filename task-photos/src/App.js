import Header from "./components/Header/Header";
import Photos from "./components/Photo/Photos";
import "./App.css";
import { data } from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <div className="text">
        <h1>Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          odit doloremque quae facere magni? Veritatis optio eum et tempora
          cumque corrupti deleniti debitis obcaecati, magni, ducimus distinctio
          accusamus consequuntur doloremque.
        </p>
      </div>
      <Photos data={data} />
    </div>
  );
}

export default App;
