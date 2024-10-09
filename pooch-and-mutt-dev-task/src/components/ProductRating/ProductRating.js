import React from 'react';
import Image from '../Image/Image';
import iconStar from '../../assets/icons/icon-star.svg';
import iconHalfStar from '../../assets/icons/icon-half-star.svg';

const ProductRating = ({ rating = 0, ratingCount = 0 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5 ? 1 : 0;

  return (
    <div className="flex items-center mt-4 mb-6">
      <span className="flex space-x-1">
        {[...Array(fullStars)].map((_, index) => (
          <Image key={`full-${index}`} src={iconStar} alt="Star" className="w-6 h-6" />
        ))}
        {[...Array(hasHalfStar)].map((_, index) => (
          <Image key={`half-${index}`} src={iconHalfStar} alt="Half Star" className="w-6 h-6" />
        ))}
      </span>
      <span className="text-minimal text-c1 mt-1">{`(${ratingCount})`}</span>
    </div>
  );
};

export default ProductRating;
