import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './contact/ContactForm';

const Contact = () => (
  <>
  <div className="content">
    <h1>Contact me!</h1>
    <h4>
      Interested in working together or have questions? Contact me on LinkedIn or fill out this form to send me a direct email.
    </h4>
    <h4>
      I'm open to new opportunities and collaborations, and I'd love to hear from you.
    </h4>
    <ContactForm />
    <ToastContainer />
  </div>
  </>
);

export default Contact;
