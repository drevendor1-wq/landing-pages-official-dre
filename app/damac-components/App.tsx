"use client"
import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Highlights from './Highlights';
import AboutProject from './AboutProject';
import LocationAdvantage from './LocationAdvantage';
import Amenities from './Amenities';
import FloorPlan from './FloorPlan';
import PaymentPlan from './PaymentPlan';
import Gallery from './Gallery';
import FAQ from './FAQSection';
import DeveloperProfile from './DeveloperProfile';
import Contact from './Contact';
import Footer from './Footer';
import { FormModalProvider } from "../components/FormModalContext";
import FormModal from "../components/FormModal";
import EnquiryModalWrapper from "../components/EnquiryModalWrapper";
import './page.css'

const DamacIsland: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <FormModalProvider>
    <div className="relative min-h-screen bg-[#FDFDFB] text-[#1A1A1A] overflow-x-hidden">
      <Navbar onNavClick={scrollToSection} activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero onContactClick={() => scrollToSection('contact')} />
        </section>

         <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
          <AboutProject />
        </section>

        <section id="highlights" className="py-16 bg-zinc-50">
          <Highlights />
        </section>

        <section id="location" className="py-24 bg-zinc-50 px-6 md:px-12 lg:px-24">
          <LocationAdvantage />
        </section>

        <section id="amenities" className="py-24 px-6 md:px-12 lg:px-24">
          <Amenities />
        </section>

        <section id="floorplan" className="py-24 bg-zinc-50 px-6 md:px-12 lg:px-24">
          <FloorPlan />
        </section>

        <section id="payment" className="py-24 px-6 md:px-12 lg:px-24">
          <PaymentPlan />
        </section>

        <section id="gallery" className="py-24 bg-zinc-50 px-6 md:px-12 lg:px-24">
          <Gallery />
        </section>

        <section id="faq" className="py-24 px-6 md:px-12 lg:px-24">
          <FAQ />
        </section>

        <section id="developer" className="py-24 bg-zinc-900 text-white px-6 md:px-12 lg:px-24">
          <DeveloperProfile />
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
          <Contact />
        </section>
      </main>

      <Footer onNavClick={scrollToSection} />
    </div>
    
    <FormModal />
    <EnquiryModalWrapper />
    </FormModalProvider>
  );
};

export default DamacIsland;

