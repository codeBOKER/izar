import React from 'react';
import axios from 'axios'
import { Card, CardContent } from "./ui/card";
import { Link } from 'react-router-dom';
import  ProductCard from './ProductCard';
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from 'react';
import { useIsMobile } from "../hooks/use-mobile";
import { supabase } from '../supabaseClient';

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState({});
  const isMobile = useIsMobile();
  
  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase.from('core_category').select('*')
      if (error) console.error(error)
      else {
        setCategories(data)
        // Fetch last 2 products for each category
        const productsMap = {}
        for (const category of data) {
          const { data: products, error: productError } = await supabase
            .from('core_product')
            .select('*')
            .eq('category_id', category.id)
            .order('created_at', { ascending: false })
            .limit(2)

          if (!productError && products) {
            const productsWithColors = []
            for (const product of products) {
              const { data: colors, error: colorsError } = await supabase
                .from('core_productcolor')
                .select('*')
                .eq('product_id', product.id)

              if (!colorsError && colors) {
                productsWithColors.push({ ...product, colors })
              } else {
                productsWithColors.push({ ...product, colors: [] })
              }
            }
            productsMap[category.id] = productsWithColors
          } else {
            productsMap[category.id] = []
          }
        }
        setCategoryProducts(productsMap)
      }
    }
    loadData()
  }, [])
  return <div
  className="py-16 spotlight-wrapper relative"
  id="categories-spotlight"
>
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-red-50/20 to-white" />
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-3xl font-bold text-center text-darkblue mb-12">
      تصفح حسب الفئة
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {categories.map((categoryObj) => (
        <Card
          key={categoryObj.id}
          className="
            overflow-hidden
            group
            border-0
            relative
            bg-white
            rounded-2xl
            transition-all
            duration-500
            hover:shadow-[0_30px_60px_rgba(220,38,38,0.18)]
          "
        >
          {/* IMAGE PART */}
          <div className="relative h-64 md:h-72 overflow-hidden bg-white">
            <Link to={`/products/${String(categoryObj.id)}/`}>
              <img 
                src={categoryObj.image}
                alt={categoryObj.header}
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                  cursor-pointer
                "
              />

              {/* Gradient overlay */}
              <div className="
                absolute inset-0
                bg-gradient-to-t
                from-black/90 via-black/60 to-transparent
                flex flex-col justify-end
              ">
                <div className="p-4 md:p-6 text-white">
                  <h3 className="
                    text-xl md:text-2xl font-bold mb-1 md:mb-2
                    transition-colors duration-300
                    group-hover:text-red
                  ">
                    {categoryObj.header}
                  </h3>

                  <p className="text-white/80 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                    {categoryObj.description}
                  </p>

                  <div className="
                    inline-flex items-center
                    bg-white/20 backdrop-blur-sm
                    px-3 py-1 rounded-full
                  ">
                    <span className="text-xs font-medium text-white ml-1">
                      المقاسات:
                    </span>
                    <div className="flex flex-wrap gap-0.5">
                      {(categoryObj.sizes ?? "")
                        .split(",")
                        .filter(Boolean)
                        .slice(0, isMobile ? 5 : undefined)
                        .map((size, index, arr) => (
                          <span key={index} className="text-xs text-white">
                            {size}{index < arr.length - 1 ? "، " : ""}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* PRODUCTS PREVIEW */}
          {categoryProducts[categoryObj.id]?.length > 0 && (
            <CardContent className="p-4 md:p-6">
              <div className="mb-4 flex justify-between items-center">
                <h4 className="text-base md:text-lg font-medium text-darkblue">
                  منتجات مختارة
                </h4>

                <Link
                  to={`/products/${String(categoryObj.id)}/`}
                  className="
                    flex items-center gap-1
                    text-red text-sm font-medium
                    hover:text-darkblue
                    transition-colors
                  "
                >
                  عرض الكل
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {categoryProducts[categoryObj.id].map((product: any) => (
                  <div
                    key={product.id}
                    className="
                      transition-transform duration-300
                      hover:scale-[1.03]
                    "
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      ))}

    </div>
  </div>
</div>

};

export default CategoryList;
