import React from "react";
import "./App.css";
import "./index.css";
import Counter from "./Counter.jsx";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  const names = ["Anthony Sistilli", "John Doe", "Jocko Willink", "Random Guy"];

  return (
    <>
      <h1>Redux made easy</h1>
      <h2>Total votes: {count}</h2>
      {names.map((name) => (
        <Counter name={name} />
      ))}
    </>
  );
}

export default App;
