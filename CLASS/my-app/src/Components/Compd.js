import React, { Component } from 'react'
import { Consumer } from '../Providers/context'

export default class Compd extends Component {
  render() {
    return (
      <div>
        <br/>
        <Consumer>

            {
                value=>
                <h1>DATA FROM COMP A,{value}</h1>
            }
        </Consumer>
      </div>
    )
  }
}
