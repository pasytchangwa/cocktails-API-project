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
         <ul className='links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
       </div>
    </nav>
  );
}

export default Navbar