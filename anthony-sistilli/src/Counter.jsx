import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/ducks/counter";

const Counter = (props) => {
  const { name } = props;
  const dispatch = useDispatch();
  const [votes, setVotes] = useState(0);

  function handleIncrement() {
    dispatch(increment());
    setVotes(votes + 1);
  }

  function handleDecrement() {
    dispatch(decrement());
    setVotes(votes - 1);
  }

  return (
    <>
      <h2>{name}</h2>
      <h3>Votes: {votes}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default Counter;
