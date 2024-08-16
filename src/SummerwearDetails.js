import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; 
import { summerWearItems } from './summerWearData'; 
import './SummerwearDetails.css';

const SummerwearDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = summerWearItems.find(item => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart(); 
  const [stock, setStock] = useState(item ? item.stock : 0);
  const [selectedSize, setSelectedSize] = useState(item ? item.sizes[0] : '');
  const [selectedColor, setSelectedColor] = useState(item ? item.colors[0].name : '');

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleIncreaseQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    navigate('/payment-details', { state: { item, quantity } });
  };

  const handleAddToCart = () => {
    if (quantity <= stock) {
      addToCart(item, quantity);
      setStock(stock - quantity); 
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmitRating = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="summerwear-details-page">
      <div className="summerwear-details-content">
        <img src={item.image} alt={`Summer Wear Item ${item.id}`} className="summerwear-details-image" style={{marginLeft:'500px'}}/>
        <div className="summerwear-details-info">
          <div className="summerwear-details-price">{item.price}</div>
          <div className="summerwear-details-stock">IN STOCK: {stock}</div> 
          <div className="summerwear-details-sizes">
            <strong>Sizes:</strong> 
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            {item.sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="summerwear-details-colors">
            <strong>Colors:</strong>
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
              {item.colors.map(color => (
                <option key={color.hex} value={color.name}>{color.name}</option>
              ))}
            </select>
          </div>
          <div className="quantity-selector">
            <label>Quantity:</label>
            <button onClick={handleDecreaseQuantity}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={handleIncreaseQuantity}>+</button>
          </div>
          <div className="accessories">
            <strong>Accessories:</strong>
            <div className="accessory-images">
              {item.accessories.map((accessory, index) => (
                <img
                  key={index}
                  src={accessory.image}
                  alt={`Accessory ${index}`}
                  className="accessory-image"
                />
              ))}
            </div>
          </div>
          <div className="rating-section">
            <label>Rate this item:</label>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= rating ? 'selected' : ''}`}
                  onClick={() => handleRatingChange(star)}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <button onClick={handleSubmitRating} className="submit-rating-button">Submit Rating</button>
          </div>
          {showPopup && (
            <div className="popup-message">
              <span>&#10003; Your rating was successfully submitted!</span>
            </div>
          )}
          <button className="summeradd-to-cart-button" onClick={handleAddToCart} disabled={stock === 0}>Add to Cart</button>
          <button className="summerbuy-now-button" onClick={handleBuyNow} disabled={stock === 0}>Buy Now</button>
        </div>
      </div>
      <div className="summerwear-description">
        <p style={{ fontSize: '0.5em', fontFamily: 'monospace' ,fontWeight:'bold',color:'blue'}}>
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default SummerwearDetails;
