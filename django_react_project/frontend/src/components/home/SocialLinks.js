import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = memo(() => (
  <motion.div className="hero-icons" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
    <motion.a href="https://github.com/olliesharp5" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <FaGithub size={40} />
    </motion.a>
    <motion.a href="https://www.linkedin.com/in/oliver-sharp-3b4219201/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <FaLinkedin size={40} />
    </motion.a>
  </motion.div>
));

export default SocialLinks;
