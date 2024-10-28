import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import placeholderImage from '../../images/placeholder-image.jpg';

const AboutSection = ({ scale }) => {
  const aboutRef = useRef(null);

  return (
    <div className="about-section" ref={aboutRef}>
      <motion.h3
                className="category-title"
              > 
              About Me! 
              </motion.h3>
      <div className="about-grid">
        <motion.div className="about-image-container" style={{ scale }}>
          <img src={placeholderImage} alt="About Me" />
        </motion.div>
        <motion.div className="about-text" style={{ scale }}>
          <p>
            Hello, and welcome! I’m a 27-year-old British developer and designer based in Stockholm, Sweden. With a background in the NHS and fintech, I’m passionate about creating innovative, impactful projects at the intersection of code and design. As I transition into software development, I'm excited to bring my skills to new challenges and collaborations.
          </p>
          <p>
            Check out my Projects page for my portfolio, and explore the Skills and Experience pages to learn more about my background. For inquiries or connections, reach out via LinkedIn or the contact form. Looking forward to connecting!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
