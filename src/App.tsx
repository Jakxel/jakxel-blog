import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Books from "./components/Books";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Post from "./components/Post";
import "./styles/App.css"

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />

        <div className="container">
          <Sidebar />
          <div className="Content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="blog" element={<Blog />} />
              <Route path="/posts/:slug" element={<Post />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/Books" element={<Books />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;