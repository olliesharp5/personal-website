import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './contact/ContactForm';

const Contact = () => (
  <div className="content">
    <h2>Contact me!</h2>
    <h4>
      Interested in working together or have questions? Feel free to reach out via the form below.
      I'm open to new opportunities and collaborations, and I'd love to hear from you.
    </h4>
    <ContactForm />
    <ToastContainer />
  </div>
);

export default Contact;
