
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero: React.FC = () => {
  const shapeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation for the shape rotation
    const interval = setInterval(() => {
      if (shapeRef.current) {
        // Add a gentle rotation animation
        shapeRef.current.style.transform = `rotate(${Math.random() * 5 - 2.5}deg)`;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Animated background shape */}
      <div 
        ref={shapeRef}
        className="absolute -top-16 -right-16 md:-top-32 md:-right-32 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-red-100 to-red/20 transition-transform duration-1000"
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="z-10 text-center md:text-right order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkblue mb-6">
              ملابس داخلية مريحة<br />
              <span className="text-red">مع قمصان انيقة</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0 md:mr-0">
              نوفر ملابس رجالية تركية بجودة متميزة، وتصاميم خاصة عند الطلب، مع سرعة في التوريد وضمان الاستمرارية
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Link to="/contact">
                <Button className="bg-red hover:bg-red/90 text-white px-8 py-3 rounded-md text-lg">
                  طلب عرض أسعار
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="border-red text-red hover:bg-red hover:text-white px-8 py-3 rounded-md text-lg">
                  استعراض المنتجات
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Image showcase */}
          <div className="relative z-10 order-1 md:order-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-500 hover:rotate-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-darkblue">منتجاتنا المميزة</h3>
                <span className="text-red/80 text-sm">NO. 01</span>
              </div>
              
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <AspectRatio ratio={1/1} className="bg-gray-50 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src="/assets/weave.webp" 
                          alt="منتج مميز" 
                          className="object-contain max-h-[300px] hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </AspectRatio>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-darkblue">قميص قطني</h4>
                  <p className="text-gray-500 text-sm">مادة قطنية فاخرة</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0">+</Button>
                  <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0 bg-red/10 border-red/20">
                    <span className="sr-only">عرض المزيد</span>
                    <span className="text-red">→</span>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-beige animate-pulse" />
            <div className="absolute -top-10 right-10 w-6 h-6 rounded-full bg-red/20 animate-bounce" style={{animationDelay: '0.3s'}} />
            <div className="absolute top-12 -left-4 w-8 h-8 rounded-full bg-red/10 animate-bounce" style={{animationDelay: '0.7s'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
