import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import placeholderImage from '../images/placeholder-image.jpg';

const Home = () => {
  // Hero Section Scroll Animations
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 700], [1, 0.8]);
  const y = useTransform(scrollY, [0, 700], [0, -50]);

  // About Section Reference and Scroll Animations
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutScale = useTransform(aboutScrollYProgress, [0, 1], [0.6, 1.2]);

  return (
    <div className="content-container">
      {/* Hero Section */}
      <motion.div className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Apply scaling and vertical movement to the hero grid */}
          <motion.div
            className="hero-grid"
            style={{ scale, y }}
          >
            {/* Left Side: Name and Job Title */}
            <div className="hero-text">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                Oliver Sharp
              </motion.h1>

              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Full Stack Software Developer
              </motion.h2>
            </div>

            {/* Right Side: Profile Image */}
            <motion.div
              className="hero-image"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <img src={placeholderImage} alt="Profile" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* About Me Section */}
      <div className="about-section">
        <div className="about-grid" ref={aboutRef}>
          {/* About Image */}
          <motion.div
            className="about-image-container"
            style={{ scale: aboutScale }}
          >
            <img src={placeholderImage} alt="About Me" />
          </motion.div>

          {/* About Text */}
          <motion.div
            className="about-text"
            style={{ scale: aboutScale }}
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