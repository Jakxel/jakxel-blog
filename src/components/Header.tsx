import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header>
        <li id="title-header"><Link to="/" id="title-header">Jakxel's Blog</Link></li>
      <nav>
        <ul>
          <li><Link to="/blog">Posts</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li>
            <a 
              href="https://engineerign-for-lazys.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Articles
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;