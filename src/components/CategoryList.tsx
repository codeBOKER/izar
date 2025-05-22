
import React from 'react';
import { Card, CardContent } from "./ui/card";
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const categories = [{
  id: 'underwear',
  name: 'الملابس الداخلية',
  image: '/assets/underwear-category.jpg',
  description: 'تشكيلة متنوعة من المنتجات القطنية عالية الجودة للموزعين',
  sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL', '6XL'],
  advantages: [
    'قطن %100',
    'قطن معطر',
    'قطن ذا وزن أعلى',
    'القطن المصري',
    'تم تصنيعه بأعلى المواصفات التركية'
  ]
}, {
  id: 'outwear',
  name: 'الملابس الخارجية',
  image: '/assets/outwear-category.jpg',
  description: 'منتجات ملبوسات خارجية بمواصفات عالمية وأسعار تنافسية',
  sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL'],
  advantages: [
    'تنوع الأقمشة',
    'تنوع التصاميم والموديلات للقمصان',
    'أقمشة ذا جودة عالية'
  ]
}];

// Helper function to get sample products from each category
const getCategoryProducts = (categoryId: string, count: number = 2) => {
  // For demo purposes, we'll use product types that match each category
  const categoryMap: Record<string, string[]> = {
    'underwear': ['half-sleeve-khonagi', 'half-sleeve-round', 'half-sleeve-v-neck', 'sleeveless-undershirt'],
    'outwear': ['half-sleeve-collared', 'mens-short', 'tank-top']
  };
  const relevantTypes = categoryMap[categoryId] || [];
  return products.filter(product => relevantTypes.includes(product.type)).slice(0, count);
};

const CategoryList: React.FC = () => {
  return <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-darkblue mb-12">تصفح حسب الفئة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map(category => {
          const categoryProducts = getCategoryProducts(category.id);
          return <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0">
                {/* Top part with category image */}
                <div className="relative h-72 overflow-hidden bg-white">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white/80 text-sm">{category.description}</p>
                      
                      {/* Available Sizes Tag */}
                      <div className="mt-3 bg-white/20 backdrop-blur-sm py-1 px-3 rounded-full inline-flex items-center">
                        <span className="text-white text-xs font-medium">المقاسات :</span>
                        <div className="flex flex-wrap gap-1 mr-1">
                          {category.sizes.map((size, index) => <span key={index} className="text-xs text-white">
                              {size}{index < category.sizes.length - 1 ? '، ' : ''}
                            </span>)}
                        </div>
                      </div>
                      
                      {/* Category Advantages */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {category.advantages.map((advantage, index) => (
                          <Badge 
                            key={index} 
                            className="bg-white/20 text-white backdrop-blur-sm flex items-center gap-1.5 py-1 px-2.5 text-xs"
                          >
                            <Check className="w-3 h-3" />
                            <span>{advantage}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom part with product previews */}
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-between items-center">
                    <h4 className="text-lg font-medium text-darkblue">منتجات مختارة</h4>
                    <Link to={`/products/${category.id}`} className="text-red hover:text-navy text-sm font-medium transition-colors">عرض كل التشكيلات</Link>
                  </div>
                  
                  {/* Always show products in a row, even on mobile */}
                  <div className="grid grid-cols-2 gap-3">
                    {categoryProducts.map(product => <div key={product.id}>
                        <ProductCard product={product} />
                      </div>)}
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </div>;
};

export default CategoryList;
