
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CategoryList from '../components/CategoryList';
import ProductGrid from '../components/ProductGrid';
import BusinessPartners from '../components/BusinessPartners';
import { products } from '../data/products';

const Index: React.FC = () => {
  // Get featured products (limited to 4 for homepage)
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <CategoryList />

        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-darkblue mb-4">منتجات بالجملة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              مجموعة متكاملة من المنتجات المصنعة وفق أعلى معايير الجودة بأسعار منافسة للموزعين وتجار التجزئة.
            </p>
          </div>
          
          <ProductGrid products={featuredProducts} />
        </div>
        
        <BusinessPartners />
        
        <div className="container mx-auto px-4 py-16">
          <div className="bg-beige rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-darkblue mb-4">المزايا التنافسية لشركاء الأعمال</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              نقدم لشركاء أعمالنا التجاريين باقة متكاملة من المزايا التنافسية، تشمل جودة المنتج وأسعار الجملة المميزة مع خدمات لوجستية متفوقة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-darkblue text-4xl font-bold mb-2">١٥٪</div>
                <div className="text-gray-700">خصومات كميات للموزعين</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-darkblue text-4xl font-bold mb-2">١٢+</div>
                <div className="text-gray-700">مناطق توزيع جغرافية</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-darkblue text-4xl font-bold mb-2">١٠٠+</div>
                <div className="text-gray-700">شريك أعمال استراتيجي</div>
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
