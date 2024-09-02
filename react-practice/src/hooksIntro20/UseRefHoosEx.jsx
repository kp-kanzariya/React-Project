import React, { useEffect, useRef } from 'react'

function UseRefHoosEx() {

    const test = useRef();

    useEffect(()=>{
        console.log(test);//test = {current: h1}
        console.log(test.current)
    
        // test.current.style.color ="red"
        // test.current.style.background = "lightblue"
        // test.current.className = 'xyz'
        test.current.classList.add('xyz')
       })


   
  return (
    <div>
      <h1  ref={test}>HELLO REF HOOK</h1>
    </div>
  )
}

export default UseRefHoosEx
