
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-slate-50 to-softgray">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-right mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkblue mb-6">
              ملابس رجالية بالجملة <br />
              <span className="text-red">لتجار التجزئة</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0 md:mr-0">
              نقدم أفضل الملابس الداخلية بالجملة لمحلات التجزئة وتجار الجملة، بأسعار منافسة وجودة استثنائية تناسب احتياجات عملائك.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Link to="/products">
                <Button className="bg-red hover:bg-red/90 text-white px-8 py-3 rounded-md text-lg">
                  تصفح المنتجات
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-red text-red hover:bg-red hover:text-white px-8 py-3 rounded-md text-lg">
                  طلب عرض سعر
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-64 sm:h-80 md:h-96 w-full bg-white rounded-xl shadow-lg overflow-hidden border border-red/20">
              {/* Replace with actual product image */}
              <div className="absolute inset-0 flex items-center justify-center bg-beige">
                <img 
                  src="/basic-img.jpg"
                  alt="مجموعة ملابس داخلية بالجملة" 
                  className="object-contain h-full w-full p-8"
                />
              </div>
              <div className="absolute top-4 right-4 bg-red text-white text-sm py-1 px-3 rounded-full">
                أسعار خاصة للجملة
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-red flex items-center justify-center text-white text-center p-2">
              <div>
                <div className="text-xl font-bold">خصومات</div>
                <div className="text-xs">للكميات</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
