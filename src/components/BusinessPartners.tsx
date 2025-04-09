
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "شركة الفاخر للتجارة",
    logo: "https://placehold.co/200x100/e2dad2/af2734?text=الفاخر",
  },
  {
    id: 2,
    name: "مجموعة الأناقة",
    logo: "https://placehold.co/200x100/e2dad2/af2734?text=الأناقة",
  },
  {
    id: 3,
    name: "الشركة العربية للملابس",
    logo: "https://placehold.co/200x100/e2dad2/af2734?text=العربية",
  },
  {
    id: 4,
    name: "مؤسسة الجودة",
    logo: "https://placehold.co/200x100/e2dad2/af2734?text=الجودة",
  },
  {
    id: 5,
    name: "مصنع النسيج الحديث",
    logo: "https://placehold.co/200x100/e2dad2/af2734?text=النسيج",
  },
  {
    id: 6,
    name: "دار الأزياء",
    logo: "https://placehold.co/200x100/e2dad2/af2734?text=الأزياء",
  }
];

const BusinessPartners: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-darkblue mb-2">شركاؤنا في النجاح</h2>
          <div className="w-24 h-1 bg-red-light mx-auto mb-6"></div>
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-4' : 'grid-cols-3 md:grid-cols-6 gap-6'} items-center justify-center`}>
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="flex items-center justify-center p-4 h-32 transition-all duration-300 hover:scale-110"
              title={partner.name}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-full max-w-full object-contain filter hover:brightness-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;
