import logo from './logo.webp';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
        <nav className="navbar">
            {/* <div className='hamburger'>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div> */}
            <img className="nav-logo" src={logo}/>
            <div className='nav-headers'>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/AboutUs" end>About Us</NavLink>
                <NavLink to="/Events" end>Events</NavLink>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;
