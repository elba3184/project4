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
            <p class="home-head">
              Aesthetic was created with the purpose of linking creative people together
              through means outside of word of mouth. You can see other user's portfolios, match with them, and private message them once you've matched.
             </p>
            <br />
            <p>Start by </p>
            <button className="btn1"><span><a href="/signup">Creating an account</a></span></button>
          </div>
          <br />
        </div>
        <div className="home-examples">
          <div className="home-example1">
            <p>Shemar Anthony</p>
          </div>
          <div className="home-example2">
            <p>Brianna McAuliffe</p>
          </div>
          <div className="home-example3">
            <p>Elba Chimilio</p>
          </div>
        </div>
      </div>

    )
  }
}

export default Home;