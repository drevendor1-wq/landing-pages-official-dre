"use client"
import { MapPin, Navigation, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationAdvantage = () => {
  const mapLink = "https://www.google.com/maps?q=30.046415711240943,30.99975673022696";

  const travelTimes = [
    { distance: "5 Km", label: "Mehwar 26 July", icon: <Navigation size={18} /> },
    { distance: "8 Km", label: "Desert Road", icon: <Navigation size={18} /> },
    { distance: "26 Km", label: "Zamalek", icon: <Navigation size={18} /> },
    { distance: "30 Km", label: "West ElBalad", icon: <Navigation size={18} /> } 
  ];

  return (
    <section id="location" className="py-16 md:py-28 px-4 md:px-10 bg-black text-white font-[Inter]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <span className="text-[11px] font-medium tracking-[0.5em] uppercase text-[#D4AF37]">
              The Location
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl leading-tight tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Prime{" "}
            <span className="italic font-light text-[#D4AF37]">
              Connectivity
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* MAP CARD */}
          <motion.a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 relative h-[420px] md:h-[580px] rounded-[36px] overflow-hidden group border border-white/10 block"
          >
            {/* Image */}
            <img 
              src="https://www.ora-egypt.com/_next/image?url=https%3A%2F%2Fd2e34kt1c5hzm6.cloudfront.net%2Fora%2F36efac0e-ee12-4bef-8848-dfb623ea6a72.png&w=3840&q=75" 
              alt="ZED SHEIKH ZAYED Location" 
              className="w-full h-full object-cover transition-all duration-[1.8s] group-hover:scale-110 brightness-[0.85] contrast-[1.05]"
            />

            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-transparent" />

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-[36px] border border-white/10 group-hover:border-[#D4AF37]/40 transition-all duration-500" />

            {/* Bottom UI */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              <div className="hidden bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl md:flex items-center gap-3">
                <div className="bg-[#D4AF37] p-2 rounded-lg text-black shadow-lg">
                  <MapPin size={18} />
                </div>
                <span className="text-sm tracking-wide text-white/80">
                  Sheikh Zayed Location
                </span>
              </div>
              
              <div className="bg-[#D4AF37] text-black px-7 py-3 rounded-full font-semibold text-xs tracking-[0.2em] flex items-center gap-2 hover:gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                GET DIRECTIONS <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.a>

          {/* TRAVEL TIMES */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {travelTimes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 bg-[#0F1115] border border-white/5 p-6 rounded-[30px] flex flex-col justify-between group hover:border-[#D4AF37]/40 transition-all duration-500 relative overflow-hidden"
              >
                {/* subtle gold glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_60%)]" />

                <div className="flex justify-between items-start relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  <span className="text-xs font-medium text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full tracking-wide">
                    {item.distance}
                  </span>
                </div>
                
                <div className="mt-10 relative z-10">
                  <h4 
                    className="text-xl italic text-white/90 leading-none"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {item.label}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;