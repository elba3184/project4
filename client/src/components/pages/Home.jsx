import React, { Component } from 'react'
// import Chat from './Chat'
import '../../styling/home.scss';

class Home extends Component {
  render() {
    return (

      <div id="Home">
        <div className="home-main">
          <div className="home-content">
            <h1>WELCOME TO AESTHETIC</h1>
            <br />
            <p>Aesthetic was created with the purpose of linking creative people together
              through means outside of word of mouth.
        </p>
            <br />
            <p>Start by creating an account</p>
          </div>
          <br />
        </div>
        <div className="home-examples">
          <p>Shemar Anthony</p>
          <p>Brianna McAuliffe</p>
          <p>Elba Chimilio</p>
        </div>
      </div>

    )
  }
}

export default Home;