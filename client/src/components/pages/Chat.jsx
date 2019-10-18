import { Component } from "react";
import React from "react";
import socketIOClient from 'socket.io-client';
// import serverUrl from '../../configServer';

const socket = socketIOClient('http://localhost:5000')
// const socket = socketIOClient(serverUrl);

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      messages: [],
      endpoint: "http://127.0.0.1:5000"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    console.log('mount')
    socket.removeListener('received')
    socket.on("received", data => {
      console.log(data)
      this.setState({ response: data });
    })
  }
  typeMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  sendChat = (e) => {
    e.preventDefault()
    console.log("in chat - this is the state ====>", this.state)
    socket.emit('chat message', { please: this.state.message })
    let messages = [...this.state.messages]
    messages.push(this.state.message)
    this.setState({
      messages
    })

  }

  showChat = () => {
    return (
      <div class="chat_window">
        <div class="top_menu">
          <div class="buttons">
            <div class="button close"></div>
            <div class="button minimize"></div>
            <div class="button maximize"></div>
          </div>
          <div class="title">Chat</div>
        </div>
        <ul id="messages" class="messages">

        </ul>
        <div class="bottom_wrapper clearfix">
          <i id="typing"></i>
          <form id="form" onSubmit={this.sendChat}>
            <div class="message_input_wrapper">
              <input id="message" class="message_input" onChange={this.typeMessage} placeholder="Type your message here..." />
            </div>
            <button class="send_message">
              Send
        </button>
          </form>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.showChat()}
      </div>
    )
  }
}

export default Chat;