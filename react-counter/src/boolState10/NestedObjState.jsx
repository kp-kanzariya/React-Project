import React, { useState } from 'react'

const obj = {name:"Udit",course:"WD",id:1}
function NestedObjState() {

    const [obj1,setObj1] = useState(obj)
    const test = ()=>{
        setObj1({
            ...obj1,
           course:"React"       
        
        })
    }
  return (
    <div>
        <li>{obj1.name}</li>
        <li>{obj1.course}</li>
        <li>{obj1.id}</li>

    <button onClick={test}>CHnage Me</button>
    </div>
  )
}

export default NestedObjState

