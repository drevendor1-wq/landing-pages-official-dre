"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="main_header">
        <div className="container">
          <nav className="main_nav">
            <div className="nav_logo">
              <Image
                src="/images/logo.png"
                alt="DRE Logo"
                width={120}
                height={40}
                style={{ width: "auto", height: "35px", objectFit: "contain" }}
              />
            </div>
            <ul className="nav_links">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#highlights"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("highlights");
                  }}
                >
                  Highlights
                </a>
              </li>
              <li>
                <a
                  href="#why-invest"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("why-invest");
                  }}
                >
                  Why This Project
                </a>
              </li>
              <li>
                <a
                  href="#units"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("units");
                  }}
                >
                  Units
                </a>
              </li>
              <li>
                <a
                  href="#payment-plan"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("payment-plan");
                  }}
                >
                  Payment Plan
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("location");
                  }}
                >
                  Location Advantage
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("amenities");
                  }}
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About Developer
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact us
                </a>
              </li>
            </ul>
            <button
              className="mobile_menu_toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={isMobileMenuOpen ? "open" : ""}></span>
              <span className={isMobileMenuOpen ? "open" : ""}></span>
              <span className={isMobileMenuOpen ? "open" : ""}></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <div
          className="mobile_menu_overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="mobile_menu_modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mobile_menu_close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <nav className="mobile_nav">
              <ul className="mobile_nav_links">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("home");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#highlights"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("highlights");
                    }}
                  >
                    Highlights
                  </a>
                </li>
                <li>
                  <a
                    href="#why-invest"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("why-invest");
                    }}
                  >
                    Why This Project
                  </a>
                </li>
                <li>
                  <a
                    href="#units"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("units");
                    }}
                  >
                    Units
                  </a>
                </li>
                <li>
                  <a
                    href="#payment-plan"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("payment-plan");
                    }}
                  >
                    Payment Plan
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("location");
                    }}
                  >
                    Location Advantage
                  </a>
                </li>
                <li>
                  <a
                    href="#amenities"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("amenities");
                    }}
                  >
                    Amenities
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about");
                    }}
                  >
                    About Developer
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

