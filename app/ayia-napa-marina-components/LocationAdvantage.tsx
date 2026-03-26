"use client"
import { MapPin, Navigation, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationAdvantage = () => {
  const mapLink = "https://www.google.com/maps?cid=10977748106310907783&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=en&gl=US&source=embed";

  const travelTimes = [
    { distance: "12 Mins", label: "I-9/4 Islamabad" },
    { distance: "22 Mins", label: "I-16 Islamabad" },
    { distance: "25 Mins", label: "PWD Housing Society" },
    { distance: "26 Mins", label: "Pakistan Town" }
  ];

  return (
    <section id="location" className="py-20 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <div className="mb-14 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#38bdf8] text-[10px] tracking-[0.7em] uppercase block mb-4"
          >
            The Location
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Prime{" "}
            <span className="italic text-[#38bdf8]">
              Connectivity
            </span>
          </motion.h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* 💎 GOOGLE MAP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 relative rounded-[28px] overflow-hidden border border-white/10"
          >
            {/* MAP */}
            <iframe
              src="https://www.google.com/maps?q=Ayia+Napa+Marina&output=embed"
              className="w-full h-[420px] sm:h-[500px] md:h-[580px] border-0"
              loading="lazy"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-center justify-between gap-4">

              <div className="bg-[#020617]/80 backdrop-blur-xl border border-white/10 px-5 py-4 rounded-2xl flex items-center gap-3">
                <div className="bg-[#38bdf8] p-2 rounded-lg text-black">
                  <MapPin size={18} />
                </div>
                <span className="text-sm text-white">
                  AYIA NAPA MARINA LOCATION
                </span>
              </div>

              <a
                href={mapLink}
                target="_blank"
                className="border border-[#38bdf8]/40 px-6 py-3 text-xs tracking-[0.3em] uppercase text-white hover:bg-[#38bdf8] hover:text-black transition flex items-center gap-2"
              >
                GET DIRECTIONS <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* 💎 TRAVEL CARDS
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">

            {travelTimes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#020617]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-[#38bdf8]/40 transition"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#38bdf8]">
                    <Navigation size={16} />
                  </div>

                  <span className="text-[11px] text-[#38bdf8] bg-[#38bdf8]/10 px-3 py-1 rounded-full">
                    {item.distance}
                  </span>
                </div>

                <h4 
                  className="text-lg italic text-white leading-tight"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {item.label}
                </h4>
              </motion.div>
            ))}

          </div> */}

        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#38bdf8]/[0.05] blur-3xl pointer-events-none" />
    </section>
  );
};

export default LocationAdvantage;