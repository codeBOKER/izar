
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { products, ProductColor, ProductSize } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  
  const [selectedColor, setSelectedColor] = useState<ProductColor>('white');
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">المنتج غير موجود</h1>
          <p className="mb-6">عذراً، المنتج الذي تبحث عنه غير موجود.</p>
          <Link to="/products">
            <Button>العودة إلى المنتجات</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Get the image based on selected color
  const getImageSrc = () => {
    if (selectedColor === 'white') {
      return product.images.white;
    } else {
      const colorIndex = product.colors.indexOf(selectedColor) - 1; // -1 because white is at index 0
      return colorIndex >= 0 && colorIndex < product.images.colored.length
        ? product.images.colored[colorIndex]
        : product.images.white;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="bg-beige rounded-lg h-96 flex items-center justify-center p-8">
              <img 
                src={getImageSrc()}
                alt={product.name} 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
            
            <div className="mt-6 grid grid-cols-4 gap-4">
              <div 
                className={`h-24 bg-beige rounded-md flex items-center justify-center p-2 cursor-pointer border-2 ${
                  selectedColor === 'white' ? 'border-darkblue' : 'border-transparent'
                }`}
                onClick={() => setSelectedColor('white')}
              >
                <img 
                  src={product.images.white}
                  alt={`${product.name} - أبيض`} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              
              {product.images.colored.map((image, index) => (
                <div 
                  key={index}
                  className={`h-24 bg-beige rounded-md flex items-center justify-center p-2 cursor-pointer border-2 ${
                    selectedColor === product.colors[index + 1] ? 'border-darkblue' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedColor(product.colors[index + 1])}
                >
                  <img 
                    src={image}
                    alt={`${product.name} - ${product.colors[index + 1]}`} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-darkblue mb-4">{product.name}</h1>
            <p className="text-lg text-navy mb-2">{product.typeArabic}</p>
            
            <div className="border-t border-b border-gray-200 py-4 my-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">اختر اللون:</h3>
              <div className="flex space-x-3 space-x-reverse">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color ? 'border-darkblue' : 'border-gray-300'
                    }`}
                    style={{ 
                      backgroundColor: 
                        color === 'white' ? '#ffffff' : 
                        color === 'blue' ? '#1A73E8' : 
                        color === 'gray' ? '#9AA0A6' : 
                        color === 'black' ? '#202124' :
                        color === 'red' ? '#EA4335' : '#ffffff'
                    }}
                    aria-label={`اللون ${color}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">اختر المقاس:</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center rounded-md border ${
                      selectedSize === size 
                        ? 'border-darkblue bg-darkblue text-white' 
                        : 'border-gray-300 hover:border-darkblue'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <Button className="w-full bg-darkblue hover:bg-navy text-white py-3 rounded-md text-lg">
              إضافة إلى السلة
            </Button>
            
            <div className="mt-6 bg-softgray rounded-lg p-4">
              <h3 className="font-medium mb-2">معلومات عن المنتج:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• مصنوع من القطن المصري عالي الجودة</li>
                <li>• قابل للغسل في الغسالة</li>
                <li>• مناسب للإستخدام اليومي</li>
                <li>• متانة عالية ولون ثابت</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
