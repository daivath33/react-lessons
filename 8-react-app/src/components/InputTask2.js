import { useState } from "react";

const InputTask2 = () => {
  const [text, setText] = useState("");
  const [weight, setWeight] = useState(0);

  const getBacgroundColor = (length) => {
    if (length < 3) {
      return "#fff";
    } else if (length > 3 && length <= 6) {
      return "gold";
    } else if (length > 6 && length <= 9) {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <>
      <div className="card card-blue">
        <h2>{text.length}</h2>
        <label>Enter text:</label>
        <input
          style={{ backgroundColor: getBacgroundColor(text.length) }}
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="card">
        <ul>
          <li>Tonu skaicius (1kg = 0,001t): {weight * 0.001} t</li>
          <li>Gramu skaicius (1kg =1000g): {weight * 1000} g</li>
          <li>
            Poundu skaicius (1kg = 2.204622624185 lb): {weight * 2.204622624185}{" "}
            lb
          </li>
        </ul>
        <label>Enter Weight</label>
        <input type="number" onChange={(e) => setWeight(e.target.value)} />
      </div>
    </>
  );
};

export default InputTask2;
