
import React from 'react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type FeatureProps = {
  title: string;
  description: string;
  icon: string;
};

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Circle image above the card */}
      <Avatar className="h-20 w-20 mb-4 border-4 border-white shadow-md z-10">
        <AvatarImage src={icon} alt={title} />
        <AvatarFallback className="bg-gray-100">{title.charAt(0)}</AvatarFallback>
      </Avatar>
      
      {/* Card with text */}
      <Card className="bg-white rounded-xl shadow-md overflow-hidden border-0 w-full mt-[-10px] pt-4">
        <div className="p-6 text-center">
          <h3 className="text-lg font-bold text-darkblue mb-3">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </Card>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const features: FeatureProps[] = [
    {
      title: "الجودة العالية",
      description: "منتجاتنا مصنوعة من أفضل المواد وبأعلى معايير الجودة",
      icon: "/assets/quality-icon.png",
    },
    {
      title: "التصاميم الفريدة",
      description: "نقدم تصاميم حصرية وأنيقة تناسب مختلف الأذواق",
      icon: "/assets/design-icon.png",
    },
    {
      title: "السعر المنافس",
      description: "أسعار مناسبة للجملة مع أفضل جودة في السوق",
      icon: "/assets/price-icon.png",
    },
    {
      title: "التوريد السريع",
      description: "نضمن سرعة في التوريد وتسليم المنتجات في الوقت المحدد",
      icon: "/assets/delivery-icon.png",
    },
  ];

  return (
    <div className="py-16 bg-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-4">ما يميزنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تعرف على أهم ما يميز منتجاتنا وخدماتنا عن غيرنا من الموردين
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
