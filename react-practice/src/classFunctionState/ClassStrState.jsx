import React, { Component } from 'react'

export default class ClassStrState extends Component {

    state = {name:"Drashti"}

    t1 = (e)=>{
        console.log(e.target.value);//{x:dfg}
        this.setState({name:e.target.value})
    }

  render() {
    return (
      <div>
        <div>
            Name: <input type="text" value={this.state.name} onChange={this.t1} /><br />
            {this.state.name}
        </div>
      </div>
    )
  }
}
