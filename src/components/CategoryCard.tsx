
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, description }) => {
  return (
    <Link to={`/products/${id}`} className="block">
      <div className="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
        <div className="h-40 bg-beige flex items-center justify-center">
          {/* Replace with actual category image */}
          <img 
            src="/assets/placeholder.svg" 
            alt={name} 
            className="h-32 w-32 object-contain" 
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-navy mb-2">{name}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <span className="inline-block bg-softgray text-darkblue py-1 px-4 rounded text-sm font-medium">
            عرض المنتجات
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
