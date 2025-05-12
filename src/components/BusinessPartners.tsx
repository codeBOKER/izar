
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface Brand {
  id: number;
  name: string;
  logo: string;
  link: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: "عزار الفاخرة",
    logo: "https://placehold.co/400x200/ffffff/af2734?text=عزار+الفاخرة",
    link: "/products/premium"
  },
  {
    id: 2,
    name: "عزار كلاسيك",
    logo: "https://placehold.co/400x200/ffffff/af2734?text=عزار+كلاسيك",
    link: "/products/classic"
  }
];

const BusinessPartners: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-2">علامات عزار</h2>
          <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
        </div>
        
        {/* Modern brand showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {brands.map((brand) => (
            <Link 
              key={brand.id} 
              to={brand.link}
              className="block overflow-hidden rounded-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="bg-gradient-to-br from-white to-beige/50 p-0.5 rounded-lg shadow-lg">
                <AspectRatio ratio={21/9} className="overflow-hidden rounded-lg bg-gradient-to-r from-white to-red-light/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="h-20 object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/80 to-transparent">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-darkblue">{brand.name}</h3>
                      <Button 
                        variant="ghost" 
                        className="text-darkblue hover:bg-red-light/20 hover:text-darkblue"
                        size="sm"
                      >
                        عرض المنتجات
                      </Button>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Values section with simpler design */}
        <div className="mt-16 bg-gradient-to-br from-white to-beige/20 rounded-xl shadow-md p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-red-light/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-darkblue" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-darkblue mb-2">جودة مضمونة</h4>
            </div>
            
            <div className="text-center">
              <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-red-light/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-darkblue" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-darkblue mb-2">تصاميم عصرية</h4>
            </div>
            
            <div className="text-center">
              <div className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-red-light/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-darkblue" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-darkblue mb-2">سعر مناسب</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;
