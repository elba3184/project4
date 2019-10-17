import React, { Component } from 'react'
import Navbar from './Navbar'
// or with import syntax
//import socketIOClient from 'socket.io-client';
// import '../styling/index.scss'
class App extends Component {

  // //import socketIOClient from "socket.io-client";
  // class App extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       response: false,
  //       endpoint: "http://127.0.0.1:5000"
  //     };
  //   }
  // componentDidMount() {
  //   const { endpoint } = this.state;
  //   const socket = socketIOClient(endpoint);
  //   socket.emit('chat message', { please: 'this sorta works, right?' })
  //   socket.on("received", data => {
  //     console.log(data)
  //     this.setState({ response: data });
  //   })
  // }

  render() {

    return (
      <div className="App">
        {/* <header className="App-header"> */}
        <div className="whole-page">
          <Navbar />
        </div>
        {/* </header> */}
      </div >
    )
  }
}

export default App;
