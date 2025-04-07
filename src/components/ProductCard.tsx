
import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    type: string;
    typeArabic: string;
    colors: string[];
    sizes: string[];
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
        <div className="h-64 bg-beige flex items-center justify-center p-4">
          <img 
            src={product.image}
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
              {product.colors && product.colors.map((color) => (
                <div
                  key={color}
                  className="w-6 h-6 rounded-full border-2 border-gray-300"
                  style={{ 
                    backgroundColor: 
                      color === 'white' ? '#ffffff' : 
                      color === 'blue' ? '#af2734' : 
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
              {product.sizes && product.sizes.map((size) => (
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
    </Link>
  );
};

export default ProductCard;
