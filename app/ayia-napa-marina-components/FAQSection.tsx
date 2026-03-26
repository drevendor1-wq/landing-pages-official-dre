"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const AboutLuxury = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
    const [buttonText, setButtonText] = useState("");
  
    const openEnquiryModal = (text: any) => {
      setButtonText(text);
      setEnquiryModalOpen(true);
    };
  return (
    <section className="relative bg-[#F8FAFC] text-[#0f172a] py-20 md:py-28 px-5 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-[30px]"
        >
          <img
            src="https://marinaayianapa.com/wp-content/uploads/2025/10/DSC06609-scaled.jpg"
            alt="Luxury Tower"
            className="w-full h-[420px] md:h-[600px] object-cover"
          />

          {/* LIGHT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

          {/* SOFT BORDER */}
          <div className="absolute inset-0 border border-slate-200 rounded-[30px]" />
        </motion.div>

        {/* CONTENT SIDE */}
        <div className="space-y-8">

          {/* TITLE */}
          <div>
            <span className="text-[#38bdf8] text-[10px] tracking-[0.7em] uppercase block mb-4 font-semibold">
              About Project
            </span>

            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
              <span className="text-[#0284c7] font-semibold">
                ABOUT US
              </span>
            </h2>
          </div>

          {/* TEXT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600 text-sm leading-relaxed">
            
            <p>
              Ayia Napa Marina is not just a docking area or a seaside residence.
              It is a complete destination for living, entertainment,
              entrepreneurship, and well-being, designed to offer the highest
              level of experiences for visitors, residents, and boat owners.
            </p>

            <p>
              Located on the eastern coast of Cyprus, it harmoniously combines
              luxury, innovation, and natural beauty, providing an ideal
              environment for those seeking more than just a typical vacation
              or standard investment.
            </p>

          </div>

          {/* CTA */}
          <div className="inline-block bg-[#38bdf8]">
  <button
    onClick={() => openEnquiryModal("Request Information")}
    className="relative px-10 py-4 rounded-full text-white text-xs tracking-[0.3em] uppercase font-semibold 
     
    transition-all duration-500 
    hover:from-[#38bdf8] hover:to-[#0284c7]
    hover:shadow-[0_10px_40px_rgba(56,189,248,0.5)]
    active:scale-95"
  >
    Learn More
  </button>
</div>
        </div>
      </div>

      {/* BACKGROUND SOFT GLOW */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#38bdf8]/10 blur-3xl pointer-events-none" />

      <ContactModal
              isOpen={enquiryModalOpen}
              onClose={() => setEnquiryModalOpen(false)}
              floorPlanTitle="Ayia Napa Marina | ORA Developers"
              buttonText={buttonText}
            />
    </section>
  );
};

export default AboutLuxury;