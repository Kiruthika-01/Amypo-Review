// AboutUs.js
import React from 'react';
import { Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const TeamMember = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const AboutUs = () => {
  return (
    <StyledContainer maxWidth="lg">
      <Typography variant="h3" gutterBottom align="center" style={{ fontFamily: 'monospace', fontSize: '6vh', color: 'mediumvioletred' }}>
        About Us
      </Typography>
      <Typography variant="h6" gutterBottom align="center" style={{ fontFamily: 'monospace', color: 'black' }}>
        Welcome to Kiruthi botique, where fashion meets elegance. We are dedicated to bringing you the latest trends in the fashion world, ensuring you always look your best.
      </Typography>
      <Typography variant="body1" paragraph style={{ fontFamily: 'monospace', color: 'black' }}>
        At Kiruthi botique, we believe in the power of style and its ability to transform. Our curated collection features a range of dresses, accessories, and more, all carefully selected to provide you with the best quality and style. Our journey began with a passion for fashion and a commitment to provide exceptional customer service. We take pride in our unique designs and attention to detail, ensuring each piece you find here is a work of art.
      </Typography>
      <Typography variant="h4" gutterBottom align="center" style={{ fontFamily: 'monospace', fontSize: '4vh', color: 'mediumvioletred', marginTop: '40px' }}>
        Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <TeamMember>
            <Avatar alt="Founder" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmyCqy4cIe7GHLI0d3sSd6UkNi40hlv2u_1w&s" style={{ width: 120, height: 120, margin: '0 auto' }} />
            <Typography variant="h6" style={{ marginTop: '10px', fontFamily: 'monospace', color:'mediumvioletred' }}>Jane Doe</Typography>
            <Typography variant="body1" style={{ fontFamily: 'monospace' }}>Founder & CEO</Typography>
            <Typography variant="body2" paragraph style={{ fontFamily: 'monospace', color: 'black' }}>
              Jane has over 20 years of experience in the fashion industry. Her vision and leadership drive the success of our botique.
            </Typography>
          </TeamMember>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamMember>
            <Avatar alt="Designer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22H-et3cLZZfMf8uFawJt_8y3nZ-Y1u2wWg&s" style={{ width: 120, height: 120, margin: '0 auto' }} />
            <Typography variant="h6" style={{ marginTop: '10px', fontFamily: 'monospace',color:'mediumvioletred' }}>Dhikeesh</Typography>
            <Typography variant="body1" style={{ fontFamily: 'monospace' }}>Head Designer</Typography>
            <Typography variant="body2" paragraph style={{ fontFamily: 'monospace', color: 'black' }}>
              John is the creative force behind our stunning designs. His unique style and eye for detail ensure our collection stands out.
            </Typography>
          </TeamMember>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamMember>
            <Avatar alt="Marketing" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNo2N_JJycCNmkFVJPVNdTZcx5QSVpQvir2QpzMzxN80U3QOO1FbWwpsz-Axd8VW7ADTY&usqp=CAU" style={{ width: 120, height: 120, margin: '0 auto' }} />
            <Typography variant="h6" style={{ marginTop: '10px', fontFamily: 'monospace',color:'mediumvioletred' }}>Sakthipriya</Typography>
            <Typography variant="body1" style={{ fontFamily: 'monospace' }}>Marketing Director</Typography>
            <Typography variant="body2" paragraph style={{ fontFamily: 'monospace', color: 'black' }}>
              Emily's expertise in marketing helps us reach our customers and build our brand. Her strategies keep us ahead in the fashion game.
            </Typography>
          </TeamMember>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default AboutUs;
