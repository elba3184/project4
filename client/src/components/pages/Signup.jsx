import React, { Component } from 'react'
import api from '../../api'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      email: '',
      bio: '',
      location: '',
      userType: 'Photographer',
      profilePhoto: '',
      artwork: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    console.log("Handle input change function: =====> ", e)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    let data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      bio: this.state.bio,
      location: this.state.location,
      userType: this.state.userType,
      artwork: this.state.artwork

    }
    console.log("This is the data =>", data)
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESSFULLY SIGNED UP!')
        this.props.checkLogin()
        this.props.history.push('/') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }



  displaySignup = () => {
    return (
      <div>
        <div className="field">
          <label className="label">First name</label>
          <div className="control">
            <input className="input" type="text" name="first_name" placeholder="Ex. Elba" value={this.state.first_name} onChange={e => this.handleInputChange(e)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Last name</label>
          <div className="control">
            <input className="input" type="text" name="last_name" placeholder="Ex. Chimilio" value={this.state.last_name} onChange={e => this.handleInputChange(e)} />
          </div>
        </div>

        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" name="username" placeholder="Ex. elbachimilio" value={this.state.username} onChange={e => this.handleInputChange(e)} />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <p className="help is-success">This username is available</p>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" name="email" placeholder="Ex. elbachimilio@gmail.com" value={this.state.email} onChange={e => this.handleInputChange(e)} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <label className="label">Type of Artist</label>
          <div className="control">
            <div className="select">
              <select onChange={(e) => this.setState({ userType: e.target.value })} value={this.state.userType}>
                <option>Photographer</option>
                <option>Model</option>
                <option>Stylist</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Bio</label>
          <div className="control">
            <textarea className="textarea" value="bio" name="bio" placeholder="This is an amazing website. Good job Elba! You are so cool! " value={this.state.bio} onChange={e => this.handleInputChange(e)}></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={e => this.handleClick(e)}>Submit</button>
          </div>
        </div>
      </div >
    )
  }

  render() {
    return (
      <div>
        {this.displaySignup()}
      </div>
    )
  }
}

export default Signup;