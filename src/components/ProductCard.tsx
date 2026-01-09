import React, { useState, useCallback, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product, ProductColor } from '../data/products';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const middleIndex = Math.floor(product.colors.length / 2);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[middleIndex]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  
  // Get the current color index
  const currentIndex = product.colors.findIndex(color => color.id === selectedColor.id);
  
  // Handle navigation between colors
  const navigateColor = useCallback((direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentIndex > 0) {
      setSelectedColor(product.colors[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < product.colors.length - 1) {
      setSelectedColor(product.colors[currentIndex + 1]);
    }
  }, [currentIndex, product.colors]);

  // Detect RTL to align navigation with visual expectations
  const isRTL = typeof document !== 'undefined' && ((document as any).dir === 'rtl' || document.documentElement?.dir === 'rtl');

  // Handle swipe to change color
  const handleSwipe = useCallback((direction: 'left' | 'right') => {
    // In RTL, invert logical next/prev to match visual motion
    if (direction === 'right') {
      navigateColor(isRTL ? 'prev' : 'next');
    } else {
      navigateColor(isRTL ? 'next' : 'prev');
    }
  }, [navigateColor, isRTL]);

  // Configure swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    trackMouse: false,
    preventScrollOnSwipe: true,
    swipeDuration: 300,
    touchEventOptions: { passive: true },
  });
  
  // Get the image based on selected color
  const getImageSrc = () => {
    return selectedColor.image;
  };

  useEffect(() => {
    setIsLoading(true);
  }, [selectedColor.id]);

  // Check if navigation arrows should be shown (desktop only)
  const showArrows = product.colors.length > 1;

  return <div
  className="
    product-card
    bg-white
    rounded-2xl
    overflow-hidden
    transition-all duration-500
    border border-transparent
    hover:border-red/30
    hover:shadow-[0_25px_50px_rgba(220,38,38,0.15)]
  "
>
  <div
    {...swipeHandlers}
    className="group relative aspect-[3/4] bg-beige overflow-hidden touch-none rounded-2xl"
  >
    {/* Click zones للتنقل */}
    <div
      onClick={() => navigateColor("prev")}
      className="absolute inset-y-0 left-0 w-1/3 cursor-w-resize z-10"
    />
    <div
      onClick={() => navigateColor("next")}
      className="absolute rounded-2xl inset-y-0 right-0 w-1/3 cursor-e-resize z-10"
    />

    {/* Center click zone to open product details */}
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="absolute inset-y-0 left-1/3 w-1/3 cursor-pointer z-50"
      aria-label={`عرض تفاصيل ${product.header}`}
      title={`عرض تفاصيل ${product.header}`}
      role="button"
    />

    
    <img
      key={selectedColor.id}
      src={getImageSrc()}
      alt={product.header}
      className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105`}
      draggable={false}
      onLoad={() => setIsLoading(false)}
    />

    {/* Loader */}
    {isLoading && (
      <div className="absolute inset-0 grid place-items-center bg-white">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-red/60 border-t-transparent" />
      </div>
    )}

    {/* اسم المنتج وشريط أسفل الصورة */}
    <div className="absolute bottom-0 w-full bg-white/25 backdrop-blur-md py-2 px-3 flex justify-between items-center rounded-b-2xl">
      <h3 className="text-sm font-bold text-darkblue group-hover:text-red transition-colors">
        {product.header}
      </h3>

      {/* Progress Indicator */}
      {product.colors.length > 1 && (
        <div className="h-1 w-16 bg-black/20 rounded overflow-hidden">
          <div
            className="h-full bg-red transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / product.colors.length) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  </div>
</div>

};

export default ProductCard;
