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
          Palm Central
        </span>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-sm md:text-[15px] text-[#062C2D]/80 font-light leading-relaxed">
            Palm Central Private Residences by Nakheel brings a new definition of calm, resort-inspired living to the heart of Palm Jebel Ali. Set along the island’s central boulevard, Palm Central blends beachfront serenity with urban sophistication.
          </p>
          
          <p className="text-sm md:text-[15px] text-[#062C2D]/80 font-light leading-relaxed">
            The development features 212 contemporary homes surrounded by lush landscapes, direct beach access, and world-class amenities. Every detail has been crafted to create a sense of balance — a perfect retreat where architecture, nature, and luxury exist in harmony.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;