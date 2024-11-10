function Test() {
  let x = 12;
  function t1() {
    // alert(x);//12
   let h1 = document.getElementById('x');
   h1.style.color = "red"
  }
  function t2(xyz) {
    // alert(xyz);//121
   let btn =  document.querySelector('.x');
   btn.innerHTML = "123"
  }
  return (
    <>
      {x}
      <h1 id="x" onClick={t1}>HELLO TEST {x} </h1>
      <button className="x" onClick={()=>{t2(121)}}>Fun with Para</button>
    <Test123/>
   
    </>
  );
}

 function Test123()
{
    return(
        <>
        <h2>Test123</h2>
        </>
    )
}
export default Test;