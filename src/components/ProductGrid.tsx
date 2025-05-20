
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../data/products';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  return (
    <div className="bg-red/10 py-8 px-4 sm:px-0">
      {title && (
        <h2 className="text-2xl font-bold text-darkblue mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
