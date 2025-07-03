
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoldenVisaCategories from "@/components/GoldenVisaCategories";
import GoldenVisaBenefits from "@/components/GoldenVisaBenefits";
import ApplicationTimeline from "@/components/ApplicationTimeline";
import ReadyToStart from "@/components/ReadyToStart";

const GoldenVisa = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              UAE Golden Visa
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Your comprehensive guide to securing long-term residency in the United Arab Emirates
            </p>
          </div>
        </div>
      </section>

      <GoldenVisaCategories />
      <GoldenVisaBenefits />
      <ApplicationTimeline />
      <ReadyToStart />
      <Footer />
    </div>
  );
};

export default GoldenVisa;
