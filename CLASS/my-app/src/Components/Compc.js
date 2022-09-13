import React, { Component } from 'react'
import Compd from './Compd'

export default class Compc extends Component {
  render() {
    return (
      <div>
        
     <div> compc,{this.props.x2}</div>
        <Compd/>
      </div>
    )
  }
}
