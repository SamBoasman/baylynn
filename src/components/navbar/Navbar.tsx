import './Navbar.scss';
import React, { useState } from 'react';
import logo from '../../assets/logo.webp';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  }

  function NavLinks(name: string) {
    return (
      <div className={`nav-links ${name}`}>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='/AboutUs' end>About Us</NavLink>
        <NavLink to='/Events' end>Events</NavLink>
        <NavLink to='/SupportUs' end>Support Us</NavLink>
        <NavLink to='/JoinUs' end>Join Us</NavLink>
        <NavLink to='/Gallery' end>Gallery</NavLink>
      </div>
    )
  }

  return (
    <header>
        <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {NavLinks(`menu-links`)}
        </div>
        <nav className='navbar'>
          <button className='hamburger' onClick={toggleMenu}>
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
          </button>
          <Link className='nav-logo' to='/'>
            <img className='logo-img' src={logo}/>
          </Link>
          {NavLinks('nav-headers')}
        </nav>
    </header>
  );
}

export default Navbar;
