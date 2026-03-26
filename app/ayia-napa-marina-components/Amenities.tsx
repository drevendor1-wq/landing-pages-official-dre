"use client"
import { motion } from 'framer-motion';

import {
  Bike,
  Dumbbell,
  Footprints,
  Trees,
  Coffee,
  Activity,
  School,
  ShoppingBag,
  Trophy
} from "lucide-react";

const PremiumAmenities = () => {

  const amenities = [
    { title: "Cycling Trails", icon: Bike },
    { title: "Fitness Centre", icon: Dumbbell },
    { title: "Jogging Trails", icon: Footprints },

    { title: "Outdoor Gymnasium", icon: Trees },
    { title: "Restaurant and Cafe", icon: Coffee },
    { title: "Running Track", icon: Activity },

    { title: "Schools and University", icon: School },
    { title: "Shopping Mall", icon: ShoppingBag },
    { title: "Sports Court", icon: Trophy },
  ];

  return (
    <section
      id="amenities"
      className="py-20 md:py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-14 md:mb-24 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#38bdf8] text-[9px] sm:text-[10px] tracking-[0.6em] uppercase mb-4 block"
          >
            The Lifestyle
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-7xl font-light tracking-tight"
          >
            World Class{" "}
            <span className="font-serif italic text-[#38bdf8]">
              Amenities
            </span>
          </motion.h2>
        </div>

        {/* ✅ MOBILE-FIRST GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          {amenities.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                
                /* 🔥 KEY FIXES HERE */
                className="
                  group 
                  relative 
                  rounded-2xl 
                  bg-[#020617]/80 
                  backdrop-blur-xl 
                  border border-white/10 
                  
                  p-4 sm:p-6 
                  
                  flex 
                  flex-col sm:flex-row   /* MOBILE STACK */
                  items-center sm:items-start 
                  justify-center sm:justify-start
                  
                  text-center sm:text-left
                  
                  gap-3 sm:gap-4
                  
                  hover:border-[#38bdf8]/40 
                  transition-all duration-500
                "
              >

                {/* ICON */}
                <div className="
                  w-10 h-10 sm:w-12 sm:h-12 
                  flex items-center justify-center 
                  rounded-xl 
                  bg-white/5 
                  text-[#38bdf8] 
                  group-hover:scale-110 
                  transition
                ">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* TEXT */}
                <h3 className="
                  text-[10px] sm:text-[11px] md:text-sm 
                  uppercase 
                  tracking-[0.2em] 
                  text-white/90 
                  group-hover:text-[#38bdf8] 
                  transition
                  
                  leading-snug
                ">
                  {item.title}
                </h3>

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_60%)]" />
              </motion.div>
            );
          })}

        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#38bdf8]/[0.05] blur-3xl pointer-events-none" />
    </section>
  );
};

export default PremiumAmenities;