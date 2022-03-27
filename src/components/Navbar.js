import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <link to='/'>
          <img src={logo} alt='logo' className='logo' />
        </link>
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  );
}

export default Navbar