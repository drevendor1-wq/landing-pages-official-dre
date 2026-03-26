"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import FloorPlanEnquiryModal from "./FloorPlanEnquiryModal";

const communities = [
  {
    title: "Croydon",
    subtitle: "Apartment",
    price: "£390,000",
    status: "Completed",
    image: "/images/aldar-london/aldarLondonCard1.jpg",
  },
  {
    title: "Nine Elms",
    subtitle: "Apartment",
    price: "£520,000",
    status: "Completed",
    image: "/images/aldar-london/aldarLondonCard2.jpg",
  },
  {
    title: "Twickenham Green",
    subtitle: "Mews House, Apartment",
    price: "£410,000",
    status: "Under Construction",
    image: "/images/aldar-london/aldarLondonCard3.webp",
  },
  {
    title: "Twickenham Square",
    subtitle: "Apartment, TownHouse",
    price: "£360,000",
    status: "Under Construction",
    image: "/images/aldar-london/aldarLondonCard4.webp",
  },
  {
    title: "Wandsworth Common",
    subtitle: "Apartment, TownHouse",
    price: "£450,000",
    status: "Under Construction",
    image: "/images/aldar-london/aldarLondonCard5.jpg",
  },
  {
    title: "Westminster Tower",
    subtitle: "Apartment",
    price: "£600,000",
    status: "Under Construction",
    image: "/images/aldar-london/aldarLondonCard6.jpg",
  },
  {
    title: "Wimbledon Bridge",
    subtitle: "Apartment",
    price: "£480,000",
    status: "Under Construction",
    image: "/images/aldar-london/aldarLondonCard7.jpg",
  },
  {
    title: "Woolwich",
    subtitle: "Apartment",
    price: "£900,000",
    status: "Under Construction",
    image: "/images/aldar-london/aldarLondonCard8.jpg",
  },
];

export default function PremiumCommunities() {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef(null);

  const whatsappNumber = "971527543245";
  const whatsappMessage = encodeURIComponent(
    "Hello, I’m interested in your Aldar's London Communities. Could you share more information."
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".comm_card", {
        opacity: 0,
        y: 80,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="comm_section" ref={sectionRef}>
      
      {/* TITLE */}
      <div className="comm_header">
        <span className="eyebrow">PORTFOLIO</span>
        <h2 className="title">
         <span>Our Communities</span>
        </h2>
        <div className="divider"></div>
      </div>

      {/* GRID */}
      <div className="comm_grid">
        {communities.map((item, i) => (
          <div key={i} className="comm_card">
            
            {/* IMAGE */}
            <div className="card_img">
              <Image src={item.image} alt={item.title} fill />
            </div>

            {/* CONTENT */}
            <div className="card_content">
              <span className="status">{item.status}</span>

              <h3>{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>

              {/* <div className="price">Starts from {item.price}</div> */}

              {/* ICON CTA ROW */}
              <div className="cta_row">

                {/* WhatsApp ICON */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  className="icon whatsapp"
                >
                  <svg viewBox="0 0 32 32" width="20" height="20">
                    <path fill="currentColor" d="M16 .4C7.2.4 0 7.6 0 16.4c0 2.9.8 5.7 2.2 8.2L.1 32l7.6-2.1c2.5 1.4 5.3 2.2 8.3 2.2 8.8 0 16-7.2 16-16S24.8.4 16 .4zm0 29.2c-2.2 0-4.4-.6-6.3-1.7l-.4-.2-4.5 1.2 1.2-4.3-.3-.5c-1.2-2-1.9-4.3-1.9-6.7 0-7.2 5.8-13 13-13s13 5.8 13 13-5.8 13-13 13zm7.4-9.9c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.3 1.6c-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1 0-.3 0-.4-.1-.1-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.2s1.4 3.6 1.5 3.9c.2.2 2.6 4 6.4 5.7.9.4 1.6.6 2.1.8.9.3 1.7.3 2.4.2.7-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z"/>
                  </svg>
                </a>

                {/* ENQUIRE */}
                <button
                  className="btn enquire"
                  onClick={() => setModalOpen(true)}
                >
                  Enquire
                </button>
              </div>
            </div>

            <div className="glow"></div>
          </div>
        ))}
      </div>

      <FloorPlanEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        floorPlanTitle="London Communities"
        buttonText="Community"
      />

      <style jsx>{`
        .comm_section {
          padding: 120px 60px;
          background: linear-gradient(to bottom, #f7f9fb, #ffffff);
        }

        .comm_header {
          text-align: center;
          margin-bottom: 80px;
        }

        .eyebrow {
          letter-spacing: 5px;
          font-size: 11px;
          color: #c5a35d;
          font-weight: 700;
        }

        /* ✨ PREMIUM FONT STYLE */
        .title {
          font-size: 60px;
          font-weight: 300;
          margin: 20px 0;
          font-family: "Playfair Display", serif;
          letter-spacing: -1px;
        }

        .title span {
          font-style: italic;
          color: #003366;
        }

        .divider {
          width: 60px;
          height: 2px;
          background: #c5a35d;
          margin: 20px auto;
        }

        .comm_grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .comm_card {
          position: relative;
          height: 420px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
        }

        .card_img {
          position: absolute;
          inset: 0;
        }

        .card_img :global(img) {
          object-fit: cover;
          transition: transform 1.2s ease;
        }

        .comm_card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }

        .card_content {
          position: absolute;
          bottom: 0;
          padding: 25px;
          color: #fff;
          z-index: 2;
          width: 100%;
        }

        .status {
          font-size: 10px;
          background: rgba(255,255,255,0.15);
          padding: 6px 12px;
          border-radius: 20px;
          margin-bottom: 10px;
        }

        h3 { font-size: 22px; }

        .subtitle { font-size: 13px; color: #ccc; }

        .price {
          margin-top: 10px;
          font-weight: 700;
          color: #c5a35d;
        }

        /* CTA */
        .cta_row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 15px;
        }

        .icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #25d366;
          color: #fff;
          transition: 0.3s;
        }

        .icon:hover {
          transform: scale(1.1);
        }

        .btn.enquire {
          flex: 1;
          background: #003366;
          color: #fff;
          padding: 10px;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .comm_card:hover .card_img :global(img) {
          transform: scale(1.12);
        }

        .glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(197,163,93,0.25), transparent);
          opacity: 0;
          transition: 0.5s;
        }

        .comm_card:hover .glow {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .comm_grid { grid-template-columns: repeat(2, 1fr); }
          .title { font-size: 40px; }
        }

        @media (max-width: 600px) {
          .comm_section { padding: 80px 20px; }
          .comm_grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}