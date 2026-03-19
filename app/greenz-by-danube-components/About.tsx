"use client"
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="overview" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20 px-4 md:px-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.nakheel.com/images/nakheelcorporatelibraries/developments/projects/desktop-02-100.jpg?sfvrsn=f97bb765_3" 
          alt="Palm Central" 
          className="w-full h-full object-cover"
        />
        {/* Subtle Dark Overlay for legibility */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-3xl bg-[#F4F1EA]/90 backdrop-blur-md p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] text-center shadow-2xl border border-white/20 mx-auto"
      >
        <span className="text-[#062C2D] font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] mb-4 block">
          Greenz by Danube
        </span>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-sm md:text-[15px] text-[#062C2D]/80 font-light leading-relaxed">
           Greenz by Danube is the first-ever dedicated townhouse community by Danube Properties located in Dubai International Academic City. This green-centric, low-density development offers a collection of 3 to 6 bedroom townhouses and villas designed for modern family living.
          </p>
          
          <p className="text-sm md:text-[15px] text-[#062C2D]/80 font-light leading-relaxed">
            Blending contemporary architecture with nature-inspired surroundings, the project focuses on sustainable living, affordability, and long-term investment value. With resort-style amenities, landscaped open spaces, and excellent connectivity, Greenz creates a perfect balance between comfort, convenience, and lifestyle.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;