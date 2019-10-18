import React, { Component } from 'react'
import api from '../../api'
import '../../styling/login.scss'
import { Link } from 'react-router-dom'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      message: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClick(e) {
    e.preventDefault()
    api
      .login(this.state.username, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.checkLogin()
        this.props.history.push('/allUsers')
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="limiter">
        <div className="wrap-login100">
          {/* <div className="login-card"> */}
          <div className="container-login100">
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
              <div className="whole-login">
                <form className="login100-form validate-form">
                  <span className="login100-form-title p-b-49">
                    Login
					</span>

                  <div className="wrap-input100 validate-input m-b-23" data-validate="Username is required">
                    <span className="label-input100">Username</span>
                    <input className="input100" type="text" type="text"
                      value={this.state.username}
                      name="username"
                      onChange={this.handleInputChange}
                      placeholder="Username" />
                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                  </div>

                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <span className="label-input100">Password</span>
                    <input className="input100" type="password" type="password"
                      value={this.state.password}
                      name="password"
                      onChange={this.handleInputChange}
                      placeholder="********" />
                    <span className="focus-input100" data-symbol="&#xf190;"></span>
                  </div>

                  <div className="text-right p-t-8 p-b-31">
                    <a href="#">
                      Forgot password?
						</a>
                  </div>

                  <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                      <div className="login100-form-bgbtn"></div>
                      <button className="login100-form-btn" onClick={e => this.handleClick(e)}>
                        Login
							</button>
                    </div>
                  </div>

                  <div className="flex-col-c p-t-155">
                    <span className="txt1 p-b-17">
                      Or
						</span>

                    <Link className="nav-link" to="/signup">
                      <li className="create-account">Create an account</li>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>


      // <div id="dropDownSelect1"></div>
      //     {/* <div classNameName="login">
      //   <h2>Login</h2>
      //   <form classNameName="login-form">
      //     Username:{' '}
      //     <input */}
      //     {/* type="text"
      //        value={this.state.username}
      //        name="username"
      //        onChange={this.handleInputChange}
      //      />{' '}
      //      <br />
      //      Password:{' '}
      //      <input */}
      //     {/* type="password"
      //        value={this.state.password}
      //        name="password"
      //        onChange={this.handleInputChange}
      //      />{' '}
      //      <br />
      //      <button onClick={e => this.handleClick(e)}>Login</button>
      //    </form>
      //    {this.state.message && (
      //      <div classNameName="info info-danger">{this.state.message}</div>
      //    )}
      //  </div> */}
    )
  }
}