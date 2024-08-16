import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box, Rating } from '@mui/material';
import './ReviewPage.css';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    { name: 'Alice', rating: 5, comment: 'Amazing collection! I love the quality.' },
    { name: 'Bob', rating: 4, comment: 'Great customer service and fast delivery.' },
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = (e, newRating) => {
    setNewReview({ ...newReview, rating: newRating });
  };

  const handleSubmit = () => {
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', rating: 0, comment: '' });
    }
  };

  return (
    <Container className="review-page" maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom className="review-header"style={{fontFamily:'Brush Script MT'}}>
        Customer Reviews
      </Typography>
      <Grid container spacing={4}>
        {reviews.map((review, index) => (
          <Grid item xs={12} key={index}>
            <Box className="review-card">
              <Typography variant="h6" className="review-name">{review.name}</Typography>
              <Rating value={review.rating} readOnly />
              <Typography variant="body1" className="review-comment">{review.comment}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box className="review-form">
        <Typography variant="h5" component="h2" gutterBottom style={{color:'mediumvioletred',fontFamily:'Brush Script MT'}}>
          Write a Review
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={newReview.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Rating
          name="rating"
          value={newReview.rating}
          onChange={handleRatingChange}
          precision={0.5}
        />
        <TextField
          label="Comment"
          name="comment"
          value={newReview.comment}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Review
        </Button>
      </Box>
    </Container>
  );
};

export default ReviewPage;
