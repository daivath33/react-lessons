import { useState } from "react";

const InputExample = () => {
  const [value, setValue] = useState("");
  const [age, setAge] = useState(0);

  // funkcija kuri yra paduodama į age input onChange
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="card card-blue">
      <h2>Mano input reikšmė yra: {value}</h2>
      <input
        value={value}
        // įvykis kuris paleidžiamas kas kartą nuspaudus knopkę
        onChange={(event) => {
          // event arba e - objektas laikantis informacija apie inputą
          // nustatoma input reikšmė
          setValue(event.target.value);
        }}
      />
      <br />
      <h2>Kiek tau metu?</h2>
      <input type="number" value={age} onChange={handleAgeChange} />
    </div>
  );
};

export default InputExample;
