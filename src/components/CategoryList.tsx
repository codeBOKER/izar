
import React from 'react';
import { Card, CardContent } from "./ui/card";
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

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
          return <Card key={category.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 relative">
                {/* New diagonal ribbon effect */}
                <div className="absolute -top-2 -left-12 w-40 transform rotate-315 bg-red-500 text-white py-1 text-xs font-bold text-center z-10">
                  تشكيلة جديدة
                </div>
                
                {/* Top part with category image - Mobile responsive */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-white">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex items-end">
                    <div className="p-4 md:p-6 text-white w-full">
                      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 group-hover:text-red transition-colors">{category.name}</h3>
                      <p className="text-white/80 text-xs md:text-sm mb-2 md:mb-3 line-clamp-2">{category.description}</p>
                      
                      {/* Available Sizes Tag - Mobile optimized */}
                      <div className="bg-white/20 backdrop-blur-sm py-1 px-2 md:px-3 rounded-full inline-flex items-center">
                        <span className="text-white text-xs font-medium">المقاسات:</span>
                        <div className="flex flex-wrap gap-0.5 mr-1">
                          {category.sizes.slice(0, 6).map((size, index) => 
                            <span key={index} className="text-xs text-white">
                              {size}{index < Math.min(category.sizes.length, 6) - 1 ? '، ' : ''}
                            </span>
                          )}
                          {category.sizes.length > 6 && (
                            <span className="text-xs text-white">...</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom part with product previews */}
                <CardContent className="p-4 md:p-6">
                  <div className="mb-3 md:mb-4 flex justify-between items-center">
                    <h4 className="text-base md:text-lg font-medium text-darkblue">منتجات مختارة</h4>
                    <Link to={`/products/${category.id}`} className="flex items-center gap-1 text-red hover:text-navy text-xs md:text-sm font-medium transition-colors">
                      عرض الكل
                      <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
                    </Link>
                  </div>
                  
                  {/* Always show products in a row, even on mobile */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {categoryProducts.map(product => <div key={product.id} className="hover:scale-105 transition-transform duration-300">
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
