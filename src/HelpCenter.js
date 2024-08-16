import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './HelpCenter.css';

const HelpCenter = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to backend or show a success message
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Container className="help-center" maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom className="help-center-header" style={{fontFamily:'cursive'}}>
        Help Center
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom style={{color:'mediumvioletred'}}>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How can I track my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Once your order is shipped, you will receive an email with tracking information. You can also track your order from your account page.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is your return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a 30-day return policy on all items. Please ensure the items are in original condition and packaging when returning.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Do you offer international shipping?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer international shipping to select countries. Shipping costs and times will vary based on your location.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box className="help-center-form">
        <Typography variant="h6" component="h2" gutterBottom style={{color:'mediumvioletred'}}>
          Need further assistance? Contact us!
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default HelpCenter;
