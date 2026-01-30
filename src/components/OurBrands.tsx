import React, { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function OurBrands() {
  return (
    <section className="py-12 lg:py-20 bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-6xl mx-auto">
        
        <div className="mb-8 lg:mb-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">علاماتنا الاخرى</h2>
          <p className="text-slate-500 mt-2 text-sm lg:text-base">نقدم لكم أرقى العلامات التجارية</p>
        </div>

        {/* Standard Grid: 2 Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* CARD 1: BAJHAM (Standard Cover) */}
          <BrandCard
            name="BAJHAM"
            image="/assets/brands/bajham.jpg"
            layout="cover"
          />

          {/* CARD 2: IZAR (Contained Image + Green Background) */}
          <BrandCard
            name="ROZE"
            image="/assets/brands/roze.png"
            layout="contain"
            accentColor="#064c47" 
          />
          
        </div>
      </div>
    </section>
  );
}

interface BrandCardProps {
  name: string;
  image: string;
  layout?: "cover" | "contain";
  accentColor?: string;
}

function BrandCard({ 
  name, 
  image, 
  layout = "cover", 
  accentColor = "#000000"
}: BrandCardProps) {
  
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  // --- STYLING LOGIC ---
  const isContain = layout === "contain";

  // If contain: Center the image. If cover: Fill the card.
  const containerStyle = isContain 
    ? "flex items-center justify-center" 
    : "";

  const imgStyle = isContain
    ? "w-full h-auto object-contain max-h-[60%]" // Restrict height so we see the green background
    : "w-full h-full object-cover";

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`
        relative group block 
        h-[400px] lg:h-[500px] w-full 
        rounded-[2rem] overflow-hidden 
        shadow-sm border border-gray-100
        lg:cursor-none 
        cursor-pointer
      `}
    >
      {/* --- LAYER 1: BASE STATE (COLORFUL BY DEFAULT) --- */}
      <div 
        className={`absolute inset-0 ${containerStyle}`}
        style={{
          backgroundColor: isContain ? accentColor : "#0f172a"
        }}
      >
        <img
          src={image}
          alt={name}
          className={`
            ${imgStyle}
            opacity-100
            transition-transform duration-700 ease-out group-hover:scale-105
          `}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* --- LAYER 2: SPOTLIGHT REVEAL (ON STATE) --- */}
      <div 
        className={`hidden lg:flex absolute inset-0 z-10 transition-opacity duration-200 ${containerStyle}`}
        style={{
          opacity: opacity,
          maskImage: `radial-gradient(350px circle at ${pos.x}% ${pos.y}%, black, transparent)`,
          WebkitMaskImage: `radial-gradient(350px circle at ${pos.x}% ${pos.y}%, black, transparent)`,
          // Here we apply the Green Background
          backgroundColor: isContain ? accentColor : undefined
        }}
      >
        <img
          src={image}
          alt={name}
          className={`${imgStyle} transition-transform duration-700 ease-out group-hover:scale-105`}
        />
      </div>

      {/* --- LAYER 3: TEXT --- */}
      <div 
        className="absolute bottom-0 left-0 w-full p-8 lg:p-10 z-20 pointer-events-none"
        style={{
          transform: `translate(${opacity ? (pos.x - 50) / 40 : 0}px, ${opacity ? (pos.y - 50) / 40 : 0}px)`
        }}
      >
        <div className="border-l-[6px] border-red-600 pl-6 transition-all duration-300 lg:group-hover:pl-8">
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-none tracking-tighter drop-shadow-lg">
            {name}
          </h2>
        </div>
      </div>

      {/* --- LAYER 4: CUSTOM CURSOR --- */}
      <div
        className="
          hidden lg:flex
          absolute w-24 h-24 bg-red-600 rounded-full z-30
          items-center justify-center
          pointer-events-none text-white
          shadow-[0_0_30px_rgba(220,38,38,0.4)]
          transition-opacity duration-300 ease-out
        "
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: `translate(-50%, -50%) scale(${opacity})`,
          opacity: opacity,
        }}
      >
        <ArrowUpRight size={32} strokeWidth={1.5} />
      </div>
      
      {/* Mobile Icon */}
      <div className="absolute bottom-6 right-6 lg:hidden text-white/80">
         <ArrowUpRight size={28} />
      </div>

    </div>
  );
}
