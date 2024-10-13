import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AnimatedRoutes = () => {
  const location = useLocation();
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Add animation class whenever location changes
    setAnimationClass('slide-in-top');

    // Reset animation class after the animation duration
    const timeout = setTimeout(() => {
      setAnimationClass('');
    }, 500); // match with the animation duration

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className={`content-container ${animationClass}`}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Render animated routes */}
        <AnimatedRoutes />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
