import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TraditionalWear.css';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { traditionalWearItems } from './traditionalWearData';

const Traditionalwear = () => {
  const [filteredItems, setFilteredItems] = useState(traditionalWearItems);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/traditionalwear/${id}`);
  };

  const handleCategoryClick = (category) => {
    const filtered = traditionalWearItems.filter(item =>
      item.category ? item.category.toLowerCase() === category.toLowerCase() : false
    );
    setFilteredItems(filtered);
  };

  const handleWishlistClick = (item) => {
    if (wishlist.includes(item)) {
      setWishlist(wishlist.filter(i => i.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  return (
    <div className="traditionalwear-page">
      <h1 className="traditionalwear-title">TRADITIONAL WEAR</h1>
      <div className="traditional-content">
        <div className="traditional-sidebar">
          <div className="traditinal-sidebar-header">
            <h2>Filter By</h2>
            <TuneIcon className="tune-icon" />
          </div>
          <ul>
            <li><a href="#" onClick={() => handleCategoryClick('keralasaree')}>Kerala Saree</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('indiansaree')}>Indian Saree</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('halfsaree')}>Half Saree</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('lehenga')}>Lehenga</a></li>
           
          </ul>
        </div>
        <div className="traditional-items">
          {filteredItems.map(item => (
            <div className="traditional-item" key={item.id}>
              <img
                src={item.image}
                alt={`Traditional Wear Item ${item.id}`}
                className="traditional-image"
                onClick={() => handleItemClick(item.id)}
              />
              <div className="wishlist-icon" onClick={() => handleWishlistClick(item)}>
                {wishlist.includes(item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </div>
              <div className="traditional-info">
                <div className="traditional-price">${item.price}</div>
                <div className="traditional-description">
                  <p className="tse">
                    Casual wear is versatile and can be worn for a variety of occasions, from running errands to informal gatherings with friends.
                  </p>
                </div>
                <div className="traditional-rating">
                  <Rating
                    name={`rating-${item.id}`}
                    value={item.rating || 0}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="offer-badge">50% Off</div>
                <button className="freedom-sale-button" onClick={() => handleItemClick(item.id)}>
                  Great Freedom Sale
                </button>
                <button className="traditionalquick-add-button" onClick={() => handleItemClick(item.id)}>
                  <AddIcon /> Quick Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Traditionalwear;
