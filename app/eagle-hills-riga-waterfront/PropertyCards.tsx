"use client";

import { useState } from "react";
import Image from "next/image";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

interface PropertyCard {
  title: string;
  subTitle: string;
  specs: string;
  image: string;
}

const propertyCards: PropertyCard[] = [
  {
    title: "Plaza Residences",
    subTitle: "G+8 residential complex - 1 bedroom units",
    specs: "Retail Street (Riga SoHo)",
    image: "/images/riga/rigaProperty1.jpg"
  },
  {
    title: "Courtyard Residences",
    subTitle: "G+7 residential complex - 180 units, 1-3 bedroom apartments",
    specs: "Retail Street",
    image: "/images/riga/rigaProperty2.jpg"
  },
  {
    title: "Club Residences",
    subTitle: "G+9 residential complex - 150 units,1-4 bedroom apartments",
    specs: "Retail Street",
    image: "/images/riga/rigaProperty3.png"
  },
  {
    title: "Park Residences",
    subTitle: "G+7 residential complex - 1-3 bedroom apartments",
    specs: "Retail Street",
    image: "/images/riga/rigaProperty4.jpg"
  }
];

export default function PlazaPropertyCards() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<string>("");

  const openEnquiryModal = (title: string, sub: string) => {
    setSelectedProperty(`${title} - ${sub}`);
    setEnquiryModalOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "hidden";
    }
  };

  const closeEnquiryModal = () => {
    setEnquiryModalOpen(false);
    setSelectedProperty("");
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <section className="plaza_section">
        <div className="plaza_container">
          <div className="plaza_header">
            <span className="plaza_kicker">RIGA WATER FRONT</span>
            <h2 className="plaza_main_heading">
               <span className="light">LATEST RELEASES</span>
            </h2>
            <div className="plaza_divider"></div>
          </div>
          
          <div className="plaza_grid">
            {propertyCards.map((card, index) => (
              <div key={index} className="plaza_card" onClick={() => openEnquiryModal(card.title, card.subTitle)}>
                <div className="plaza_image_container">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="plaza_img"
                    priority={index === 0}
                  />
                  <div className="plaza_overlay">
                    <div className="plaza_content_box">
                      <h3 className="plaza_card_title">{card.title}</h3>
                      <p className="plaza_card_info">{card.subTitle}</p>
                    </div>
                  </div>
                </div>
                
                <button className="plaza_cta">
                  REQUEST INFORMATION
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          /* FIXED: Use kebab-case instead of camelCase */
          .plaza_section {
            padding: 120px 0;
            background-color: #ffffff;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
          }

          .plaza_container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px;
          }

          .plaza_header {
            margin-bottom: 80px;
            text-align: center;
          }

          .plaza_kicker {
            font-size: 0.8rem;
            letter-spacing: 0.4em;
            color: #c5a35d;
            display: block;
            margin-bottom: 15px;
          }

          .plaza_main_heading {
            font-size: clamp(2rem, 5vw, 3rem);
            font-weight: 700;
            letter-spacing: -0.02em;
            margin: 0;
          }

          .plaza_main_heading .light {
            font-weight: 300;
            color: #c5a35d;
          }

          .plaza_divider {
            width: 60px;
            height: 2px;
            background: #9e816c;
            margin: 30px auto 0;
          }

          .plaza_grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 4fr));
            gap: 30px;
          }

          .plaza_card {
            background: #141414;
            cursor: pointer;
            overflow: hidden;
          }

          .plaza_image_container {
            position: relative;
            aspect-ratio: 16 / 10;
            overflow: hidden;
          }

          /* REQUIRED: Standard CSS names */
          :global(.plaza_img) {
            object-fit: cover;
            transition: transform 0.8s ease !important;
          }

          .plaza_overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%);
            display: flex;
            align-items: flex-end;
            padding: 40px;
          }

          .plaza_card_title {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0 0 10px 0;
          }

          .plaza_card_info {
            font-size: 0.9rem;
            color: rgba(255,255,255,0.8);
            margin: 0 0 5px 0;
            font-weight: 300;
          }

          .plaza_card_tag {
            font-size: 0.75rem;
            color: #9e816c;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }

          .plaza_cta {
            width: 100%;
            padding: 20px;
            background: transparent;
            border: none;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: #ffffff;
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.2em;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            transition: all 0.3s ease;
          }

          .plaza_card:hover .plaza_cta {
            background: #c5a35d;
            color: #000;
          }

          .plaza_card:hover :global(.plaza_img) {
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .plaza_grid { grid-template-columns: 1fr; }
            .plaza_container { padding: 0 20px; }
            .plaza_overlay { padding: 25px; }
          }
        `}</style>
      </section>

      <FloorPlanEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={closeEnquiryModal}
        floorPlanTitle={selectedProperty}
        buttonText="REQUEST INFORMATION"
      />
    </>
  );
}