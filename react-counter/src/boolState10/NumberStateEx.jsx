import React, { useState } from "react";

function NumberStateEx() {
  const [n, setN] = useState(12);

  const increment = ()=>{
    setN(n+1)
  }

  setInterval(increment,1000)

  const dec =()=>{
    setN(n-1)
  }
  return (
    <div>
      <button onClick={dec}>-</button>
      <h1>{n}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default NumberStateEx;
