
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllTypes } from '../data/products';
import ProductTypeSection from '../components/ProductTypeSection';
import htmx from 'htmx.org';

const Products: React.FC = () => {
  const types = getAllTypes();
  const productsContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize HTMX after component mounts
    if (productsContainerRef.current) {
      htmx.process(productsContainerRef.current);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-beige py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-darkblue text-center">منتجاتنا</h1>
            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              تصفح مجموعتنا الكاملة من الملابس الرجالية عالية الجودة المصنوعة من أفضل أنواع القطن 
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="sticky top-20 bg-white z-40 py-4 border-b mb-8">
            <div className="text-sm text-gray-600 mb-2">تصفية حسب النوع:</div>
            <div 
              className="flex flex-wrap gap-2"
              hx-get="http://localhost:8000/api/categories/"
              hx-trigger="load"
              hx-swap="innerHTML"
            >
              {/* Category buttons will be loaded here by HTMX */}
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded-full"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded-full"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded-full"></div>
            </div>
          </div>

          <div 
            ref={productsContainerRef} 
            hx-get="http://localhost:8000/api/products/" 
            hx-trigger="load"
            hx-swap="innerHTML"
          >
            {/* Products will be loaded here by HTMX */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse bg-white rounded-lg shadow-md h-64">
                  <div className="h-40 bg-gray-200 rounded-t-lg"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
