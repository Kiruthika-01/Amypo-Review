import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, TextField, Typography, Button, Paper, Box, FormControlLabel, Checkbox, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
const LogoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

const Logo = styled('img')(({ theme }) => ({
  width: '50px',
  height: 'auto',
}));

const PaymentDetails = () => {
  const [option, setOption] = useState({
    dressOnly: false,
    accessoriesOnly: false,
    dressAndAccessories: false,
  });
  const [showPolicy, setShowPolicy] = useState(false);
  const [returnRequest, setReturnRequest] = useState({
    orderId: '',
    reason: '',
    comments: '',
  });
  const [showReturnForm, setShowReturnForm] = useState(false);
  const navigate = useNavigate();

  const subtotal = 1500;
  const gst = subtotal * 0.05;
  const cgst = subtotal * 0.03;
  const accessoriesTotal = 1000;
  const deliveryCharge = 100; 
  const calculateTotal = () => {
    let total = subtotal + gst + cgst;
    if (option.accessoriesOnly) total += accessoriesTotal;
    if (option.dressAndAccessories) total += accessoriesTotal;
    return total;
  };

  const handleChange = (event) => {
    setOption({
      dressOnly: false,
      accessoriesOnly: false,
      dressAndAccessories: false,
      [event.target.name]: event.target.checked,
    });
  };

  const handleReturnChange = (event) => {
    setReturnRequest({
      ...returnRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleReturnSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/return-request', returnRequest);
      console.log('Return request submitted:', response.data);
      // Handle success or redirection if needed
    } catch (error) {
      console.error('Return request error:', error);
    }
  };

  const total = calculateTotal();

  const handleProceedToPayment = () => {
    navigate('/payment-method');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" style={{marginRight:'250px',color:"mediumvioletred",marginTop:'25px'}}>
        PAYMENT DETAILS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Shipping Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField required label="First Name" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required label="Last Name" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField required label="Address" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required label="City" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required label="State" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required label="Country" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required label="Postal Code" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required label="Phone Number" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required label="Email" fullWidth />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom style={{ backgroundColor: 'mediumvioletred', color: 'black' }}>
              Order Summary
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={option.dressOnly}
                  onChange={handleChange}
                  name="dressOnly"
                />
              }
              label="Dress Only"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={option.accessoriesOnly}
                  onChange={handleChange}
                  name="accessoriesOnly"
                />
              }
              label="Accessories Only"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={option.dressAndAccessories}
                  onChange={handleChange}
                  name="dressAndAccessories"
                />
              }
              label="Dress & Accessories"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showPolicy}
                  onChange={() => setShowPolicy((prev) => !prev)}
                />
              }
              label="Shipping and Refund Policy"
            />
            <Collapse in={showPolicy}>
              <Box mb={2}>
                <Typography variant="body2">
                  Our shipping policy ensures timely delivery of your orders. Refunds are processed within 7-10 business days.
                </Typography>
              </Box>
            </Collapse>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography>Subtotal:</Typography>
              <Typography>${subtotal.toFixed(2)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography>GST (5%):</Typography>
              <Typography>${gst.toFixed(2)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography>CGST (3%):</Typography>
              <Typography>${cgst.toFixed(2)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography>Delivery Charge:</Typography>
              <Typography>${deliveryCharge.toFixed(2)}</Typography>
            </Box>
            {option.accessoriesOnly || option.dressAndAccessories ? (
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography>Accessories Total:</Typography>
                <Typography>${accessoriesTotal.toFixed(2)}</Typography>
              </Box>
            ) : null}
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography>Total:</Typography>
              <Typography>${total.toFixed(2)}</Typography>
            </Box>
          </Paper>
          <LogoContainer>
            <Logo src="https://w7.pngwing.com/pngs/685/61/png-transparent-online-shopping-safety-security-https-others-miscellaneous-emblem-retail.png" alt="Visa Logo" />
            <Logo src="https://w7.pngwing.com/pngs/42/264/png-transparent-delivery-enseeiht-logo-business-timely-delivery-food-text-service-thumbnail.png" alt="MasterCard Logo" />
            <Logo src="https://image.shutterstock.com/image-photo/image-260nw-1134842516.jpg" alt="PayPal Logo" />
          </LogoContainer>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleProceedToPayment} style={{marginRight:'300px'}}>
            Proceed to Payment
          </Button>
        </Grid>
        <Grid item xs={12} style={{ marginTop: '20px' }}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Return Request
            </Typography>
            <Button 
              variant="outlined"
              onClick={() => setShowReturnForm((prev) => !prev)}
              style={{ marginBottom: '10px' }}
            >
              {showReturnForm ? 'Hide Return Form' : 'Show Return Form'}
            </Button>
            {showReturnForm && (
              <div>
                <TextField
                  required
                  label="Order ID"
                  name="orderId"
                  value={returnRequest.orderId}
                  onChange={handleReturnChange}
                  fullWidth
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  required
                  label="Reason for Return"
                  name="reason"
                  value={returnRequest.reason}
                  onChange={handleReturnChange}
                  fullWidth
                  style={{ marginBottom: '10px' }}
                />
                <TextField
                  label="Additional Comments"
                  name="comments"
                  value={returnRequest.comments}
                  onChange={handleReturnChange}
                  fullWidth
                  style={{ marginBottom: '10px' }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleReturnSubmit}
                >
                  Submit Return Request
                </Button>
              </div>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaymentDetails;
