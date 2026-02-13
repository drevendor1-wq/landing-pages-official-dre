export default function PaymentPlanSection() {
  return (
    <section id="payment-plan" className="payment_plan_section">
      <div className="container">
        <h2 className="section_title">Payment Plan For HADO by Beyond</h2>
        <div className="payment_timeline">
          <div className="timeline_item">
            <div className="timeline_marker">10%</div>
            <div className="timeline_content">
              <h3 className="timeline_title">On Booking</h3>
            </div>
          </div>
          <div className="timeline_connector"></div>
          <div className="timeline_item">
            <div className="timeline_marker">40%</div>
            <div className="timeline_content">
              <h3 className="timeline_title">During Construction</h3>
            </div>
          </div>
          <div className="timeline_connector"></div>
          <div className="timeline_item">
            <div className="timeline_marker">50%</div>
            <div className="timeline_content">
              <h3 className="timeline_title">On Handover (Q3 2029)</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

