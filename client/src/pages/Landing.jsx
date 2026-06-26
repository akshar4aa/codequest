import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Languages from "../components/Languages";
import CareerJourney from "../components/CareerJourney";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="bg-[#09090B] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Languages />
      <CareerJourney />
      <CTA />
      <Footer />
    </div>
  );
}

export default Landing;