import React, { Component } from 'react'
import Navbar from './Navbar'
// or with import syntax
//import socketIOClient from 'socket.io-client';
// import '../styling/index.scss'
class App extends Component {


  render() {

    return (
      <div className="App">
        <Navbar />

        {/* </header> */}
      </div >
    )
  }
}

export default App;
