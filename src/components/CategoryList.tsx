import React from 'react';
import axios from 'axios'
import { Card, CardContent } from "./ui/card";
import { Link } from 'react-router-dom';
import  ProductCard from './ProductCard';
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from 'react';
import { useIsMobile } from "../hooks/use-mobile";

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const isMobile = useIsMobile();
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/home-categories/`)
      .then((response) => {
        setCategories(response.data.categories); 
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  return <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-darkblue mb-12">تصفح حسب الفئة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
        {categories.map((categoryObj, index) => (
          <Card key={categoryObj.category.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 relative">
            <div className="relative h-64 md:h-72 overflow-hidden bg-white">
              <img 
                src={categoryObj.category.image} 
                alt={categoryObj.category.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end">
                <div className="p-4 md:p-6 text-white w-full">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 group-hover:text-red transition-colors">{categoryObj.category.name}</h3>
                  <p className="text-white/80 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{categoryObj.category.description}</p>

                  <div className="bg-white/25 backdrop-blur-sm py-1 px-2 md:px-3 rounded-full inline-flex items-center">
                    <span className="text-white text-xs font-medium">المقاسات:</span>
                    <div className="flex flex-wrap gap-0.5 mr-1">
                      {categoryObj.category.sizes.split(",").filter(Boolean)
                        .slice(0, isMobile ? 5 : undefined)
                        .map((size, index, arr) => (
                          <span key={index} className="text-xs text-white">
                            {size}{index < arr.length - 1 ? '، ' : ''}
                          </span>
                        ))}    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom part with product previews */}
            <CardContent className="p-4 md:p-6">
              <div className="mb-3 md:mb-4 flex justify-between items-center">
                <h4 className="text-base md:text-lg font-medium text-darkblue">منتجات مختارة</h4>
                <Link to={`/products/${String(categoryObj.category.id)}/`} className="flex items-center gap-1 text-red hover:text-navy text-xs md:text-sm font-medium transition-colors">
                  عرض الكل
                  <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {categoryObj.products.map(product => <div key={product.id} className="hover:scale-105 transition-transform duration-300">
                    <ProductCard key={product.id} product={product}/>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        ))}

      </div>
    </div>
  </div>;
};

export default CategoryList;
