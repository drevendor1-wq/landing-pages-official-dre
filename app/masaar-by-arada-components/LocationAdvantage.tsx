"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Navigation, Locate, Layers } from 'lucide-react';

const LocationLuxuryTwo = () => {
  const travelTimes = [
    { time: "2 mins", label: "Sharjah Botanical Garden" },
    { time: "2 mins", label: "Tilal Mall" },
    { time: "15 mins", label: "Sharjah International Airport" },
    { time: "20 mins", label: "Dubai International Airport" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-50 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Connection Panel */}
        <div className="lg:col-span-5 z-20 space-y-4 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-2xl p-8 md:p-12 rounded-[40px] shadow-2xl border border-white"
          >
            <h2 className="text-4xl font-serif text-slate-900 mb-2">Location</h2>
            <p className="text-slate-500 text-sm font-light mb-10 leading-relaxed">
              Enjoy living in this world-class destination that offers a life surrounded by the lush green spaces and forest designed areas with various leisure and attraction. The development offers easy accessibility and mobility to the various key destination, plus its location is in proximity to the Emirates Road.
            </p>

            <div className="space-y-3">
              {travelTimes.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-[#047857]/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#047857]" />
                    <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  </div>
                  <span className="text-lg font-serif text-[#047857]">{item.time}</span>
                </div>
              ))}
            </div>

            {/* <button className="w-full mt-8 bg-[#047857] text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-xs uppercase tracking-widest hover:bg-[#035e44] transition-colors shadow-lg shadow-[#047857]/20">
              <Navigation size={18} />
              Open In Maps
            </button> */}
          </motion.div>
        </div>

        {/* Immersive Map Container */}
        <div className="lg:col-span-7 h-[500px] lg:h-[750px] relative order-1 lg:order-2">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full h-full rounded-[40px] md:rounded-[60px] overflow-hidden shadow-inner border-[1px] border-slate-200"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7780.508451297456!2d55.5937032!3d25.2587503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef58dc72d75fb17%3A0x860b2a2f9e5da5e0!2sMasaar%20by%20Arada!5e1!3m2!1sen!2sae!4v1774936140425!5m2!1sen!2sae" 
              className="w-full h-full object-cover saturate-[1.2] contrast-[1.05]"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
          
          {/* Decorative Floating Element */}
          <div className="absolute top-12 right-12 hidden md:block">
            <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white">
              <Layers className="text-[#047857]" size={20} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">Aerial View Active</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationLuxuryTwo;