"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="overview" className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2.5 }}
        src="https://cdn.darglobal.co.uk/Painite_Villa_int_2_copy_562551c670.jpg"
        alt="Luxury Estate"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <div>
          
          {/* Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-6"
          >
            Benahavís &nbsp; | &nbsp; Spain
          </motion.p>

          {/* Heading */}
        <div className="max-w-8xl">

  {/* LINE 1 */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="
      text-[28px] 
      md:text-[40px] 
      font-serif 
      uppercase 
      tracking-wide
    "
  >
    Tierra Viva
  </motion.h2>

  {/* LINE 2 (MAIN HERO LINE) */}
  <motion.h1
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="
      text-[48px] 
      md:text-[90px] 
      lg:text-[120px] 
      leading-[0.9] 
      font-serif 
      uppercase 
      text-[#d4af37]
    "
  >
    Design Inspired
  </motion.h1>

  <motion.h2
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="
      text-[32px] 
      md:text-[60px] 
      lg:text-[80px] 
      leading-tight 
      font-serif 
      uppercase
    "
  >
    by Automobili Lamborghini
  </motion.h2>

  {/* GOLD LINE */}
  <div className="w-20 h-[2px] bg-[#d4af37] mt-8 mb-10"></div>

</div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg leading-relaxed max-w-xl"
          >
            Welcome to Tierra Viva, an ultra-luxury gated community set in the
            prestigious hills of Benahavís overlooking the Mediterranean Sea.
            With a limited collection of bespoke villas and a private clubhouse,
            this destination redefines exclusivity, elegance, and belonging.
          </motion.p>
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border border-white/10 backdrop-blur-xl bg-white/5 p-10 rounded-2xl"
        >
          
          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
            
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                Property Type
              </p>
              <h3 className="text-sm md:text-xl">Villa</h3>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                Status
              </p>
              <h3 className="text-sm md:text-xl">Under Development</h3>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                Completion
              </p>
              <h3 className="text-sm md:text-xl">June 2028</h3>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                Unit Type
              </p>
              <h3 className="text-sm md:text-xl">Limited Collection Villas</h3>
            </div>

            <div className="col-span-2">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                Area (SQM)
              </p>
              <h3 className="text-sm md:text-xl">700 — 1450</h3>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;