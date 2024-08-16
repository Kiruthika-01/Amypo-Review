import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [open, setOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const dressGalleryRef = useRef(null);
  const navigate = useNavigate();

  const images = [
    'https://file.theethnicworld.com/image/1200/Wine%20Colour%20Latest%20Fancy%20Designer%20Festive%20Wear%20Real%20Georgette%20Heavy%20Worked%20Salwar%20Suit%20Collection%207216-B.jpg',
    'https://rukminim2.flixcart.com/image/850/1000/kyxb9u80/sari/m/r/w/free-soft-heavy-quality-net-all-over-saree-multiple-jari-original-imagbfuky7ckkgea.jpeg?q=90&crop=false',
    'https://sourceitright.com/cdn/shop/articles/Untitled_design_800x.jpg?v=1659954468',
    'https://wallpapercave.com/wp/wp7729905.jpg',
    'https://i.ytimg.com/vi/1tmeJQNa4Gg/oar2.jpg',
    'https://assets0.mirraw.com/images/11382991/IMG-20220706-WA0199_zoom.jpg?1680674242',
    'https://www.bullionknot.com/cdn/shop/files/min_3_d3c49fc2-a3b8-4af9-80b4-12f4424b181b.jpg?v=1702879342',
    'https://kasthuribaicompany.com/wp-content/uploads/2021/03/kurtis.png',
    'https://5.imimg.com/data5/SELLER/Default/2022/1/BH/YG/OT/21804803/s4u-tropical-kaftan-vol-2-new-design-collection-of-kaftans-4-2022-01-24-14-37-55.jpeg',
    'https://varanga.in/cdn/shop/files/DSC_5206copy.jpg?v=1707216798',
    'https://getethnic.com/wp-content/uploads/2020/05/South-Indian-Wedding-Saree-7.jpeg',
    'https://ik.imagekit.io/ldqsn9vvwgg/AlternateView/1701798/A637507935323202070.jpg'
  ];

  const price=[
    '₹2000'
  ]

  const offerImages = [
    'https://images.meesho.com/images/products/396511693/vt6ic_512.webp',
    'https://www.jessleaboutique.com/cdn/shop/products/summer-fun-retro-dress-736141.jpg?v=1654034732',
    'https://5.imimg.com/data5/SELLER/Default/2022/12/LI/HU/VE/29603120/this-oversize-kaftan-dress-is-the-best-choice-for-the-summer-500x500.jpeg',
    'https://assets.ajio.com/medias/sys_master/root/20230624/nCDj/64964fbdeebac147fcef4729/-473Wx593H-465288091-green-MODEL.jpg',
    'https://i.pinimg.com/736x/00/68/df/0068df40c07620f3bdff921369583acf.jpg',
    'https://www.joshindia.com/cdn/shop/products/WhatsAppImage2023-01-31at6.24.48PM.jpg?v=1675249312'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8080/signup', {
        email,
        password,
      });
      console.log('Signup successful:', response.data);
      setOpen(false);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleScrollToGallery = () => {
    dressGalleryRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBuyNow = () => {
    navigate('/payment-details');
  };

  return (
    <div className="homepage">
      <div className="homepage-upper-section">
        <div className="slideshow">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <header className="homepage-header">
          <h1>REVERIE</h1>
          <p>A sartorial splendour</p>
          <button className="homepage-button" onClick={handleScrollToGallery}>SHOP HERE</button>
        </header>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <div className='signup-container'>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-clothing-store-casual-fashion-mens-photography-photos-with-pictures-image_796891.jpg"
              alt="Sign In"
              className="signup-image"
            />
            <div className='signup-form'>
              <DialogContentText>
                <h1>To be an insider...</h1>
                <p>Find your comfort here!!...</p>
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignup}>REGISTER</Button>
        </DialogActions>
      </Dialog>
      <div className="dress-gallery" ref={dressGalleryRef}>
        <h2 className="ourcollection"style={{color:'mediumvioletred'}}>Our Collection</h2>
        <div className="dress-images">
          {images.map((image, index) => (
            <div key={index} className="dress-item">
              <img src={image} alt={`Dress ${index + 1}`} />
              {price.map((price,index)=>(<p key={index}>{price}</p>))}
              <Button 
                variant="contained" 
                sx={{backgroundColor:'mediumvioletred'}}
                className="buy-now-button" 
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="offer-gallery">
        <h2 className='offersale' style={{ backgroundColor: 'mediumvioletred', fontSize: '50px', color: 'gold', fontFamily: 'cursive', width: '100%', textAlign: 'center', marginLeft: '0%' }}>
        <img
            src="https://cdn-icons-png.flaticon.com/512/7653/7653930.png"
            alt="Offer Icon"
            className="offer-icon"
            style={{ marginRight: '10px', height: '25%', verticalAlign: 'middle',width:'25%' }}
          />
          Offer Sale
          <img
            src="https://c8.alamy.com/comp/M9GW7R/discount-tag-with-special-offer-sale-sticker-M9GW7R.jpg"
            alt="Special Offer"
            className="offer-image"
            style={{ marginLeft: '10px', height: '350px', verticalAlign: 'middle' }}
          />
        </h2>
        <div className="offer-images">
          {offerImages.map((image, index) => (
            <div key={index} className="offer-item">
              <img src={image} alt={`Offer ${index + 1}`} />
              {price.map((price,index)=>(<p key={index}>{price}</p>))}
              <Button 
                variant="contained" 
                sx={{backgroundColor:'mediumvioletred'}}
                className="buy-now-button" 
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=918072301405"
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon style={{ fontSize: 70 }} />
      </a>
    </div>
  );
};

export default Home;
