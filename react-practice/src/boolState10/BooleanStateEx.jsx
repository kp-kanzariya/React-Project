import React, { useState } from 'react'

function BooleanStateEx() {
    const [p,setP] = useState(false)

    const test = (e)=>
    {
        console.log(e.target.checked)
        setP(e.target.checked)
    }
  return (
    <div>

        <input type="checkbox" name="" value="" onChange={test} />
       
        {

            (p) ? "Munak" : "Dhruv"
        }
      
    </div>
  )
}

export default BooleanStateEx
