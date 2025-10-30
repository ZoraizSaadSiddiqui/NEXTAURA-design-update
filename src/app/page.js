import AboutPreview from '@/components/home/AboutPreview';
import ContactCTA from '@/components/home/ContactCTA';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
        <Services />
      <AboutPreview />
      <ContactCTA />
      <Footer />
      
    </div>
  );
}

export default Page;
