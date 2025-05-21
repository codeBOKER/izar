
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-beige py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-darkblue text-center">عن الشركة</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">من نحن</h2>
              <p className="text-gray-700 mb-4">
                نحن شركة رائدة في مجال صناعة الملابس الرجالية الفاخرة، تأسست منذ أكثر من 30 عاماً. 
                نسعى دائماً لتقديم منتجات عالية الجودة مصنوعة من أفضل أنواع القطن المصري، لضمان الراحة والمتانة والأناقة لعملائنا.
              </p>
              <p className="text-gray-700">
                تتميز منتجاتنا بالجودة العالية والتصميم الأنيق والمريح، ونحرص على اختيار أفضل المواد وتطبيق أعلى معايير التصنيع
                لضمان رضا عملائنا وثقتهم في منتجاتنا.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">رؤيتنا</h2>
              <p className="text-gray-700">
                صناعة الملابس ذات الجودة العالية مع الاهتمام بأدق التفاصيل في الخياطة واختيار الأقمشة الأفضل 
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">الية التعامل</h2>
              <p className="text-gray-700">
                نستلم طلبات التصنيع من قبل الشركات وتجار الجملة لتصنيعها ومن ثم تسليمها في الوقت المحدد 
                التوزيع جملة الجملة لدى فرع اليمن
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">لماذا ازار؟</h2>
              <p className="text-gray-700">
                تعد الشركة التركية اليمنية الأولى التي تصنع القمصان في تركيا وتوزعها في اليمن 
                عند اختيار الأقمشة نهتم بجودتها وفخامتها يخيطها أفضل الخياطين ذوي الخبرة والمهارة ونهتم بأن تكون منتجاتنا ذا جودة عالية وأن تكون مريحة للعملاء وتمتاز بلأناقة والفخامة
              </p>
            </div>
            
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
