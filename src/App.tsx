import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/global.css'
import Home from './pages/Home.js'
import Blog from './pages/Blog.js'
import About from './pages/about.js';
import Contact from './pages/Contact.js';
import Navbar from './components/Navbar.jsx';
import Books from './pages/Books.jsx';
import Post from './pages/Post.js'; 

function App() {

return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home /> }/>
          <Route path="/Blog" element={<Blog />} />
          <Route path="/posts/:slug" element={<Post />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;   
