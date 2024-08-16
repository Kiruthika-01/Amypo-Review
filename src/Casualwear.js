import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Casualwear.css';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { casualWearItems } from './casualWearData';

const Casualwear = () => {
  const [filteredItems, setFilteredItems] = useState(casualWearItems);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/casualwear/${id}`);
  };

  const handleCategoryClick = (category) => {
    const filtered = casualWearItems.filter(item =>
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
    <div className="casualwear-page">
      <h1 className="casualwear-title">CASUAL WEAR</h1>
      <div className="casual-content">
        <div className="casual-sidebar">
          <div className="casual-sidebar-header">
            <h2>Filter By</h2>
            <TuneIcon className="tune-icon" />
          </div>
          <ul>
            <li><a href="#" onClick={() => handleCategoryClick('kurtis')}>Kurtis</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('kurtapant')}>Kurtapant</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('gown')}>Gown</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('frocks')}>Frocks</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('kaftan')}>Kaftan</a></li>
          </ul>
        </div>
        <div className="casual-items">
          {filteredItems.map(item => (
            <div className="casual-item" key={item.id}>
              <img
                src={item.image}
                alt={`Casual Wear Item ${item.id}`}
                className="casual-image"
                onClick={() => handleItemClick(item.id)}
              />
              <div className="wishlist-icon" onClick={() => handleWishlistClick(item)}>
                {wishlist.includes(item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </div>
              <div className="casual-info">
                <div className="casual-price">${item.price}</div>
                <div className="casual-description">
                  <p className="pse">
                    Casual wear is versatile and can be worn for a variety of occasions, from running errands to informal gatherings with friends.
                  </p>
                </div>
                <div className="casual-rating">
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
                <button className="quick-add-button" onClick={() => handleItemClick(item.id)}>
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

export default Casualwear;
