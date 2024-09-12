import React from "react";

export default function Facto() {
  function fact(e) {
    let f = 1;
    for (let i = 1; i <= e; i++) {
      f = f * i;
      console.log(f);
    }
  }

//   console.log(fact(5));

    return <div>
        <input type="text" onChange={(e)=>(fact(e.target.value))} />
    </div>;
}
