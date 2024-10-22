import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

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
    initial: direction => ({
      opacity: 0,
      x: direction > 0 ? '100%' : '-100%',
      y: 0, // Ensure vertical position doesn't change
    }),
    animate: {
      opacity: 1,
      x: 0,
      y: 0, // Ensure vertical position doesn't change
    },
    exit: direction => ({
      opacity: 0,
      x: direction > 0 ? '-100%' : '100%',
      y: 0, // Ensure vertical position doesn't change
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="content-container">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          layout
          className="animated-page"
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

export default AnimatedRoutes;
