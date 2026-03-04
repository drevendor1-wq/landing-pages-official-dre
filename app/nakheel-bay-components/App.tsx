import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Amenities from './Amenities';
import Location from './LocationAdvantage';
import FloorPlan from './FloorPlan';
import PaymentPlan from './PaymentPlan';
import Gallery from './Gallery';
import FAQ from './FAQSection';
import Developer from './Developer';
import Contact from './Contact';
import Footer from './Footer';
import NakheelFixedMobileButton from './NakheelFixedMobileButton';
import "./nakheelBay.css"

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Amenities />
      <Location />
      <FloorPlan />
      <PaymentPlan />
      <Gallery />
      <FAQ />
      <Developer />
      <Contact />
      <Footer />
      <NakheelFixedMobileButton />
    </div>
  );
}
