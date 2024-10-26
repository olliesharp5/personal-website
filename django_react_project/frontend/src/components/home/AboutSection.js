import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import placeholderImage from '../../images/placeholder-image.jpg';

const AboutSection = ({ scale }) => {
  const aboutRef = useRef(null);

  return (
    <div className="about-section" ref={aboutRef}>
      <div className="about-grid">
        <motion.div className="about-image-container" style={{ scale }}>
          <img src={placeholderImage} alt="About Me" />
        </motion.div>
        <motion.div className="about-text" style={{ scale }}>
          <p>
          Greetings! I'm a 27-year-old British national currently residing in Stockholm, Sweden. As a social and outgoing individual with a passion for coding and design, I've gained extensive experience working with clients through my roles in the NHS and the fintech sector. I thrive in challenging environments and am dedicated to delivering innovative, out-of-the-box solutions. Always eager to learn, I'm continuously seeking opportunities to deepen my knowledge and broaden my skill set. Currently, I'm looking to kickstart my career in software development and am open to new opportunities. Feel free to explore my Projects page to view my portfolio, and visit the Skills and Experience pages to learn more about my background. If you'd like to learn more about me or discuss what I'm working on, please connect with me on LinkedIn or use the contact form on this site!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
