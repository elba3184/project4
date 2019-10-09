import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
  state = {
    error: null,
    isLoaded: false,
    username: undefined,
    name: undefined,
    profile_img: undefined,
    userInfo: ''
  };

  componentDidMount = () => {
    this.getUser()
  }

  getUser = async (username) => {
    username = "elbachimilio";
    try {
      const userInfo = await axios.get(`http://localhost:5000/api/users/${username}`)
      this.setState({
        userInfo,
        isLoaded: true
      })
    } catch (err) {
      console.log(err)
    }
  }

  showUserInfo = (userInfo) => {
    console.log("====>Ddfkdgmdflgmdsfkgmdskgmsdf ===> ", userInfo)
    console.log("THE TYPEOF USERINFO IS: ", typeof (userInfo))
    let keys = Object.keys(userInfo)
    let currentUser = keys.map((key, i) => {
      console.log("IN CURRENT USER-keys", currentUser)
      return typeof (userInfo[key]) == "object" ? <li>this is an object</li> : <li key={i}>{userInfo[key]}</li>
    })
    return currentUser
    // data: 
    // key: {key}, 
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {this.showUserInfo(this.state.userInfo.data)}
        </ul>
        // <ul>
        //   <li>{JSON.stringify(this.state.userInfo)}</li>
        // </ul>
      );
    }
  }
}

export default Profile;






// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
// const User = require('../models/User')
// const bcrypt = require('bcrypt')

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: 'username',
//       passwordField: 'password',
//     },
//     (username, password, done) => {
//       User.findOne({ username })
//         .then(foundUser => {
//           if (!foundUser) {
//             done(null, false, { message: 'Incorrect username' })
//             return
//           }

//           if (!bcrypt.compareSync(password, foundUser.password)) {
//             done(null, false, { message: 'Incorrect password' })
//             return
//           }

//           done(null, foundUser)
//         })
//         .catch(err => done(err))
//     }
