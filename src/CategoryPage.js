// src/CategoryPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';
import { partyWearItems } from './partyWearData';

const CategoryPage = () => {
  const { category } = useParams();
  const filteredItems = partyWearItems.filter(item => item.category === category);

  return (
    <div className="category-page">
      <h1 className="category-title">{category}</h1>
      <div className="category-items">
        {filteredItems.map(item => (
          <div className="category-item" key={item.id}>
            <img src={item.image} alt={`Item ${item.id}`} className="category-image" />
            <div className="category-price">{item.price}</div>
            {/* Render other item details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
