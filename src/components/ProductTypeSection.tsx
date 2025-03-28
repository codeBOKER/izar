
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductGrid from './ProductGrid';
import { Product } from '../data/products';

interface ProductTypeSectionProps {
  typeLabel: string;
  typeId: string;
  products: Product[];
}

const ProductTypeSection: React.FC<ProductTypeSectionProps> = ({ typeLabel, typeId, products }) => {
  // Filter white products and colored products
  const whiteProducts = products.filter(product => product.colors.includes('white'));
  const coloredProducts = products.filter(product => 
    product.colors.some(color => color !== 'white')
  );

  return (
    <div className="py-8" id={typeId}>
      <h2 className="text-2xl font-bold text-darkblue mb-6">{typeLabel}</h2>
      
      <Tabs defaultValue="white" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="white">الأبيض</TabsTrigger>
          <TabsTrigger value="colored">الألوان</TabsTrigger>
        </TabsList>
        <TabsContent value="white">
          <ProductGrid products={whiteProducts} />
        </TabsContent>
        <TabsContent value="colored">
          <ProductGrid products={coloredProducts} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTypeSection;
