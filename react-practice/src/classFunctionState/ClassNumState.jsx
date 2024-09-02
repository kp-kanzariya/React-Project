import React from "react";
class NumberStateEx extends React.Component
{
    state = {xyz:false};
    t1 = ()=>{
        this.setState({xyz:true})
    }

//     t()
//    {
//     if(this.state.xyz)
//         {

//         }
//         else
//         {

//         }
//    }
  
    render()
    {
        return(
            <>
            
            <h1 onClick={this.t1}>
                {
                // this.state.xyz
                  (this.state.xyz)? "CLASS": "FUNCTION"
                
                }</h1>
            
           
            </>
        )
    }
}

export default NumberStateEx;