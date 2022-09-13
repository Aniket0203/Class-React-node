import React, { Component } from 'react'
import Comp3 from './Comp3';
import Comp2 from './Comp2';


export default class Comp1 extends Component {
  constructor(){
    super();
    this.state={
      xyz:"hello"
    }
    this.myfunc=this.myfunc.bind(this)
  }
  myfunc(value){
    console.log(value,"from comp2");
    console.log(this);
    this.setState({xyz:value})
  }
  render() {
    return (
      
        <div className='container'>
          <div className='row'>
            <div className='col-xl-3'>
              <Comp2 p1={this.myfunc}/>
            </div>
            <div className='col-xl-3'>
              <Comp3 x1={this.state.xyz}/>

            </div>
          </div>
        </div>
      
    )
  }
}
