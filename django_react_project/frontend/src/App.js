import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { slide as Menu } from 'react-burger-menu';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

// Handles the download CV link
const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/path/to/your/cv.pdf';  // Replace with actual path to your CV
  link.download = 'OliverSharp_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Animation for nav links
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

// Animated routes logic
const AnimatedRoutes = ({ navItems }) => {
  const location = useLocation();
  const prevIndexRef = useRef(0);
  const prevPathRef = useRef(location.pathname);
  const currentPath = location.pathname;

  const currentIndex = navItems.findIndex(item => item.path === currentPath);
  const direction = currentIndex > prevIndexRef.current ? 1 : -1;

  useEffect(() => {
    prevIndexRef.current = currentIndex;
    prevPathRef.current = currentPath;
  }, [currentPath]);

  const pageVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? '100%' : '-100%'
    }),
    animate: { opacity: 1, x: 0 },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? '-100%' : '100%',
      transition: { duration: 0.5 }
    })
  };

  return (
    <div className="content-container" style={{ position: 'relative' }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={location.pathname}
          custom={direction}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: '100%' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
    { name: "Download CV", path: "/cv", isDownload: true }
  ];

  return (
    <Router>
      <div className="App">
        {/* Burger menu for smaller devices */}
        <Menu
          isOpen={menuOpen}
          onStateChange={(state) => setMenuOpen(state.isOpen)}
          width={'250px'}
        >
          {navItems.map((item, index) => (
            item.isDownload ? (
              <button className="bm-item cv-button-min" onClick={downloadCV} key={item.name}>
                {item.name}
              </button>
            ) : (
              <Link to={item.path} key={index} onClick={closeMenu} className="bm-item">
                {item.name}
              </Link>
            )
          ))}
        </Menu>

        {/* Desktop navbar with your regular styles */}
        <nav className="desktop-nav">
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial="hidden"
                animate="visible"
                custom={index}
                variants={navVariants}
              >
                {item.isDownload ? (
                  <button className="cv-button" onClick={downloadCV}>Download my CV</button>
                ) : (
                  <Link to={item.path}>{item.name}</Link>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Render animated routes */}
        <AnimatedRoutes navItems={navItems} />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
