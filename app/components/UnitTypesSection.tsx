"use client";

import { useFormModal } from "./FormModalContext";

export default function UnitTypesSection() {
  const { openFormModal } = useFormModal();
  const units = [
    { type: "1 Bedroom", size: "767 – 1,426 sq.ft" },
    { type: "2 Bedroom", size: "1,063 – 2,199 sq.ft" },
    { type: "3 Bedroom", size: "1,631 – 2,714 sq.ft" },
    { type: "4 Bedroom Simplex", size: "2,425 – 2,809 sq.ft" },
    { type: "4 Bedroom Duplex", size: "4,784 sq.ft" },
  ];

  return (
    <section id="units" className="unit_types_section">
      <div className="container">
        <h2 className="section_title">HADO by Beyond - Unit Types & Sizes</h2>
        <div className="unit_types_grid">
          {units.map((unit, index) => (
            <div key={index} className="unit_card">
              <div className="unit_header">
                <h3 className="unit_type">{unit.type}</h3>
              </div>
              <div className="unit_details">
                <div className="unit_detail_row">
                  <span className="unit_label">Size Range (sq.ft)</span>
                  <span className="unit_value">{unit.size}</span>
                </div>
              </div>
              <button
                className="view_floor_plan_btn"
                onClick={() => openFormModal("layout")}
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
                Download Layout
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

