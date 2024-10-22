import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import placeholderImage from '../images/placeholder-image.jpg';

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
      <div className="about-section">
        <div className="about-grid">
          {/* Parallax Image */}
          <Parallax
            strength={500}
            className="about-image-parallax"
            renderLayer={(percentage) => {
              const scale = 0.8 + percentage * 0.3;
              return (
                <div
                  className="about-image"
                  style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 0.1s ease-out',
                  }}
                >
                  <img src={placeholderImage} alt="About Me" />
                </div>
              );
            }}
          />

          {/* About Text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}
          >
            <p>
              Greetings! I'm a 27-year-old British national currently residing in Stockholm, Sweden. As a social and outgoing individual with a passion for coding and design, I've gained extensive experience working with clients through my roles in the NHS and the fintech sector. I thrive in challenging environments and am dedicated to delivering innovative, out-of-the-box solutions. Always eager to learn, I'm continuously seeking opportunities to deepen my knowledge and broaden my skill set. Currently, I'm looking to kickstart my career in software development and am open to new opportunities. Feel free to explore my Projects page to view my portfolio, and visit the Skills and Experience pages to learn more about my background. If you'd like to learn more about me or discuss what I'm working on, please connect with me on LinkedIn or use the contact form on this site!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;