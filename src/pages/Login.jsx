import React from 'react'

const Login = () => {
  return (
    <div id="register-container">
        <div id="register-section">
            <h1>Chatty</h1>
            <form>
                <input name="email" placeholder="Enter your email!"/>
                <input name="password" placeholder="Enter your password!"/>
                <button>Login</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login