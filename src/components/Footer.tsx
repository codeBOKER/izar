
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">منتجات ملابس رجالية</h3>
            <p className="mb-4">نوفر تشكيلة متكاملة من المنتجات عالية الجودة للموزعين وشركاء الأعمال في مختلف القطاعات</p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">الرئيسية</Link></li>
              <li><Link to="/products" className="hover:text-gray-300">المنتجات</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">نبذة عن الشركة</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">التواصل</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gray-300">سياسة الخصوصية</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">معلومات التواصل</h3>
            <p className="mb-2">تريم، حضرموت، اليمن</p>
            <p className="mb-2">البريد الإلكتروني: izar@gmail.com</p>
            <p className="mb-2">هاتف: +967 777 777777</p>
          </div>
        </div>
        
        <div className="border-t border-red-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} شركة منتجات الملابس الرجالية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
