import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import './SuccessPage.css';

const SuccessPage = () => {
  useEffect(() => {
    const confetti = () => {
      // Confetti effect logic (for simplicity, this example uses CSS animation)
    };
    confetti();
  }, []);

  return (
    <Container className="success-page">
      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '100px' }}>
        Your order has been placed successfully!
      </Typography>
      <div className="confetti">
        <div className="piece1"></div>
        <div className="piece2"></div>
        <div className="piece3"></div>
        <div className="piece4"></div>
        <div className="piece5"></div>
        <div className="piece6"></div>
        <div className="piece7"></div>
        <div className="piece8"></div>
        <div className="piece9"></div>
        <div className="piece10"></div>
      </div>
    </Container>
  );
};

export default SuccessPage;
