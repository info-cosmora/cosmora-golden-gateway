
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to secure your UAE Golden Visa? Our experts are here to guide you through every step.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information & Why Choose Cosmora */}
            <div className="space-y-12">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {/* Phone Numbers */}
                  <div className="flex items-start space-x-4 group hover:bg-slate-50 p-4 rounded-lg transition-all duration-300">
                    <div className="bg-navy-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                      <p className="text-slate-600">+91 8287344367</p>
                      <p className="text-slate-600">+91 884 748 6673</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 group hover:bg-slate-50 p-4 rounded-lg transition-all duration-300">
                    <div className="bg-navy-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                      <p className="text-slate-600">info@cosmora.global</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Cosmora */}
              <div className="bg-gradient-to-br from-navy-600 to-slate-800 p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-white">
                <h2 className="text-3xl font-bold mb-8">
                  Why Choose Cosmora?
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group hover:bg-white/10 p-3 rounded-lg transition-all duration-300 cursor-pointer">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">98% Success Rate</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:bg-white/10 p-3 rounded-lg transition-all duration-300 cursor-pointer">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">60-Day Processing</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:bg-white/10 p-3 rounded-lg transition-all duration-300 cursor-pointer">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">Dedicated Case Manager</span>
                  </div>
                  <div className="flex items-center space-x-3 group hover:bg-white/10 p-3 rounded-lg transition-all duration-300 cursor-pointer">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">Premium Service</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
