import React from 'react'

const Register = () => {
  return (
    <div id="register-container">
        <div id="register-section">
            <h1>Chatty</h1>
            <form>
                <input name="name" placeholder="Enter your name!"/>
                <input name="email" placeholder="Enter your email!"/>
                <input name="password" placeholder="Enter your password!"/>
                <label for="file"><img src=""/></label>
                <input name="file" type="file" style={{border:'none'}}/>
                <button>Register!</button>
            </form>
            <p>You have already register? Login</p>
        </div>
    </div>
  )
}

export default Register