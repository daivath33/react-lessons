import "./App.css";
import Photos from "./components/Photos/Photos.jsx";
import RandomPhotos from "./components/RandomPhotos/RandomPhotos";

function App() {
  return (
    <>
      <div>
        <RandomPhotos />
      </div>
      <div className="App">
        <h1>Photos</h1>
        <Photos />
      </div>
    </>
  );
}

export default App;
