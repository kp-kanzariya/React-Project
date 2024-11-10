import React, { useEffect, useRef } from 'react'

function Box() {

    const divRef = useRef();
    useEffect(()=>{
        const div = divRef.current

        const obj = new IntersectionObserver((entries)=>{
            const entry = entries[0];
  
              if(entry.isIntersecting)
              {
                  document.body.style.background="#000"
                  document.body.style.color = "#fff"
              }
              else 
              {
                  document.body.style.background="#fff"
                  document.body.style.color = "#000"
              }
          },{
            threshold:0.5
          })
        obj.observe(div)

        // const myPromise = new Promise(()=>{

        // })

        // myPromise.then()
        
   
    })
  return (
    <div ref={divRef} style={
        {
            height:120,
            width:120,
            background:"blue"
        }
    }>

    </div>
  )
}

export default Box