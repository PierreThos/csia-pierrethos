import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  var loggedIn = false;
  var wrongDetails = false;

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = input1 => {
    setUsername(input1.target.value);
  }
  
  const handlePassword = input2 => {
    setPassword(input2.target.value);
  }

 const checkCorrect = () => {
  if (username === "admin" && password === "admin") {
    loggedIn = true;
    wrongDetails = true;
    return (
      <div>You have been successfully logged in.</div>
    )
  }
 }

  return (
    <div className='auth'>
      <h1>Admin Login Page</h1>
      <form>
        <input required type="text" placeholder='username' onChange={handleUsername}/>
        <input required type="password" placeholder='password' onChange={handlePassword}/>
        <button onClick={checkCorrect}>Login</button>
        <p> <script type='text/javascript'>if (wrongDetails === true) {
          <style>
            
          </style>
        }</script>Username or password is incorrect. Please try again.</p>
        <span>Not an admin? <Link to="/">Return to Homepage</Link></span>
      </form>
    </div>
  )
}

export default Login