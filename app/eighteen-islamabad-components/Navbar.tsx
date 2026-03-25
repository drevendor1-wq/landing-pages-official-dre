"use client"
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import ContactModal from "./ContactModal";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");
  
  const { scrollY } = useScroll();
  
  const navPadding = useTransform(scrollY, [0, 100], ["24px", "12px"]);
  const navBg = useTransform(scrollY, [0, 100], ["rgba(0,0,0,0)", "rgba(0,0,0,0.95)"]);
  const logoBrightness = useTransform(scrollY, [0, 100], ["brightness(1)", "brightness(1) invert(1)"]);
  const linkColor = useTransform(scrollY, [0, 100], ["#ffffff", "#ffffff"]);
  const shadow = useTransform(scrollY, [0, 100], ["0px 0px 0px rgba(0,0,0,0)", "0px 10px 40px rgba(0,0,0,0.4)"]);

  const whatsappNumber = "971527543245";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I am interested in Eighteen Islamabad by Ora Developer Project. Please provide more information.")}`;
  
  const openEnquiryModal = (text = "Request Brochure") => {
    setButtonText(text);
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  
  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const scrollToSection = (id:any) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 350);
  };

  return (
    <section>
      <motion.nav 
        style={{ backgroundColor: navBg, paddingTop: navPadding, paddingBottom: navPadding, boxShadow: shadow }}
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b border-white/5"
      >
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          
          {/* LOGO */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ filter: logoBrightness }}
            className="relative z-[10]"
          >
            <Image
              src="/images/DRE_BLACK_LOGO.png"
              alt="Logo"
              width={30}
              height={30}
              priority
            />
          </motion.button>
          
          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-12">
            {['Overview','Properties', 'Location', 'Amenities'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="group relative py-2"
              >
                <motion.span 
                  style={{ color: linkColor }}
                  className="text-[10px] uppercase tracking-[0.4em] font-semibold transition-all duration-300 group-hover:text-[#22c55e]"
                >
                  {item}
                </motion.span>

                {/* GREEN UNDERLINE */}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#22c55e] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </button>
            ))}
            
            {/* CTA BUTTON */}
            <button 
              onClick={() => openEnquiryModal("GET FREE CONSULTATION")}
              className="group relative overflow-hidden border border-[#22c55e] px-8 py-3 transition-all duration-500 hover:border-white"
            >
              <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold text-[#22c55e] group-hover:text-black transition-colors duration-500">
                Get Free Consultation
              </span>

              <div className="absolute inset-0 bg-[#22c55e] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden z-[110]">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <motion.div style={{ color: linkColor }}>
                {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
              animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
              exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
              transition={{ duration: 0.6 }}
              className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-10"
            >
              {/* subtle green pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="h-full w-full bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:40px_40px]" />
              </div>

              {['Overview', 'Highlights',  'Location','Amenities'].map((item, index) => (
                <motion.button 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())} 
                  className="text-3xl font-light tracking-[0.5em] uppercase text-white hover:text-[#22c55e] transition-all"
                >
                  {item}
                </motion.button>
              ))}
              
              {/* MOBILE CTA */}
              <div className="bg-[#22c55e] flex justify-center items-center">
                <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => openEnquiryModal("Request Brochure")}
                  className="px-10 py-5 text-black font-bold uppercase tracking-[0.3em] text-xs"
                >
                  Request Brochure
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <ContactModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle="Eighteen Islamabad | ORA Developers"
        buttonText={buttonText}
      />

      {/* WHATSAPP BUTTON */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Chat on WhatsApp" > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="currentColor" > <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.89.757 5.708 2.193 8.19L.07 31.93l7.53-2.06a15.94 15.94 0 0 0 8.4 2.31h.007c8.835 0 16-7.164 16-16S24.842.396 16 .396zm0 29.25a13.2 13.2 0 0 1-6.73-1.84l-.48-.28-4.47 1.22 1.2-4.36-.31-.5a13.21 13.21 0 1 1 10.79 5.76zm7.36-9.86c-.4-.2-2.36-1.17-2.73-1.3-.37-.13-.64-.2-.91.2s-1.05 1.3-1.28 1.57c-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-2-.59-.52-1-1.17-1.12-1.37-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.91-2.2-1.25-3-.33-.8-.66-.7-.91-.7h-.77c-.25 0-.66.1-1 .46s-1.32 1.29-1.32 3.15 1.35 3.65 1.54 3.9c.2.25 2.65 4.04 6.43 5.66.9.39 1.6.62 2.14.8.9.28 1.72.24 2.36.15.72-.11 2.36-.96 2.7-1.88.34-.92.34-1.7.24-1.88-.1-.18-.37-.28-.77-.48z" /> </svg> </a>
    </section>
  );
};

export default Navbar;