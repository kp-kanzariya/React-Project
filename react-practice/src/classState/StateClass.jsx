import { Component } from "react";

class StateClass extends Component
{

    state = {number:11}

    increment = ()=>{
        this.setState({number:123})
    }
render()
{
    return(
        <>
        <h2 onClick={this.increment}>{this.state.number}</h2>
        
        </>
    )
}
}

export default StateClass;