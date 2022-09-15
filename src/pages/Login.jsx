import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;


    try{
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/");
  }
  catch(err){
    console.log(err);
    setErr(true);
  }
}
  return (
    <div id="register-container">
        <div id="register-section">
            <h1>Chatty</h1>
            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Enter your email!"/>
                <input type="password" name="password" placeholder="Enter your password!"/>
                <button>Login</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login