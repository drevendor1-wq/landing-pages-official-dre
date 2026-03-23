import type { Metadata } from "next";
import DamacIslandsBanner from "./Banner";
import OverviewSection from "./OverviewSection";
import HighlightsSection from "./HighlightsSection";
import PropertyCards from "./PropertyCards";
import GallerySlider from "./GallerySlider";
import FloorPlans from "./FloorPlans";
import AmenitiesSection from "./AmenitiesSection";
import LocationAmenities from "./LocationAmenities";
import AboutDeveloperSection from "./AboutDeveloperSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import StickyMobileButton from "./StickyMobileButton";
import './style.css'

export const metadata: Metadata = {
  title: "Eagle Hills Riga Water Front",
  description: "Eagle Hills Riga Water Front",
};

export default function DamacIslands2Page() {
  return (
    <div>
      <DamacIslandsBanner />
      <OverviewSection />
      <HighlightsSection />
      <AmenitiesSection />
      <PropertyCards />
      <GallerySlider />
       {/* <FloorPlans /> */}
      {/*<LocationAmenities /> */}
      <AboutDeveloperSection />
      <ContactSection />
      <Footer />
      {/* <StickyMobileButton /> */}
    </div>
  );
}
