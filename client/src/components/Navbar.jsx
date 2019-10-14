import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
import Profile from './pages/Profile'
import People from './pages/People'

class Navbar extends Component {

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
      <div>
        <NavLink to="/" exact>
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
        </div>

        <Switch>
          <Route path="/" exact component={(props) => <Home {...props} />} />
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

export default Navbar;