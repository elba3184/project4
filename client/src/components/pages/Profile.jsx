import React, { Component } from 'react';
import axios from 'axios';
import api from '../../api';
import '../../styling/index.scss'
import Modal from './Modal'
// import { runInNewContext } from 'vm';
import serverUrl from '../../configServer'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      bio: '',
      location: '',
      userType: '',
      profilePhoto: '',
      modalState: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  async componentDidMount() {
    let currentUser = await api.getLocalStorageUser()
    // console.log(currentUser)
    this.setState({
      userId: currentUser._id,
      first_name: currentUser.first_name,
      last_name: currentUser.last_name,
      username: currentUser.username,
      email: currentUser.email,
      bio: currentUser.bio,
      location: currentUser.location,
      userType: currentUser.userType,
      imageUrl: currentUser.imageUrl,
      isLoaded: true
    })
    // this.getRandomPhoto()
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

  // addNewInfo = (user) => {
  //   let currentUser = [...this.state.currentUser]
  //   newShowFoods.unshift(food)
  //   this.setState({
  //     showFoods: newShowFoods
  //   })


  // getRandomPhoto = () => {
  //   axios.get(`${serverUrl}/random-photo`, { withCredentials: true })
  //     .then(res => {
  //       let thePhoto = res.data.pic.urls.regular
  //       this.setState({
  //         profilePhoto: thePhoto
  //       })
  //     }).catch(err => console.log(err))
  // }


  showCard = () => {
    return (
      <div className="profile-card">
        <div className="profile-info">


          <div class="col-md-4">
            <div class="card profile-card-3">
              <div class="background-block">
                <img src={this.state.profilePhoto} alt="profile-sample1" class="background" />
              </div>
              <div class="profile-thumb-block">
                <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="profile-image" class="profile" />
              </div>
              <div class="card-content">
                <h2>{this.state.first_name} {this.state.last_name}<small>{this.state.userType}</small></h2>
              </div>
              <p class="mt-3 w-100 float-left text-center"><strong>Modren Profile Card</strong></p>
            </div>
            <p>{this.state.bio}</p>
          </div>
        </div>
        {/* 
        <Modal
          closeModal={this.toggleModal}
          userId={this.state.userId}
          modalState={this.state.modalState}
          title="Edit Profile" /> */}

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
          {/* <button onClick={this.openModal()}>Edit User</button> */}
          {/* <img src={this.getRandomPhoto()} /> */}
          {this.showCard()}
        </div>

      );
    }
  }
}

export default Profile;


 // <div className="card">
      //   <div className="card-image">
      //     <figure className="image is-4by3">
      //       <img src="../public/images/profile.png" alt="Placeholder image" style={{ "width": "380px", height: "500px" }} />
      //     </figure>
      //   </div>
      //   <div className="card-content">
      //     <div className="media">
      //       <div className="media-left">
      //         <figure className="image is-48x48">
      //           <img src="../images/profile_1.jpeg" alt="Placeholder image" />
      //         </figure>
      //       </div>
      //       <div className="media-content">
      //         <p className="title is-4">{this.state.first_name}</p>
      //         <p className="subtitle is-6">{this.state.email}</p>
      //         <p>You're a {this.state.userType}</p>
      //       </div>
      //     </div>

      //     <div className="content">
      //       {this.state.bio}.
      //       <br />
      //       <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      //     </div>
      //   </div>
      // </div>

       // handleClick = (e) => {
  //   e.preventDefault()
  //   let data = {
  //     first_name: this.state.first_name,
  //     last_name: this.state.last_name,
  //     username: this.state.username,
  //     password: this.state.password,
  //     email: this.state.email,
  //     imageUrl: this.state.imageUrl,
  //     bio: this.state.bio,
  //     location: this.state.location,
  //     userType: this.state.userType,
  //     artwork: this.state.artwork,
  //     isLoaded: true

  //   }
  //   console.log("This is the data =>", data)
  //   api
  //     .signup(data)
  //     .then(result => {
  //       console.log('SUCCESSFULLY SIGNED UP!')
  //       this.props.checkLogin()
  //       this.props.history.push('/login') // Redirect to the home page
  //     })
  //     .catch(err => this.setState({ message: err.toString() }))
  // }