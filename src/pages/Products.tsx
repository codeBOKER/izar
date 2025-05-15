
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FilterBar } from '../components/FilterBar';

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Shuffle products randomly - only once when component mounts
  const shuffledProducts = React.useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5);
  }, [products]);

  // Handle filter change from FilterBar
  const handleFilterChange = (filtered: typeof products) => {
    setFilteredProducts(filtered);
  };

  // Update search query
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

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

        <div className="container mx-auto px-4">
          <div className="sticky top-20 z-40 bg-white py-4 mb-6 border-b">
            <FilterBar products={shuffledProducts} onFilterChange={handleFilterChange} />
          </div>

          <ProductGrid products={filteredProducts} title="جميع المنتجات" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
