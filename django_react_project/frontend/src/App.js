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

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

const AnimatedRoutes = ({ navItems }) => {
  const location = useLocation();
  const prevIndexRef = useRef(0); // Track the previous page index using a ref
  const prevPathRef = useRef(location.pathname); // Track the previous path using a ref
  const currentPath = location.pathname;

  // Find the current and target page indices
  const currentIndex = navItems.findIndex(item => item.path === currentPath);

  // Determine the direction of the animation (calculate only when path changes)
  const direction = currentIndex > prevIndexRef.current ? 1 : -1;

  // Update the previous index and path only when the path changes
  useEffect(() => {
    prevIndexRef.current = currentIndex;
    prevPathRef.current = currentPath;
  }, [currentPath]);

  const pageVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction > 0 ? '100%' : '-100%' // Enter from right if moving forward, from left if moving backward
    }),
    animate: { opacity: 1, x: 0 }, // Fully visible at center
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? '-100%' : '100%', // Exit to left if moving forward, right if moving backward
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
          style={{ position: 'absolute', width: '100%' }}
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
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
    { name: "Download CV", path: "/cv", isDownload: true }
  ];

  const [isOpen, setIsOpen] = useState(false); // State to handle burger menu

  const closeMenu = () => setIsOpen(false);

  return (
    <Router>
      <div className="App">
        {/* Custom "Menu" button for small screens */}
        <div className="custom-menu-button" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </div>

        {/* Burger menu for mobile */}
        <Menu
          isOpen={isOpen}
          onStateChange={(state) => setIsOpen(state.isOpen)}
          customBurgerIcon={false}  // Remove default burger icon
        >
          {navItems.map((item) => (
            <Link to={item.path} key={item.name} onClick={closeMenu}>
              {item.name}
            </Link>
          ))}
        </Menu>

        {/* Desktop navbar */}
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
                // Render a button for the CV download
                <a href="/path/to/your/cv.pdf" download="OliverSharp_CV.pdf">
                  <button className="cv-button">Download my CV</button>
                </a>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}
            </motion.li>
            ))}
          </ul>
        </nav>

        {/* Render animated routes with swipe animations */}
        <AnimatedRoutes navItems={navItems} />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
