import React, { useState } from 'react'


function MOuseMOveState() {
    const [position,setPosition]= useState({x:0,y:0})
  
    const test = (e)=>{
        setPosition(
            {
                x:e.clientX,
                y:e.clientY
            })
    }

    window.addEventListener("mousemove",test)


  return (
    <div style={
        {
            height:25,
            width:"25px",
            background:"#000",
            transform:`translate(${position.x}px,${position.y}px)`,
            position:'absolute',
            top:-12,
            left:-12
        }
    }>
      
    </div>
  )
}

export default MOuseMOveState
