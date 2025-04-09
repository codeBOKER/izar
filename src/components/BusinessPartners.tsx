
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '../hooks/use-mobile';

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "شركة الفاخر للتجارة",
    logo: "https://placehold.co/200x100/e2dad2/af2734?text=الفاخر",
    description: "شريك استراتيجي في توزيع منتجاتنا في المنطقة الشرقية"
  },
  {
    id: 2,
    name: "مجموعة الأناقة",
    logo: "https://placehold.co/200x100/e2dad2/af2734?text=الأناقة",
    description: "وكيل حصري لمنتجاتنا في المنطقة الغربية"
  },
  {
    id: 3,
    name: "الشركة العربية للملابس",
    logo: "https://placehold.co/200x100/e2dad2/af2734?text=العربية",
    description: "شريك في تصنيع وتوزيع منتجاتنا عالية الجودة"
  },
  {
    id: 4,
    name: "مؤسسة الجودة",
    logo: "https://placehold.co/200x100/e2dad2/af2734?text=الجودة",
    description: "شريك في ضمان جودة منتجاتنا ومطابقتها للمعايير العالمية"
  }
];

const BusinessPartners: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="py-16 bg-gradient-to-b from-white to-softgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-darkblue mb-4">شركاؤنا في النجاح</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نفخر بالتعاون مع أفضل الشركاء التجاريين لضمان جودة وانتشار منتجاتنا
          </p>
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-4'} gap-4 md:gap-6`}>
          {partners.map((partner) => (
            <Card key={partner.id} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="bg-beige py-4 px-2 flex items-center justify-center h-24 border-b border-gray-100">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-16 object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-md font-bold text-darkblue mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-600">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;
