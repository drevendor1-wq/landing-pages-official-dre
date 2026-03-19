"use client";

import Image from "next/image";
import Link from "next/link";
import { FormModalProvider, useFormModal } from "./components/FormModalContext";
import FormModal from "./components/FormModal";
import Footer from "./components/Footer";

function HomePageContent() {
  const { openFormModal } = useFormModal();

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <header className="site_header">
        <div className="container">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="DRE Logo"
              width={150}
              height={50}
              style={{ width: "auto", height: "40px", objectFit: "contain" }}
            />
          </Link>
        </div>
      </header>

      {/* Property Card Section */}
      <div className="homepage-properties-section">
        <div className="container">
          <div className="properties-grid">
            {/* HADO by Beyond Card */}
            <div className="property-card">
              {/* Property Image with Price Overlay */}
              <div className="property-image-wrapper">
                <Image
                  src="/images/desktop hero section.png"
                  alt="HADO by Beyond"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <div className="property-price-overlay">
                  <div className="price-text">
                    AED 2.4M*
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="property-details">
                <h2 className="property-name">HADO by Beyond</h2>
                
                {/* Feature Grid */}
                <div className="property-features">
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>1-4BR</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                    </svg>
                    <span>Apartment</span>
                  </div>
                  <div className="feature-item">
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>د.إ</span>
                    <span>2.4M AED</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>50/50</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Dubai Islands</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="property-actions">
                  <button 
                    className="property-action-btn"
                    onClick={() => openFormModal("brochure")}
                  >
                    Brochure
                  </button>
                  <Link href="/hado-beyond" className="property-action-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Mercedes-Benz Places Card */}
            <div className="property-card">
              {/* Property Image with Price Overlay */}
              <div className="property-image-wrapper">
                <Image
                  src="/images/mercedes-benz/banner.webp"
                  alt="Mercedes-Benz Places | Binghatti City"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <div className="property-price-overlay">
                  <div className="price-text">
                    AED 1.6M*
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="property-details">
                <h2 className="property-name">Mercedes-Benz Places | Binghatti City</h2>
                
                {/* Feature Grid */}
                <div className="property-features">
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>Studio-5BR</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                    </svg>
                    <span>Apartment</span>
                  </div>
                  <div className="feature-item">
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>د.إ</span>
                    <span>1.6M AED</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>70/30</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Business Bay</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="property-actions">
                  <button 
                    className="property-action-btn"
                    onClick={() => openFormModal("brochure")}
                  >
                    Brochure
                  </button>
                  <Link href="/mercedes-benz-place-binghatti-city" className="property-action-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Damac Islands 2 Card */}
              <div className="property-card">
              {/* Property Image with Price Overlay */}
              <div className="property-image-wrapper">
                <Image
                  src="/images/NewDamac.webp"
                  alt="Damac Islands 2"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <div className="property-price-overlay">
                  <div className="price-text">
                    AED 2.75M*
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="property-details">
                <h2 className="property-name">Damac Islands 2</h2>
                
                {/* Feature Grid */}
                <div className="property-features">
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>4-7BR</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                    </svg>
                    <span>Townhouses and Villas</span>
                  </div>
                  <div className="feature-item">
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>د.إ</span>
                    <span>2.75M AED</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>75/25</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Damac Islands</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="property-actions">
                  <button 
                    className="property-action-btn"
                    onClick={() => openFormModal("brochure")}
                  >
                    Brochure
                  </button>
                  <Link href="/damac-islands2" className="property-action-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="property-card">
              {/* Property Image with Price Overlay */}
              <div className="property-image-wrapper">
                <Image
                  src="/images/sobha-sanctuary/SobhaSanctuaryExterior3.jpg"
                  alt="Damac Islands 2"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <div className="property-price-overlay">
                  <div className="price-text">
                    AED 5M
                  </div>
                </div>
              </div>

              {/* SOBHA Property Details */}
              <div className="property-details">
                <h2 className="property-name">SOBHA SANCTUARY</h2>
                
                {/* Feature Grid */}
                <div className="property-features">
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>4-7BR</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                    </svg>
                    <span>Townhouses and Villas</span>
                  </div>
                  <div className="feature-item">
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>د.إ</span>
                    <span>5M AED</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>60/40</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Dubailand</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="property-actions">
                  <button 
                    className="property-action-btn"
                    onClick={() => openFormModal("brochure")}
                  >
                    Brochure
                  </button>
                  <Link href="/sobha-sanctuary" className="property-action-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* NAKHEEL BAY VILLAS */}
            <div className="property-card">
              {/* Property Image with Price Overlay */}
              <div className="property-image-wrapper">
                <Image
                  src="/images/nakheel-bay/NakheelHomePage.jpg"
                  alt="Damac Islands 2"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <div className="property-price-overlay">
                  <div className="price-text">
                    AED 5M
                  </div>
                </div>
              </div>

              {/* SOBHA Property Details */}
              <div className="property-details">
                <h2 className="property-name">Bay Villas - Dubai Islands</h2>
                
                {/* Feature Grid */}
                <div className="property-features">
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>3-6BR</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                    </svg>
                    <span>Villas</span>
                  </div>
                  <div className="feature-item">
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>د.إ</span>
                    <span>5M AED</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>80/20</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Dubai Islands</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="property-actions">
                  <button 
                    className="property-action-btn"
                    onClick={() => openFormModal("brochure")}
                  >
                    Brochure
                  </button>
                  <Link href="/nakheel-bay" className="property-action-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* DAMAC ISLANDS 2 NEW */}
             <div className="property-card">
              {/* Property Image with Price Overlay */}
              <div className="property-image-wrapper">
                <Image
                  src="/images/damac-islands/DamacIslandsCover.jpg"
                  alt="Damac Islands 2"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <div className="property-price-overlay">
                  <div className="price-text">
                    AED 2.75M
                  </div>
                </div>
              </div>

              {/* SOBHA Property Details */}
              <div className="property-details">
                <h2 className="property-name">DAMAC ISLANDS 2</h2>
                
                {/* Feature Grid */}
                <div className="property-features">
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>4-7BR</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                    </svg>
                    <span>Townhouses and Villas</span>
                  </div>
                  <div className="feature-item">
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>د.إ</span>
                    <span>2.75M AED</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>75/25</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Damac Islands</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="property-actions">
                  <button 
                    className="property-action-btn"
                    onClick={() => openFormModal("brochure")}
                  >
                    Brochure
                  </button>
                  <Link href="/damac-islands2-new" className="property-action-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

             {/* Nakheel Palm Central  */}
             <div className="property-card">
              {/* Property Image with Price Overlay */}
              <div className="property-image-wrapper">
                <Image
                  src="/images/nakheel-palm-central/palmCentralCover.jpg"
                  alt="Palm Central at Dubai"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <div className="property-price-overlay">
                  <div className="price-text">
                    AED 2.5M
                  </div>
                </div>
              </div>

              {/* SOBHA Property Details */}
              <div className="property-details">
                <h2 className="property-name">Nakheel Palm Central</h2>
                
                {/* Feature Grid */}
                <div className="property-features">
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>1-5BR</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                    </svg>
                    <span>Townhouses</span>
                  </div>
                  <div className="feature-item">
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>د.إ</span>
                    <span>2.5M AED</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>70/30</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Palm Jebel Ali</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="property-actions">
                  <button 
                    className="property-action-btn"
                    onClick={() => openFormModal("brochure")}
                  >
                    Brochure
                  </button>
                  <Link href="/nakheel-palm-central" className="property-action-btn">
                    View Details
                  </Link>
                </div>
              </div>  
            </div>

            {/* MARASSI NORTH COAST - EGYPT  */}
             <div className="property-card">
              {/* Property Image with Price Overlay */}
              <div className="property-image-wrapper">
                <Image
                  src="/images/nakheel-palm-central/MarassiCover.jpg"
                  alt="Palm Central at Dubai"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
              </div>

              {/* SOBHA Property Details */}
              <div className="property-details">
                <h2 className="property-name">EMAAR MARASSI NORTH COAST</h2>
                
                {/* Feature Grid */}
                <div className="property-features">
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>1-5BR</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                    </svg>
                    <span>Townhouses and Villas</span>
                  </div>
                  <div className="feature-item">
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>د.إ</span>
                    <span>2.5M AED</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>70/30</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>EGYPT</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="property-actions">
                  <button 
                    className="property-action-btn"
                    onClick={() => openFormModal("brochure")}
                  >
                    Brochure
                  </button>
                  <Link href="/marassi-north-coast" className="property-action-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* GREENZ DANUBE  */}
             <div className="property-card">
              
              <div className="property-image-wrapper">
                <Image
                  src="/images/nakheel-palm-central/GreenzCover.avif"
                  alt="Palm Central at Dubai"
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <div className="property-price-overlay">
                  <div className="price-text">
                    AED 3.5M
                  </div>
                </div>
              </div>

              
              <div className="property-details">
                <h2 className="property-name">Greenz By Danube</h2>
                
              
                <div className="property-features">
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    <span>3-6BR</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/>
                    </svg>
                    <span>Townhouses & Villas</span>
                  </div>
                  <div className="feature-item">
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>د.إ</span>
                    <span>AED 3.5M</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>70/30</span>
                  </div>
                  <div className="feature-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Academic City, Dubai</span>
                  </div>
                </div>

                
                <div className="property-actions">
                  <button 
                    className="property-action-btn"
                    onClick={() => openFormModal("brochure")}
                  >
                    Brochure
                  </button>
                  <Link href="/greenz-by-danube" className="property-action-btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
             

          </div>
        </div>
        </div>
      <FormModal />
      <Footer />
    </div>
  );
}

export default function HomePageClient() {
  return (
    <FormModalProvider>
      <HomePageContent />
    </FormModalProvider>
  );
}

