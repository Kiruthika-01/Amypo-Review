import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Face3Icon from '@mui/icons-material/Face3'; // Import the Face3Icon
import './SecondNavbar.css';
const SecondNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { cartCount } = useCart(); 

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className='secondnavbar'>
      <div className='nav-links'>
        <Link to="/">Home</Link>
        <div className='dropdown' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <span>Shop</span>
          <span className='dropdown-icon'>▼</span>
          {dropdownOpen && (
            <div className='dropdown-content'>
              <Link to="/partywear">Party Wear</Link>
              <Link to="/casualwear">Casual Wear</Link>
              <Link to="/summerwear">Summer Wear</Link>
              <Link to="/traditionalwear">Traditional Wear</Link>
            </div>
          )}
        </div>
        <Link to="/ourcollection">Our Collection</Link>
        {/* <Link to="/checkoutpage">CheckoutPage</Link> */}
        <Link to="/contactus">Contact Us</Link>
      </div>
      {/* <h6>FASHION EXTENSION</h6> */}
      <div className='nav-icons'>
        <Link to="/facebook">
          <FacebookIcon className='facebook-icon' />
        </Link>
        <Link to="/instagram">
          <InstagramIcon className='instagram-icon' />
        </Link>
        <Link to="/cart"> 
          <div className='cart-icon'>
            <ShoppingBagOutlinedIcon className='shoppingbag-icon' />
            {cartCount > 0 && (
              <span className='cart-count'>{cartCount}</span>
            )}
          </div>
        </Link>
        <Link to="/login">
          <AccountCircleIcon className='account-icon' />
        </Link>
        <Link to="/accountuser"> {/* Link to account user page */}
          <Face3Icon className='face3-icon' /> {/* Face3Icon */}
        </Link>
      </div>
    </nav>
  );
};

export default SecondNavbar;
