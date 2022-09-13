import React, { Component } from 'react'

export default class Comp2 extends Component {

    myfunc(ev){
        console.log(ev.target.value);
        console.log(this.props.p1);
        this.props.p1(ev.target.value)
    }
  render() {
    return (
      <div>
        <h1>Comp2</h1>
        <input type="text" onChange={(ev)=>{this.myfunc(ev)}}/>
      </div>
    )
  }
}
