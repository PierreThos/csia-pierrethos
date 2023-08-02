import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link className='link' to='/'>JIS Yearbook Database</Link>
    </div>
  )
}

export default Header
