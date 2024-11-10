import React, { Component } from 'react'

export default class ObjectState extends Component {

    state = {obj:{name:"Drashti","course":"React"}}

    handleObj = ()=>{
        this.setState({obj:{name:"Drashti213","course":"React"}})
    }
  render() {
    return (
      <div>
        <h2 onClick={this.handleObj}>Object example</h2>
        Name : <b>{this.state.obj.name}</b><br />
        Course : <b>{this.state.obj.course}</b>
      </div>
    )
  }
}
