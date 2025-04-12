
import React from 'react';
import ProductGrid from './ProductGrid';
import { Product } from '../data/products';

interface ProductTypeSectionProps {
  typeLabel: string;
  typeId: string;
  products: Product[];
}

const ProductTypeSection: React.FC<ProductTypeSectionProps> = ({typeId, products }) => {
  return (
      <ProductGrid products={products} />
  );
};

export default ProductTypeSection;
