
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productTypes, getProductsByType } from '../data/products';
import ProductTypeSection from '../components/ProductTypeSection';
import { Button } from "@/components/ui/button";
import { FilterBar } from '../components/FilterBar';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Star, Shield, Zap } from "lucide-react";

const ProductType: React.FC = () => {
  const { typeId } = useParams<{ typeId: string }>();
  
  // First check if typeId is 'underwear' or 'outwear' (category IDs)
  const isCategory = typeId === 'underwear' || typeId === 'outwear';
  
  // If it's a category, get all products of that category
  let products = [];
  let type = null;
  
  if (isCategory) {
    // For categories, we need to get products based on the category
    const categoryMap: Record<string, string[]> = {
      'underwear': ['half-sleeve-khonagi', 'half-sleeve-round', 'half-sleeve-v-neck', 'sleeveless-undershirt'],
      'outwear': ['half-sleeve-collared', 'mens-short', 'tank-top']
    };
    
    const relevantTypes = categoryMap[typeId || ''] || [];
    
    // Get all products for the types in this category
    relevantTypes.forEach(productType => {
      products = [...products, ...getProductsByType(productType)];
    });
    
    // Create a mock type for the category
    type = {
      id: typeId || '',
      label: typeId === 'underwear' ? 'الملابس الداخلية' : 'الملابس الخارجية',
      description: typeId === 'underwear' 
        ? 'مجموعة متنوعة من الملابس الداخلية المصنوعة من أجود أنواع القطن'
        : 'تشكيلة فاخرة من الملابس الخارجية بأعلى معايير الجودة'
    };
  } else {
    // If it's not a category, it's a regular product type
    type = productTypes.find(t => t.id === typeId);
    products = getProductsByType(typeId || '');
  }
  
  const [filteredProducts, setFilteredProducts] = useState(products);

  if (!type || products.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">الفئة غير موجودة</h1>
          <p className="mb-6">عذراً، الفئة التي تبحث عنها غير موجودة.</p>
          <Link to="/products">
            <Button>العودة إلى المنتجات</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Set category banner image based on typeId
  const categoryImage = typeId === 'underwear' 
    ? '/assets/underwear-category.jpg' 
    : '/assets/outwear-category.jpg';

  // Define available sizes based on category
  const availableSizes = typeId === 'underwear' 
    ? ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL']
    : ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'];

  // Define advantages with icons based on category
  const categoryAdvantages = typeId === 'underwear' 
    ? [
        { text: 'قطن %100', icon: Shield },
        { text: 'قطن معطر', icon: Sparkles },
        { text: 'قطن ذا وزن أعلى', icon: Star },
        { text: 'القطن المصري', icon: Star },
        { text: 'تم تصنيعه بأعلى المواصفات التركية', icon: Zap }
      ]
    : [
        { text: 'تنوع الأقمشة', icon: Star },
        { text: 'تنوع التصاميم والموديلات للقمصان', icon: Sparkles },
        { text: 'أقمشة ذا جودة عالية', icon: Shield }
      ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Category Hero Banner */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img 
            src={categoryImage} 
            alt={type.label}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg max-w-3xl border border-white/20">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                    {type.label}
                  </span>
                </h1>
                <p className="text-white/90 mt-2 max-w-2xl text-lg">
                  {type.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Redesigned Advantages Section */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-darkblue mb-2 flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                مميزات المنتج
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red to-red/60 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categoryAdvantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red/20"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red to-red/60 rounded-t-xl"></div>
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-red to-red/80 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-darkblue font-medium text-sm md:text-base leading-relaxed">
                          {advantage.text}
                        </p>
                      </div>
                      <div className="bg-green-100 p-1.5 rounded-full">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Available Sizes Card */}
          <Card className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-white shadow-md border-0 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-red to-red/60 rounded-full"></div>
              <h3 className="text-lg font-semibold text-darkblue">المقاسات المتاحة</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {availableSizes.map((size) => (
                <div
                  key={size}
                  className="px-4 py-2 bg-white border-2 border-gray-200 text-darkblue rounded-lg text-sm font-medium hover:border-red hover:bg-red/5 transition-all duration-200 cursor-default shadow-sm"
                >
                  {size}
                </div>
              ))}
            </div>
          </Card>
          
          {/* Filter bar */}
          <div className="bg-white py-5 mb-6 border-b shadow-sm rounded-lg">
            <FilterBar 
              products={products} 
              onFilterChange={setFilteredProducts}
            />
          </div>
          
          {/* Product grid */}
          <ProductTypeSection
            typeId={type.id}
            typeLabel=""
            products={filteredProducts}
          />
          
          <div className="mt-12 text-center">
            <Link to="/products">
              <Button variant="outline" className="border-darkblue text-darkblue hover:bg-darkblue hover:text-white">
                العودة إلى جميع المنتجات
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductType;
