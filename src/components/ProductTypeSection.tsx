
import React from 'react';
import ProductGrid from './ProductGrid';
import { Product } from '../data/products';

interface ProductTypeSectionProps {
  typeLabel: string;
  products: Product[];
}

const ProductTypeSection: React.FC<ProductTypeSectionProps> = ({typeLabel, products }) => {
  return (
    <div className="w-full">
      {typeLabel && (
        <h2 className="text-2xl font-semibold mb-4">{typeLabel}</h2>
      )}
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductTypeSection;
