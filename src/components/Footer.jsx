import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  
  return (
    <footer>
      <div className='links'>
        <Link className='link' to='/about' >About the Project</Link> &nbsp;| &nbsp;
        <Link className='link' to='/pdf' >PDF Versions</Link> &nbsp;| &nbsp;
        <Link className='link' to='/login' >Admin Login</Link> &nbsp;| &nbsp;
        <Link className='link' to='/feedback' >Send Feedback</Link> &nbsp;|&nbsp;
      </div>
    </footer>
  )
}

export default Footer
