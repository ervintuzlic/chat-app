import React from 'react'

const Nav = () => {
  return (
    <div className="nav-container">
        <div className="logo">
            <h1>Chatty</h1>
        </div>
        <div className="user-info">
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" />
            <p>User Name</p>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Nav