import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; // Ensure you have a CSS file for Cart component styling

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleProceedToBuy = () => {
    navigate('/payment-details');
  };

  if (!cartItems.length) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <span>{item.name}</span>
              <span>{item.price}</span>
              <span>Quantity: {item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="proceed-to-buy-button" onClick={handleProceedToBuy}>
        Proceed to Buy
      </button>
    </div>
  );
};

export default Cart;
