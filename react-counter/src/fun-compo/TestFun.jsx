import React from 'react'

function TestFunCompo() {
let x=12;
let y=20;

function t1()
{
    // alert('t1')
    document.querySelector('#t1').style.color ="blue"
}
  return (
    <div>
       <h3> x:{x}<br/> y: {y}<br/> Sum = {x+y}</h3>
      <h2 id='t1'>Functional Compo</h2>
      <button onClick={t1}>Click to blue h2</button>
    </div>
  )
}
// class Test 
// {
//     var 
//     function
// }
export default TestFunCompo
