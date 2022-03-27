import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div>
        <link to='/'>
          <img src={logo} alt='logo' />
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