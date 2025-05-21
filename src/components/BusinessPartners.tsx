import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Check, Shield, Award } from "lucide-react";

interface Brand {
  id: number;
  name: string;
  logo: string;
  link: string;
  bgImage: string; // Add background image URL property
}

const brands: Brand[] = [
  {
    id: 1,
    name: "BAJHAM",
    logo: "https://placehold.co/400x200/ffffff/af2734?text=عزار+الفاخرة",
    link: "/products/premium",
    bgImage: "/assets/weave-red.webp"
  },
  {
    id: 2,
    name: "ازار الفاخرة",
    logo: "https://placehold.co/400x200/ffffff/af2734?text=عزار+كلاسيك",
    link: "/products/classic",
    bgImage: "/assets/weave-white.webp"
  }
];

const BusinessPartners: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-2">علامات تابعة لـــ ازار</h2>
          <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
        </div>
        
        {/* Modern brand showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {brands.map((brand) => (             
              <div
                className="relative p-0.5 rounded-lg shadow-lg bg-cover bg-center rounded-xl overflow-hidden group"
                style={{ backgroundImage: `url(${brand.bgImage})` }}
              >
                {/* Dark overlay with blur for background filter */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-0 group-hover:backdrop-blur-0 transition-all duration-300" />
                 <AspectRatio ratio={21/9} className="relative overflow-hidden rounded-lg z-10">
                <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white transition-all duration-300 group-hover:text-5xl">
                    {brand.name}
                </h1>
                </AspectRatio>
              </div>
            
          ))}
        </div>
        
        {/* Values section with expanded advantages */}
        <div className="mt-16 bg-gradient-to-br from-white to-beige/20 rounded-xl shadow-md p-8 mx-auto">
          <h3 className="text-xl font-bold text-darkblue mb-6 text-center">مزايا منتجاتنا</h3>
          
          {/* Advantages section - always two per row on mobile, three per row on desktop, full width on desktop */}
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen max-w-none grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-16">
            <div className="text-center">
              <div className="mb-4 mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-red-light/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-darkblue" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-darkblue mb-1 sm:mb-2">جودة مضمونة</h4>
              <p className="text-xs sm:text-sm text-gray-600">أقمشة مختارة بعناية وإنتاج يخضع للرقابة المستمرة</p>
            </div>
            {/* ...existing advantage cards... */}
            <div className="text-center">
              <div className="mb-4 mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-red-light/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-darkblue" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-darkblue mb-1 sm:mb-2">تصاميم عصرية</h4>
              <p className="text-xs sm:text-sm text-gray-600">تواكب أحدث صيحات الموضة وتناسب الذوق العربي الأصيل</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-red-light/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-darkblue" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-darkblue mb-1 sm:mb-2">سعر مناسب</h4>
              <p className="text-xs sm:text-sm text-gray-600">أفضل سعر في السوق مع الحفاظ على جودة المنتج</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-red-light/20">
                <Check className="h-6 w-6 sm:h-8 sm:w-8 text-darkblue" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-darkblue mb-1 sm:mb-2">خدمة سريعة</h4>
              <p className="text-xs sm:text-sm text-gray-600">توصيل سريع وفعال لجميع المناطق</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-red-light/20">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-darkblue" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-darkblue mb-1 sm:mb-2">الدعم الفني</h4>
              <p className="text-xs sm:text-sm text-gray-600">دعم فني لجميع المنتجات</p>
            </div>
            <div className="text-center">
              <div className="mb-4 mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-red-light/20">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-darkblue" />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-darkblue mb-1 sm:mb-2">تصدير عالمي</h4>
              <p className="text-xs sm:text-sm text-gray-600">نصدر منتاجاتنا لدول المنطقة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;
