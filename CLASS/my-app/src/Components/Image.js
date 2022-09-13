import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    if(this.props.xyz===""){
      throw new Error("image Emapty")
    }

    
    return (
      <img src={this.props.xyz} className="img-fluid"/>
      
      
    )
  }
}
