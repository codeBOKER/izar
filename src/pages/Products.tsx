
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Shuffle products randomly - only once when component mounts
  const shuffledProducts = React.useMemo(() => {
    return [...products].sort(() => Math.random() - 0.5);
  }, [products]);

  // Debounce function to delay search updates
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Filter products based on search query with debounce
  useEffect(() => {
    const handleSearch = () => {
      if (searchQuery.trim() === '') {
        setFilteredProducts(shuffledProducts);
      } else {
        const filtered = shuffledProducts.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.typeArabic.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    };

    // Apply debounce to search (300ms delay)
    const debouncedSearch = debounce(handleSearch, 300);
    debouncedSearch();

    // Cleanup function
    return () => clearTimeout(debouncedSearch as unknown as NodeJS.Timeout);
  }, [searchQuery, shuffledProducts]);

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
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="ابحث عن منتج..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-darkblue"
                />
              </div>
            </div>

            <div className="mt-2">
              <div className="text-sm text-gray-600 mb-2">تصفية حسب النوع:</div>
              <ToggleGroup type="single" className="flex flex-wrap gap-2">
                {['شورت', 'فنيلة', 'بوكسر'].map((keyword) => (
                  <ToggleGroupItem
                    key={keyword}
                    value={keyword}
                    onClick={() => setSearchQuery(keyword)}
                    className="inline-block bg-softgray hover:bg-gray-200 text-darkblue py-1 px-3 rounded-full text-sm"
                  >
                    {keyword}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>

          <ProductGrid products={filteredProducts} title="جميع المنتجات" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
