import React, { useState } from 'react';
import { Product, ProductColor } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  
  // Get the image based on selected color
  const getImageSrc = () => {
    return selectedColor.image;
  };

  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[3/4] bg-beige flex items-center justify-center p-3">
        <img 
          src={getImageSrc()}
          alt={product.header} 
          className="h-full w-full object-contain mix-blend-multiply" 
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-bold text-darkblue mb-1 line-clamp-1">{product.header}</h3>
        <div className="mb-2">
          <div className="text-xs font-medium mb-1">الألوان المتاحة:</div>
          <div className="flex space-x-1.5 space-x-reverse">
            {product.colors.map(color => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color)}
                className={`w-4 h-4 rounded-full border ${
                  selectedColor.id === color.id ? 'border-darkblue ring-1 ring-darkblue' : 'border-gray-200'
                } transition-all duration-200`}
                style={{ backgroundColor: color.color_code }}
                aria-label={`اللون ${color.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
