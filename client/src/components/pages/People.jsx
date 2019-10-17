import React, { Component } from 'react'
import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel'
import Chat from './Chat';
import '../../styling/index.scss'
import serverUrl from '../../configServer'

class People extends Component {

  state = {
    allUsers: [],
    currentUser: ''
  }

  componentDidMount() {
    // console.log('ppl')
    this.showAllUsers()

  }

  showSpecificUser = () => {

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
                <button className="match">Nope</button>
                <br />
                <button className="match">Dope</button>

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

        <p><li>{this.showEachUser()}</li></p>


      </div>
    )
  }

  render() {
    return (
      <div>
        In People component???
        {this.showUserCards()}

        <Chat />
      </div >
    )
  }
}

export default People;