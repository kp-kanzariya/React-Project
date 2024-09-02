export  function Fun1()
{
    return(
        <>
        <h2>Fun1</h2>
        </>
    )
}

export default function Fun2()
{
    return(
        <>
        <h2>Fun2</h2>
        <Fun1></Fun1>
        </>
    )
}

// export default Fun2;
// export default Fun1;