import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../images/profile-image.png';
import SocialLinks from './SocialLinks';

const HeroSection = ({ scale, y }) => (
  <motion.div className="hero-section">
    <SocialLinks />
    <motion.div className="hero-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.div className="hero-grid" style={{ scale, y }}>
        <div className="hero-text">
          <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
            Oliver Sharp
          </motion.h1>
          <motion.h2 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
            Junior Full Stack Software Developer
          </motion.h2>
        </div>
        <motion.div className="hero-image" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
          <img src={profileImage} alt="Profile" loading="lazy" />
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default HeroSection;
