import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    const x = useSelector(state=>state.xyz)
    const disptach = useDispatch();
  return (
    <div>
      
      <h1>Home page {x}</h1>
      <button onClick={()=>disptach({type:"increment"})}>+</button>
    </div>
  )
}

export default Home
