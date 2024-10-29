import React from 'react';
import { motion } from 'framer-motion';
import ReactLogo from '../images/react_icon.svg';
import DjangoRestLogo from '../images/django_rest_icon.svg';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 1 } }
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <motion.div className="powered-by" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}>
        <span>Powered by</span>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <motion.img id="react-logo" src={ReactLogo} alt="React Logo" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2 } }} />
        </a>
        <a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer">
          <motion.img id="django-logo" src={DjangoRestLogo} alt="Django REST Framework Logo" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.5 } }} />
        </a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
