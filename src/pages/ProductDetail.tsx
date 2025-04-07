
import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import htmx from 'htmx.org';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productDetailRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize HTMX after component mounts
    if (productDetailRef.current) {
      htmx.process(productDetailRef.current);
    }
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div 
          ref={productDetailRef}
          hx-get={`http://localhost:8000/api/products/${id}/`}
          hx-trigger="load"
          hx-swap="innerHTML"
        >
          {/* Product details loading state */}
          <div className="flex flex-col md:flex-row gap-12 animate-pulse">
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg h-96"></div>
              <div className="mt-6 grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-24 bg-gray-200 rounded-md"></div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
              <div className="border-t border-b border-gray-200 py-4 my-6">
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/products">
            <Button variant="outline" className="border-darkblue text-darkblue hover:bg-darkblue hover:text-white">
              العودة إلى المنتجات
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
