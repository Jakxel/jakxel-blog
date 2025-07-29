import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about.js';
import Contact from './pages/Contact.js';
import Navbar from './components/Navbar.jsx';

function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<About /> }/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;   
