import React, { Component } from 'react'

export default class ClassBoolState extends Component {

    state = {bool:false}

    t1 = (e)=>{

        console.log(e.target.checked)
        this.setState({bool:e.target.checked})
    }
  render() {
    return (
      <div>
        <div>
            <input type="checkbox" onChange={this.t1}  />

            {

                (this.state.bool)? "TRUE" : "FALSE"
            }
        </div>
      </div>
    )
  }
}
