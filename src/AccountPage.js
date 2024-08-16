import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box, List, ListItem, ListItemText } from '@mui/material';
import './AccountPage.css';

const AccountPage = () => {
  const handleUpdateInfo = () => {
   
    alert("User information updated!");
  };

  const handleAddAddress = () => {
    
    alert("New address added!");
  };

  const orderHistory = [
    { id: 1, date: '2024-07-01', total: 'Rs.150.00', status: 'Delivered' },
    { id: 2, date: '2024-06-15', total: 'Rs.200.00', status: 'Shipped' },
    { id: 3, date: '2024-05-30', total: 'Rs.75.00', status: 'Processing' },
  ];

  return (
    <Container maxWidth="lg" className="account-page">
      <Typography variant="h4" component="h1" gutterBottom className="account-header">
        My Account
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom className="section-header">
            Personal Information
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
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdateInfo}
              className="update-info-button"
            >
              Update Information
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom className="section-header">
            Address Book
          </Typography>
          <Box component="form" noValidate autoComplete="off" className="address-form">
            <TextField
              label="Address Line 1"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Address Line 2"
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
            <Button
              variant="contained"
              color="secondary"
              onClick={handleAddAddress}
              className="add-address-button"
            >
              Add Address
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom className="section-header">
            Order History
          </Typography>
          <List className="order-history-list">
            {orderHistory.map(order => (
              <ListItem key={order.id}>
                <ListItemText
                  primary={`Order #${order.id} - ${order.date}`}
                  secondary={`Total: ${order.total} - Status: ${order.status}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountPage;
