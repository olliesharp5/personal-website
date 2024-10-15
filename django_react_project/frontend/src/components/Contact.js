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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format check
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

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
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject} 
            onChange={handleChange} 
          />
          {errors.subject && <div className="error-message">{errors.subject}</div>}
        </div>
        <div className="form-group">
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
          />
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <span className="spinner"></span> : "Send"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
