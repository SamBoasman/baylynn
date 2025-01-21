import logo from './logo.webp';
import './Navbar.scss';

function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <img className="nav-logo" src={logo}/>
            <div className='nav-headers'>
                {/* <ul className='nav-menu'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>About Us</li>
                    <li className='nav-item'>Events</li>
                    <li className='nav-item'>Support Us</li>
                    <li className='nav-item'>Join Us</li>
                    <li className='nav-item'>Gallery</li>
                </ul> */}
                <div className='hamburger'>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;
