import React, { Component } from 'react'
import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel'
import Chat from './Chat';
import '../../styling/index.scss'
import serverUrl from '../../configServer'

class People extends Component {

  state = {
    allUsers: [],
    currentUser: 0
  }

  componentDidMount() {
    // console.log('ppl')
    this.showAllUsers()

  }

  clickUpdate = (e) => {
    this.addMatched()
    console.log("the event", e)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // addMatched = () => {
  //   console.log("the event",e)
  //   this.props.following.push({
  //     userId: this.state.user._id
  //   })
  // }



  getOneUser = (user) => {
    let currentUser = user._id
    axios.get(`${serverUrl}/matched:${currentUser}`)
      .then(res => {
        this.setState({
          currentUser: 1
        })
      }).catch(err => console.log(err))
  }

  displayMatched = () => {
    return (
      <div>

        <button className="like-button">
          <a className="button" onClick={this.clickUpdate()}>Submit</a>
        </button>
      </div>
    )
  }
  showAllUsers = () => {
    axios.get(`${serverUrl}/allUsers`, { withCredentials: true })
      .then(res => {
        // console.log(res.data.allUsersFromDB)
        this.setState({
          allUsers: res.data.allUsersFromDB
        })
      }).catch(err => console.log(err))
  }

  showEachUser = () => {
    console.log(this.state.allUsers)
    let listOfUsers = this.state.allUsers.map((eachUser, i) => {
      let list =
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={eachUser.imageUrl} width="100px" height="80px" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{eachUser.username}</strong> <br />
                  <small>{eachUser.first_name} {eachUser.last_name}</small>
                </p>
                <p> {eachUser.email} </p>
                <p>{eachUser.userType} </p>
                <p>{eachUser.bio}</p>
                
                <button className="match"><span><a href="/" className="match">Nope</a></span></button>
                <br />
                <button className="match"><span><a href="/" className="match">Definitely!</a></span></button>

              </div>
            </div>
            


          </article>
        </div>

      return list;
    })
    return listOfUsers;
  }

  showUserCards = () => {
    return (
      <div>
        <div className="all-users">
        <p><li>{this.showEachUser()}</li></p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div class="people-stuff">
       <p className="people-title">Aesthetic Users</p>
        {this.showUserCards()}

        <Chat />
      </div >
    )
  }
}

export default People;