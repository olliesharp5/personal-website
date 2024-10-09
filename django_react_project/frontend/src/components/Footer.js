// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
    left: '0',
    bottom: '0',
    width: '100%',
  },
};

export default Footer;
