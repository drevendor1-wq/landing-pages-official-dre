"use client"
import { MapPin, Users, Building, Hotel, Leaf, Shield, Gem, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Amenities = () => {
  // Content replaced with the high-end Cairo Gate data from the provided image
  const amenities = [
    { 
      title: "Premium Location", 
      desc: "One of Cairo's most prestigious neighborhoods located directly on Alex/Cairo Desert Road.", 
      icon: <MapPin size={22} strokeWidth={1.5} /> 
    },
    { 
      title: "Rays Social Club", 
      desc: "Melding natural views with lavish services exclusively for you.", 
      icon: <Users size={22} strokeWidth={1.5} /> 
    },
    { 
      title: "Townsquare", 
      desc: "An integrated commercial hub combining fine dining, shopping, and boutique offices.", 
      icon: <Building size={22} strokeWidth={1.5} /> 
    },
    { 
      title: "World Class Hospitality", 
      desc: "Locanda Hotel & Serviced Residences offering elevated lifestyle ease.", 
      icon: <Hotel size={22} strokeWidth={1.5} /> 
    },
    { 
      title: "Connected to Nature", 
      desc: "Direct access to open spaces of luscious greenery and water features.", 
      icon: <Leaf size={22} strokeWidth={1.5} /> 
    },
    { 
      title: "Gated Community", 
      desc: "Peace of mind with Community Management & 24/7 Professional Security.", 
      icon: <Shield size={22} strokeWidth={1.5} /> 
    },
    { 
      title: "ELIE SAAB Signature Villas", 
      desc: "A first in Egypt, presenting an exclusive collection of elegantly designed villas.", 
      icon: <Gem size={22} strokeWidth={1.5} /> 
    },
  ];

  return (
    <section id="amenities" className="py-32 bg-[#FAFAFA] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: Ultra-Luxurious Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold tracking-[0.6em] uppercase text-green-600 mb-6 block"
            >
              Boutique Lifestyle Living
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-serif text-[#062C2D] leading-[1.1]"
            >
              WORLD-CLASS<br />
              <span className= "font-light text-green-500">AMENITIES</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 text-sm md:text-base max-w-xs leading-relaxed font-light"
          >
            World-class Hospitality, Social destinations, and Lush open spaces come together within a secure sanctuary.
          </motion.p>
        </div>

        {/* The Amenities: Luxurious Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {amenities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              className="group relative bg-[#FAFAFA] p-10 flex flex-col justify-between min-h-[340px] hover:bg-white transition-all duration-700"
            >
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-green-600 shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all duration-500 mb-8">
                  {item.icon}
                </div>
                <h3 className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#062C2D] mb-4 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#556B6C] text-[14px] leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </div>

              {/* Decorative detail */}
              <div className="mt-8 flex items-center overflow-hidden">
                <motion.div 
                  className="h-[1px] w-0 bg-green-500 group-hover:w-full transition-all duration-700"
                />
                <ArrowRight size={14} className="text-green-500 -translate-x-full group-hover:translate-x-2 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
          
          {/* Visual Filler for Grid Balance */}
          <div className="hidden lg:flex bg-[#062C2D] p-10 flex-col justify-center items-center text-center">
            <span className="text-green-400 text-[10px] tracking-[0.4em] uppercase mb-4">Cairo Gate</span>
            <p className="text-white font-serif italic text-xl">The Signature of Luxury</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;