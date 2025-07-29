import React from 'react';
import '../styles/Navbar.css';

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
          <li><a href="/Blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
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
