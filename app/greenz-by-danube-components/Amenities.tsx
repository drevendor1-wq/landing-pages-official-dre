"use client"
import {
  Car,
  Dumbbell,
  Bike,
  Trophy,
  Waves,
  Baby,
  Trees,
  Coffee,
  ShieldCheck,
} from "lucide-react";

import { motion } from 'framer-motion';

const Amenities = () => {
  const amenities = [
   { title: "EV Charging Stations", icon: <Car size={20} /> },
  { title: "Gymnasium & Fitness", icon: <Dumbbell size={20} /> },
  { title: "Cycling & Jogging Tracks", icon: <Bike size={20} /> },
  { title: "Sports Courts", icon: <Trophy size={20} /> },
  { title: "Lap Pool & Kids' Pool", icon: <Waves size={20} /> },
  { title: "Children's Play Areas", icon: <Baby size={20} /> },
  { title: "Central Park & Landscaped Gardens", icon: <Trees size={20} /> },
  { title: "Retail & Café Boulevard", icon: <Coffee size={20} /> },
  { title: "24/7 Security", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <section id="amenities" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-[10px] font-bold tracking-[0.5em] uppercase text-green-500 mb-4 block"
          >
            Lifestyle Curated
          </motion.span>
          <h2 className="text-3xl md:text-6xl font-serif text-[#062C2D] leading-tight">
            World Class <span className="italic text-green-500">Amenities</span>
          </h2>
        </div>

        {/* The List: Clean, Row-based layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {amenities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center justify-between py-8 border-b border-slate-100 hover:border-green-500 transition-all duration-500 cursor-default"
            >
              <div className="flex items-center gap-6">
                <div className="text-slate-300 group-hover:text-green-500 transition-colors duration-500">
                  {item.icon}
                </div>
                <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-[#062C2D]">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;