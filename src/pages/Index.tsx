
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CategoryList from '../components/CategoryList';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

const Index: React.FC = () => {
  // Get featured products (limited to 4 for homepage)
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-darkblue mb-4">منتجات مميزة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تصفح مجموعتنا المميزة من الملابس الداخلية المصنوعة من أجود أنواع القطن المصري والمصممة لتوفير أقصى درجات الراحة.
            </p>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
        
        <CategoryList />
        
        <div className="container mx-auto px-4 py-16">
          <div className="bg-beige rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-darkblue mb-4">تسوق بثقة</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              جميع منتجاتنا مصنوعة من القطن المصري عالي الجودة، ونضمن لك الراحة والمتانة مع كل قطعة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-darkblue text-4xl font-bold mb-2">١٠٠٪</div>
                <div className="text-gray-700">قطن مصري</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-darkblue text-4xl font-bold mb-2">٣٠+</div>
                <div className="text-gray-700">عاماً من الخبرة</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-darkblue text-4xl font-bold mb-2">١٠٠٠٠+</div>
                <div className="text-gray-700">عميل راضي</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
