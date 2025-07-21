
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">TERRA NOVA GLOBAL</h3>
              <p className="text-slate-300 leading-relaxed">
                Premium UAE Golden Visa services for discerning individuals seeking elite residency solutions.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about-us')}
                  className="text-slate-300 hover:text-yellow-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('golden-visa-benefits')}
                  className="text-slate-300 hover:text-yellow-400 transition-colors text-left"
                >
                  Golden Visa
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-slate-300 hover:text-yellow-400 transition-colors text-left"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-slate-300 hover:text-yellow-400 transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-slate-300">Investment Advisory</span>
              </li>
              <li>
                <span className="text-slate-300">Document Processing</span>
              </li>
              <li>
                <span className="text-slate-300">Legal Consultation</span>
              </li>
              <li>
                <span className="text-slate-300">Application Support</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="text-slate-300">+91 8287344367</p>
                  <p className="text-slate-300">+91 884 748 6673</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <p className="text-slate-300">info@terra-nova.global</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              {/* Removed footer links as requested */}
            </div>
            
            <p className="text-slate-400 text-sm">
              © {currentYear} Terra Nova Global. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
