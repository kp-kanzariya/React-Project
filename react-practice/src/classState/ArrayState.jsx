import React, { Component } from 'react'

export default class ArrayState extends Component {

    state = {arr:[12,34,56]}

    test =()=>{
        alert("Indra")
    }

    hadnleArr = ()=>{
        this.setState({arr:["hi",34,56]})
    }
  render() {
    return (
      <div>
        <h2 onClick={this.hadnleArr}>{this.state.arr}</h2>
      
      {this.state.arr.map((v)=>(
    //    return  <li>{v}</li>
    <li>{v}</li>
      ))}
        <button onClick={this.test}>test</button>
      </div>
    )
  }
}
