import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import UnderConstruction from '../images/under-construction.svg';
import downloadCV from '../utils/downloadCV';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/companies/')
      .then(response => {
        setExperiences(response.data);
      })
      .catch(error => {
        console.error('Error fetching experiences:', error);
      });
  }, []);

  return (
    <div className="content">
      <h1>Experience</h1>

      {/* Animated "Under Construction" SVG and Text */}
      <motion.div
        className="construction-message"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="svg-container">
          <img src={UnderConstruction} alt="Under Construction" className="masked-svg" />
        </div>
        
        <p>
          This page is still under construction! For now, please visit my 
          <a href="https://www.linkedin.com/in/oliver-sharp-3b4219201/" target="_blank" rel="noopener noreferrer"> LinkedIn profile</a> or 
          <a href="#download" onClick={downloadCV}> download my CV</a> to view my work experience.
        </p>
      </motion.div>
    </div>
  );
};

export default Experience;