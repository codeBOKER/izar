
import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import htmx from 'htmx.org';

const ProductType: React.FC = () => {
  const { typeId } = useParams<{ typeId: string }>();
  const productContainerRef = useRef<HTMLDivElement>(null);
  const categoryDetailsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize HTMX after component mounts
    if (productContainerRef.current && categoryDetailsRef.current) {
      htmx.process(document.body);
    }
  }, [typeId]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-beige py-12">
          <div 
            ref={categoryDetailsRef}
            className="container mx-auto px-4"
            hx-get={`http://localhost:8000/api/categories/${typeId}/`}
            hx-trigger="load"
            hx-swap="innerHTML"
          >
            {/* Category details will be loaded here */}
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 w-1/3 mx-auto rounded mb-4"></div>
              <div className="h-4 bg-gray-200 w-2/3 mx-auto rounded"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div 
            ref={productContainerRef}
            hx-get={`http://localhost:8000/api/categories/${typeId}/products/`}
            hx-trigger="load"
            hx-swap="innerHTML"
          >
            {/* Products will be loaded here */}
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
