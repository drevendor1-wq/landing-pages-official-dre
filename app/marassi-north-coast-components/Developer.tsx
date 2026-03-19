"use client"
import { motion } from 'framer-motion';

const Developer = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#F8FAFC] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-emerald-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
           THE PROJECT
          </span>
          
          <h2 className="text-5xl md:text-7xl font-serif mb-4 tracking-tighter text-[#062C2D]">
            MARASSI
          </h2>
          
          <div className="w-20 h-1 bg-emerald-500 mb-10"></div>
          
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Marassi stands as the most visited destination in Egypt’s North Coast. Offering a revolutionary Sahel experience, it is situated 140 km from Alexandria.
            </p>
            
            <blockquote className="border-l-4 border-emerald-100 pl-6 py-2">
               <p className="text-sm uppercase tracking-widest text-slate-400 mb-2 font-semibold">Master Planning & Design Philosophy</p>
               <p className="text-slate-500 leading-relaxed">
               Master-planned to international standards, Marassi reflects Emaar Misr’s commitment to long- term value, thoughtful design, and quality execution. Contemporary architecture, landscaped spaces, and carefully planned neighborhoods come together to create a cohesive community that balances privacy with vibrancy.
              </p>
            </blockquote>
          </div>
        </motion.div>

        {/* Enhanced Multi-Image Composition */}
        <div className="relative h-[600px] flex items-center justify-center">
          
          {/* Main Large Image (Background-ish) */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute top-0 right-0 w-4/5 h-[70%] rounded-sm overflow-hidden shadow-2xl z-10"
          >
            <img 
              src="https://www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Marassi-Marassi-Bay-Amenities.jpg" 
              alt="Marassi Architecture" 
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062C2D]/30 to-transparent"></div>
          </motion.div>

          {/* Overlapping Detail Image (The "Philosophy" Image) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-0 w-3/4 h-[55%] rounded-sm overflow-hidden shadow-2xl z-20 border-8 border-[#F8FAFC]"
          >
            <img 
              src="https://cdn-ilejccm.nitrocdn.com/PsNDsZusNRsFVvmxCCWStyMIXqjeEsbK/assets/images/optimized/rev-3e977cb/www.emaarmisr.com/wp-content/uploads/2025/10/Emaar-Misr-Communities-Marassi-North-Coast-10-1024x907.jpg" 
              alt="Marassi Lifestyle" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-emerald-500/30 z-0"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-emerald-500/30 z-0"></div>
        </div>

      </div>
    </section>
  );
};

export default Developer;