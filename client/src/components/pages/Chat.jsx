import React, { Component } from 'react'

class Chat extends Component {
  render() {
    return (
      <div>
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
            <form id="form">
              <div class="message_input_wrapper">
                <input id="message" class="message_input" placeholder="Type your message here..." />
              </div>
              <button class="send_message">
                Send
        </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat