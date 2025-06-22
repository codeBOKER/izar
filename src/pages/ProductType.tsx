import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductTypeSection from '../components/ProductTypeSection';
import { Button } from "@/components/ui/button";
import { FilterBar } from '../components/FilterBar';
import { Card } from "@/components/ui/card";
import { Sparkles, Star, Shield, Shirt, Palette, Award } from "lucide-react";

const ProductType: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const apiUrl = `${import.meta.env.VITE_API_URL}/category-products/${categoryId}/`;
  
  const [categoryBlock, setCategoryBlock] = useState<any>(null);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!categoryId) return;
    axios.get(`${apiUrl}?page=${page}`)
      .then((response) => {
        setCategoryBlock(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setCategoryBlock({ category: null, products: [] }); // Set to trigger fallback UI
      });
  }, [categoryId,page]);

  useEffect(() => {
    if (categoryBlock && categoryBlock.products) {
      setFilteredProducts(categoryBlock.products);
      setPage(categoryBlock.current_page);
      setTotalPages(categoryBlock.totalPages);
    }
  }, [categoryBlock]);
  
  // Define advantages with more relevant icons based on category
  const categoryAdvantages = categoryId === '1'
    ? [
        { text: 'قطن %100', icon: Shirt },
        { text: 'قطن معطر', icon: Sparkles },
        { text: 'قطن ذا وزن أعلى', icon: Shield },
        { text: 'القطن المصري', icon: Award },
        { text: 'تم تصنيعه بأعلى المواصفات التركية', icon: Star }
      ]
    : [
        { text: 'تنوع الأقمشة', icon: Shirt },
        { text: 'تنوع التصاميم والموديلات للقمصان', icon: Palette },
        { text: 'أقمشة ذا جودة عالية', icon: Award }
      ];

  if (!categoryBlock) {
    return <p>جاري التحميل...</p>;
  }

  // Show fallback if category not found or no products
  if (!categoryBlock.category || !categoryBlock.products || categoryBlock.products.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">الفئة غير موجودة</h1>
          <p className="mb-6">عذراً، الفئة التي تبحث عنها غير موجودة أو لا تحتوي على منتجات.</p>
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
        {/* Category Hero Banner */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <img 
            src={categoryBlock.category.image}
            alt={categoryBlock.category.header}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg max-w-3xl border border-white/20">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                    {categoryBlock.category.header}
                  </span>
                </h1>
                <p className="text-white/90 mt-2 max-w-2xl text-lg">
                  {categoryBlock.category.description}
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
                مميزات منتجاتنا
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red to-red/60 mx-auto rounded-full"></div>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex flex-wrap justify-center lg:justify-between gap-2 md:gap-6">
                {categoryAdvantages.map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center min-w-[90px] max-w-[120px] md:min-w-[160px] md:max-w-[220px] group p-1 md:p-3"
                    >
                      <div className="bg-gradient-to-br from-red to-red/80 p-2 md:p-4 rounded-full group-hover:scale-110 transition-transform duration-300 mb-1 md:mb-2">
                        <IconComponent className="w-4 h-4 md:w-7 md:h-7 text-white" />
                      </div>
                      <p className="text-darkblue font-medium text-xs md:text-base text-center leading-relaxed">
                        {advantage.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Available Sizes Card */}
          <Card className="mb-8 p-3 md:p-6 bg-gradient-to-r from-gray-50 to-white shadow-md border-0 rounded-xl">
            <div className="flex items-center gap-2 mb-2 md:mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-red to-red/60 rounded-full"></div>
              <h3 className="text-base md:text-lg font-semibold text-darkblue">المقاسات المتاحة</h3>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {categoryBlock.category.sizes.split(",").map((size) => (
                <div
                  key={size}
                  className="px-2 py-1 md:px-4 md:py-2 bg-white border-2 border-gray-200 text-darkblue rounded-lg text-xs md:text-sm font-medium hover:border-red hover:bg-red/5 transition-all duration-200 cursor-default shadow-sm"
                >
                  {size}
                </div>
              ))}
            </div>
          </Card>
          
          {/* Filter bar */}
          <div className="bg-white py-5 mb-6 border-b shadow-sm rounded-lg">
            <FilterBar 
              baseUrl={apiUrl}
              onFilterChange={setFilteredProducts}
            />
          </div>
          
          {/* Product grid */}
          <ProductTypeSection
            typeLabel=""
            products={filteredProducts}
          />

          {/* Pagination buttons */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <Button
                variant="outline"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
              >
                السابق
              </Button>
              <span className="mx-2 text-darkblue font-semibold">
                صفحة {page} من {totalPages}
              </span>
              <Button
                variant="outline"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
              >
                التالي
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductType;
