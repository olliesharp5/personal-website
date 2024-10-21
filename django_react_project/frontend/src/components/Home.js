import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const Home = () => {
  

  return (
    <div className="content-container">
      {/* Parallax Hero Section */}
      <Parallax
        strength={300}
        className={`hero-section`}
      >
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
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
      </Parallax>

      {/* About Me Section */}
      <Parallax
        strength={200}
        className="about-section"
      >
        <div className="about-content">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          >
            <div className="about-text">
              <h2>About Me</h2>
              <p>
                I am a Full Stack Developer with a passion for creating efficient and dynamic applications.
                I thrive in challenging environments and love solving complex problems.
              </p>
            </div>
            <motion.div
              className="about-image"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <img src="./images/placeholder-image.jpg" alt="About Me" />
            </motion.div>
          </motion.div>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
