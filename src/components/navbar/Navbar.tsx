import './Navbar.scss';
import { useState } from 'react';
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
    <div className='navbar'>
        <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {NavLinks(`menu-links`)}
        </div>
        <nav>
          <button className='hamburger' onClick={toggleMenu}>
            <span className={`lines ${menuOpen ? 'open' : ''}`}></span>
          </button>
          <Link className='nav-logo' to='/'>
            <img className='logo-img' src={logo}/>
          </Link>
          {NavLinks('nav-headers')}
        </nav>
    </div>
  );
}

export default Navbar;
