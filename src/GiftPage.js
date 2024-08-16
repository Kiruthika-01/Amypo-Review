import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Grid, Box } from '@mui/material';
import './GiftPage.css';

const giftIconUrl = 'https://static.vecteezy.com/system/resources/previews/009/596/501/original/3d-illustration-of-gift-icon-png.png';

const giftImages = [
  'https://rukminim2.flixcart.com/image/850/1000/l3khsi80/makeup-kit/k/b/c/mini-makeup-kit-for-girls-eye-shadow-lip-gloss-mirror-contour-original-imagenu9gvg48way.jpeg?q=20&crop=false',
  'https://rukminim2.flixcart.com/image/850/1000/k13w4280/mirror/q/v/z/leaf-designed-wall-mirror-for-home-decor-living-room-bedroom-original-imafknvyjvxhefcz.jpeg?q=20&crop=false',
  'https://www.saugatonline.com/products_image/f698df44ead7ceb154fec0bb26ac857d.jpg',
];

const GiftPage = () => {
  const [showGifts, setShowGifts] = useState(false);
  const [galleryClass, setGalleryClass] = useState('');
  const navigate = useNavigate();

  const handleGiftClick = () => {
    setShowGifts(true);
  };

  useEffect(() => {
    if (showGifts) {
      setTimeout(() => {
        setGalleryClass('show');
      }, 500); 
    }
  }, [showGifts]);

  const handleBuyNow = () => {
    navigate('/payment-details');
  };

  return (
    <Container className={`gift-page ${!showGifts ? 'with-background' : ''}`} maxWidth="lg">
      {!showGifts ? (
        <Box className="gift-icon-container" onClick={handleGiftClick}>
          <img src={giftIconUrl} alt="Gift Icon" className="gift-icon" />
        </Box>
      ) : (
        <>
          <Typography variant="h4" component="h1" gutterBottom className="gift-header" style={{color:'gold',fontWeight:'bold',fontFamily:'Brush Script MT'}}>
            GIFT COLLECTION
          </Typography>
          <Typography variant="h6" component="p" gutterBottom className="gift-subheader">
            Find the perfect gift for your loved ones
          </Typography>
          <Grid container spacing={4} className={`gift-gallery ${galleryClass}`}>
            {giftImages.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Box className="gift-item" sx={{display:'flex', flexDirection:'column'}} >
                  <img src={image} alt={`Gift ${index + 1}`} className="gift-image" style={{width:'60%',heigth:'60%'}}/>
                  <Button
                    variant="contained"
                    sx={{backgroundColor:'mediumvioletred',marginTop:'30px',marginLeft:'145px',width:'20%'}}
                    className="buy-now-button"
                    onClick={handleBuyNow}
                    style={{ marginTop: '10px' }}
                  >
                    Redeem
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default GiftPage;
