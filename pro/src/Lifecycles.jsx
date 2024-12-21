import React, { Component } from 'react'

export default class Lifecycles extends Component {
    constructor(){
        console.log('constructor')
        super();
    }

  render() {
    console.log('render')
    return (
      <div>Lifecycles</div>
    )
  }
  componentDidMount(){
    console.log('creating')
    //  
  }
}
//constructor -->get derived