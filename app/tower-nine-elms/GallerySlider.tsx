"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const filmstripImages = [
  { src: "/images/damac-nine-tower/DamacTowerNineGallery8.jpg", label: "Lobby" },
  { src: "/images/damac-nine-tower/DamacTowerNineGallery3.jpg", label: "Poolside" },
  { src: "/images/damac-nine-tower/DamacTowerNineGallery1.jpg", label: "Sky Lounge" },
  { src: "/images/damac-nine-tower/DamacTowerNineGallery5.jpg", label: "Spa" },
  { src: "/images/damac-nine-tower/DamacTowerNineGallery6.jpg", label: "Bedroom" },
];

export default function FilmstripGallery() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  return (
    <section id="gallery" className="filmstrip_section">
      <div className="section_intro">
        <h2 className="film_title">Gallery</h2>
        <div className="gold_divider"></div>
      </div>

      <div className="filmstrip_container">
        {filmstripImages.map((img, i) => (
          <div
            key={i}
            className={`film_card ${hovered === i ? "expanded" : ""} ${
              hovered !== null && hovered !== i ? "shrunk" : ""
            }`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelectedImage(img.src)}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              style={{ objectFit: "cover" }}
              className="gallery_img"
            />
            
            {/* Click Hint Overlay */}
            <div className="zoom_hint">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>

            {/* <div className="card_label">
              <span className="num">0{i + 1}</span>
              <span className="text">{img.label}</span>
            </div> */}
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="lightbox_overlay" onClick={() => setSelectedImage(null)}>
          <button className="close_btn">✕</button>
          <div className="lightbox_content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Fullscreen View"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .filmstrip_section {
          background: #000;
          padding: 100px 0;
          overflow: hidden;
        }
        .section_intro {
          text-align: center;
          margin-bottom: 60px;
        }
        .film_title {
          color: #fff;
          font-size: 36px;
          letter-spacing: 10px;
          text-transform: uppercase;
          font-weight: 300;
        }
        .gold_divider {
          width: 50px;
          height: 2px;
          background: #c5a368;
          margin: 20px auto;
        }

        .filmstrip_container {
          display: flex;
          height: 600px;
          width: 95%;
          margin: 0 auto;
          gap: 10px;
          transition: 0.5s ease;
        }

        .film_card {
          position: relative;
          flex: 1;
          overflow: hidden;
          transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          filter: grayscale(100%);
        }

        .film_card.expanded {
          flex: 3;
          filter: grayscale(0%);
          box-shadow: 0 0 50px rgba(197, 163, 104, 0.2);
        }
        
        .film_card.shrunk {
          flex: 0.7;
          opacity: 0.5;
        }

        .zoom_hint {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #fff;
          opacity: 0;
          transition: 0.3s;
          z-index: 3;
        }

        .film_card.expanded:hover .zoom_hint {
          opacity: 1;
        }

        .card_label {
          position: absolute;
          bottom: 40px;
          left: 40px;
          color: #fff;
          display: flex;
          flex-direction: column;
          z-index: 2;
          transform: rotate(-90deg);
          transform-origin: left bottom;
          transition: 0.5s;
        }

        .film_card.expanded .card_label {
          transform: rotate(0deg);
          bottom: 40px;
        }

        .num {
          font-family: serif;
          font-size: 30px;
          color: #c5a368;
          line-height: 1;
        }
        .text {
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* LIGHTBOX STYLES */
        .lightbox_overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          cursor: zoom-out;
        }

        .lightbox_content {
          position: relative;
          width: 90vw;
          height: 80vh;
          cursor: default;
        }

        .close_btn {
          position: absolute;
          top: 30px;
          right: 40px;
          background: none;
          border: none;
          color: #c5a368;
          font-size: 35px;
          cursor: pointer;
          transition: 0.3s;
        }

        .close_btn:hover {
          transform: scale(1.2);
          color: #fff;
        }

        @media (max-width: 768px) {
          .filmstrip_container {
            flex-direction: column;
            height: auto;
          }
          .film_card {
            height: 300px;
            flex: none;
            filter: grayscale(0%);
          }
          .film_card.expanded {
            height: 400px;
          }
          .card_label {
            transform: rotate(0deg);
          }
          .lightbox_content {
            height: 60vh;
          }
        }
      `}</style>
    </section>
  );
}