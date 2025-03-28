
import React from 'react';
import { Link } from 'react-router-dom';
import { Shirt } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <Shirt className="h-8 w-8 text-darkblue" />
            <span className="text-2xl font-bold text-darkblue">ملابس داخلية فاخرة</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-darkblue font-medium">الرئيسية</Link>
            <Link to="/products" className="text-gray-700 hover:text-darkblue font-medium">المنتجات</Link>
            <Link to="/about" className="text-gray-700 hover:text-darkblue font-medium">عن الشركة</Link>
            <Link to="/contact" className="text-gray-700 hover:text-darkblue font-medium">اتصل بنا</Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-darkblue">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
