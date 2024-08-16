import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';
import './RewardsPage.css';

const rewards = [
  {
    id: 1,
    title: '10% Off Next Purchase',
    description: 'Redeem 100 points to get 10% off on your next purchase.',
    points: 100,
  },
  {
    id: 2,
    title: 'Free Shipping',
    description: 'Redeem 200 points for free shipping on your next order.',
    points: 200,
  },
  {
    id: 3,
    title: 'Exclusive Gift',
    description: 'Redeem 300 points to receive an exclusive gift with your next purchase.',
    points: 300,
  },
];

const RewardsPage = () => {
  const [userPoints, setUserPoints] = useState(250); // Example user points

  const handleRedeem = (points) => {
    if (userPoints >= points) {
      setUserPoints(userPoints - points);
      alert('Reward redeemed successfully!');
    } else {
      alert('Insufficient points to redeem this reward.');
    }
  };

  return (
    <Container className="rewards-page" maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom className="rewards-header" style={{color:'mediumvioletred',fontFamily:'cursive'}}>
        REWARDS
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom style={{color:'gold',fontWeight:'bold',fontFamily:'cursive'}}>
        You have {userPoints} points
      </Typography>
      <Grid container spacing={4}>
        {rewards.map((reward) => (
          <Grid item xs={12} sm={6} md={4} key={reward.id}>
            <Card className="reward-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {reward.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {reward.description}
                </Typography>
                <Typography variant="body1" component="p" className="reward-points">
                  {reward.points} points
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleRedeem(reward.points)}
                  disabled={userPoints < reward.points}
                >
                  Redeem
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RewardsPage;
