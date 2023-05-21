import React, { useState } from 'react';
import logo from '../../images/logo/logo.png';
import {FaAlignRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

    return (
      <nav className='navbar-container'>
      <div className='nav-center'>
          <div className='nav-header'>
              <Link to='/'>
                  <img className='nav-brand' src={logo} alt='Meditation' />
              </Link>
              <button type='button' className='nav-btn' onClick={handleToggle}>
                  <FaAlignRight className='nav-icon' />
              </button>
          </div>
          <ul className={isOpen?'nav-links show-nav':'nav-links'}>
              <li>
                  <Link to='/'>Home</Link>
              </li>
              <li>
                  <Link to='/timer'>Timer</Link>
              </li>
          </ul>
      </div>
    </nav>
    )
  }

export default Navbar;