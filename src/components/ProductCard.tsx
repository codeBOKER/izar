
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
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[3/4] bg-beige flex items-center justify-center p-3">
        <img 
          src={getImageSrc()}
          alt={product.name} 
          className="h-full w-full object-contain mix-blend-multiply" 
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-bold text-darkblue mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2">{product.typeArabic}</p>
        
        <div className="mb-2">
          <div className="text-xs font-medium mb-1">الألوان المتاحة:</div>
          <div className="flex space-x-1.5 space-x-reverse">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-4 h-4 rounded-full border ${
                  selectedColor === color ? 'border-darkblue ring-1 ring-darkblue' : 'border-gray-200'
                } transition-all duration-200`}
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
      </div>
    </div>
  );
};

export default ProductCard;
