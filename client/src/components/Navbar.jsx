import React, { Component } from 'react'
import Profile from './pages/Profile'
import People from './pages/People'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import api from '../api'
import Match from './pages/Match'
import '../styling/navbar.scss'

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
      console.log("the user", user)
      this.setState({ user })
    })
  }

  handleLogoutClick(e) {
    api.logout().then(this.checkLogin)
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg fixed-top">
          <Link className="navbar-brand" to="/">
            <img src="../images/logo.png" width="112" height="28" margin-left="30px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {!api.isLoggedIn() && <Link className="nav-link" to="/signup">
                <li className="nav-item active">Create an Account</li>
              </Link>}
              {!api.isLoggedIn() && <Link className="nav-link" to="/login">
                <li className="nav-item">Login</li>
              </Link>}
              {api.isLoggedIn() && <Link className="nav-link" to="/allUsers">
                <li className="nav-item active">All Users</li>
              </Link>}
              {api.isLoggedIn() && <Link className="nav-link" to="/profile">
                <li className="nav-item active">Profile</li>
              </Link>}
              {api.isLoggedIn() && <Link className="nav-link" to="/" onClick={e => this.handleLogoutClick(e)}>
                <li className="nav-item active">Logout</li>
              </Link>}
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact component={(props) => <Home {...props} />} />
          <Route path="/signup" component={(props) => <Signup checkLogin={this.checkLogin} {...props} />} />
          <Route path="/login" component={(props) => < Login checkLogin={this.checkLogin} {...props} />} />
          <Route path="/profile" component={(props) => < Profile checkLogin={this.checkLogin} {...props} />} />
          <Route path="/allUsers" component={(props) => < People {...props} />} />
          <Route path="/match" component={(props) => < Match {...props} />} />
          <Route render={() => <h2>404</h2>} />
        </Switch>


      </React.Fragment >

    )
  }
}

export default Navbar;

