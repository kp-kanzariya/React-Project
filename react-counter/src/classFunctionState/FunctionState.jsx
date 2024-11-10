import React, { useState } from 'react'

function FunctionState() {   

    // const [state,setState] = useState(num/str/array/obj/nesting/bool)

     const [num,setNumber] = useState(11)
     const [str,setStr] = useState("HI")
     const [arr,setArr] = useState([1,"hi"])
     const [obj,setObj] = useState({n:"34"})
     const [bool,setBool] = useState(false)

     const handleNum = ()=>{
        setNumber(12)
     }

     const handleStr = ()=>{
        setStr("wer")
     }

     const handleArr = ()=>{
        setArr(["1.2",'56swerw'])
     }

     const handleObj = ()=>{
        setObj({n:"3kya pass karenge"})
     }

     const handleBool = ()=>{
        setBool(true)
     }

  return (
    <div>
      <h1 onClick={handleNum}>{num}</h1>
      <h1 onClick={handleStr}>{str}</h1>
      <h1 onClick={handleArr}>{arr}</h1>
      <h1 onClick={handleObj}>{obj.n}</h1>
      <h1 onClick={handleBool}>
        {
            (bool) ? "xyz" :"abc"
        }
      </h1>
    </div>
  )
}

export default FunctionState
