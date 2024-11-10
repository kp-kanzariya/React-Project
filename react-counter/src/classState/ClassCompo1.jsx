import React from "react";

class Test1 extends React.Component
{
    render()
    {
        return(
            <>
            <h2>CLass 123</h2>
            <Test2/>
            </>
        )
    }
}
// function Fun1()
// {
//     return(<>
    
//     </>)
// }


 class Test2 extends React.Component
{
    render()
    {
        return(
            <>
            <h2>Test 2</h2>
            </>
        )
    }
}

export default Test1 ;