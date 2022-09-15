import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Nav = () => {
  const {currentUser} = useContext(AuthContext)


  return (
    <div className="nav-container">
        <div className="logo">
            <h1>Chatty</h1>
        </div>
        <div className="user-info">
            <img src={currentUser.photoURL} alt="" />
            <p>{currentUser.displayName}</p>
            <button onClick={()=>signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Nav