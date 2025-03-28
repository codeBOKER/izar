
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ملابس داخلية فاخرة</h3>
            <p className="mb-4">نقدم أفضل الملابس الداخلية المصنوعة من أجود أنواع القطن المصري</p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.98 7.19l-.078 1.292c-.018.31-.043.61-.078.9a6.903 6.903 0 01-1.267 2.91 6.5 6.5 0 01-2.556 2.014c-.951.394-1.995.592-3.131.592-1.742 0-3.35-.48-4.71-1.39.23.023.475.035.73.035a6.3 6.3 0 003.907-1.347 3.152 3.152 0 01-2.938-2.185 3.253 3.253 0 001.42-.054 3.149 3.149 0 01-2.52-3.088v-.04c.426.237.91.38 1.425.396a3.142 3.142 0 01-1.4-2.622c0-.577.156-1.116.425-1.58a8.934 8.934 0 006.482 3.285 3.55 3.55 0 01-.08-.72 3.147 3.147 0 013.147-3.147c.91 0 1.73.384 2.307 1 .72-.142 1.396-.405 2.004-.768a3.164 3.164 0 01-1.38 1.735 6.292 6.292 0 001.814-.494 6.74 6.74 0 01-1.57 1.62z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 13a1 1 0 01-1 1H7a1 1 0 01-1-1v-5a1 1 0 011-1h2a1 1 0 011 1v5zm6 0a1 1 0 01-1 1h-2a1 1 0 01-1-1V8a1 1 0 011-1h2a1 1 0 011 1v7zm4-7a1 1 0 00-1-1h-2a1 1 0 00-1 1v7a1 1 0 001 1h2a1 1 0 001-1V8z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">الرئيسية</Link></li>
              <li><Link to="/products" className="hover:text-gray-300">المنتجات</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">عن الشركة</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">اتصل بنا</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gray-300">سياسة الخصوصية</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <p className="mb-2">المنطقة الصناعية، القاهرة، مصر</p>
            <p className="mb-2">البريد الإلكتروني: info@example.com</p>
            <p className="mb-2">هاتف: +20 123 456 7890</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ملابس داخلية فاخرة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
