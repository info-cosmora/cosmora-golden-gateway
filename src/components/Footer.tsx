
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">COSMORA</h3>
              <p className="text-slate-300 leading-relaxed">
                Premium UAE Golden Visa services for discerning individuals seeking elite residency solutions.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-slate-900 transition-all duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-slate-900 transition-all duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-slate-900 transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-slate-900 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
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
                  onClick={() => document.getElementById('golden-visa')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                >
                  Golden Visa
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-yellow-400 transition-colors"
                >
                  Testimonials
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
                <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Investment Advisory
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Document Processing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Legal Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors">
                  Application Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Dubai Office:</p>
                  <p className="text-sm text-slate-400">Business Bay, Dubai, UAE</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">India Office:</p>
                  <p className="text-sm text-slate-400">Mumbai, Maharashtra, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <p className="text-slate-300">+971 50 123 4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <p className="text-slate-300">info@cosmora.ae</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center md:text-left md:max-w-none md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-slate-400 text-sm">
                Subscribe to our newsletter for the latest UAE Golden Visa updates
              </p>
            </div>
            
            <div className="flex max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-r-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                About Us
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                FAQ
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                Licenses & Certifications
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                Terms & Conditions
              </a>
            </div>
            
            <p className="text-slate-400 text-sm">
              © {currentYear} Cosmora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
