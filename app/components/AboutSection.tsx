export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Developer</h2>

        <p className="about-text">
          Beyond Developments is a forward-thinking real estate developer
          focused on creating design-led, lifestyle-driven communities in
          prime Dubai locations. With a strong emphasis on architectural
          quality, low-density planning, and long-term value creation, Beyond
          Developments delivers projects that combine modern living with
          thoughtful master planning. Their developments are positioned to
          appeal to both end-users and buyers seeking long-term ownership and premium waterfront living.
        </p>

        <div className="key-highlights">
          <h3 className="highlights-title">Key Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-box">
              <div className="highlight-value">AED 1B+</div>
              <div className="highlight-label">Development value</div>
            </div>
            <div className="highlight-box">
              <div className="highlight-value">6KM</div>
              <div className="highlight-label">Waterfront</div>
            </div>
            <div className="highlight-box">
              <div className="highlight-value">140,000 sqm</div>
              <div className="highlight-label">Integrated green space</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

