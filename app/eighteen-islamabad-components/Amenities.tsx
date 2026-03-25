"use client"
import { motion } from 'framer-motion';
import { useRef } from 'react';

import {
  Map,
  Plane,
  FileText,
  Home,
  Flag,
  Building2,
  Landmark,
  ShoppingBag,
  Hospital,
  BadgeCheck,
  School,
  Star
} from "lucide-react";

const PremiumAmenities = () => {
  const containerRef = useRef(null);

  const amenities = [
    { title: "600 Acres", icon: Map },
    { title: "10 Minutes to Islamabad Airport", icon: Plane },
    { title: "Title Deed", icon: FileText },
    { title: "1,068 Villas", icon: Home },

    { title: "18 Hole Golf Course & Club House", icon: Flag },
    { title: "976 Apartments", icon: Building2 },
    { title: "Hi-Tech Office Buildings", icon: Landmark },
    { title: "Best-in-Class Shopping Centre", icon: ShoppingBag },

    { title: "Medical Facility", icon: Hospital },
    { title: "NOC Approved (RDA)", icon: BadgeCheck },
    { title: "World-Class Exclusive School", icon: School },
    { title: "5 Star Resort Hotel", icon: Star },
  ];

  return (
    <section
      id="amenities"
      ref={containerRef}
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* HEADER */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#22c55e] text-[10px] font-bold tracking-[0.8em] uppercase mb-4 block">
              The Lifestyle
            </span>

            <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none mb-6">
              World Class{" "}
              <span className="font-serif italic text-[#22c55e]">
                Amenities
              </span>
            </h2>

            <div className="w-20 h-[1px] bg-[#22c55e]/50"></div>
          </motion.div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

          {amenities.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="group flex flex-col items-center text-center p-6 border border-white/10 hover:border-[#22c55e]/40 transition-all duration-500"
              >

                {/* ICON (perfect thin outline) */}
                <Icon
                  size={40}
                  strokeWidth={1.2}
                  className="mb-5 text-white/70 group-hover:text-[#22c55e] transition-all duration-500 group-hover:scale-110"
                />

                {/* TITLE */}
                <h3 className="text-xs md:text-sm font-light tracking-[0.15em] uppercase text-white/80 group-hover:text-[#22c55e] transition-colors leading-relaxed">
                  {item.title}
                </h3>

              </motion.div>
            );
          })}

        </div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#22c55e]/30 to-transparent mt-20"
        />
      </div>

      {/* BACKGROUND TEXT */}
      <div className="absolute bottom-0 right-10 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[20vw] font-serif leading-none italic text-[#22c55e]">
          ZED
        </h2>
      </div>
    </section>
  );
};

export default PremiumAmenities;