// src/Footer.js
import React from 'react';
import ReactLogo from '../images/react_icon.svg'
import DjangoRestLogo from '../images/django_rest_icon.svg'

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="powered-by">
        <span>Powered by</span>
        {/* Link to React website */}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img id="react-logo" src={ReactLogo} alt="React Logo" />
        </a>
        {/* Link to Django REST Framework website */}
        <a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer">
          <img id="django-logo" src={DjangoRestLogo} alt="Django REST Framework Logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
