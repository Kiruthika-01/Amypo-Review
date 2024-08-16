
import React from 'react';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};
export { CustomPrevArrow, CustomNextArrow };
