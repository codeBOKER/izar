
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
              ملابس داخلية مريحة<br />
              <span className="text-red">مع قمصان انيقة</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0 md:mr-0">
              نوفر ملابس رجالية تركية بجودة متميزة، وتصاميم خاصة عند الطلب، مع سرعة في التوريد وضمان الاستمرارية
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Link to="/contact">
                <Button  className="bg-red hover:bg-red/90 text-white px-8 py-3 rounded-md text-lg">
                  طلب عرض أسعار
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline"  className="border-red text-red hover:bg-red hover:text-white px-8 py-3 rounded-md text-lg">
                  استعراض المنتجات
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-64 sm:h-80 md:h-96 w-full  rounded-xl  overflow-hidden">
              {/* Replace with actual product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src="/logo.png"
                    className="object-contain h-full w-full "            
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
