import React, { Component } from 'react'

export default class BooleanState extends Component {
  

  state = {bool:false}

  ChangeMe = ()=>{
    this.setState({bool:true})
  }

  test1 = (e)=>{
    console.log(e.target.checked)
    this.setState({bool:e.target.checked})
  }
  
    render() {
    return (
      <div>

        <input type="checkbox"  onChange={this.test1} />
        {(this.state.bool) ? "True" : "False"}
        {/* <h3>{ (this.state.bool) ? "t" : "f123"} </h3>
        <button onClick={this.ChangeMe}>ChangeMe</button> */}
      </div>
    )
  }
}
