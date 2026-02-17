import React from 'react';

const LocationAdvantage: React.FC = () => {
  const points = [
    { place: "Dubai Sports City", dist: "15 Mins", icon: "🏟️" },
    { place: "Damac Hills", dist: "15 Mins", icon: "🏢" },
    { place: "Expo 2020", dist: "20 Mins", icon: "🎡" },
    { place: "Al Maktoum International Airport", dist: "23 Mins", icon: "✈️" },
    { place: "Burj Khalifa", dist: "25 Mins", icon: "🏢" },
    { place: "Dubai Investment Park", dist: "25 Mins", icon: "🏢" },
    { place: "Burj Al Arab", dist: "35 Mins", icon: "🏢" },
    { place: "Dubai International Airport", dist: "40 Mins", icon: "✈️" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-20 items-center">
        <div className="md:w-1/2 space-y-12">
          <div>
            <span className="text-zinc-500 uppercase tracking-widest text-sm font-medium mb-4 block">Connectivity</span>
            <h2 className="text-2xl md:text-5xl font-heading font-light text-zinc-900">
              Location Advantage
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10">
            {points.map((p, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <div>
                  <h4 className="font-medium text-sm text-zinc-900">{p.place}</h4>
                  <p className="text-zinc-400 text-sm font-light">{p.dist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 relative w-full h-[500px] overflow-hidden rounded-[3rem] shadow-lg border-8 border-white">
          {/* Simulated Map Background */}
          <div className="absolute inset-0 bg-[#E5E3DF] flex items-center justify-center">
             <div className="relative w-full h-full bg-[url('/images/damac-islands/DamacIslandsLocation.webp')] bg-cover"></div>
             {/* Marker */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                   <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="mt-2 bg-black text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">DAMAC ISLANDS 2</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAdvantage;