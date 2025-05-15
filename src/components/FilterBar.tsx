
import React, { useState, useEffect } from 'react';
import { Product } from '../data/products';
import { Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface FilterBarProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ products, onFilterChange }) => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  // Predefined keywords for filtering
  const keywords = ['شورت', 'فنيلة', 'بوكسر'];

  // Apply filters
  useEffect(() => {
    let result = [...products];

    if (selectedKeywords.length > 0) {
      result = result.filter(product =>
        selectedKeywords.some(keyword =>
          product.name.includes(keyword) ||
          product.typeArabic.includes(keyword) ||
          product.description.includes(keyword)
        )
      );
    }

    onFilterChange(result);
  }, [selectedKeywords, products, onFilterChange]);

  // Toggle keyword selection
  const toggleKeyword = (keyword: string) => {
    setSelectedKeywords(prev =>
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedKeywords([]);
  };

  return (
    <div className="bg-red/5 rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-darkblue" />
          <h2 className="text-sm font-bold text-darkblue">تصفية المنتجات</h2>
        </div>
        {selectedKeywords.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="text-xs hover:text-red/90"
          >
            إعادة ضبط
          </Button>
        )}
      </div>

      <div>
        {/* Keywords Filter */}
        <div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">نوع المنتج</h3>
            <ToggleGroup type="multiple" className="flex flex-wrap gap-2">
              {keywords.map(keyword => (
                <ToggleGroupItem
                  key={keyword}
                  value={keyword}
                  variant={selectedKeywords.includes(keyword) ? "default" : "outline"}
                  onClick={() => toggleKeyword(keyword)}
                  className="bg-red/10 text-xs"
                >
                  {keyword}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>
      </div>

      {/* Filter chips for selected filters */}
      {selectedKeywords.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selectedKeywords.map(keyword => (
            <div
              key={keyword}
              className="bg-softgray text-darkblue text-xs px-2 py-1 rounded-full flex items-center"
              onClick={() => toggleKeyword(keyword)}
            >
              <span>{keyword}</span>
              <button className="mr-2 text-xs">&times;</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
