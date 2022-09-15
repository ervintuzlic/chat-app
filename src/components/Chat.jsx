import React, { useContext } from 'react'
import Input from '../components/Input'
import { ChatContext } from '../context/ChatContext'
import Messages from './Messages'
const Chat = () => {
  const { data } = useContext(ChatContext);


  return (
    <div className="chat-container">
        <div className="chat-info">
            <img src={data.user.photoURL} alt="" />
            <span>{data.user.displayName}</span>
        </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat