import React from 'react';
import { useCart } from './CartContext'; // Import the context

const QuickAddButton = () => {
  const { addToCart } = useCart(); // Get the addToCart function from context

  return (
    <button onClick={addToCart}>Quick Add</button>
  );
};

export default QuickAddButton;
