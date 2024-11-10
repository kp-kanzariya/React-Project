import React from "react";

function SwitchCalc() {
    

   function getCalc(op)
   {

    let num1 =  document.getElementById('n1')
    let num2 =  document.getElementById('n2')
    let result =  document.getElementById('res')
     switch(op)//+ -
     {
         case "+": result.innerHTML = Number(num1.value) + Number(num2.value) 
         break;

         case "-": result.innerHTML = Number(num1.value) - Number(num2.value) 
         break;

         case "*": result.innerHTML = Number(num1.value) * Number(num2.value) 
         break;

         case "/": result.innerHTML = Number(num1.value) / Number(num2.value) 
         break;


         case "%": result.innerHTML = Number(num1.value) % Number(num2.value) 
         break;

         
     }
   }
  return (
    <div>
      <div>
        Num1: <input type="text" id="n1" />
      </div>
      <div>
        Num2: <input type="text" id="n2" />
      </div>
      <div>
        <b id="res"></b>
      </div>

      <div>
        <button onClick={()=>{getCalc('+')}}>+</button>
        <button onClick={()=>{getCalc('-')}}>-</button>
        <button onClick={()=>{getCalc('*')}}>*</button>
        <button onClick={()=>{getCalc('/')}}>/</button>
        <button onClick={()=>{getCalc('%')}}>%</button>
      </div>
    </div>
  );
}

export default SwitchCalc;
