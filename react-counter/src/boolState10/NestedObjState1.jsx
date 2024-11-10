import React, { useState } from 'react'

function NestedObjState1() {

  const [obj,setObj] =   useState({
        name:"Kruparth",
        age:23,
        address:{
            city:"Ahmedabad",
            area:"CG"
        }
    })

    const test = ()=>{
        setObj({
            ...obj,
            age:33,
            address:
            {
                ...obj.address,
                area:"SG",
                city:"Surat"
            }
        })
    }
  return (
    <div>

        <li>{obj.name}</li>
        <li>{obj.age}</li>
        <li>{obj.address.city}</li>
        <li>{obj.address.area}</li>
      

      <button onClick={test}>Click</button>
    </div>
  )
}

export default NestedObjState1
