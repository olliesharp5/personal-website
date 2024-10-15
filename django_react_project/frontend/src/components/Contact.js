import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { successToast, errorToast } from '../toastConfig'; // Import the toast functions

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    axios.post('http://127.0.0.1:8000/contacts/', formData)
      .then(response => {
        successToast(formData.email); // Pass the email to the success toast
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      })
      .catch(error => {
        errorToast(); // No need to pass anything for the error toast
        setIsSubmitting(false);
      });
  };

  return (
    <div className="content">
      <h2>Contact me!</h2>
      <h4>Interested in working together or have questions? Feel free to reach out via the form below. I'm open to new opportunities and collaborations, and I'd love to hear from you.</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <span className="spinner"></span> : "Send"}
        </button>
      </form>
      {/* Toast notification container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
