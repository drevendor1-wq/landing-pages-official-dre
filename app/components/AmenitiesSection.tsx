export default function AmenitiesSection() {
  const amenities = [
    "Infinity Swimming Pool",
    "Landscaped Decks & Gardens",
    "Wellness Zones",
    "Yoga & Meditation Spaces",
    "Fully Equipped Gym",
    "Outdoor Fitness Area",
    "Kids Pool",
    "Kids Play Area",
    "BBQ & Picnic Areas",
    "Relaxation Lounges",
    "Multi-Purpose Community Room",
    "Common Garden Areas",
  ];

  const amenityIcons = [
    // Infinity Swimming Pool
    <path key="pool" d="M2 12h20M2 12a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2M2 12v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4" />,
    // Landscaped Decks & Gardens
    <path key="garden" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />,
    // Wellness Zones
    <circle key="wellness" cx="12" cy="12" r="10" />,
    // Yoga & Meditation Spaces
    <path key="yoga" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />,
    // Fully Equipped Gym
    <path key="gym" d="M6.5 6.5h11v11h-11z" />,
    // Outdoor Fitness Area
    <path key="outdoor" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />,
    // Kids Pool
    <circle key="kidspool" cx="12" cy="12" r="8" />,
    // Kids Play Area
    <path key="play" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />,
    // BBQ & Picnic Areas
    <path key="bbq" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />,
    // Relaxation Lounges
    <rect key="lounge" x="3" y="3" width="18" height="18" rx="2" ry="2" />,
    // Multi-Purpose Community Room
    <rect key="room" x="3" y="4" width="18" height="16" rx="2" />,
    // Common Garden Areas
    <path key="commongarden" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />,
  ];

  return (
    <section id="amenities" className="amenities_section">
      <div className="container">
        <h2 className="section_title">Amenities at HADO by Beyond</h2>
        <p className="amenities_description">
          Indulge in a lifestyle of luxury with our carefully curated
          amenities designed for your comfort and convenience.
        </p>
        <div className="amenities_grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity_item">
              <div className="amenity_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {amenityIcons[index]}
                </svg>
              </div>
              <p className="amenity_name">{amenity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

