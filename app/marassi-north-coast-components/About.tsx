"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="overview" className="relative h-screen overflow-hidden flex items-center justify-center">
      
      {/* Zooming Background */}
      <motion.img
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2.5 }}
        src="https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Marassi-Marassi-Bay-Hero.jpg"
        alt="Emaar Marassi North Coast"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.2 }}
  className="relative z-10 max-w-3xl mx-auto px-6"
>
  <div className="bg-black/50 backdrop-blur-md rounded-2xl px-8 py-10 text-center shadow-2xl">
    
    <span className="uppercase tracking-[0.4em] text-xs md:text-sm font-semibold text-gray-300 block mb-6">
      The Ultimate Coastal Luxury Destination
    </span>

    <div className="w-12 h-[2px] bg-green-400 mx-auto mb-6"></div>

    <p className="text-lg md:text-2xl font-light leading-relaxed text-white">
      Overlooking the turquoise waters and white sands, Marassi offers the ultimate resort experience in the heart of the North Coast. From enjoying stunning marina views, a world-class golf course, and an array of water activities, to relaxing on pristine beaches or indulging in vivid beach clubs, all the while soaking up the sun in a breathtaking coastal setting, Marassi is the jewel of the Mediterranean.
    </p>

  </div>
</motion.div>
    </section>
  );
};

export default About;