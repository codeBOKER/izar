
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllTypes, getProductsByType } from '../data/products';
import ProductTypeSection from '../components/ProductTypeSection';

const Products: React.FC = () => {
  const types = getAllTypes();

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
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <a
                  key={type.id}
                  href={`#${type.id}`}
                  className="inline-block bg-softgray hover:bg-gray-200 text-darkblue py-1 px-3 rounded-full text-sm"
                >
                  {type.label}
                </a>
              ))}
            </div>
          </div>

          {types.map((type) => {
            const typeProducts = getProductsByType(type.id);
            return (
              <ProductTypeSection
                key={type.id}
                typeId={type.id}
                typeLabel={type.label}
                products={typeProducts}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
