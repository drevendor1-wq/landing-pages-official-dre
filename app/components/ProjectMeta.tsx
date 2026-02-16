import Image from "next/image";

export default function ProjectMeta() {
  return (
    <section className="project_meta_section">
      <div className="meta_section_overlay"></div>
      <div className="container">
        <div className="meta_content_wrapper">
          <div className="meta_row">
            <div className="meta_item">
              <div className="meta_icon_wrapper">
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
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <p className="value">1-4BR</p>
              <p className="label">Apartment</p>
            </div>
            <div className="meta_item">
              <div className="meta_icon_wrapper">
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  د.إ
                </span>
              </div>
              <p className="value">2.4M AED</p>
              <p className="label">Price Start</p>
            </div>
            <div className="meta_item">
              <div className="meta_icon_wrapper">
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
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                  ></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <p className="value">50/50</p>
              <p className="label">Payment Plan</p>
            </div>
            <div className="meta_item">
              <div className="meta_icon_wrapper">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <p className="value">6KM</p>
              <p className="label">Waterfront</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

