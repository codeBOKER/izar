import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductTypeSection from '../components/ProductTypeSection';
import { Button } from "@/components/ui/button";
import { FilterBar } from '../components/FilterBar'; // Uses your new Floating Pill Filter
import { Sparkles, Star, Shield, Shirt, Palette, Award, Ruler } from "lucide-react";
import { supabase } from '../supabaseClient';

const ProductType: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const [categoryBlock, setCategoryBlock] = useState<any>(null);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // --- DATA FETCHING (Unchanged Logic) ---
  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      if (!categoryId) return;
      setLoading(true);
      try {
        const { data: categoryRows, error: categoryError } = await supabase
          .from('core_category')
          .select('*')
          .eq('id', categoryId)
          .limit(1);

        if (categoryError) throw categoryError;
        const category = categoryRows?.[0] || null;

        const { data: prodRows, error: prodError } = await supabase
          .from('core_product')
          .select('*')
          .eq('category_id', categoryId)
          .order('created_at', { ascending: false });
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

        const block = { category, products: transformed };
        setCategoryBlock(block);
        setAllProducts(transformed);
        setFilteredProducts(transformed);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryAndProducts();
  }, [categoryId]);

  // --- ICONS MAPPING ---
  const categoryAdvantages = categoryId === '3'
    ? [
        { text: 'قطن %100', Image: 'ctn.png' },
        { text: 'قطن معطر', icon: 'per.png' },
        { text: 'تصاميم عصرية', icon: 'iso.png' }       
       
      ]
    : [
        { text: 'أقمشة فاخرة', icon: 'per.png' },
        { text: 'تصاميم عصرية', icon: 'iso.png' },
        { text: 'جودة عالية', icon: 'ctn.png' }
      ];

  // --- SKELETON LOADING STATE ---
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="h-[50vh] bg-gray-200 animate-pulse" />
        <div className="container mx-auto px-4 -mt-12 relative z-10">
          <div className="h-32 bg-white rounded-2xl shadow-lg animate-pulse" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- ERROR STATE ---
  if (!categoryBlock?.category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">الفئة غير موجودة</h1>
          <Link to="/products">
            <Button variant="outline">العودة إلى المنتجات</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        
        {/* --- 1. CINEMATIC HERO SECTION --- */}
        <div className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
          {/* Background Image with slight zoom animation */}
          <div className="absolute inset-0 bg-slate-900">
             <img 
              src={categoryBlock.category.image}
              alt={categoryBlock.category.header}
              className="w-full h-full object-cover opacity-60 animate-in fade-in zoom-in duration-1000"
            />
          </div>
          
          {/* Gradient Overlay (Spotlight effect) */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-20">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-4 uppercase tracking-widest">
                <Sparkles size={14} className="text-yellow-400" />
                تشكيلة حصرية
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-2xl">
               {categoryBlock.category.header}
             </h1>
             
             <p className="text-slate-200 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
               {categoryBlock.category.description}
             </p>
          </div>
        </div>

        {/* --- 2. FLOATING GLASS FEATURES STRIP --- */}
        <div className="container mx-auto px-4 relative z-20 -mt-16 lg:-mt-24 mb-16">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-white/50 p-6 lg:p-10">
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
              
              {/* Advantages List */}
              <div className="flex-1 w-full overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                <div className="flex justify-around lg:justify-start gap-8 min-w-max">
                  {categoryAdvantages.map((advantage, index) => {
                    const IconOrImage: any = (advantage as any).image ?? (advantage as any).Image ?? (advantage as any).icon;
                    const isImage = typeof IconOrImage === 'string';
                    return (
                      <div key={index} className="group flex flex-col items-center gap-3">
                        {/* <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-2xl bg-red/5 text-red flex items-center justify-center transition-all duration-300 group-hover:bg-red group-hover:text-white group-hover:shadow-lg group-hover:shadow-red/30 group-hover:-translate-y-1 overflow-hidden"> */}
                          {isImage ? (
                            <img
                              src={IconOrImage.startsWith('/') ? IconOrImage : `/assets/advantages/${IconOrImage}`}
                              alt={advantage.text}
                              loading="lazy"
                              className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px] object-contain  max-w-[150px] max-h-[150px] transition-all duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <IconOrImage strokeWidth={1.5} size={20} />
                          )}
                        {/* </div> */}
                        {/* <span className="text-xs lg:text-sm font-bold text-slate-700 group-hover:text-red transition-colors">
                          {advantage.text}
                        </span> */}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Divider (Desktop Only) */}
              <div className="hidden lg:block w-px h-16 bg-slate-200" />

              {/* Sizes Chips */}
              <div className="flex-shrink-0 flex flex-col items-center lg:items-end gap-3">
                 <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <Ruler size={16} /> المقاسات المتاحة
                 </div>
                 <div className="flex flex-wrap justify-center gap-2">
                    {categoryBlock.category.sizes.split(",").map((size: string) => (
                      <span
                        key={size}
                        className="
                          px-3 py-1.5 rounded-lg 
                          bg-slate-100 border border-transparent 
                          text-slate-600 text-sm font-bold
                          transition-all duration-300
                          hover:border-red/30 hover:text-red hover:bg-white hover:shadow-sm
                        "
                      >
                        {size}
                      </span>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. STICKY FILTER & GRID --- */}
        <div className="container mx-auto px-4 pb-24">
          
          <div className="sticky top-4 z-30 mb-10">
             <FilterBar 
               baseUrl={`/products/${categoryId}`}
               onFilterChange={setFilteredProducts}
               initialProducts={allProducts}
               categoryId={categoryId}
             />
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductTypeSection
              typeLabel="" // We handled the title in the hero
              products={filteredProducts}
            />
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
               <div className="text-6xl mb-4">🔍</div>
               <h3 className="text-xl font-bold text-slate-800">لا توجد نتائج</h3>
               <p className="text-slate-500">جرب البحث بكلمات مختلفة</p>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductType;