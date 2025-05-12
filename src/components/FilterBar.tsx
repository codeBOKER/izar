
import React, { useState, useEffect } from 'react';
import { Product, ProductSize, ProductColor } from '../data/products';
import { Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface FilterBarProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ products, onFilterChange }) => {
  const [selectedSizes, setSelectedSizes] = useState<ProductSize[]>([]);
  const [selectedColors, setSelectedColors] = useState<ProductColor[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  // Predefined keywords for filtering
  const keywords = ['شورت', 'فنيلة', 'بوكسر'];

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
  }, [selectedSizes, selectedColors, selectedKeywords, products, onFilterChange]);

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
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedKeywords([]);
  };

  // Translate color names to Arabic
  const colorNameArabic = (color: ProductColor): string => {
    const colorMap: Record<ProductColor, string> = {
      'white': 'أبيض',
      'blue': 'ازرق',
      'gray': 'رمادي',
      'black': 'أسود',
      'red': 'أحمر'
    };
    return colorMap[color] || color;
  };

  return (
    <div className="bg-red/5 rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-darkblue" />
          <h2 className="text-sm font-bold text-darkblue">تصفية المنتجات</h2>
        </div>
        {(selectedSizes.length > 0 || selectedColors.length > 0 || selectedKeywords.length > 0) && (
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sizes Filter */}
        <div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">المقاسات</h3>
            <ToggleGroup type="multiple" className="flex flex-wrap gap-2">
              {allSizes.map(size => (
                <ToggleGroupItem
                  key={size}
                  value={size}
                  variant={selectedSizes.includes(size) ? "default" : "outline"}
                  onClick={() => toggleSize(size)}
                  className="bg-red/10 text-xs"
                >
                  {size}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>

        {/* Colors Filter */}
        <div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">الألوان</h3>
            <ToggleGroup type="multiple" className="flex flex-wrap gap-2">
              {allColors.map(color => (
                <ToggleGroupItem
                  key={color}
                  value={color}
                  variant={selectedColors.includes(color) ? "default" : "outline"}
                  onClick={() => toggleColor(color)}
                  className="bg-red/10 text-xs flex items-center gap-1.5"
                >
                  <span
                    className="w-5 h-5 rounded-full inline-block"
                    style={{
                      backgroundColor:
                        color === 'white' ? '#ffffff' :
                        color === 'blue' ? '#af2734' : // Blue is actually red in the app
                        color === 'gray' ? '#9AA0A6' :
                        color === 'black' ? '#202124' :
                        color === 'red' ? '#EA4335' : '#ffffff'
                    }}
                  />
                  {/* <span>{colorNameArabic(color)}</span> */}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
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
      </div>

      {/* Filter chips for selected filters */}
      {(selectedSizes.length > 0 || selectedColors.length > 0 || selectedKeywords.length > 0) && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selectedSizes.map(size => (
            <div
              key={size}
              className="bg-softgray text-darkblue text-xs px-2 py-1 rounded-full flex items-center"
              onClick={() => toggleSize(size)}
            >
              <span>{size}</span>
              <button className="mr-2 text-xs">&times;</button>
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
                  className="w-4 h-4 rounded-full inline-block mt-1"
                  style={{
                    backgroundColor:
                      color === 'white' ? '#ffffff' :
                      color === 'blue' ? '#af2734' :
                      color === 'gray' ? '#9AA0A6' :
                      color === 'black' ? '#202124' :
                      color === 'red' ? '#EA4335' : '#ffffff'
                  }}
                />
                {/* {colorNameArabic(color)} */}
              </span>
              <button className="mr-2 text-xs">&times;</button>
            </div>
          ))}
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
