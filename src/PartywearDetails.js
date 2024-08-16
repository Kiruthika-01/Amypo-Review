// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useCart } from './CartContext'; 
// import { partyWearItems } from './partyWearData';
// import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import './PartywearDetails.css';

// const PartywearDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const item = partyWearItems.find(item => item.id === parseInt(id));
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [rating, setRating] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);
//   const { addToCart } = useCart(); 

//   if (!item) {
//     return <div>Item not found</div>;
//   }

//   const handleIncreaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleBuyNow = () => {
//     navigate('/payment-details', { state: { item, quantity, selectedSize, selectedColor } });
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...item, selectedSize, selectedColor }, quantity);
//   };

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleSubmitRating = () => {
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 2000);
//   };

//   return (
//     <div className="partywear-details-page">
//       <div className="partywear-details-content">
//         <img src={item.image} alt={`Party Wear Item ${item.id}`} className="partywear-details-image" style={{marginLeft:'400px'}}/>
//         <div className="partywear-details-info">
//           <div className="partywear-details-price">{item.price}</div>
//           <FormControl fullWidth margin="normal">
//             <InputLabel>Size</InputLabel>
//             <Select
//               value={selectedSize}
//               onChange={(e) => setSelectedSize(e.target.value)}
//             >
//               {item.sizes.map(size => (
//                 <MenuItem key={size} value={size}>
//                   {size}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <FormControl fullWidth margin="normal">
//             <InputLabel>Color</InputLabel>
//             <Select
//               value={selectedColor}
//               onChange={(e) => setSelectedColor(e.target.value)}
//             >
//               {item.colors.map(color => (
//                 <MenuItem key={color.hex} value={color.name}>
//                   <span className="color-swatch" style={{ backgroundColor: color.hex }}></span>
//                   {color.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//           <div className="quantity-selector">
//             <label>Quantity:</label>
//             <button onClick={handleDecreaseQuantity}>-</button>
//             <input type="text" value={quantity} readOnly />
//             <button onClick={handleIncreaseQuantity}>+</button>
//           </div>
//           <div className="accessories">
//             <strong>Accessories(Rs.1000):</strong>
//             <div className="accessory-images">
//               {item.accessories.map((accessory, index) => (
//                 <img
//                   key={index}
//                   src={accessory.image}
//                   alt={`Accessory ${index}`}
//                   className="accessory-image"
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="rating-section">
//             <label>Rate this item:</label>
//             <div className="stars">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <span
//                   key={star}
//                   className={`star ${star <= rating ? 'selected' : ''}`}
//                   onClick={() => handleRatingChange(star)}
//                 >
//                   &#9733;
//                 </span>
//               ))}
//             </div>
//             <button onClick={handleSubmitRating} className="submit-rating-button">Submit Rating</button>
//           </div>
//           {showPopup && (
//             <div className="popup-message">
//               <span>&#10003; Your rating was successfully submitted!</span>
//             </div>
//           )}
//           <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
//           <button className="partybuy-now-button" onClick={handleBuyNow}>Buy Now</button>
//         </div>
//       </div>
//       <div className="choli-description">
//         <p style={{fontSize:'2.5vh',fontFamily:'cursive'}}>
//           {item.description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PartywearDetails;
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; 

import './PartywearDetails.css';
import { partyWearItems } from './partyWearData';

const PartywearDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = partyWearItems.find(item => item.id === parseInt(id));
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
    <div className="partywear-details-page">
      <div className="partywear-details-content">
        <img src={item.image} alt={`Party Wear Item ${item.id}`} className="casualwear-details-image" style={{marginLeft:'500px'}}/>
        <div className="partywear-details-info">
          <div className="partywear-details-price">{item.price}</div>
          <div className="partywear-details-stock">IN STOCK: {stock}</div> 
          <div className="partywear-details-sizes">
            <strong>Sizes:</strong> 
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            {item.sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
          <div className="partywear-details-colors">
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
          <button className="partyadd-to-cart-button" onClick={handleAddToCart} disabled={stock === 0}>Add to Cart</button>
          <button className="partybuy-now-button" onClick={handleBuyNow} disabled={stock === 0}>Buy Now</button>
        </div>
      </div>
      <div className="partywear-description">
        <p style={{ fontSize: '0.5em', fontFamily: 'monospace' ,fontWeight:'bold',color:'blue'}}>
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default PartywearDetails;
