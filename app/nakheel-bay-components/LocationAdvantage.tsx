import { MapPin, Plane, Car, ShoppingBag, Landmark } from 'lucide-react';

const LocationAdvantage = () => {
  const travelTimes = [
    { time: "06 min", label: "Dubai Hospital", icon: <Landmark size={18} /> },
    { time: "18 min", label: "Dubai Mall", icon: <ShoppingBag size={18} /> },
    { time: "18 min", label: "Dubai International Airport", icon: <Plane size={18} /> },
    { time: "26 min", label: "Downtown Dubai", icon: <Car size={18} /> },
  ];

  return (
    <section id="location" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-emerald-700 mb-4 block">
            Prime Connectivity
          </span>
          <h2 className="text-5xl md:text-6xl font-serif mb-10 text-black tracking-tighter">
            The <span className="italic text-emerald-900/60 font-light">Location</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <p className="text-zinc-500 text-lg font-light leading-relaxed border-l-2 border-emerald-100 pl-6">
                Bay Villas by Nakheel occupies an exclusive position on Island B within Dubai Islands, offering serene beachfront living with breathtaking water views and pristine shorelines. Connected seamlessly via Infinity Bridge, residents enjoy convenient access to Dubai International Airport, Downtown Dubai, and mainland attractions within minutes.
              </p>
            </div>

            {/* Travel Time Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {travelTimes.map((item, i) => (
                <div key={i} className="p-6 bg-emerald-50/50 border border-emerald-100/50 rounded-sm hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 group">
                  <div className="text-emerald-700 mb-4 transition-transform group-hover:scale-110 duration-300">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-serif text-black mb-1">{item.time}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-emerald-900/40">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map View */}
        <div className="order-1 md:order-2 group">
          <div className="relative h-[320px] sm:h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-2xl border border-emerald-100/20">
            {/* Map Image */}
            <img 
              src="https://www.dubai-sales-office.com/Projects/Nakheel/Nakheel-Bay-Villas-Dubai-Islands/images/LocationMap.jpg" 
              alt="Map View" 
              className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            
            {/* Design Accents */}
            <div className="absolute inset-0 bg-emerald-900/5 mix-blend-multiply"></div>
          
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationAdvantage;