
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productTypes, getProductsByType } from '../data/products';
import ProductTypeSection from '../components/ProductTypeSection';
import { Button } from "@/components/ui/button";
import { FilterBar } from '../components/FilterBar';

const ProductType: React.FC = () => {
  const { typeId } = useParams<{ typeId: string }>();
  const type = productTypes.find(t => t.id === typeId);
  const products = getProductsByType(typeId || '');
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
          {/* Filter Bar */}
          <FilterBar 
            products={products} 
            onFilterChange={setFilteredProducts}
          />

          <div className="mt-8">
            <ProductTypeSection
              typeId={type.id}
              typeLabel=""
              products={filteredProducts}
            />
          </div>
          
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
