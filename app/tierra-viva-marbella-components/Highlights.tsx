"use client";
import React from "react";

const WhyInvest: React.FC = () => {
  const points = [
    "Lowest interest rates in the Eurozone, between 3 – 5%",
    "Highest ROI in Europe",
    "Welcoming Country most open regulations for foreign investments",
    "Mediterranean Climate all year round",
    "A Tourism & Environmental Hub",
    "High Connectivity high-speed train connections to Costa Del Sol",
    "Ranked 4th in work-life balance",
  ];

  return (
    <section id="highlights" className="py-20 px-6 bg-[#F7F5F2]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-6">
            WHY INVEST?
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Spain is considered one of the most attractive countries for real estate
            investments on the European continent, especially in the south. Along
            its 8,000km of coastal seafront lies Costa Del Sol, an ideal location
            for those looking for a vacation home, a place to retire, or open a
            new business. Its privileged geographic location is ideal for living
            and international business, as it connects Europe, South America and
            the African continent. All with the benefit of a golden visa in the
            heart of the EU.
          </p>

          <div className="mt-10">
            <img
              src="https://cdn.darglobal.co.uk/Painite_Villa_ext_copy_7bafee0639.jpg"
              alt="Luxury Villa"
              className="w-full h-[350px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          {points.map((text, index) => (
            <div
              key={index}
              className="flex items-start gap-6 border-b border-gray-200 pb-6"
            >
              <span className="text-2xl text-gray-400 font-light">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-gray-800 text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
