import React from 'react'
import Input from '../components/Input'
import Messages from './Messages'
const Chat = () => {
  return (
    <div className="chat-container">
        <div className="chat-info">
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" />
            <span>UserName</span>
        </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat