import React from "react"


export function T1()
{
    return(<>
    <h2>T1 fun</h2>
    </>)
}

export function Q1()
{
    return(
        <>
        <h3>Q1</h3>
        </>
    )
}

export class T2 extends React.Component 
{
    render()
    {
        return(
            <>
            <h2>T2 class</h2>
            </>
        )
    }
}

class Q2 extends React.Component 
{
    render()
    {
        return(<>
        
        <h3>Q2</h3>
        {/* <T2/>
        <Q1></Q1>
        <T1></T1> */}
        </>)
    }

}

export default Q2;