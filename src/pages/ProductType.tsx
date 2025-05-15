
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productTypes, getProductsByType } from '../data/products';
import ProductTypeSection from '../components/ProductTypeSection';
import { Button } from "@/components/ui/button";
import { FilterBar } from '../components/FilterBar';
import { Card } from "@/components/ui/card";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Category Hero Banner */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={categoryImage} 
            alt={type.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <h1 className="text-3xl font-bold text-white">{type.label}</h1>
              <p className="text-white/90 mt-2 max-w-2xl">
                {type.description}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Available Sizes Card */}
          <Card className="mb-6 p-4 bg-white shadow-sm">
            <h3 className="text-lg font-medium mb-3">المقاسات المتاحة:</h3>
            <div className="flex flex-wrap gap-2">
              {availableSizes.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1.5 bg-softgray text-darkblue rounded-md text-sm font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </Card>
          
          {/* Filter bar - positioned at the top */}
          <div className="sticky top-24 z-40 bg-white py-4 mb-6 border-b">
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
