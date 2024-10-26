import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slide as Menu } from 'react-burger-menu';
import { FaDownload } from 'react-icons/fa';
import downloadCV from '../utils/downloadCV';

const Navbar = ({ navItems, menuOpen, setMenuOpen, closeMenu, navVariants }) => {
  return (
    <>
      {/* Burger menu for smaller devices */}
      <Menu
        isOpen={menuOpen}
        onStateChange={state => setMenuOpen(state.isOpen)}
        width={'250px'}
      >
        {navItems.map((item, index) =>
          item.isDownload ? (
            <button
              className="bm-item cv-button-min"
              onClick={downloadCV}
              key={item.name}
            ><FaDownload />
              {item.name}
            </button>
          ) : (
            <Link
              to={item.path}
              key={index}
              onClick={closeMenu}
              className="bm-item"
            >
              {item.name}
            </Link>
          ),
        )}
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
                <button className="coloured-button cv-button" onClick={downloadCV}>
                  <FaDownload /> {item.name}
                </button>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
