import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import './style.css';

// Lazy load the Footer component
const Footer = React.lazy(() => import('./components/Footer'));

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
    { name: 'Download CV', path: '/cv', isDownload: true },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar
          navItems={navItems}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          closeMenu={closeMenu}
        />
        <AnimatedRoutes navItems={navItems} />
        
        {/* Lazy load the Footer */}
        <Suspense fallback={<div>Loading footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;