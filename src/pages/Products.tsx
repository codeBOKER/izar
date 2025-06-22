import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import { FilterBar } from '../components/FilterBar';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [shuffledProducts, setShuffledProducts] = useState([]); // new state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios.get(`${apiUrl}/products/?page=${page}`)
      .then((response) => {
        setProducts(response.data.products);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [page]);

  // Shuffle products only when products change
  useEffect(() => {
    setShuffledProducts([...products].sort(() => Math.random() - 0.5));
  }, [products]);

  // Handle filter change from FilterBar
  const handleFilterChange = useCallback((filtered) => {
    setFilteredProducts(filtered);
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

        <div className="container mx-auto px-4">
          <div className="top-20 z-40 bg-white py-4 mb-6 border-b">
            <FilterBar 
              products={shuffledProducts} 
              onFilterChange={handleFilterChange}
              buildSearchUrl={(searchQuery) => {
                const apiUrl = import.meta.env.VITE_API_URL;
                return `${apiUrl}/products/?search=${encodeURIComponent(searchQuery)}`;
              }}
            />
          </div>

          <ProductGrid products={filteredProducts} title="جميع المنتجات" />

          {/* Pagination buttons */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8 mb-10">
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

export default Products;
