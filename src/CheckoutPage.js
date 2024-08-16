import React from 'react';
import { Container, Grid, TextField, Typography, Button, Box } from '@mui/material';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const handleConfirmOrder = () => {
    // Add logic to handle order confirmation
    alert("Order Confirmed!");
  };

  return (
    <Container maxWidth="md" className="checkout-page">
      <Typography variant="h4" component="h1" gutterBottom className="checkout-header">
        Checkout
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom className="section-header">
            Billing Information
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="State"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Postal Code"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Country"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom className="section-header">
            Order Summary
          </Typography>
          <Box className="order-summary">
            <Typography variant="body1">Item 1: $50.00</Typography>
            <Typography variant="body1">Item 2: $30.00</Typography>
            <Typography variant="body1">Item 3: $20.00</Typography>
            <Typography variant="h6" className="total-amount">
              Total: $100.00
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleConfirmOrder}
            className="confirm-order-button"
          >
            Confirm Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
