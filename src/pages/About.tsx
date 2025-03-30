
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
                نسعى لأن نكون الشركة الرائدة في مجال صناعة الملابس الرجالية في الشرق الأوسط،
                وأن نقدم منتجات ذات جودة عالمية تلبي احتياجات وتطلعات عملائنا.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">مهمتنا</h2>
              <p className="text-gray-700">
                تقديم منتجات عالية الجودة ومريحة وأنيقة لعملائنا، مع الحفاظ على أعلى معايير الجودة والاستدامة في كل مراحل التصنيع.
                نهتم بأدق التفاصيل ونلتزم بالابتكار المستمر لتلبية احتياجات عملائنا المتغيرة.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">لماذا نحن</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-darkblue mb-2">٣٠+</div>
                  <div className="text-lg font-medium text-navy mb-2">فرعا تجاريا</div>
                  <p className="text-gray-600 text-sm">انتشار واسع لخدمة العملاء</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-darkblue mb-2">١٠٠٪</div>
                  <div className="text-lg font-medium text-navy mb-2">قطن مصري</div>
                  <p className="text-gray-600 text-sm">نستخدم أفضل أنواع القطن المصري في تصنيع منتجاتنا</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl font-bold text-darkblue mb-2">١٠٠٠٠+</div>
                  <div className="text-lg font-medium text-navy mb-2">عميل راضي</div>
                  <p className="text-gray-600 text-sm">لدينا قاعدة كبيرة من العملاء الراضين عن جودة منتجاتنا</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
