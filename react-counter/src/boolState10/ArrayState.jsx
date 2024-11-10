import React, { useState } from 'react'

const arr =[12,34,56];

function ArrayState() {

  const [state,setState] = useState(arr);
  // console.log(state)

  const handleChnage = ()=>{
    // alert('123')
    setState([12,34,state[2]="hi"])
  }
  return (
    <div>
{/* {console.log(state)}
    {state.map((val)=>(
      // console.log(val)
      // return <li>{val}</li>
      <li>{val}</li>
    ))} */}

    <li>{state[0]}</li>
    <li>{state[1]}</li>
    <li>{state[2]}</li>

    <button onClick={handleChnage}>Change</button>

    </div>
  )
}

export default ArrayState
