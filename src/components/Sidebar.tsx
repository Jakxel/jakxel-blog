import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import profileImg from '../assets/Author.png'

function Sidebar () {
    return (
        <aside>
            <img src={profileImg} alt="AuthorPhoto" />
            <div className="text">
                <p>Made by</p>
                <strong>Jakxel Islas</strong>
            </div>
            <div className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Posts</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/books">My books</Link></li>
                <li><a href="https://engineerign-for-lazys.vercel.app/">Engineering for lazys</a></li>
                <li><a href="https://www.linkedin.com/in/victor-jakxel-islas-carreon-b6a156351/">Linkedin</a></li>    
                <li><a href="https://github.com/Jakxel">Github</a></li>
            </div>
            
            <div className="fotter">
                <div className="text2">
                   <li><a href="">Engineering for lazys</a></li>
                    <p> © 2025</p> 
                </div>
                <li className="list-fotter"><a href="">Powered by Vercel</a></li>
            </div>
        </aside>
    )
}
export default Sidebar;