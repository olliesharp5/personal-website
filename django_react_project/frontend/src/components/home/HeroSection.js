import React from 'react';
import { motion } from 'framer-motion';
import placeholderImage from '../../images/placeholder-image.jpg';
import SocialLinks from './SocialLinks';

const HeroSection = ({ scale, y }) => (
  <motion.div className="hero-section">
    <SocialLinks />
    <motion.div className="hero-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.div className="hero-grid" style={{ scale, y }}>
        <div className="hero-text">
          <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 1 }}>
            Oliver Sharp
          </motion.h1>
          <motion.h2 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            Full Stack Software Developer
          </motion.h2>
        </div>
        <motion.div className="hero-image" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
          <img src={placeholderImage} alt="Profile" />
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default HeroSection;
