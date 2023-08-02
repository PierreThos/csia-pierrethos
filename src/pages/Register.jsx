import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='Username'/>
        <input required type="password" placeholder='Password'/>
        <input required type="email" placeholder='Email Address' />
        <button>Register</button>
        <p>Sample Error Message</p>
        <span>Already have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register
