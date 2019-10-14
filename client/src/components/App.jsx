import React, { Component } from 'react'
// import Home from './pages/Home'
import Navbar from './Navbar'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
    )
  }
}