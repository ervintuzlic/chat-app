import React from 'react'

const Chats = () => {
  return (
    <div className="chats-container">
        <div className="individual-chat">
            <div className="user-image">
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" />
            </div>
            <div className="user-info">
                <span>UserName</span>
                <p>Message from user</p>
            </div>
        </div>
        <div className="individual-chat">
            <div className="user-image">
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" />
            </div>
            <div className="user-info">
                <span>UserName</span>
                <p>Message from user</p>
            </div>
        </div>
        <div className="individual-chat">
            <div className="user-image">
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" />
            </div>
            <div className="user-info">
                <span>UserName</span>
                <p>Message from user</p>
            </div>
        </div>
    </div>
  )
}

export default Chats