
import React from 'react';
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
    <div className="py-16 bg-softgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkblue mb-4">شركاؤنا في النجاح</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نفخر بالتعاون مع أفضل الشركاء التجاريين لضمان جودة وانتشار منتجاتنا
          </p>
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-4'} gap-8`}>
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="mx-auto mb-4 h-20 object-contain"
              />
              <h3 className="text-lg font-bold text-darkblue mb-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;
