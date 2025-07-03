
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import DocumentsRequired from "@/components/DocumentsRequired";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Benefits />
      <HowItWorks />
      <DocumentsRequired />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
