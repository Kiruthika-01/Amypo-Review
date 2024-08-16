import React from 'react';
import './Footer.css';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom className='footer-heading'style={{fontFamily:'cursive',color:'mediumvioletred'}}>
              SUPPORT
            </Typography>
            <Typography variant="body2" className='footer-link'>
              <Link href="/contactus" color="inherit">Contact Us</Link>
            </Typography>
            <Typography variant="body2" className='footer-link'>
              <Link href="/faq" color="inherit">FAQ</Link>
            </Typography>
            <Typography variant="body2" className='footer-link'>
              <Link href="/helpcenter" color="inherit">HelpCenter</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom className='footer-heading'style={{fontFamily:'cursive',color:'mediumvioletred'}}>
             QUICK LINKS
            </Typography>
            <Typography variant="body2">
              <Link href="/rewards" color="inherit">Rewards</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/mywishlist" color="inherit">Mywishlist</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/giftpage" color="inherit">Gifts</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom className='footer-heading'style={{fontFamily:'cursive',color:'mediumvioletred'}}>
              LEARN
            </Typography>
            <Typography variant="body2" className='footer-link'>
              <Link href="/about" color="inherit">About Us</Link>
            </Typography>
            <Typography variant="body2" className='footer-link'>
              <Link href="/blog" color="inherit">Blog</Link>
            </Typography>
            <Typography variant="body2" className='footer-link'>
              <Link href="/reviewpage" color="inherit">Reviews</Link>
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body1" className='footer-last'>
            Your Company &copy; {new Date().getFullYear()}
          </Typography>
         
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
