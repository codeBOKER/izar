
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productTypes, getProductsByType } from '../data/products';
import ProductTypeSection from '../components/ProductTypeSection';
import { Button } from "@/components/ui/button";

const ProductType: React.FC = () => {
  const { typeId } = useParams<{ typeId: string }>();
  const type = productTypes.find(t => t.id === typeId);
  const products = getProductsByType(typeId || '');

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-beige py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-darkblue text-center">{type.label}</h1>
            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              {type.description}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <ProductTypeSection
            typeId={type.id}
            typeLabel={type.label}
            products={products}
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
