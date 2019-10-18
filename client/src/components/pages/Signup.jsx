import React, { Component } from 'react'
import api from '../../api'
import axios from 'axios'
import service from '../../api';
import '../../styling/signup.scss'

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
      imageUrl: '',
      artwork: [],
      name: "",
      description: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  // this method handles just the file upload
  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);
    service.handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
        this.setState({ imageUrl: response.secure_url },
          () => { console.log("THE STATE IS:", this.state) });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  }

  handleInputChange(e) {
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
      imageUrl: this.state.imageUrl,
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
        this.props.history.push('/login') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  // this method submits the form
  handleSubmit = e => {
    e.preventDefault();

    service.saveNewThing(this.state)
      .then(res => {
        console.log('added: ', res);
        // here you would redirect to some other page 
      })
      .catch(err => {
        console.log("Error while adding the thing: ", err);
      });
  }

  addPhotoForm = () => {
    return (
      <div>
        <h2>Upload Profile Photo</h2>
        <form onSubmit={e => this.handleSubmit(e)}>

          <div className="p-t-15">

            <input
              type="file"
              onChange={(e) => this.handleFileUpload(e)} />
            <button type="submit">Upload</button>
          </div>
        </form>
      </div>
    )
  }

  displaySignup = () => {
    return (
      <div>
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
          <div className="wrapper wrapper--w680">
            <div className="card card-4">
              <div className="card-body">
                <h2 className="title">Create an Account</h2>
                <form method="POST">
                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">first name</label>
                        <input className="input" type="text" name="first_name" placeholder="Ex. Elba" value={this.state.first_name} onChange={e => this.handleInputChange(e)} />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">last name</label>
                        <input className="input" type="text" name="last_name" placeholder="Ex. Chimilio" value={this.state.last_name} onChange={e => this.handleInputChange(e)} />
                      </div>
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">username</label>
                      <input className="input" type="text" name="username" placeholder="Ex. elbachimilio" value={this.state.username} onChange={e => this.handleInputChange(e)} />
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">password</label>
                      <input className="input" type="password" name="password" placeholder="***********" value={this.state.password} onChange={e => this.handleInputChange(e)} />
                    </div>
                  </div>

                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group">
                        <label className="label">Email</label>
                        <input className="input" type="email" name="email" placeholder="Ex. elbachimilio@gmail.com" value={this.state.email} onChange={e => this.handleInputChange(e)} />
                      </div>
                    </div>

                  </div>
                  <div className="input-group">
                    <label className="label">Profession   </label>
                    <div className="rs-select2 js-select-simple select--no-search">
                      <select onChange={(e) => this.setState({ userType: e.target.value })} value={this.state.userType}>
                        <option>Photographer</option>
                        <option>Model</option>
                        <option>Stylist</option>
                      </select>
                      <div className="select-dropdown"></div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <label className="label">Bio</label>
                      <textarea className="textarea" value="bio" name="bio" placeholder="This is an amazing website. Good job Elba! You are so cool! " value={this.state.bio} onChange={e => this.handleInputChange(e)}></textarea>
                    </div>
                  </div>
                  {this.addPhotoForm()}
                  <div className="p-t-15">
                    <button className="button is-link" onClick={e => this.handleClick(e)}>Sign  up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

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



{/* <div>
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

{this.addPhotoForm()}
<div className="field is-grouped">
  <div className="control">
    <button className="button is-link" onClick={e => this.handleClick(e)}>Submit</button>
  </div>
</div>
</div > */}