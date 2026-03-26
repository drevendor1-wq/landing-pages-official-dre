"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const About = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [buttonText, setButtonText] = useState("");

  const openEnquiryModal = (text: any) => {
    setButtonText(text);
    setEnquiryModalOpen(true);
  };

  return (
    <section id="overview" className="bg-black text-white w-full overflow-hidden">

      {/* HERO GRID */}
      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* LEFT IMAGE */}
        <div className="relative h-[55vh] lg:h-auto">
          <img
            src="https://www.cyprushighlights.com/en/wp-content/uploads/2023/06/Ayia-Napa-Marina-2.jpg"
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/30 lg:to-transparent" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center px-6 sm:px-10 lg:px-20 py-16 lg:py-0">

          <div className="max-w-xl w-full space-y-8">

            {/* TOP LINE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#7dd3fc] tracking-[0.6em] text-[10px] uppercase font-medium">
                ORA DEVELOPERS
              </p>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.05]"
            >
              AYIA NAPA <br />
              <span className="text-[#38bdf8]">MARINA</span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed font-light"
            >
              A destination where refined architecture meets the serenity of the sea,
              curated for those who seek distinction beyond the ordinary.
            </motion.p>

            {/* DIVIDER */}
            <div className="w-20 h-[1px] bg-[#38bdf8]/50" />

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 text-center sm:text-left">
              {[
                { val: "200+", label: "Apartments" },
                { val: "600", label: "Berths" },
                { val: "23", label: "Villas" },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-serif text-2xl sm:text-3xl">{item.val}</h3>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div>
              <button
                onClick={() => openEnquiryModal("Request Brochure")}
                className="mt-6 border border-[#38bdf8]/40 px-8 py-4 text-sm tracking-[0.3em] uppercase transition-all duration-500"
              >
                Request Brochure
              </button>
            </div>

          </div>
        </div>
      </div>

      <ContactModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        floorPlanTitle="Ayia Napa Marina | ORA Developers"
        buttonText={buttonText}
      />
    </section>
  );
};

export default About;