import { useState, useEffect } from "react";
import { ArrowRight, Award, Download, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import EligibilityQuiz from "./EligibilityQuiz";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-in-out ${
              index === currentImageIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.3)), url('${image}')`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Brand - Static Logo */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">
              TERRA NOVA
            </h1>
            <div className="text-xl md:text-2xl font-light text-yellow-400 mb-3 tracking-wide">
              GLOBAL
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6"></div>
          </div>

          {/* Premium Badge */}
          <div className="mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-300 px-5 py-2 rounded-full text-sm font-semibold">
              <Award className="h-4 w-4" />
              Premium Residency Solutions
            </div>
          </div>

          {/* Main Headings */}
          <div className="space-y-4 mb-10 animate-slide-up">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Get Your Dubai Golden Visa
            </h2>
            <h3 className="text-xl md:text-3xl font-light text-slate-200 leading-relaxed">
              10-Year UAE Residency for Investors, Professionals & More
            </h3>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Zero Sponsorship Needed. Family Included. Quick, Hassle-Free Process.
            </p>
          </div>

          {/* CTA Buttons - Inverted Triangle Layout */}
          <div className="flex flex-col items-center animate-fade-in-delayed">
            {/* Top Row - Two Buttons */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 w-full max-w-2xl">
              <button
                onClick={() => setShowQuiz(true)}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-6 py-4 rounded-lg text-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Check Your Eligibility
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <a
                href="/terra-nova-global-brochure.pdf"
                download
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Download Brochure
                <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Bottom Row - Centered Button */}
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 group"
              >
                Contact Us
                <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>
          
          {/* Eligibility Quiz Modal */}
          {showQuiz && <EligibilityQuiz onClose={() => setShowQuiz(false)} />}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
