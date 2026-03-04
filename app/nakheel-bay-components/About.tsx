const About = () => {
  return (
    <section id="overview" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://www.nakheel.com/images/nakheelcorporatelibraries/developments/projects/desktop-02-100.jpg?sfvrsn=f97bb765_3" 
            alt="Villa Interior" 
            className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="text-bay-accent font-medium tracking-widest uppercase text-xs mb-4 block">The Project</span>
          <h2 className="text-4xl md:text-4xl font-serif mb-8 leading-tight">Bay Villas by Nakheel Luxury Beachfront Living Dubai Islands
</h2>
          <p className="text-lg text-bay-dark/70 leading-relaxed mb-6">
           Bay Villas by Nakheel introduces exclusive beachfront living on Dubai Islands’ Island B. This resort-style community offers luxury beach villas and townhouses with contemporary designs, private gardens, spacious terraces, and integrated kitchens. Residents enjoy pristine beaches, waterfront promenades, infinity pools, and fitness facilities.
          </p>
          <p className="text-lg text-bay-dark/70 leading-relaxed">
           Seamlessly connected via Infinity Bridge, Bay Villas combines serene island sanctuary living with easy access to Dubai International Airport, Downtown Dubai, and mainland destinations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;