import React from 'react';

const DeveloperProfile: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
           <img 
             src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?q=80&w=2070&auto=format&fit=crop" 
             className="w-full h-[600px] object-cover rounded-[3rem] opacity-80" 
             alt="Developer" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
           <div className="absolute bottom-12 left-12 right-12">
              <div className="flex gap-12">
                 <div>
                    <p className="text-4xl font-heading font-light">50,000+</p>
                    <p className="text-zinc-400 text-xs uppercase tracking-widest mt-1">Homes Delivered</p>
                 </div>
                 <div>
                    <p className="text-4xl font-heading font-light">54,000+</p>
                    <p className="text-zinc-400 text-xs uppercase tracking-widest mt-1">In Planning and Progress</p>
                 </div>
                 <div>
                    <p className="text-4xl font-heading font-light">100+</p>
                    <p className="text-zinc-400 text-xs uppercase tracking-widest mt-1">Awards Achieved</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <span className="text-zinc-500 uppercase tracking-widest text-sm font-medium mb-4 block">About the Developer</span>
            <h2 className="text-2xl md:text-4xl font-heading font-light text-white leading-tight">
              WHY DAMAC PROPERTIES?
            </h2>
          </div>

          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
           Renowned for iconic developments and exceptional craftsmanship, DAMAC Properties blends elegance, innovation, and world-class amenities. With a presence in the UAE, Saudi Arabia, Qatar, and beyond, its portfolio of luxury residential, commercial, and leisure properties sets a global standard for excellence.
          </p>

          <div className="space-y-6">
            <p className="text-zinc-500 font-light">DAMAC brings new and exciting living concepts to life, with superior designs and details, by working with the finest designers and partnering with some of the most prestigious fashion and lifestyle brands</p>
            <p className="text-zinc-500 font-light">With extensive knowledge of property trends, a solid grasp of industry insights, and an in-depth understanding of the local market, our advisors are dedicated to ensuring that your choice to invest in DAMAC Properties is a confident and informed choice.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;