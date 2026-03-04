"use client"
import { motion } from 'motion/react';

const Developer = () => {
  return (
    <section id="developer" className="py-24 px-6 bg-[#f1f5f2] text-emerald-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">
            ABOUT THE DEVELOPER
          </span>
          
          <h2 className="text-5xl md:text-6xl font-serif mb-8 tracking-tighter">
            NAKHEEL
          </h2>
          
          <p className="text-lg text-emerald-900/70 leading-relaxed mb-10 font-light">
            Dubai-based Nakheel is a world-leading master developer whose innovative, landmark projects form an iconic portfolio of master communities and residential, retail, hospitality and leisure developments that are pivotal to realising Dubai’s vision. 
          </p>
          <p className="text-lg text-emerald-900/70 leading-relaxed mb-10 font-light">
            Nakheel’s waterfront projects, including the world-famous, award-winning Palm Jumeirah, have added more than 300 kilometres to Dubai’s original, 70km coastline, paving the way for the development of hundreds of seafront homes, resorts, hotels and attractions.
          </p>
        </motion.div>

        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-emerald-900/5 rounded-2xl -z-10 group-hover:inset-0 transition-all duration-700"></div>
          
          <div className="relative aspect-[4/5] md:aspect-square rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://arabland.ae/wp-content/uploads/2025/12/Nakheel-dubai-2-min.jpg" 
              alt="Developer HQ" 
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Subtle light green wash over the image */}
            <div className="absolute inset-0 bg-emerald-900/5 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Developer;