import React, { Component } from 'react'
import Compc from './Compc'

export default class Compb extends Component {
  render() {
    return (
      <div>
        <Compc x2={this.props.x1}/>
      </div>
    )
  }
}
