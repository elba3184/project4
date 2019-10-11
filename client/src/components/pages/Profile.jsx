import React, { Component } from 'react';
import axios from 'axios';
import api from '../../api';
import { runInNewContext } from 'vm';

class Profile extends Component {
  state = {
    error: null,
    isLoaded: false,
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    bio: '',
    location: '',
    userType: '',
    profilePhoto: ''
  }

  getRandomPhoto = () => {
    axios.get('http://localhost:5000/api/random-photo', { withCredentials: true })
      .then(res => {
        let thePhoto = res.data.pic.urls.regular
        this.setState({
          profilePhoto: thePhoto
        })
      }).catch(err => console.log(err))
  }

  async componentDidMount() {
    let currentUser = await api.getLocalStorageUser()
    // console.log(currentUser)
    this.setState({
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      username: currentUser.username,
      email: currentUser.email,
      bio: currentUser.bio,
      location: currentUser.location,
      userType: currentUser.userType,
      profilePhoto: currentUser.profilePhoto,
      isLoaded: true
    })

    this.getRandomPhoto()
  }

  showCard = () => {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={this.state.profilePhoto} alt="Placeholder image" style={{ "width": "380px", height: "500px" }} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="../images/profile_1.jpeg" alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{this.state.first_name}</p>
              <p className="subtitle is-6">{this.state.email}</p>
              <p>You're a {this.state.userType}</p>
            </div>
          </div>

          <div className="content">
            {this.state.bio}.
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    )
  }

  render() {

    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {/* <img src={this.getRandomPhoto()} /> */}
          {this.showCard()}
        </div>

      );
    }
  }
}

export default Profile;



        // <ul>
        //   <li>{JSON.stringify(this.state.userInfo)}</li>
        // </ul>


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



  // getUser = async (username) => {
  //   username = "elbachimilio";
  //   try {
  //     const userInfo = await axios.get(`http://localhost:5000/api/users/${username}`)
  //     this.setState({
  //       userInfo,
  //       isLoaded: true
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // getRandomPhoto = async () => {
  //   try {
  //     const randomPhoto = await axios.get(`http://localhost:5000/api/random-photo`)
  //     this.setState({
  //       randomPhoto,
  //       isLoaded: true
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


    // showUserInfo = (userInfo) => {
  //   console.log("====>Ddfkdgmdflgmdsfkgmdskgmsdf ===> ", userInfo)
  //   console.log("THE TYPEOF USERINFO IS: ", typeof (userInfo))
  //   let keys = Object.keys(userInfo)
  //   let currentUser = keys.map((key, i) => {
  //     console.log("IN CURRENT USER-keys", currentUser)
  //     return typeof (userInfo[key]) == "object" ? <li>this is an object</li> : <li key={i}>{userInfo[key]}</li>
  //   })
  //   return currentUser
  //   // data: 
  //   // key: {key}, 
  // }