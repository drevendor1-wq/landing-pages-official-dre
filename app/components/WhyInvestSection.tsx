"use client";

import { useState } from "react";
import Image from "next/image";
import { useFormModal } from "./FormModalContext";

export default function WhyInvestSection() {
  const { openFormModal } = useFormModal();
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <section id="why-invest" className="difference_section">
      <div className="container">
        <div className="section_content">
          <div className="section_image">
            <Image
              src="/images/wcu1.jpg"
              alt="HADO Design"
              width={600}
              height={600}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="section_text">
            <h2>What Makes Different From Other Waterfront Apartments?</h2>
            <div className="accordion_wrapper">
              <div
                className={`accordion_item ${
                  openAccordion === 0 ? "active" : ""
                }`}
              >
                <button
                  className="accordion_header"
                  onClick={() =>
                    setOpenAccordion(openAccordion === 0 ? null : 0)
                  }
                >
                  <span>
                    Ultra-Japanese Design Philosophy (Rare in Dubai)
                  </span>
                  <span className="accordion_icon">
                    {openAccordion === 0 ? "−" : "+"}
                  </span>
                </button>
                <div className="accordion_content">
                  <p>
                    Most waterfront projects focus on luxury only. HADO
                    introduces Japanese principles of simplicity, balance, and
                    calm, where space, light, and nature are intentionally
                    designed to create emotional well-being—not just visual
                    appeal.
                  </p>
                  <p className="difference_note">
                    <strong>Difference:</strong> Lifestyle-led design, not
                    just premium finishes.
                  </p>
                </div>
              </div>

              <div
                className={`accordion_item ${
                  openAccordion === 1 ? "active" : ""
                }`}
              >
                <button
                  className="accordion_header"
                  onClick={() =>
                    setOpenAccordion(openAccordion === 1 ? null : 1)
                  }
                >
                  <span>True View Protection & Tower Orientation</span>
                  <span className="accordion_icon">
                    {openAccordion === 1 ? "−" : "+"}
                  </span>
                </button>
                <div className="accordion_content">
                  <p>
                    Unlike many waterfront developments where towers block
                    each other over time, HADO's three sculptural towers are
                    positioned so no building obstructs another—ensuring
                    long-term sea, skyline, and open views.
                  </p>
                  <p className="difference_note">
                    <strong>Difference:</strong> Guaranteed light, privacy,
                    and view value.
                  </p>
                </div>
              </div>

              <div
                className={`accordion_item ${
                  openAccordion === 2 ? "active" : ""
                }`}
              >
                <button
                  className="accordion_header"
                  onClick={() =>
                    setOpenAccordion(openAccordion === 2 ? null : 2)
                  }
                >
                  <span>Part of the SIØRA Master Development</span>
                  <span className="accordion_icon">
                    {openAccordion === 2 ? "−" : "+"}
                  </span>
                </button>
                <div className="accordion_content">
                  <p>
                    HADO is not a standalone building. It sits within SIØRA, a
                    curated waterfront district with:
                  </p>
                  <ul>
                    <li>6 km of beach</li>
                    <li>140,000 sqm of green open spaces</li>
                    <li>Low-density planning</li>
                  </ul>
                  <p className="difference_note">
                    <strong>Difference:</strong> Community-scale waterfront
                    living vs isolated towers.
                  </p>
                </div>
              </div>

              <div
                className={`accordion_item ${
                  openAccordion === 3 ? "active" : ""
                }`}
              >
                <button
                  className="accordion_header"
                  onClick={() =>
                    setOpenAccordion(openAccordion === 3 ? null : 3)
                  }
                >
                  <span>Waterfront Proximity + City Access</span>
                  <span className="accordion_icon">
                    {openAccordion === 3 ? "−" : "+"}
                  </span>
                </button>
                <div className="accordion_content">
                  <p>
                    Many waterfront projects trade connectivity for seclusion.
                    HADO offers both:
                  </p>
                  <ul>
                    <li>10–12 minutes to Downtown & Burj Khalifa</li>
                    <li>15–20 minutes to DXB Airport</li>
                    <li>Immediate beachfront living</li>
                  </ul>
                  <p className="difference_note">
                    <strong>Difference:</strong> Waterfront without compromise
                    on city access.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="roi_report_btn"
              onClick={() => openFormModal("roi")}
            >
              PROJECT DETAIL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

