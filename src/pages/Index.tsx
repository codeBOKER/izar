
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CategoryList from '../components/CategoryList';
import OurBrands from '../components/OurBrands';
import CustomerReviews from '../components/CustomerReviews';
import SupabaseTest from '../components/test';


const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        
        <Hero />

        <SupabaseTest />
        
        <CategoryList />
        
        <OurBrands />
        
        {/* <CustomerReviews /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
