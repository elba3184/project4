import React, { Component } from 'react'
import Chat from './Chat'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img src="../images/home.png" className="home-img" />
        <div classaName="main-page">
          <h2>Home</h2>
          <p>Welcome to BLANK NAME HERE</p>
          <p>The purpose of this project is to link creative people together</p>
        </div>

        <Chat />
      </div>
    )
  }
}

export default Home;

//#5680E9
//#84CEEB
//#5AB9EA
//#C1C8E4
//#8860D0