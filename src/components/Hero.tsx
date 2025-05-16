
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const Hero: React.FC = () => {
  const mainShapeRef = useRef<HTMLDivElement>(null);
  const productImageRef = useRef<HTMLDivElement>(null);
  const smallShape1Ref = useRef<HTMLDivElement>(null);
  const smallShape2Ref = useRef<HTMLDivElement>(null);
  const smallShape3Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation for the main shape rotation
    const mainShapeInterval = setInterval(() => {
      if (mainShapeRef.current) {
        // Add a gentle rotation animation
        mainShapeRef.current.style.transform = `rotate(${Math.random() * 4 - 2}deg)`;
      }
    }, 1000); // Rotate every second

    // Animation for the product image with slight delay
    const productImageInterval = setInterval(() => {
      if (productImageRef.current) {
        // Add a gentle floating animation with slight delay
        setTimeout(() => {
          productImageRef.current!.style.transform = `translateY(${Math.random() * 5 - 2.5}px) rotate(${Math.random() * 3 - 1.5}deg)`;
        }, 200);
      }
    }, 1000);

    // Animation for the small shapes with different delays
    const smallShapesInterval = setInterval(() => {
      if (smallShape1Ref.current) {
        setTimeout(() => {
          smallShape1Ref.current!.style.transform = `translateY(${Math.random() * 8 - 4}px)`;
        }, 150);
      }
      if (smallShape2Ref.current) {
        setTimeout(() => {
          smallShape2Ref.current!.style.transform = `translateX(${Math.random() * 8 - 4}px)`;
        }, 300);
      }
      if (smallShape3Ref.current) {
        setTimeout(() => {
          smallShape3Ref.current!.style.transform = `translate(${Math.random() * 6 - 3}px, ${Math.random() * 6 - 3}px)`;
        }, 450);
      }
    }, 1000);

    return () => {
      clearInterval(mainShapeInterval);
      clearInterval(productImageInterval);
      clearInterval(smallShapesInterval);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-white py-12">
      {/* Main animated background shape in upper left corner */}
      <div 
        ref={mainShapeRef}
        className="absolute -top-48 -left-48 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-[40%] bg-gradient-to-r from-red/20 to-red/5 transition-transform duration-1000"
      />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="z-10 text-center md:text-right">
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
          
          {/* Product showcase with animation */}
          <div className="relative z-10">
            <div 
              ref={productImageRef}
              className="relative bg-white rounded-2xl shadow-lg p-6 transition-all duration-500 ease-in-out"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-darkblue">منتجاتنا المميزة</h3>
                <span className="text-red text-sm font-medium">NO. 01</span>
              </div>
              
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <AspectRatio ratio={1/1} className="bg-gray-50 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src="/assets/half-sleeve-khonagi-blue.png"
                          alt="منتج مميز" 
                          className="object-contain h-[280px] hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </AspectRatio>
                  </CarouselItem>
                  <CarouselItem>
                    <AspectRatio ratio={1/1} className="bg-gray-50 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src="/assets/half-sleeve-khonagi-white.png" 
                          alt="منتج مميز آخر" 
                          className="object-contain h-[280px] hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </AspectRatio>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
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
            
            {/* Floating animated elements */}
            <div 
              ref={smallShape1Ref}
              className="absolute -top-10 left-10 w-12 h-12 rounded-full bg-beige transition-transform duration-1000 ease-in-out"
            />
            <div 
              ref={smallShape2Ref}
              className="absolute top-1/2 -right-6 w-8 h-8 rounded-full bg-red/20 transition-transform duration-1000 ease-in-out"
            />
            <div 
              ref={smallShape3Ref}
              className="absolute -bottom-4 left-1/4 w-10 h-10 rounded-full bg-red/10 transition-transform duration-1000 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
