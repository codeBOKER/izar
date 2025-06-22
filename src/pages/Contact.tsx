import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone_number: '',
    topic: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.post(`${apiUrl}/email/`, form);
      setSuccess(true);
      setForm({ name: '', email: '', phone_number: '', topic: '', message: '' });
    } catch (err: any) {
      setError('فشل إرسال الرسالة. حاول مرة أخرى.');
    } finally {
      setLoading(false);
    }
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
                    <Input id="name" placeholder="أدخل اسمك" required value={form.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      البريد الإلكتروني
                    </label>
                    <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" required value={form.email} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
                      رقم الهاتف
                    </label>
                    <Input id="phone_number" placeholder="أدخل رقم هاتفك" value={form.phone_number} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                      الموضوع
                    </label>
                    <Input id="topic" placeholder="موضوع الرسالة" required value={form.topic} onChange={handleChange} />
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
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  {success && <div className="text-green-600">تم إرسال الرسالة بنجاح!</div>}
                  {error && <div className="text-red-600">{error}</div>}
                  <Button 
                    type="submit" 
                    className="w-full bg-darkblue hover:bg-navy text-white"
                    disabled={loading}
                  >
                    {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
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
