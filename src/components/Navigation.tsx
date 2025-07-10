
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-slate-900">
            COSMORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('golden-visa-benefits')}
              className="text-slate-700 hover:text-navy-600 font-medium transition-colors"
            >
              GOLDEN VISA
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-700 hover:text-navy-600 font-medium transition-colors"
            >
              TESTIMONIALS
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-slate-700 hover:text-navy-600 font-medium transition-colors"
            >
              FAQ
            </button>
            <Link
              to="/contact"
              className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 active:scale-95 overflow-hidden"
              style={{
                boxShadow: '0 8px 25px rgba(251, 191, 36, 0.4)',
              }}
            >
              <span className="relative z-10">CONTACT US</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-slate-200 bg-white">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('golden-visa-benefits')}
                className="text-slate-700 hover:text-navy-600 font-medium text-left py-2 transition-colors"
              >
                GOLDEN VISA
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-700 hover:text-navy-600 font-medium text-left py-2 transition-colors"
              >
                TESTIMONIALS
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-slate-700 hover:text-navy-600 font-medium text-left py-2 transition-colors"
              >
                FAQ
              </button>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-6 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 w-fit transform hover:scale-105 hover:shadow-xl"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
