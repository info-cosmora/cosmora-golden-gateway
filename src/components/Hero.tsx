
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.4)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Brand */}
          <div className="mb-8 animate-slide-down">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              COSMORA
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto animate-scale-in"></div>
          </div>

          {/* Main Headings */}
          <div className="space-y-6 mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Premium UAE Golden Visa
            </h2>
            <h3 className="text-2xl md:text-4xl font-light text-slate-200 leading-relaxed">
              Your Gateway to Elite Residency
            </h3>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Experience seamless UAE Golden Visa processing with our exclusive, white-glove service designed for discerning individuals.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delayed">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 group"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <button
              onClick={() => document.getElementById('golden-visa')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Learn More
            </button>
          </div>
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
