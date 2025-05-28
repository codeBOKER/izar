
import React, { useState, useEffect } from 'react';
import { Product } from '../data/products';
import { Filter, X, Search as SearchIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface FilterBarProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ products, onFilterChange }) => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isOpen, setIsOpen] = useState(true);
  
  // Predefined keywords for filtering
  const keywords = ['شورت', 'فنيلة', 'بوكسر'];

  // Apply filters
  useEffect(() => {
    let result = [...products];

    // Apply keyword filter
    if (selectedKeywords.length > 0) {
      result = result.filter(product =>
        selectedKeywords.some(keyword =>
          product.name.includes(keyword) ||
          product.typeArabic.includes(keyword) ||
          product.description.includes(keyword)
        )
      );
    }

    // Apply search filter
    if (searchQuery.trim() !== '') {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.typeArabic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    onFilterChange(result);
  }, [selectedKeywords, searchQuery, products, onFilterChange]);

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
    setSearchQuery('');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-darkblue" />
            <h2 className="text-sm font-bold text-darkblue">تصفية المنتجات</h2>
          </div>
          <div className="flex items-center gap-2">
            {(selectedKeywords.length > 0 || searchQuery.trim() !== '') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="text-xs hover:text-red/90"
              >
                إعادة ضبط
              </Button>
            )}
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="text-darkblue">
                {isOpen ? <X size={16} /> : <Filter size={16} />}
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent>
          {/* Search Field */}
          <div className="mb-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input
                type="text"
                placeholder="ابحث عن منتج..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-darkblue"
              />
            </div>
          </div>

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

          {/* Filter chips for selected filters */}
          {selectedKeywords.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedKeywords.map(keyword => (
                <div
                  key={keyword}
                  className="bg-softgray text-darkblue text-xs px-2 py-1 rounded-full flex items-center cursor-pointer"
                  onClick={() => toggleKeyword(keyword)}
                >
                  <span>{keyword}</span>
                  <button className="mr-2 text-xs">&times;</button>
                </div>
              ))}
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
