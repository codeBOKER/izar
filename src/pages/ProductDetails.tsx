import React, { useEffect, useMemo, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { supabase } from "../supabaseClient";
import { Product, ProductColor } from "../data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Heart, ShoppingBag, Ruler } from "lucide-react";

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [colors, setColors] = useState<ProductColor[]>([]);
  const [category, setCategory] = useState<any>(null);
  const [selectedColorId, setSelectedColorId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // --- SPOTLIGHT LOGIC (Desktop Only) ---
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showSpotlight, setShowSpotlight] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // --- DATA FETCHING ---
  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      setLoading(true);
      try {
        const { data: prodRows, error: prodError } = await supabase
          .from("core_product")
          .select("*")
          .eq("id", productId)
          .limit(1);
        if (prodError) throw prodError;
        const p = prodRows?.[0];
        if (!p) { setProduct(null); return; }

        const { data: colorRows, error: colorError } = await supabase
          .from("core_productcolor")
          .select("*")
          .eq("product_id", p.id);
        if (colorError) throw colorError;

        const transformedProduct: Product = {
          id: p.id,
          header: p.header,
          description: p.description,
          category_id: String(p.category_id),
          colors: (colorRows ?? []).map((c: any) => ({
            id: c.id,
            name: c.name,
            color_code: c.color_code,
            image: c.image,
            is_available: c.is_available,
            product: c.product_id,
          })),
        };

        setProduct(transformedProduct);
        setColors(transformedProduct.colors);
        setSelectedColorId(transformedProduct.colors[0]?.id ?? null);

        const { data: catRows } = await supabase
          .from("core_category")
          .select("*")
          .eq("id", transformedProduct.category_id)
          .limit(1);
        setCategory(catRows?.[0] || null);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const selectedColor = useMemo(
    () => colors.find((c) => c.id === selectedColorId) ?? null,
    [colors, selectedColorId]
  );

  // --- LOADING SKELETON (Responsive) ---
  if (loading) {
    return (
      <div className="min-h-screen bg-white pb-20">
        <Header />
        <div className="container mx-auto px-4 py-6 space-y-6">
          <div className="aspect-[3/4] lg:aspect-[4/5] bg-gray-100 rounded-3xl animate-pulse" />
          <div className="space-y-4">
            <div className="h-8 bg-gray-100 w-3/4 rounded animate-pulse" />
            <div className="h-4 bg-gray-100 w-full rounded animate-pulse" />
            <div className="h-20 bg-gray-100 w-full rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) return null; // Or Error Component

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 pb-24 lg:pb-0">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-6 lg:py-12">
        {/* Breadcrumb - Hidden on mobile to save space, visible on Desktop */}
        <div className="hidden lg:flex mb-6 items-center gap-2 text-sm text-slate-500">
          <Link to="/products" className="hover:text-red transition-colors flex items-center gap-1">
             <ArrowLeft size={14} /> المنتجات
          </Link>
          <span className="opacity-50">/</span>
          <span className="text-slate-900 font-medium">{product.header}</span>
        </div>

        {/* --- MAIN LAYOUT GRID --- */}
        {/* Mobile: Flex Column | Desktop: 12-Col Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* --- LEFT: IMAGE (Mobile Full Width / Desktop Sticky) --- */}
          <div className="w-full lg:col-span-7 lg:sticky lg:top-24 space-y-4 lg:space-y-6">
            
            {/* Main Image Stage */}
            <div 
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setShowSpotlight(true)}
              onMouseLeave={() => setShowSpotlight(false)}
              className="
                relative aspect-[3/4] lg:aspect-[4/5] 
                bg-beige rounded-3xl overflow-hidden 
                shadow-sm lg:shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                group
              "
            >
              {/* Back Button Overlay for Mobile */}
              <Link to="/products" className="absolute top-4 left-4 z-20 p-2 bg-white/80 backdrop-blur rounded-full lg:hidden">
                <ArrowLeft size={20} className="text-slate-800" />
              </Link>

              {selectedColor && (
                <img
                  src={selectedColor.image}
                  alt={product.header}
                  className="w-full h-full object-cover object-center transition-transform duration-700 lg:group-hover:scale-110"
                />
              )}

              {/* Spotlight Overlay - HIDDEN on Mobile (Touch devices) to save performance */}
              <div 
                className="hidden lg:block pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                style={{
                  opacity: showSpotlight ? 1 : 0,
                  background: `radial-gradient(
                    600px circle at ${cursorPos.x}px ${cursorPos.y}px, 
                    rgba(255, 255, 255, 0.3), 
                    rgba(0, 0, 0, 0.05) 40%
                  )`
                }}
              />
            </div>

            {/* Thumbnails - Horizontal Scroll with Snap */}
            <div className="flex gap-3 overflow-x-auto pb-2 px-1 snap-x scrollbar-hide">
              {colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColorId(c.id)}
                  className={`
                    snap-start flex-shrink-0 relative w-16 h-20 lg:w-20 lg:h-24 rounded-xl overflow-hidden 
                    transition-all duration-300 border-2
                    ${selectedColorId === c.id 
                      ? "border-red scale-105 shadow-md" 
                      : "border-transparent opacity-80"}
                  `}
                >
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT: DETAILS (Scrolls naturally) --- */}
          <div className="w-full lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            
            {/* Header & Price */}
            <div>
              <div className="flex justify-between items-start">
                {category && (
                  <span className="inline-block px-3 py-1 bg-red/5 text-red text-[10px] lg:text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                    {category.name}
                  </span>
                )}
                <button className="text-slate-400 hover:text-darkblue transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
              
              <h1 className="text-2xl lg:text-4xl font-bold text-darkblue leading-tight mb-2 lg:mb-4">
                {product.header}
              </h1>
              
              <p className="text-slate-500 text-sm lg:text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="h-px bg-slate-100 w-full" />

            {/* Size Selector */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-darkblue">المقاس</span>
                <button className="flex items-center gap-1 text-xs text-slate-400 hover:text-red">
                  <Ruler size={12} /> دليل المقاسات
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {(category?.sizes ? String(category.sizes).split(",") : []).map((s: string) => (
                  <button
                    key={s}
                    className="
                      min-w-[3rem] h-10 lg:min-w-[3.5rem] lg:h-12 px-3 rounded-lg 
                      border border-slate-200 bg-white
                      text-slate-600 font-medium text-sm
                      transition-all duration-200
                      hover:border-red hover:text-red active:scale-95
                      focus:ring-1 focus:ring-red focus:border-red focus:text-red
                    "
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Actions (Hidden on Mobile) */}
            <div className="hidden lg:flex flex-col gap-4 mt-auto pt-6">
               <div className="flex gap-4">
                  <Button className="flex-1 h-14 text-lg bg-darkblue hover:bg-slate-800 text-white rounded-2xl shadow-xl shadow-darkblue/20">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    تواصل معنا لطلب المنتج
                  </Button>
                  <button className="h-14 w-14 flex items-center justify-center rounded-2xl border border-slate-200 text-slate-400 hover:text-red hover:border-red hover:bg-red/5 transition-colors">
                    <Heart size={24} />
                  </button>
               </div>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 lg:p-4 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-darkblue text-xs lg:text-sm mb-1">جودة عالية</h4>
                <p className="text-[10px] lg:text-xs text-slate-500">خامات ممتازة وتصنيع دقيق</p>
              </div>
              <div className="p-3 lg:p-4 bg-gray-50 rounded-xl">
                <h4 className="font-bold text-darkblue text-xs lg:text-sm mb-1">استبدال سهل</h4>
                <p className="text-[10px] lg:text-xs text-slate-500">خلال 14 يوم</p>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* --- MOBILE STICKY BOTTOM BAR --- */}
      {/* This only appears on mobile screens */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 lg:hidden z-50 safe-area-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex gap-3">
          <Button className="flex-1 h-12 bg-darkblue text-white rounded-xl shadow-lg">
            تواصل معنا لطلب المنتج
          </Button>
          <button className="h-12 w-12 flex items-center justify-center rounded-xl border border-gray-200 text-slate-400">
             <Heart size={20} />
          </button>
        </div>
      </div>
      
      {/* Hide footer on mobile if it feels too cluttered, or keep it. Often hidden in product details. */}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;