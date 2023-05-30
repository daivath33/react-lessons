import { useState } from "react";

const InputTax = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const changeAge = () => {
    setAge((prevAge) => prevAge + 10);
  };
  const decreaseAge = () => {
    setAge((prevAge) => prevAge - 10);
  };
  return (
    <div className="card">
      <h3>My name is: {name}</h3>
      <h3>My age is: {age}</h3>
      <br />
      <div>
        <label>First name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(event) => {
            setAge(+event.target.value);
          }}
        />
      </div>

      <button className="btn" onClick={changeAge}>
        Add 10 years
      </button>
      <button className="btn" onClick={decreaseAge}>
        Minus 10 years
      </button>
    </div>
  );
};

export default InputTax;
