"use client"
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: "Culture & Heritage",
      image: "https://mira-verde.com/assets/daaa4a67b8a7246023a6b7cd10524bbcfa75c29f.webp", // Placeholder for Tbilisi/Heritage style
      description: "Minutes away lies the Krtsanisi district, known for its diplomatic residences and tree-lined avenues. Nearby are the Narikala Fortress, the sulphur baths, and the theatres and galleries that define historic Tbilisi. The city's cultural richness is quite literally on the doorstep."
    },
  ];

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about-tbilisi" className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-[#062C2D] mb-6">
          Tbilisi Hills: <span className="text-[#047857]">Between the City and Nature</span>
        </h2>
        <p className="text-[#062C2D]/70 leading-relaxed text-sm md:text-base">
          Beyond its elevated position in Tbilisi Hills, Mira Verde is immersed in a landscape where history, nature, 
          and culture intersect. From heritage landmarks to natural retreats, the surroundings offer daily access to 
          the layered identity of the Georgian capital.
        </p>
      </motion.div>

      {/* Grid Section */}
      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      >
        {features.map((item, index) => (
          <motion.div key={index} variants={itemVars} className="group">
            {/* Image Container */}
            <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl md:text-2xl font-serif text-[#2D5A27] mb-4">
              {item.title}
            </h3>
            <div className="w-12 h-[2px] bg-[#047857] mb-4"></div> {/* Sunset accent line */}
            <p className="text-[#062C2D]/80 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;