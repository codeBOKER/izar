
import React, { useState, useEffect } from 'react';
import { Product, ProductSize, ProductColor } from '../data/products';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Filter, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ products, onFilterChange }) => {
  const [selectedSizes, setSelectedSizes] = useState<ProductSize[]>([]);
  const [selectedColors, setSelectedColors] = useState<ProductColor[]>([]);

  // Get all available sizes from products
  const allSizes = Array.from(
    new Set(products.flatMap(product => product.sizes))
  ) as ProductSize[];

  // Get all available colors from products
  const allColors = Array.from(
    new Set(products.flatMap(product => product.colors))
  ) as ProductColor[];

  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    if (selectedSizes.length > 0) {
      result = result.filter(product => 
        selectedSizes.some(size => product.sizes.includes(size))
      );
    }
    
    if (selectedColors.length > 0) {
      result = result.filter(product => 
        selectedColors.some(color => product.colors.includes(color))
      );
    }
    
    onFilterChange(result);
  }, [selectedSizes, selectedColors, products, onFilterChange]);

  // Toggle size selection
  const toggleSize = (size: ProductSize) => {
    setSelectedSizes(prev => 
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  // Toggle color selection
  const toggleColor = (color: ProductColor) => {
    setSelectedColors(prev => 
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  // Translate color names to Arabic
  const colorNameArabic = (color: ProductColor): string => {
    const colorMap: Record<ProductColor, string> = {
      'white': 'أبيض',
      'blue': 'أحمر',
      'gray': 'رمادي',
      'black': 'أسود',
      'red': 'أحمر'
    };
    return colorMap[color] || color;
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-darkblue" />
          <h2 className="text-sm font-bold text-darkblue">تصفية المنتجات</h2>
        </div>
        {(selectedSizes.length > 0 || selectedColors.length > 0) && (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sizes Filter */}
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="w-full justify-between">
                <span>المقاسات</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-3">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">اختر المقاسات</h3>
                <div className="flex flex-wrap gap-2">
                  {allSizes.map(size => (
                    <ToggleGroupItem
                      key={size}
                      value={size}
                      aria-label={`مقاس ${size}`}
                      data-state={selectedSizes.includes(size) ? "on" : "off"}
                      onClick={() => toggleSize(size)}
                      className="border border-gray-200 rounded-md px-2 py-1 text-xs"
                    >
                      {size}
                    </ToggleGroupItem>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Colors Filter */}
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="w-full justify-between">
                <span>الألوان</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-3">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">اختر الألوان</h3>
                <div className="flex flex-wrap gap-2">
                  {allColors.map(color => (
                    <div key={color} className="flex items-center">
                      <ToggleGroupItem
                        value={color}
                        aria-label={`لون ${colorNameArabic(color)}`}
                        data-state={selectedColors.includes(color) ? "on" : "off"}
                        onClick={() => toggleColor(color)}
                        className="flex items-center gap-1.5 border border-gray-200 rounded-md px-2 py-1 text-xs"
                      >
                        <span
                          className="w-3 h-3 rounded-full inline-block"
                          style={{
                            backgroundColor:
                              color === 'white' ? '#ffffff' :
                              color === 'blue' ? '#af2734' : // Blue is actually red in the app
                              color === 'gray' ? '#9AA0A6' :
                              color === 'black' ? '#202124' :
                              color === 'red' ? '#EA4335' : '#ffffff'
                          }}
                        />
                        <span>{colorNameArabic(color)}</span>
                      </ToggleGroupItem>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Filter chips for selected filters */}
      {(selectedSizes.length > 0 || selectedColors.length > 0) && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selectedSizes.map(size => (
            <div 
              key={size}
              className="bg-softgray text-darkblue text-xs px-2 py-1 rounded-full flex items-center"
              onClick={() => toggleSize(size)}
            >
              <span>مقاس: {size}</span>
              <button className="ml-1 text-xs">&times;</button>
            </div>
          ))}
          {selectedColors.map(color => (
            <div 
              key={color}
              className="bg-softgray text-darkblue text-xs px-2 py-1 rounded-full flex items-center"
              onClick={() => toggleColor(color)}
            >
              <span>
                <span
                  className="w-2 h-2 rounded-full inline-block mr-1"
                  style={{
                    backgroundColor:
                      color === 'white' ? '#ffffff' :
                      color === 'blue' ? '#af2734' :
                      color === 'gray' ? '#9AA0A6' :
                      color === 'black' ? '#202124' :
                      color === 'red' ? '#EA4335' : '#ffffff'
                  }}
                />
                {colorNameArabic(color)}
              </span>
              <button className="ml-1 text-xs">&times;</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
