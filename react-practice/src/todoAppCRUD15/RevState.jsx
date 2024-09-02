import React, { useState } from 'react'

function RevState() {

    const [num,setNum] = useState(1)
    const [str,setStr] = useState("Shrey")
    const [arr,setArr] = useState([1,2,3])
    const [obj,setObj] = useState({id:1,name:"Manoj"})
    const [bool,setBool] = useState(false)

  

  return (
    <div>
    <h4 onClick={()=>{setNum(2)}}>{num}</h4>
    <h4 onDoubleClick={()=>{setStr("XYZ")}}>{str}</h4>
   <div onClick={()=>{setArr([1,34,3])}}>
    <li>{arr[0]}</li>
    <li>{arr[1]}</li>
    <li>{arr[2]}</li>
   </div>
    <h4 onClick={()=>{setObj({id:11,name:"Manoj"})}}>
        {obj.name}
        {obj.id}
        </h4>
    <h4 onClick={()=>{setBool(true)}}>
        {
            (bool) ? "TRUEPART" :"FALSEPART"
        }
        </h4>
      
    </div>
  )
}

export default RevState
