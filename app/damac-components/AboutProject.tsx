import React from 'react';

const AboutProject: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
      <div className="space-y-8">
        <div>
          <span className="text-zinc-500 uppercase tracking-widest text-sm font-medium mb-4 block">The Vision</span>
          <h2 className="text-5xl font-heading font-light leading-tight text-zinc-900">
            About Damac Islands 2
          </h2>
        </div>
        
        <div className="space-y-4 text-zinc-500 font-light">
          <p>Damac Islands 2 is an exclusive waterfront master community located in Dubai Land, close to Meraas Cherrywoods, offering luxurious 4 & 5-bedroom townhouses and villas. These premium homes feature modern architecture and spacious layouts with built-up areas ranging between 2,186 to 3,178 sq.ft, set on thoughtfully designed plots from 1,552 to 3,178 sq.ft. The development includes eight beautifully themed clusters — Antigua, Mauritius, Cuba, Bermuda, Maui, Barbados, Bahamas, and Tahiti — all crafted to deliver a premium island-inspired lifestyle surrounded by crystal lagoons and lush greenery.</p>
          <p>Pricing for Damac Islands 2 townhouses starts from AED 2.75M to AED 4.43M, (USD 749,000 – 1.21M, GBP 590,000 – 950,000, and INR 6.2 – 10 Cr. approx.) For buyers seeking ultra-luxury living, Damac Islands also offers 5-bedroom twin villas with a built-up area of 3,492 sq.ft (324 sq.m) and 6-bedroom beachfront mansions spanning 6,276 sq.ft (583 sq.m) — each equipped with private pools and resort-style amenities. Flexible payment plans such as 10% down payment, 75/25 milestone plan, and 1% monthly installments make ownership more convenient, while eligibility for the Dubai Golden Visa adds significant long-term investment value.</p>
        </div>
      </div>

      <div className="relative">
        <img 
          src="/images/damac-islands/DamacAboutPage.jpg" 
          alt="Project Tower" 
          className="w-full h-[650px] object-cover rounded-[2rem] shadow-2xl"
        />
        </div>
    </div>
  );
};

export default AboutProject;