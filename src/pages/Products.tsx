import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabaseClient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import { FilterBar } from '../components/FilterBar';
import { Button } from "@/components/ui/button";

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  const PAGE_SIZE = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        const { data: prodRows, error: prodError, count } = await supabase
          .from('core_product')
          .select('*', { count: 'exact' })
          .order('created_at', { ascending: false })
          .range(from, to);

        if (prodError) throw prodError;

        const ids = (prodRows ?? []).map((p: any) => p.id);
        let colorsByProduct: Record<number, any[]> = {};
        
        if (ids.length > 0) {
          const { data: colorRows } = await supabase
            .from('core_productcolor')
            .select('*')
            .in('product_id', ids);
            
          colorsByProduct = (colorRows ?? []).reduce((acc: any, row: any) => {
            (acc[row.product_id] ||= []).push(row);
            return acc;
          }, {});
        }

        const transformed = (prodRows ?? []).map((p: any) => ({
          id: p.id,
          header: p.header,
          description: p.description,
          category_id: String(p.category_id),
          colors: (colorsByProduct[p.id] ?? []).map((c: any) => ({
            id: c.id,
            name: c.name,
            color_code: c.color_code,
            image: c.image,
            is_available: c.is_available,
            product: c.product_id,
          })),
        }));

        setProducts(transformed);
        setFilteredProducts(transformed);
        setTotalPages(Math.max(1, Math.ceil((count ?? transformed.length) / PAGE_SIZE)));
      } catch (e) {
        console.error('Error fetching products:', e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [page]);

  const handleFilterChange = useCallback((filtered) => {
    setFilteredProducts(filtered);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Header />
      <main className="flex-grow">
        
        {/* Page Hero */}
        <div className="bg-beige pt-16 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-darkblue mb-4">منتجاتنا</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              تصفح مجموعتنا الكاملة من الملابس الرجالية عالية الجودة، حيث تجتمع الأناقة مع الراحة.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-8">
          
          {/* Sticky Filter Bar */}
          <div className="sticky top-4 z-40 mb-12">
             <FilterBar 
               baseUrl="" // Not strictly needed based on your logic, but kept for interface
               onFilterChange={handleFilterChange}
               initialProducts={products}
             />
          </div>

          {/* Grid or Empty State */}
          {isLoading ? (
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse" />
                ))}
             </div>
          ) : filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} title="" />
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-slate-400">لا توجد منتجات تطابق بحثك</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16 mb-20">
              <Button
                variant="outline"
                className="hover:border-red hover:text-red transition-colors"
                disabled={page === 1}
                onClick={() => { setPage(page - 1); window.scrollTo(0,0); }}
              >
                السابق
              </Button>
              <span className="text-sm font-bold text-darkblue bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                {page} / {totalPages}
              </span>
              <Button
                variant="outline"
                className="hover:border-red hover:text-red transition-colors"
                disabled={page === totalPages}
                onClick={() => { setPage(page + 1); window.scrollTo(0,0); }}
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