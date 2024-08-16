import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/contact', {
        name,
        email,
        message,
      });
      setSuccessMessage('Your message has been sent successfully!');
      setErrorMessage('');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage('Failed to send your message. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="contact-us-page">
      <Typography variant="h4" component="h2" className="contact-us-title" style={{marginRight:'400px',color:'mediumvioletred'}}>Contact Us</Typography>
      <div className="contact-us-container">
        <div className="contact-us-form-container">
          <form onSubmit={handleSubmit} className="contact-us-form">
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="form-group">
              <TextField
                className="custom-textfield"
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <TextField
                className="custom-textfield"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <TextField
                className="custom-textfield"
                label="Message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={4}
                required
              />
            </div>
            <div className="button-container">
              <Button type="submit" variant="contained" color="primary" style={{backgroundColor:'mediumvioletred'}}>
                Send Message
              </Button>
            </div>
          </form>
        </div>
        <div className="contact-us-info">
          <Typography variant="h6" component="h3" style={{backgroundColor:'mediumvioletred'}}>Contact Information</Typography>
          <p><strong>Email:<br/></strong> kiruthikauthayakumar25@gmail.com<br/>+918079447451</p>
          <p><strong>Location:<br/></strong> 77/A Hill Road
          Next to McDonald’s, Bandra West,
          Mumbai – 400050, Maharashtra</p>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.555839107401!2d72.83427751490396!3d19.056076487101983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c957d7c1e1a1%3A0x2c8bfb3e8888e365!2sHill%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1691376605739!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
