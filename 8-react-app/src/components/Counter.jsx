import { useRef, useState } from "react";

const Counter = () => {
  // sukuriam ref kintąmąjį
  let ref = useRef(0); // useRef(pradinė reiškmė)
  const inputRef = useRef(null); // input arba tiem kurie neturi pradinės reikšmės, naudojam null
  const todoInputRef = useRef(null);
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    // ref.current yra pagrindinė reikšmė
    ref.current = ref.current + 1; // mutuojamas ref.current objektas
    alert(`You clicked ${ref.current} times!`);
  };

  const focusInput = () => {
    // ref pavyzdys kai sufokusuojamas input elementas
    inputRef.current.focus();
  };

  const handleAddTodo = () => {
    setTodos((prevTodos) => [...prevTodos, todoInput]);
    todoInputRef.current.focus();
  };

  return (
    <div className="card">
      <button onClick={handleClick} className="btn">
        Clicke me!
      </button>
      <h2>Count: {ref.current}</h2>
      <br />
      <br />
      {/* <button onClick={focusInput}>Focus on the input</button>
      {/* pavyzdys kaip priskirti elementam ref atributą */}
      <input ref={inputRef} />
      <br />
      <h2>Todos</h2>
      <input
        ref={todoInputRef}
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={handleAddTodo} className="btn">
        Add Todo
      </button>
      <div>{todos.join(", ")}</div>
      <br />
    </div>
  );
};

export default Counter;
