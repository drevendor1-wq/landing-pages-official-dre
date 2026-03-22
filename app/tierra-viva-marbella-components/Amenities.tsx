"use client"
import { Shield, Car, Wind, Lock, Thermometer, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PremiumAmenities = () => {
  const containerRef = useRef(null);
  
  const amenities = [
    { 
      id: "01",
      title: "Gated Community", 
      icon: <Lock size={24} strokeWidth={1} />,
      desc: "An ultra-luxury sanctuary nestled in the prestigious hills of Benahavís."
    },
    { 
      id: "02",
      title: "Premium 24/7 Security", 
      icon: <Shield size={24} strokeWidth={1} />,
      desc: "Professional community management and round-the-clock protection."
    },
    { 
      id: "03",
      title: "Pianite Villas with Car Lift", 
      icon: <Car size={24} strokeWidth={1} />,
      desc: "Design inspired by Automobili Lamborghini, featuring signature integrated car lifts."
    },
    { 
      id: "04",
      title: "Steam Room", 
      icon: <Thermometer size={24} strokeWidth={1} />,
      desc: "Exclusive sauna and steam room facilities for ultimate rejuvenation."
    },
  ];

  return (
    <section ref={containerRef} className="py-32 bg-[#FCFCFB] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="relative mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <span className="text-[10px] font-black tracking-[0.8em] uppercase text-emerald-600/60 mb-8 ml-1">
              The Collection
            </span>
            <h2 className="text-6xl md:text-[120px] font-serif text-[#062C2D] leading-[0.85] tracking-tighter mb-12">
              World Class <br />
              <span className="italic font-light text-emerald-500/80">Amenities</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:absolute md:top-0 md:right-0 md:w-1/3 mt-8 md:mt-0"
          >
            <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base border-l border-emerald-500/20 pl-6">
              Hidden Treasures rising from the hill create a world of their own.
            </p>
          </motion.div>
        </div>

        {/* Main Showcase: Image & List Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Cinematic Image with Reveal Mask */}
          <motion.div 
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
            className="lg:col-span-7 relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img 
              src="https://cdn.darglobal.co.uk/Background_1be3f82a2d.jpg" 
              alt="Luxury Villa" 
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062C2D]/40 to-transparent" />
            
            {/* Float Badge */}
            <div className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 text-white max-w-xs">
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold mb-2">Signature Feature</p>
              <p className="font-serif italic text-xl">Exclusive clubhouse to relax, network, and unwind.</p>
            </div>
          </motion.div>

          {/* Right: Minimalist Narrative List */}
          <div className="lg:col-span-5 space-y-20 pt-12">
            {amenities.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group relative"
              >
                <div className="flex items-start gap-8">
                  <span className="text-emerald-500/30 font-serif italic text-4xl leading-none">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#062C2D] mb-4 group-hover:text-emerald-500 transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 font-light text-sm leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
                
                {/* Micro-Interaction Line */}
                <div className="mt-8 h-px w-full bg-slate-100 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-emerald-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Background Decorative Serif */}
      <div className="absolute bottom-0 right-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <h2 className="text-[40vw] font-serif leading-none -mb-20 translate-y-20">Viva</h2>
      </div>
    </section>
  );
};

export default PremiumAmenities;