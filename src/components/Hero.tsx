import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

// USE IMAGES THAT REPRESENT CATEGORIES HERE
const SHOWCASE_IMAGES = [
  "https://i.imgur.com/qKSxQ7F.jpeg",
  "https://res.cloudinary.com/drfez4pmf/image/upload/v1769802045/my_store/%D9%85%D8%AC%D9%84%D8%AF%20%D8%AC%D8%AF%D9%8A%D8%AF%20%282%29/ehotb97bd75q422pwonu.webp",
  "https://i.imgur.com/ArnVwRg.jpeg",
  "https://res.cloudinary.com/drfez4pmf/image/upload/v1769802263/my_store/%D9%85%D8%AC%D9%84%D8%AF%20%D8%AC%D8%AF%D9%8A%D8%AF/ksvumoy3yrhkiyiqdatc.webp",
  "https://i.imgur.com/xIRZHPJ.jpeg",
  "https://res.cloudinary.com/drfez4pmf/image/upload/v1769801843/my_store/1%20%289%29/uxznqeczzdkefidyew5o.webp"
];

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  const spotRef = useRef<HTMLDivElement>(null);

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const r = spotRef.current?.getBoundingClientRect();
    if (!r || !spotRef.current) return;
    spotRef.current.style.setProperty('--x', `${e.clientX - r.left}px`);
    spotRef.current.style.setProperty('--y', `${e.clientY - r.top}px`);
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0];
    const r = spotRef.current?.getBoundingClientRect();
    if (!r || !spotRef.current) return;
    spotRef.current.style.setProperty('--x', `${t.clientX - r.left}px`);
    spotRef.current.style.setProperty('--y', `${t.clientY - r.top}px`);
  };
  
  return (
    <div
      ref={spotRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      // UPDATE 1: Reduced py-12 to py-4 on mobile
      className="spotlight-wrapper relative py-4 md:py-12 overflow-hidden"
    >
      <style>{`
        /* Moves the content from 0 to -100% of its own width */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        /* Pause animation on hover */
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      {/* Soft background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-red-50/40 to-white" />

      <div className="container mx-auto px-4">
        <div
          className="
            relative z-10
            rounded-[2.2rem]
            bg-white/80 backdrop-blur-xl
            border border-red-100
            /* UPDATE 2: Reduced pt-12 to pt-8 on mobile */
            pt-8 pb-8 px-5 md:p-12 lg:p-16
            transition-all duration-500
            hover:shadow-[0_40px_80px_rgba(220,38,38,0.15)]
            overflow-hidden
          "
        >
          {/* --- MAIN HERO CONTENT --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-10 lg:mb-16">
            
            {/* TEXT */}
            <div className="order-2 md:order-1 text-center md:text-right">
              <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs md:text-sm font-medium bg-red-100 text-red border border-red-200/50">
                صناعة تركية • جودة مضمونة
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-darkblue mb-4 md:mb-6">
                ملابس داخلية
                <br />
                <span className="text-red relative inline-block">
                  فاخرة ومريحة
                  <svg className="absolute -bottom-2 left-0 w-full h-2 md:h-3 text-red/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-gray-600 text-sm md:text-lg max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
                نوفر ملابس رجالية تركية بجودة عالية، تصميم أنيق، 
                تصنيع عند الطلب، وتوريد موثوق لعلامتك التجارية.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto bg-red text-white hover:bg-red-700 px-8 py-6 rounded-2xl text-base lg:text-lg shadow-lg shadow-red/25 transition-all duration-300 hover:scale-105">
                    طلب عرض أسعار
                  </Button>
                </Link>

                <Link to="/products">
                  <Button variant="outline" className="w-full sm:w-auto border-slate-200 text-slate-700 hover:border-red hover:text-red hover:bg-red/5 px-8 py-6 rounded-2xl text-base lg:text-lg transition-all duration-300">
                    استعراض المنتجات
                  </Button>
                </Link>
              </div>
            </div>

            {/* IMAGE */}
            <div className="order-1 md:order-2 flex justify-center relative">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-red-400/20 blur-3xl scale-90 group-hover:scale-110 transition-transform duration-700" />
                <img
                  src="/logo.png"
                  alt="Brand Logo"
                  className="relative z-10 h-48 sm:h-64 md:h-80 lg:h-96 object-contain drop-shadow-2xl transition-transform duration-700 group-hover:-translate-y-3"
                />
              </div>
            </div>
          </div>

          {/* --- INFINITE VISION SLIDER (Categories) --- */}
          <div className="relative w-full pt-6 border-t border-red-100/50" dir="ltr">
             
             {/* Fade edges mask */}
             <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-r from-white/80 to-transparent pointer-events-none" />
             <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-l from-white/80 to-transparent pointer-events-none" />

             <div className="flex overflow-hidden group">
                
                {/* TRACK 1 */}
                <div className="flex shrink-0 animate-scroll items-center justify-around min-w-full gap-3 md:gap-8 pr-3 md:pr-8">
                   {SHOWCASE_IMAGES.map((src, idx) => (
                      // UPDATE 3: Changed w-32 to w-24 on mobile
                      <div key={`t1-${idx}`} className="w-24 md:w-40 aspect-[3/4] relative shrink-0">
                         <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md">
                            <img src={src} alt="Showcase" className="w-full h-full object-cover" />
                         </div>
                      </div>
                   ))}
                </div>

                {/* TRACK 2 (Duplicate for seamless loop) */}
                <div className="flex shrink-0 animate-scroll items-center justify-around min-w-full gap-3 md:gap-8 pr-3 md:pr-8">
                   {SHOWCASE_IMAGES.map((src, idx) => (
                      // UPDATE 3: Changed w-32 to w-24 on mobile
                      <div key={`t2-${idx}`} className="w-24 md:w-40 aspect-[3/4] relative shrink-0">
                         <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md">
                            <img src={src} alt="Showcase" className="w-full h-full object-cover" />
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;