
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to backend in a real app)
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-beige py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-darkblue text-center">اتصل بنا</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">معلومات الاتصال</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-darkblue mb-2">العنوان</h3>
                    <p className="text-gray-600">المركز الرئيسي: تركيا – إسطنبول</p>
                    <p className="text-gray-600">فرع اليمن: حضرموت تريم</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-darkblue mb-2">البريد الإلكتروني</h3>
                    <p className="text-gray-600">izar@gmail.com</p>
                    <p className="text-gray-600">support@gmail.com</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-darkblue mb-2">الهاتف</h3>
                    <p className="text-gray-600"><span dir="ltr" style={{ unicodeBidi: "isolate" }}>+967 777 777777</span></p>
                    <p className="text-gray-600"><span dir="ltr" style={{ unicodeBidi: "isolate" }}>+967 777 777777</span></p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-darkblue mb-2">ساعات العمل</h3>
                    <p className="text-gray-600">الأحد - الخميس: 8:00 ص - 1:00 م</p>
                    <p className="text-gray-600">الجمعة - السبت: مغلق</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">أرسل لنا رسالة</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      الاسم
                    </label>
                    <Input id="name" placeholder="أدخل اسمك" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      البريد الإلكتروني
                    </label>
                    <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" required />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      رقم الهاتف
                    </label>
                    <Input id="phone" placeholder="أدخل رقم هاتفك" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      الموضوع
                    </label>
                    <Input id="subject" placeholder="موضوع الرسالة" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      الرسالة
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="أدخل رسالتك هنا..." 
                      className="min-h-32" 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-darkblue hover:bg-navy text-white"
                  >
                    إرسال الرسالة
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
