import React, { useState } from 'react'

function TaskList({x,obID,newObj}) {
    // console.log(x)

  return (
    <div>
        {x.map((v,i)=>(
       <div key={v.id}>
         <li >
             {" "}
            <Tasks obj={v} objId={obID} nextObj={newObj}/>
        </li>
       
       </div>
        ))} 
    </div>
  )
}

function Tasks({obj,objId,nextObj})
{
    const [show,setShow] = useState(false)
let x;
    if(show)
    {
       x= 
      <>
         <input type="text" value={obj.fruit}
          onChange={
            (e)=>{
                nextObj({
                    ...obj,
                    fruit:e.target.value
                })

           
         }
         } />
         <button onClick={()=>{setShow(false)}}>Save</button>
      </>
    }

    else 
    {
       x= 
      <>
         {obj.fruit}
         <button onClick={()=>{setShow(true)}}>Edit</button>
      </>
    }

    return(
        <>
           {x}
            <button onClick={()=>{objId(obj.id)}}>Delete</button>
        </>
    )
}

export default TaskList
