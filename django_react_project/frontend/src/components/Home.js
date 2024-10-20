import React from 'react';
import { motion } from 'framer-motion';

const Home = () => (
  <motion.div 
    className="hero-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.div 
      className="hero-content"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        Oliver Sharp
      </motion.h1>
      
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Full Stack Software Developer
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        Welcome to my personal website! I'm Oliver Sharp, a Junior Full Stack Software Developer with a passion for creating impactful digital solutions.
      </motion.p>
    </motion.div>
  </motion.div>
);

export default Home;
