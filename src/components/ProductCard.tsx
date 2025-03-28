
import React, { useState } from 'react';
import { Product, ProductColor } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>('white');
  
  // Get the image based on selected color
  const getImageSrc = () => {
    if (selectedColor === 'white') {
      return product.images.white;
    } else {
      const colorIndex = product.colors.indexOf(selectedColor) - 1; // -1 because white is at index 0
      return colorIndex >= 0 && colorIndex < product.images.colored.length
        ? product.images.colored[colorIndex]
        : product.images.white;
    }
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 bg-beige flex items-center justify-center p-4">
        <img 
          src={getImageSrc()}
          alt={product.name} 
          className="h-full object-contain" 
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-darkblue">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.typeArabic}</p>
        
        <div className="mb-4">
          <div className="text-sm font-medium mb-2">الألوان المتاحة:</div>
          <div className="flex space-x-2 space-x-reverse">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === color ? 'border-darkblue' : 'border-transparent'
                }`}
                style={{ 
                  backgroundColor: 
                    color === 'white' ? '#ffffff' : 
                    color === 'blue' ? '#af2734' : // Replace blue with red
                    color === 'gray' ? '#9AA0A6' : 
                    color === 'black' ? '#202124' :
                    color === 'red' ? '#EA4335' : '#ffffff'
                }}
                aria-label={`اللون ${color}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="text-sm font-medium mb-2">المقاسات المتاحة:</div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="inline-block border border-gray-300 rounded px-2 py-1 text-xs"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
