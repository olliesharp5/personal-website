import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/contacts/', formData)
      .then(response => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(error => {
        console.error('Error sending message:', error);
        alert('Failed to send the message.');
      });
  };

  return (
    <div className="content">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;