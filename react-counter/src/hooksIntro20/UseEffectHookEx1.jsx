import React, { useEffect, useState } from 'react'

function UseEffectHookEx1() {

    const  [c,setC] =  useState(1)
    // useEffect(function,[c])

    // const inc = ()=>{
    //     setC(c+1)
    // }

   useEffect(()=>{
   setInterval(()=>{ setC(c+1)},1000)
   },[])

  return (
    <div>
      <h2>{c}</h2>
      <button>+</button>
    </div>
  )
}

export default UseEffectHookEx1
