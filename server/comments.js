//Colors:
//#5680E9
//#84CEEB
//#5AB9EA
//#C1C8E4
//#8860D0


//===========app.jsx=============//


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
//==========app.jsx==============//





//=======Fileupload-route.js=====//
// if (!req.file) {
//   next(new Error('No file uploaded!'));
//   return;
// }
// get secure_url from the file object and save it in the 
// variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
//=======Fileupload.js===========//

//=========SIGNUP=========//

//THIS IS THE VALUE FOR THE SELECTED TYPE OPTION
// document.querySelector("#root > div > div > div > div:nth-child(5) > div > div > select").selectedOptions[0].innerHTML

// getRandomPhoto = () => {
//   axios.get('http://localhost:5000/api/random-photo', { withCredentials: true })
//     .then(res => {
//       let thePhoto = res.data.pic.urls.regular
//       this.setState({
//         profilePhoto: thePhoto
//       })
//     }).catch(err => console.log(err))
// }

// <div class="file has-name is-fullwidth">
//         <label class="file-label">
//           <input class="file-input" type="file" name="portfolio" onChange={this.fileSelectedHandler} />
//           <span class="file-cta">
//             <span class="file-icon">
//               <i class="fas fa-upload"></i>
//             </span>
//             <span class="file-label">
//               Choose a file…
//     </span>
//           </span>
//           <span class="file-name">
//             SomePhoto.png
//   </span>
//           <button onClick={e => this.fileUploadHandler}>Add</button>
//         </label>
//       </div>






//=========SIGNUP=========//




//====================IN App.jsx======================//
//Navbar
// import api from '../api'
// import Secret from './pages/Secret'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import api from '../api'
// import logo from '../logo.svg'
// import Profile from './pages/Profile'
// import People from './pages/People'
// import { Route, Link, NavLink, Switch } from 'react-router-dom'

// constructor(props) {
//   super(props)
//   this.state = {
//     user: null
//   }
// }
// componentDidMount() {
//   this.checkLogin()
// }

// checkLogin = () => {
//   api.checkLogin().then(user => {
//     this.setState({ user })
//   })
// }

// handleLogoutClick(e) {
//   api.logout().then(this.checkLogin)
// }

// render()
{/* <NavLink to="/" exact>
            Home {this.state.user ? this.state.user.username : 'not in'}
          </NavLink>
          <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <NavLink to="/">
                  <img src="../images/logo.png" width="80px" height="200px" />
                </NavLink>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/allUsers">Meet Others</NavLink>
                  </a>
                </div>
                {api.isLoggedIn() && (
                  <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                    Logout
                  </Link>)
                }
                {api.isLoggedIn() && (
                  <NavLink to="/profile">
                    Profile
                  </NavLink>)
                }

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <a className="button is-primary">
                        {!api.isLoggedIn() && (<NavLink to="/signup">Signup</NavLink>)}
                      </a>
                      <a className="button is-light">
                        {!api.isLoggedIn() && (<NavLink to="/login">Login</NavLink>)}
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div> */}

{/* <NavLink to="/profile">Profile</NavLink> */ }

//After header and before last div
{/* <Switch>
          <Route path="/" exact component={(props) => <Home {...props} />} />
          <Route path="/matched"/>
          <Route path="/signup" component={(props) => <Signup checkLogin={this.checkLogin} {...props} />} />
          <Route path="/login" component={(props) => < Login checkLogin={this.checkLogin} {...props} />} />
          <Route path="/profile" component={(props) => < Profile {...props} />} />

          <Route path="/allUsers" component={(props) => < People {...props} />} />
          <Route render={() => <h2>404</h2>} />
        </Switch> */}
{/* <img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">MERN Boilerplate</h1> */}
{/* <NavLink to="/countries">Countries</NavLink>
          <NavLink to="/add-country">Add country</NavLink> */}

{/* <NavLink to="/signup">Signup</NavLink> */ }
{/* <NavLink to="/login">Login</NavLink> */ }
{/* {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}

          {api.isLoggedIn() && <NavLink to="/secret">Secret</NavLink>}
          {api.isLoggedIn() && <NavLink to="/profile">Profile</NavLink>} */}

{/* 
                  <a className="navbar-item">
                    Documentation
      </a> */}

{/* <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                      More
        </a>

                    <div className="navbar-dropdown">
                      <a className="navbar-item">
                        About
          </a>
                      <a className="navbar-item">
                        Jobs
          </a>
                      <a className="navbar-item">
                        Contact
          </a>
                      <hr className="navbar-divider" />
                      <a className="navbar-item">
                        Report an issue
          </a>
                    </div>
                  </div> */}

//====================IN App.jsx======================//




//====================IN Signup.jsx======================//
// import axios from 'axios'

// getRandomPhoto = () => {
//   axios.get('http://localhost:5000/api/random-photo', { withCredentials: true })
//     .then(res => {
//       let thePhoto = res.data.pic.urls.regular
//       this.setState({
//         profilePhoto: thePhoto
//       })
//     }).catch(err => console.log(err))
// }

// fileSelectedHandler = (e) => {
//   console.log(e.target.files[0])
// }

// fileUploadHandler = (e) => {
//   this.setState({
//     artwork: e.tartget.files[0]
//   })
// }


{/* <div class="file has-name is-fullwidth">
          <label class="file-label">
            <input class="file-input" type="file" name="portfolio" onChange={this.fileSelectedHandler} />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file…
      </span>
            </span>
            <span class="file-name">
              SomePhoto.png
    </span>
            <button onClick={e => this.fileUploadHandler}>Add</button>
          </label>
        </div> */}



//THIS IS THE VALUE FOR THE SELECTED TYPE OPTION
// document.querySelector("#root > div > div > div > div:nth-child(5) > div > div > select").selectedOptions[0].innerHTML

//====================IN Signup.jsx======================//


//====================IN Navbar.jsx======================//


// import Secret from './pages/Secret'
// import logo from '../logo.svg'
// import { Route, Link, NavLink, Switch } from 'react-router-dom';
{/* <Route path="/matched" component= */ }
{/* {this.state.user ? this.state.user.username : null} */ }
{/* was ===> this.state.user ? this.state.user.username : " " */ }



// import React, { Component } from 'react'
// import Profile from './pages/Profile'
// import People from './pages/People'
// import { Route, Link, NavLink, Switch } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import api from '../api'

// class Navbar extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       user: null
//     }
//   }
//   componentDidMount() {
//     this.checkLogin()
//   }

//   checkLogin = () => {
//     api.checkLogin().then(user => {
//       console.log("the user", user)
//       this.setState({ user })
//     })
//   }

//   handleLogoutClick(e) {
//     api.logout().then(this.checkLogin)
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <NavLink to="/" exact>

//         </NavLink>

//         <nav className="navbar" role="navigation">
//           <div className="navbar-logo">
//             <NavLink to="/" exact>
//               <img src="../images/logo.png" width="112" height="28" />
//               {/*  */}
//             </NavLink>

//             {/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
//               <span aria-hidden="true"></span>
//               <span aria-hidden="true"></span>
//               <span aria-hidden="true"></span>
//             </a>*/}
//           </div>

//           <div id="nav-bar">
//             {/* className="navbar-menu */}
//             <div className="navbar-start">
//               <a className="navbar-item">
//                 <NavLink to="/">Home</NavLink>
//               </a>
//             </div>
//             {api.isLoggedIn() && (
//               <Link to="/" onClick={e => this.handleLogoutClick(e)}>
//                 Logout
//                   </Link>)
//             }
//             {api.isLoggedIn() && (
//               <Link to="/profile">
//                 Profile
//                   </Link>)
//             }

//             {api.isLoggedIn() && (
//               <Link to="/allUsers">
//                 Meet Others
//                   </Link>)
//             }

//             <div className="navbar-end">
//               <div className="navbar-item">
//                 <div className="buttons">
//                   <a className="button is-primary">
//                     {!api.isLoggedIn() && (<NavLink to="/signup">Signup</NavLink>)}
//                   </a>
//                   <a className="button is-light">
//                     {!api.isLoggedIn() && (<NavLink to="/login">Login</NavLink>)}
//                   </a>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>

//         <Switch>
//           <Route path="/" exact component={(props) => <Home {...props} />} />
//           {/* <Route path="/matched" component= */}
//           <Route path="/signup" component={(props) => <Signup checkLogin={this.checkLogin} {...props} />} />
//           <Route path="/login" component={(props) => < Login checkLogin={this.checkLogin} {...props} />} />
//           <Route path="/profile" component={(props) => < Profile checkLogin={this.checkLogin} {...props} />} />
//           <Route path="/allUsers" component={(props) => < People {...props} />} />
//           <Route render={() => <h2>404</h2>} />
//         </Switch>
//       </React.Fragment>

//     )
//   }
// }

// export default Navbar;

//====================IN Navbar.jsx======================//



//====================In index.jsx======================//
// router.get('/unsplash', (req, res, next) => {
//   console.log("Route exists")
//   console.log(process.env.UNSPLASH_ACCESSKEY)
//   axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_ACCESSKEY}`)
//     .then((response) => {
//       res.json(response.data)
//     })
// })

// router.get('/users/:username', (req, res, next) => {
//   let username = req.params.username

//   axios.get(`https://api.unsplash.com/users/${username}/?client_id=${process.env.UNSPLASH_ACCESSKEY}`)
//     .then((response) => {
//       console.log("=====>>>>>", response)
//       res.json(response.data)
//     }).catch(err => next(err))
// })
//====================In index.jsx======================//


//====================In Profile.jsx====================//


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
//====================In Profile.jsx====================//

//====================In People.jsx=====================//

      //     <Carousel className="carousel">
      //       <Carousel.Item>
      //         <img
      //           className="users-profiles"
      //           src={this.state.allUsers.map(eachUser => eachUser.imageUrl)}
      //           alt="First slide"
      //         />
      //         <Carousel.Caption>
      //           <h3>First slide label</h3>
      //           <p>{this.state.allUsers.map(eachUser => eachUser.first_name)}</p>
      //         </Carousel.Caption>
      //       </Carousel.Item>
      //       <Carousel.Item>
      //         <img
      //           className="d-block w-100"
      //           src=""
      //           alt="Third slide"
      //         />

      //         <Carousel.Caption>
      //           <h3>Third slide label</h3>
      //           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      //         </Carousel.Caption>
      //       </Carousel.Item>
      //     </Carousel >
//====================In People.jsx=====================//