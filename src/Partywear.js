import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Partywear.css';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import Rating from '@mui/material/Rating';
import { partyWearItems } from './partyWearData';

const Partywear = () => {
  const [filteredItems, setFilteredItems] = useState(partyWearItems);
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/partywear/${id}`);
  };

  const handleCategoryClick = (category) => {
    const filtered = partyWearItems.filter(item =>
      item.category ? item.category.toLowerCase() === category.toLowerCase() : false
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="partywear-page">
      <h1 className="partywear-title">Party Wear</h1>
      <div className="party-content">
        <div className="party-sidebar">
          <div className="party-sidebar-header">
            <h2>Filter By</h2>
            <TuneIcon className="tune-icon" />
          </div>
          <ul>
            <li><a href="#" onClick={() => handleCategoryClick('anarkali')}>Anarkali</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('lehenga')}>Lehenga</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('gown')}>Gown</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('designer saree')}>Designer Saree</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('full sets')}>Full Sets</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('indowestern')}>Indowestern</a></li>
          </ul>
        </div>
        <div className="party-items">
          {filteredItems.map(item => (
            <div className="party-item" key={item.id}>
              <img
                src={item.image}
                alt={`Party Wear Item ${item.id}`}
                className="party-image"
                onClick={() => handleItemClick(item.id)}
              />
              <div className="party-info">
                <div className="party-price">{item.price}</div>
                <div className="party-description">
                  <p class="pdescr">
                  Party wear is versatile and can be worn for a variety of occasions, from running errands to informal gatherings with friends.
                  </p>
                </div>
                <div className="party-rating">
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

export default Partywear;
