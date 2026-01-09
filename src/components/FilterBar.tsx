import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient';

interface FilterBarProps {
  baseUrl: string;
  onFilterChange: (filteredProducts: any[]) => void;
  initialProducts: any[];
  categoryId?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({ 
  baseUrl, 
  onFilterChange, 
  initialProducts, 
  categoryId 
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');

  // 1. Debounce Logic
  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(searchQuery.trim());
    }, 800); // Reduced to 800ms for snappier feel
    return () => clearTimeout(t);
  }, [searchQuery]);

  // 2. Search Logic (Supabase)
  useEffect(() => {
    const fetchFilteredProducts = async () => {
      // Restore initial state if empty
      if (debouncedSearch === '') {
        onFilterChange(initialProducts || []);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);
      try {
        let query = supabase
          .from('core_product')
          .select('*')
          .order('created_at', { ascending: false });

        if (categoryId) {
          query = query.eq('category_id', categoryId);
        }

        // Search logic
        if (debouncedSearch) {
          const s = debouncedSearch.replace(/%/g, '\\%').replace(/_/g, '\\_');
          query = query.or(`header.ilike.%${s}%,description.ilike.%${s}%`);
        }

        const { data: prodRows, error: prodError } = await query;
        if (prodError) throw prodError;

        // Fetch colors for the found products
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

        onFilterChange(transformed);
      } catch (error) {
        console.error('Filter Error:', error);
        onFilterChange([]);
      } finally {
        setIsSearching(false);
      }
    };

    fetchFilteredProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const resetFilters = () => {
    setSearchQuery('');
    onFilterChange(initialProducts || []);
  };

  return (
    <div className="w-full flex justify-center">
      {/* The Floating Pill Container */}
      <div className="
        relative w-full max-w-2xl 
        bg-white/80 backdrop-blur-xl 
        border border-slate-200 
        rounded-full 
        shadow-[0_8px_30px_rgb(0,0,0,0.04)]
        transition-all duration-300
        focus-within:shadow-[0_8px_30px_rgba(220,38,38,0.1)]
        focus-within:border-red/30
      ">
        <div className="flex items-center px-4 py-3">
          
          {/* Search Icon / Loader */}
          <div className="flex-shrink-0 text-slate-400 ml-3">
            {isSearching ? (
              <Loader2 className="animate-spin text-red" size={20} />
            ) : (
              <SearchIcon size={20} />
            )}
          </div>

          {/* Input Field */}
          <input
            type="text"
            placeholder="ابحث عن منتج، وصف، أو نوع..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              w-full bg-transparent border-none outline-none 
              text-slate-700 placeholder:text-slate-400
              text-base
            "
          />

          {/* Reset Button (Only shows when typing) */}
          {searchQuery && (
            <button
              onClick={resetFilters}
              className="
                flex-shrink-0 
                bg-slate-100 hover:bg-red/10 hover:text-red
                text-slate-400
                rounded-full p-1 
                transition-colors duration-200
              "
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};