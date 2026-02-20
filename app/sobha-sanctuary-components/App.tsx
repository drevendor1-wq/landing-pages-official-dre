"use client"
import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Highlights from './Highlights';
import About from './About';
import Gallery from './Gallery';
import FloorPlan from './FloorPlan';
import Location from './LocationAdvantage';
import Contact from './Contact';
import { AMENITIES, FAQS } from './Constants';
import Footer from './Footer';
import ContactModal from "./ContactModal"
import { ChevronDown, ChevronUp, Download, CheckCircle2 } from 'lucide-react';
import "./sobhaPage.css"

// Fix: Explicitly typed as React.FC to allow standard props like 'key' in mapped JSX
const FAQItemComp: React.FC<{ item: typeof FAQS[0] }> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-sm font-bold tracking-tight">{item.question}</span>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <p className="mt-4 text-xs text-gray-500 leading-relaxed font-medium animate-in fade-in slide-in-from-top-2">
          {item.answer}
        </p>
      )}
    </div>
  );
};

const App: React.FC = () => {

   const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
    const [buttonText, setButtonText] = useState("");
    
    const openEnquiryModal = (text: string = "Request Brochure") => {
        setButtonText(text);
        setEnquiryModalOpen(true);
        document.body.style.overflow = "hidden";
      };
    
      const closeEnquiryModal = () => {
        setEnquiryModalOpen(false);
        document.body.style.overflow = "unset";
      };
    
        useEffect(() => {
          const handleKeyDown = (e: KeyboardEvent) => {
            if (enquiryModalOpen && e.key === "Escape") {
              closeEnquiryModal();
            }
          };
      
          window.addEventListener("keydown", handleKeyDown);
          return () => window.removeEventListener("keydown", handleKeyDown);
        }, [enquiryModalOpen]);
  
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Location />
      
      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-amber-700 mb-4">Lifestyle</h2>
            <h3 className="text-4xl font-title font-bold">PREMIUM AMENITIES</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 bg-white hover:shadow-xl transition-all group rounded-sm border border-gray-100">
                <div className="mb-4 text-amber-700 group-hover:scale-110 transition-transform">
                  {amenity.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloorPlan />

      <section id="payment-plan" className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-amber-500 mb-6">PAYMENT PLAN</h2>
            <h3 className="text-xl md:text-3xl font-title font-bold mb-8">SOBHA SANCTUARY PAYMENT PLAN</h3>
            
            <div className="space-y-6">
               {[
                 { label: 'Booking Amount', value: '20%' },
                 { label: 'During Construction', value: '60%' },
                 { label: 'On Handover (Q3 2029)', value: '40%' }
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center py-4 border-b border-white/10 group">
                   <div className="flex items-center gap-4">
                     <CheckCircle2 className="w-4 h-4 text-amber-500" />
                     <span className="text-xs font-bold tracking-widest uppercase text-gray-300">{item.label}</span>
                   </div>
                   <span className="text-xl font-bold font-title text-amber-500">{item.value}</span>
                 </div>
               ))}
            </div>

            <button onClick={() => openEnquiryModal("Request Payment Plan")} className="mt-12 group inline-flex items-center gap-4 bg-white text-black px-10 py-5 text-10px md:text-[14px] font-bold tracking-widest uppercase transition-all hover:bg-amber-700">
              DOWNLOAD PAYMENT PLAN
               <Download className="w-5 h-5" />
            </button>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] overflow-hidden translate-y-8">
                 <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                 <img src="https://sobhasanctuary.info/wp-content/uploads/2026/01/Sobha-Sanctuary-vs-Other-Townhouse-Communities-683x1024.jpg" className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-700 text-white p-8 shadow-2xl z-10 sm:block">
               <p className="text-3xl font-bold font-title">60/40</p>
               <p className="text-[9px] tracking-widest font-bold uppercase mt-1">PLAN STRUCTURE</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-700 mb-4">Knowledge Base</h2>
            <h3 className="text-4xl font-title font-bold uppercase">Frequently Asked Questions</h3>
          </div>
          <div className="bg-white">
            {FAQS.map((faq, i) => <FAQItemComp key={i} item={faq} />)}
          </div>
        </div>
      </section>

      {/* Developer Profile Section */}
      <section className="py-24 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
           <div className="w-20 h-[1px] bg-black mb-8"></div>
           <h4 className="text-[10px] font-bold tracking-[1em] uppercase mb-4">The Developer</h4>
           <h5 className="text-5xl md:text-7xl font-title font-black text-black/10 select-none mb-4 uppercase">SOBHA REALTY</h5>
           <p className="max-w-2xl text-sm text-gray-500 leading-loose uppercase tracking-widest font-bold">
             Sobha Realty is an international luxury real estate developer committed to redefining the art of living through sustainable communities. Established in 1976 as an interior decoration firm in Oman, we have grown into one of the most respected names in real estate globally.
           </p>
        </div>
      </section>

      <Highlights />

      <Contact />
      <Footer />
       <div>
                  <ContactModal
                        isOpen={enquiryModalOpen}
                        onClose={closeEnquiryModal}
                        floorPlanTitle="SOBHA SANCTUARY"
                        buttonText={buttonText}
                      />
                      </div>
    </div>
  );
};

export default App;