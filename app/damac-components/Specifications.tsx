import React from 'react';

const Specifications: React.FC = () => {
  const specs = [
    { label: "Total Living Area", value: "14,500 sq ft" },
    { label: "Lot Size", value: "1.2 Acres" },
    { label: "Bedrooms", value: "7 En-suites" },
    { label: "Bathrooms", value: "9.5 Designer" },
    { label: "Garage Capacity", value: "8 Collector Vehicles" },
    { label: "Ceiling Height", value: "14ft - 22ft (Vaulted)" },
  ];

  const features = [
    "Infinity edge heated pool",
    "Smart home automation (Savant)",
    "Commercial-grade kitchen suite",
    "Temp-controlled wine cellar",
    "Private cinema & acoustics",
    "Wellness spa and steam room",
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-heading font-light mb-4">Technical Specifications</h2>
        <div className="w-16 h-1 bg-black mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        {/* Dimensions Table */}
        <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-100">
          <h3 className="text-xl font-heading mb-8 font-medium">Core Dimensions</h3>
          <div className="space-y-6">
            {specs.map((spec, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-zinc-100 pb-4 last:border-0">
                <span className="text-zinc-500 font-light">{spec.label}</span>
                <span className="font-medium text-lg">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature List */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-heading mb-8 font-medium">Key Amenities</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-zinc-700 font-light">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-zinc-900 text-white rounded-[2rem]">
            <h4 className="text-lg font-heading mb-2">Sustainable Design</h4>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Equipped with a 40kW solar array, greywater recycling systems, and geothermal heating, Foundation is built for a net-zero future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;