
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CategoryList from '../components/CategoryList';
import ProductGrid from '../components/ProductGrid';
import BusinessPartners from '../components/BusinessPartners';
import CustomerReviews from '../components/CustomerReviews';
import { products } from '../data/products';

const Index: React.FC = () => {
  // Get featured products (limited to 4 for homepage)
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <CategoryList />
        
        <BusinessPartners />
        
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
