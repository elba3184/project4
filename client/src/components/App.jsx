import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
// import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
// import logo from '../logo.svg'
import Profile from './pages/Profile'
import People from './pages/People'
// import Navbar from './Navbar'
// import { runInThisContext } from 'vm'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }
  componentDidMount() {
    this.checkLogin()
  }

  checkLogin = () => {
    api.checkLogin().then(user => {
      this.setState({ user })
    })
  }

  handleLogoutClick(e) {
    api.logout().then(this.checkLogin)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to="/" exact>
            Home {this.state.user ? this.state.user.username : 'not in'}
          </NavLink>
          <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>

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
          </div>

          {/* <NavLink to="/profile">Profile</NavLink> */}
        </header>
        <Switch>
          <Route path="/" exact component={(props) => <Home {...props} />} />
          {/* <Route path="/matched" component= */}
          <Route path="/signup" component={(props) => <Signup checkLogin={this.checkLogin} {...props} />} />
          <Route path="/login" component={(props) => < Login checkLogin={this.checkLogin} {...props} />} />
          <Route path="/profile" component={(props) => < Profile {...props} />} />

          <Route path="/allUsers" component={(props) => < People {...props} />} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}

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
