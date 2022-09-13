import React, { Component } from 'react'
import Compb from './Compb';
import { Provider } from '../Providers/context';

export default class Compa extends Component {
    constructor(){
        super()
        this.state={
            name:"Aniket"
        }
    }
    myfunc(ev){
        console.log(ev.target.value);
        this.setState({
            name:ev.target.value
            
        })


    }
  render() {
    return (
      <div>
        <input type="text" onChange={(ev)=>{this.myfunc(ev)}}/>
        {this.state.name}
        <Provider value={this.state.name}>
        
        <Compb x1={this.state.name}/>
        </Provider>
      </div>
    )
  }
}
