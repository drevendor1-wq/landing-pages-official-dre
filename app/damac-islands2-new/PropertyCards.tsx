"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PropertyCard {
  title: string;
  priceAED: string;
  priceGBP: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
}

const propertyCards: PropertyCard[] = [
  {
    title: "The Mercedes-Benz Pagoda Suite - 2 Bedroom Unit",
    priceAED: "AED 2,500,000",
    priceGBP: "£516,529",
    beds: 2,
    baths: 2,
    sqft: "1,200 SQFT",
    image: "/images/mercedes-benz/2 bed.jpg"
  },
  {
    title: "The Mercedes-Benz Pagoda Suite - 3 Bedroom Unit",
    priceAED: "AED 3,800,000",
    priceGBP: "£785,123",
    beds: 3,
    baths: 3,
    sqft: "1,800 SQFT",
    image: "/images/mercedes-benz/3 bed.jpg"
  },
  {
    title: "The Grand Mercedes Suite - 4 Bedroom Unit",
    priceAED: "AED 5,200,000",
    priceGBP: "£1,074,380",
    beds: 4,
    baths: 4,
    sqft: "2,300 SQFT",
    image: "/images/mercedes-benz/4 bed.jpg"
  },
  {
    title: "The Grand Mercedes Suite - 5 Bedroom Unit",
    priceAED: "AED 6,500,000",
    priceGBP: "£1,343,000",
    beds: 5,
    baths: 5,
    sqft: "3,500 SQFT",
    image: "/images/mercedes-benz/5 bed.jpg"
  }
];

export default function PropertyCards() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<string>("");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Removed animations as requested

  const openEnquiryModal = (title: string) => {
    setSelectedProperty(title);
    setEnquiryModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    setSelectedProperty("");
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section id="property-cards" className="damac_property_cards_section" ref={sectionRef}>
        <div className="container">
          <div className="damac_property_cards_header" ref={headerRef}>
            <p className="damac_property_cards_subheading">MERCEDES-BENZ PLACES</p>
            <h2 className="damac_property_cards_heading">BINGHATTI CITY</h2>
          </div>
          
          <div className="damac_property_cards_grid_wrapper" ref={cardsRef}>
            <div className="damac_property_cards_grid">
              {propertyCards.map((card, index) => (
                <div key={index} className="damac_property_card">
                  <div className="damac_property_card_image">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={600}
                      height={400}
                      className="damac_property_card_img"
                    />
                  </div>
                  <div className="damac_property_card_info">
                    <h3 className="damac_property_card_title">{card.title}</h3>
                    
                    <div className="damac_property_card_pricing">
                      <span className="damac_property_card_price">{card.priceAED}</span>
                      <span className="damac_property_card_price">{card.priceGBP}</span>
                    </div>
                    
                    <div className="damac_property_card_specs">
                      {card.beds > 0 && (
                        <div className="damac_property_card_spec">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                          <span>{card.beds} BEDS</span>
                        </div>
                      )}
                      <div className="damac_property_card_spec">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 2v6m6-6v6M3 10h18M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10"></path>
                        </svg>
                        <span>{card.baths} BATHS</span>
                      </div>
                      <div className="damac_property_card_spec">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="9" y1="3" x2="9" y2="21"></line>
                          <line x1="15" y1="3" x2="15" y2="21"></line>
                          <line x1="3" y1="9" x2="21" y2="9"></line>
                          <line x1="3" y1="15" x2="21" y2="15"></line>
                        </svg>
                        <span>{card.sqft}</span>
                      </div>
                    </div>
                    
                    <button 
                      className="damac_property_card_button"
                      onClick={() => openEnquiryModal(card.title)}
                    >
                      ENQUIRE NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle={selectedProperty}
        buttonText="ENQUIRE NOW"
      />
    </>
  );
}
