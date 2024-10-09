import React, { useState } from 'react';
import Image from '../../../../components/Image/Image';
import productMainImage from '../../../../assets/images/Health-and-Digestion-1.webp';
import productIngredientsImage from '../../../../assets/images/Health-and-Digestion-2.webp';
import productInBowlImage from '../../../../assets/images/Health-and-Digestion-3.webp';

// TODO: Replace hard coded values with real data that's passed through as props
const ProductImageGallery = () => {
  const productImages = [
    { src: productMainImage, alt: 'Health & Digestion package with ingredients' },
    { src: productIngredientsImage, alt: 'Ingredients in a bowl' },
    { src: productInBowlImage, alt: 'Bowl of Health & Digestion dog food' },
  ];

  const [selectedProductImage, setSelectedProductImage] = useState(productImages[0]?.src);

  return (
    <div className="flex flex-col md:flex-row md:space-x-6">
      <div className="flex flex-row md:flex-col md:w-1/6 md:space-y-5 md:space-x-0 mb-4 md:mb-0 overflow-x-auto">
        {productImages.map((image, index) => (
          <Image
            key={index}
            src={image?.src}
            alt={image?.alt}
            className={`w-full md:w-auto flex-shrink-0 cursor-pointer md:border-2 md:border-surface-primary ${selectedProductImage === image?.src ? ' md:!border-primary' : ''}`}
            onClick={() => setSelectedProductImage(image?.src)}
          />
        ))}
      </div>

      <div className="md:w-5/6">
        <Image
          src={selectedProductImage}
          alt="Main Health & Digestion image"
          className="rounded-lg w-full md:block hidden"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
