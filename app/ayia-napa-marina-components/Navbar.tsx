"use client";
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import ContactModal from "./ContactModal";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");
    const whatsappNumber = "971527543245";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I am interested in Ayia Napa Marina by Ora Developer Project. Please provide more information.")}`;

  const { scrollY } = useScroll();

  const navBg = useTransform(scrollY, [0, 80], [
    "rgba(0,0,0,0.3)",
    "rgba(0,0,0,0.95)"
  ]);

  const navPadding = useTransform(scrollY, [0, 80], ["20px", "14px"]);

  // ✅ FIX SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = isOpen || enquiryModalOpen ? "hidden" : "auto";
  }, [isOpen, enquiryModalOpen]);

  const openEnquiryModal = (text = "Request Brochure") => {
    setButtonText(text);
    setEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
  };

  const scrollToSection = (id: any) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 250);
  };

  return (
    <section>
      <motion.nav
        style={{
          backgroundColor: navBg,
          paddingTop: navPadding,
          paddingBottom: navPadding,
        }}
        className="fixed top-0 left-0 w-full z-[100] border-b border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* LOGO */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Image
              src="/images/dre-logo/dre_black.png"
              alt="Logo"
              width={110}
              height={110}
              className="invert"
            />
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {['Overview', 'Residences', 'Location', 'Amenities'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="group relative"
              >
                <span className="text-[11px] tracking-[0.4em] uppercase text-white group-hover:opacity-70 transition">
                  {item}
                </span>

                {/* UNDERLINE */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
              </button>
            ))}

            {/* CTA */}
            <button
              onClick={() => openEnquiryModal("REQUEST FREE CONSULTATION")}
              className="relative px-8 py-3 border border-white/40 overflow-hidden group"
            >
              <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase text-white">
                Request Free Consultation
              </span>

              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>

          {/* MOBILE ICON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 z-[110] text-white"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ✅ MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black z-[90] flex flex-col justify-center items-center text-white"
            >
              {/* BACKDROP */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

              <div className="relative z-10 flex flex-col items-center gap-8">

                {['Overview', 'Residences', 'Location', 'Amenities'].map((item, i) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-2xl font-serif tracking-[0.3em] uppercase text-white opacity-100 active:scale-95"
                  >
                    {item}
                  </motion.button>
                ))}

                {/* CTA */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => openEnquiryModal("Request Brochure")}
                  className="mt-8 px-8 py-4 border border-white/40 text-white opacity-100 text-xs tracking-[0.3em] uppercase active:scale-95 hover:bg-white hover:text-black transition"
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
        floorPlanTitle=" Ayia Napa Marina | ORA Developers"
        buttonText={buttonText}
      />
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Chat on WhatsApp" > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="currentColor" > <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.89.757 5.708 2.193 8.19L.07 31.93l7.53-2.06a15.94 15.94 0 0 0 8.4 2.31h.007c8.835 0 16-7.164 16-16S24.842.396 16 .396zm0 29.25a13.2 13.2 0 0 1-6.73-1.84l-.48-.28-4.47 1.22 1.2-4.36-.31-.5a13.21 13.21 0 1 1 10.79 5.76zm7.36-9.86c-.4-.2-2.36-1.17-2.73-1.3-.37-.13-.64-.2-.91.2s-1.05 1.3-1.28 1.57c-.23.27-.46.3-.86.1-.4-.2-1.68-.62-3.2-2-.59-.52-1-1.17-1.12-1.37-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.91-2.2-1.25-3-.33-.8-.66-.7-.91-.7h-.77c-.25 0-.66.1-1 .46s-1.32 1.29-1.32 3.15 1.35 3.65 1.54 3.9c.2.25 2.65 4.04 6.43 5.66.9.39 1.6.62 2.14.8.9.28 1.72.24 2.36.15.72-.11 2.36-.96 2.7-1.88.34-.92.34-1.7.24-1.88-.1-.18-.37-.28-.77-.48z" /> </svg> </a>
    </section>
  );
};

export default Navbar;