import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid, Box } from '@mui/material';
import './MyWishList.css';

const initialWishlist = [
  {
    id: 1,
    title: 'Elegant Evening Gown',
    image: 'https://i.pinimg.com/736x/28/64/b9/2864b905f53a6989d51ab08d2b23a469.jpg',
    price: 'Rs.6000',
  },
  {
    id: 2,
    title: 'Stylish Dress',
    image: 'https://5.imimg.com/data5/ECOM/Default/2022/12/CP/RQ/DL/91262661/0254b13f-e385-4627-88be-b42a4a17b959-500x500.jpg',
    price: 'Rs.580',
  },
  {
    id: 3,
    image: 'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/001/385/520/new_medium/aastha_narang_6.jpg?1579093149',
    title: 'Wedding Indo Western',
    price: 'Rs.1150',
  },
];

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleRemove = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const handlePurchase = (id) => {
    // Navigate to purchase page or handle purchase logic
    alert('Proceeding to purchase!');
  };

  return (
    <Container className="wishlist-page" maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom className="wishlist-header">
        My Wishlist
      </Typography>
      {wishlist.length > 0 ? (
        <Grid container spacing={4}>
          {wishlist.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card className="wishlist-card">
                <CardContent>
                  <Box className="wishlist-image-container">
                    <img src={item.image} alt={item.title} className="wishlist-image" />
                  </Box>
                  <Typography variant="h6" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" component="p" className="wishlist-price">
                    {item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handlePurchase(item.id)}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" component="p" className="wishlist-empty">
          Your wishlist is empty. Start adding your favorite items!
        </Typography>
      )}
    </Container>
  );
};

export default MyWishlist;



