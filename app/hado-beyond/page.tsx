import Header from "../components/Header";
import Banner from "../components/Banner";
import ProjectMeta from "../components/ProjectMeta";
import ProjectHighlights from "../components/ProjectHighlights";
import WhyInvestSection from "../components/WhyInvestSection";
import WhyChooseSection from "../components/WhyChooseSection";
import UnitTypesSection from "../components/UnitTypesSection";
import PaymentPlanSection from "../components/PaymentPlanSection";
import LocationSection from "../components/LocationSection";
import AmenitiesSection from "../components/AmenitiesSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import { FormModalProvider } from "../components/FormModalContext";
import FormModal from "../components/FormModal";
import EnquiryModalWrapper from "../components/EnquiryModalWrapper";
import ContactSection from "../components/ContactSection";

export default function HadoBeyondPage() {
    return (
    <FormModalProvider>
      <Header />
      <Banner />
      <ProjectMeta />
      <ProjectHighlights />
      <WhyInvestSection />
      <WhyChooseSection />
      <UnitTypesSection />
      <PaymentPlanSection />
      <LocationSection />
      <AmenitiesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FormModal />
      <EnquiryModalWrapper />
    </FormModalProvider>
  );
}

