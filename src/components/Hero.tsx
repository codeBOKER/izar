
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative bg-gradient-to-r from-slate-50 to-softgray">
      <div className="container mx-auto lg:pr-12 lg:pl-0 py-2 md:py-16 px-2 md:pr-12">
        <div className="flex flex-col-reverse md:flex-row lg:items-cente">
          <div className="lg:w-2/3 md:w-1/2 text-center md:text-right mb-10 md:mb-0 mt-3 md:mt-0 flex flex-col justify-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-darkblue mb-3">
              ملابس داخلية مريحة<br />
              <span className="text-red">مع قمصان انيقة</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 md:mr-0 lg:text-lg md:text-sm lg:mb-10">
              نوفر ملابس رجالية تركية بجودة متميزة، وتصاميم خاصة عند الطلب، مع سرعة في التوريد وضمان الاستمرارية
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Link to="/contact">
                <Button className="bg-red hover:bg-red/90 text-white lg:px-8 px-8 lg:py-6 py-3 rounded-md lg:text-lg md:text-sm text-lg md:px-5">
                  طلب عرض أسعار
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="border-red text-red hover:bg-red hover:text-white lg:px-8 px-8 lg:py-6 py-3 rounded-md lg:text-lg md:text-sm text-lg md:px-5">
                  استعراض المنتجات
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full">
            <div className="flex items-center justify-center h-60 sm:h-72 md:h-80 lg:h-auto w-full">
              <img
                src="/logo.png"
                className="object-contain h-full max-h-full md:max-w-full md:w-[280px] lg:w-[500px] md:ml-0 lg:ml-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
