import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  c="world"
  render() {
    return (
      <div>
        Hello {this.c} 
      </div>
    )
  }
}
