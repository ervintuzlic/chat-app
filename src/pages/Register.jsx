import React from 'react'
import Add from '../img/addAvatar.png';

const Register = () => {
  return (
    <div id="register-container">
        <div id="register-section">
            <h1>Chatty</h1>
            <form>
                <input name="name" placeholder="Enter your name!"/>
                <input name="email" placeholder="Enter your email!"/>
                <input name="password" placeholder="Enter your password!"/>
                <label for="avatar" htmlFor="avatar">
                    <img src={Add} alt=""/>
                    <p>Choose your image!</p>
                </label>
                <input id="avatar" type="file" />

                
                <button>Register!</button>
            </form>
            <p>You have already register? Login</p>
        </div>
    </div>
  )
}

export default Register