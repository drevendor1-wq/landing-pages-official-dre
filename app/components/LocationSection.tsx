"use client";

import { useFormModal } from "./FormModalContext";

export default function LocationSection() {
  const { openFormModal } = useFormModal();
  return (
    <section id="location" className="location_advantage_section">
      <div className="container">
        <div className="section_content">
          <div className="section_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8!2d55.265167!3d25.274843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzI5LjQiTiA1NcKwMTUnNTQuNiJF!5e0!3m2!1sen!2sae!4v1728123456789&hl=en"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: "8px",
                minHeight: "500px",
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HADO by Beyond Location"
            ></iframe>
          </div>
          <div className="section_text">
            <h2>Location Advantage</h2>
            <ul className="location_list">
              <li>
                <span className="location_name">Mina Rashid</span>
                <span className="location_time">5–7 mins</span>
              </li>
              <li>
                <span className="location_name">Jumeirah Beach</span>
                <span className="location_time">10 mins</span>
              </li>
              <li>
                <span className="location_name">Downtown Dubai</span>
                <span className="location_time">20 mins</span>
              </li>
              <li>
                <span className="location_name">DXB Airport</span>
                <span className="location_time">15–20 mins</span>
              </li>
              <li>
                <span className="location_name">
                  Dubai Islands Waterfront
                </span>
                <span className="location_time">On-site</span>
              </li>
            </ul>
            <button
              className="download_brochure_btn"
              onClick={() => openFormModal("brochure")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

