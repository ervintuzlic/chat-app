import React from 'react'
import Input from '../components/Input'
const Chat = () => {
  return (
    <div className="chat-container">
        <div className="chat-info">
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" />
            <span>UserName</span>
        </div>
        <div className="chat-section">
            Hello
        </div>
        <Input />
    </div>
  )
}

export default Chat