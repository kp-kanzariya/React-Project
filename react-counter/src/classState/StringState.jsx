import React from "react"


export default class StringState extends React.Component 
{

    state = {str : "hi"} 
    handleChange = ()=>{
        this.setState({str:"Pata nni"})
    }
    render()
    {
        return (
            <>
                <h2>
                    String State Example
                </h2>
                <h4>{this.state.str}</h4>
                <button onClick={this.handleChange}>Change Me</button>
            </>
        )
    }
}