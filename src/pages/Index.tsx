
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CategoryList from '../components/CategoryList';
import OurBrands from '../components/OurBrands';
import CustomerReviews from '../components/CustomerReviews';


const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="min-h-screen">

        
        <Hero />
        
        <CategoryList />
        
        <OurBrands />
        
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
