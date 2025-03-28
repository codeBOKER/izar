
import React from 'react';
import CategoryCard from './CategoryCard';
import { productTypes } from '../data/products';

const CategoryList: React.FC = () => {
  return (
    <div className="bg-softgray py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-darkblue mb-12">تصفح حسب الفئة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productTypes.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.label}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
