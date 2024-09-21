import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./actions";


function Home() {
  const x = useSelector((state) => state.xyz);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>Home {x}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Home;
