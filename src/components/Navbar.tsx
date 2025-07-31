import {Link} from 'react-router-dom';
import '../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar-logo">
        <a href="/" className="logo">
          jakxel-Blog
        </a>
      </div>
      <div className="navbar-links">
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/notes">Notes</Link></li>
        </ul>
      </div>
      <div>
        <button>
        Light
        </button>
      </div>
    </nav>
  ) 
};
export default Navbar;
