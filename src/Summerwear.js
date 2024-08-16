// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Summerwear.css';
// import TuneIcon from '@mui/icons-material/Tune';
// import AddIcon from '@mui/icons-material/Add';
// import Rating from '@mui/material/Rating';
// import { summerWearItems } from './summerWearData';

// const Summerwear = () => {
//   const [filteredItems, setFilteredItems] = useState(summerWearItems);
//   const navigate = useNavigate();

//   const handleItemClick = (id) => {
//     navigate(`/summerwear/${id}`);
//   };

//   const handleCategoryClick = (category) => {
   
//     const filtered = summerWearItems.filter(item =>
//       item.category ? item.category.toLowerCase() === category.toLowerCase() : false
//     );
//     setFilteredItems(filtered);
//   };

//   return (
//     <div className="summerwear-page">
//       <h1 className="summerwear-title">Summer Wear</h1>
//       <div className="summer-content">
//         <div className="summer-sidebar">
//           <div className="summer-sidebar-header">
//             <h2>Filter By</h2>
//             <TuneIcon className="tune-icon" />
//           </div>
//           <ul>
//             <li><a href="#" onClick={() => handleCategoryClick('shorts')}>Shorts</a></li>
//             <li><a href="#" onClick={() => handleCategoryClick('t-shirts')}>T-Shirts</a></li>
//             <li><a href="#" onClick={() => handleCategoryClick('jeans')}>Jeans</a></li>
//             <li><a href="#" onClick={() => handleCategoryClick('jackets')}>Jackets</a></li>
//             <li><a href="#" onClick={() => handleCategoryClick('shirts')}>Shirts</a></li>
          
//           </ul>
//         </div>
//         <div className="summer-items">
//           {filteredItems.map(item => (
//             <div className="summer-item" key={item.id}>
//               <img
//                 src={item.image}
//                 alt={`Summer Wear Item ${item.id}`}
//                 className="summer-image"
//                 onClick={() => handleItemClick(item.id)}
//               />
//               <div className="summer-price">{item.price}</div>
//               {item.sizes && (
//                 <div className="summer-sizes">
//                   <strong>Sizes:</strong> {item.sizes.join(', ')}
//                 </div>
//               )}
//               {item.colors && (
//                 <div className="summer-colors">
//                   <strong></strong> {item.colors.map(color => (
//                     <div key={color.hex} className="color-swatch-container">
//                       <span className="color-swatch" style={{ backgroundColor: color.hex }}></span>
//                       <span className="color-name">{color.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               <div className="summer-rating">
//                 <Rating
//                   name={`rating-${item.id}`}
//                   value={item.rating || 0}
//                   precision={0.5}
//                   readOnly
//                 />
//               </div>
//               <button className="quick-add-button" onClick={() => handleItemClick(item.id)}>
//                 <AddIcon /> Quick Add
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Summerwear;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Summerwear.css';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import Rating from '@mui/material/Rating';
import { summerWearItems } from './summerWearData';

const Summerwear = () => {
  const [filteredItems, setFilteredItems] = useState(summerWearItems);
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/summerwear/${id}`);
  };

  const handleCategoryClick = (category) => {
    const filtered = summerWearItems.filter(item =>
      item.category ? item.category.toLowerCase() === category.toLowerCase() : false
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="summerwear-page">
      <h1 className="summerwear-title">Summer Wear</h1>
      <div className="summer-content">
        <div className="summer-sidebar">
          <div className="summer-sidebar-header">
            <h2>Filter By</h2>
            <TuneIcon className="tune-icon" />
          </div>
          <ul>
            <li><a href="#" onClick={() => handleCategoryClick('jeans')}>Jeans</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('shorts')}>Shorts</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('gown')}>Gown</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('t-shirts')}>T-shirts</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('jackets')}>Jackets</a></li>
            <li><a href="#" onClick={() => handleCategoryClick('skirt')}>Skirt</a></li>
          </ul>
        </div>
        <div className="summer-items">
          {filteredItems.map(item => (
            <div className="summer-item" key={item.id}>
              <img
                src={item.image}
                alt={`Summer Wear Item ${item.id}`}
                className="summer-image"
                onClick={() => handleItemClick(item.id)}
              />
              <div className="summer-info">
                <div className="summer-price">${item.price}</div>
                <div className="summer-description">
                  <p class="psummer">
                  Summer wear is versatile and can be worn for a variety of occasions, from running errands to informal gatherings with friends.
                  </p>
                </div>
                <div className="summer-rating">
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
                <button className="summerquick-add-button" onClick={() => handleItemClick(item.id)}>
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

export default Summerwear;
