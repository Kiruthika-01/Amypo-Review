// PaymentMethod.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handlePayment = () => {
    if (selectedMethod === 'GPay') {
      navigate('/gpaypage');
    } 
    else if (selectedMethod === 'Cash on Delivery') {
      navigate('/success');}
    else {
      alert(`Payment method selected: ${selectedMethod}`);
      // Handle other payment methods here
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Select Payment Method
      </Typography>
      <Grid container justifyContent="center">
        <FormControl component="fieldset">
          <FormLabel component="legend">Payment Options</FormLabel>
          <RadioGroup
            aria-label="payment-method"
            name="payment-method"
            value={selectedMethod}
            onChange={handleChange}
          >
            <FormControlLabel value="GPay" control={<Radio />} label="GPay" />
            <FormControlLabel value="Cash on Delivery" control={<Radio />} label="Cash on Delivery" />
            <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
            <FormControlLabel value="PhonePe" control={<Radio />} label="PhonePe" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handlePayment}>
          Proceed with {selectedMethod}
        </Button>
      </Grid>
    </Container>
  );
};

export default PaymentMethod;
