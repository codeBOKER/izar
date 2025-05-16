
import React from 'react';
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type FeatureProps = {
  title: string;
  description: string;
  icon: string;
};

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <Card className="bg-white rounded-3xl shadow-md overflow-hidden border-0">
      <div className="p-4">
        <AspectRatio ratio={1/1} className="bg-gray-100 rounded-2xl mb-4">
          <div className="flex items-center justify-center h-full w-full">
            <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          </div>
        </AspectRatio>
        
        <h3 className="text-lg font-bold text-darkblue mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
          <div className="flex space-x-2">
            <span className="text-red font-bold">{title}</span>
          </div>
        </div>
      </div>
    </Card>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
