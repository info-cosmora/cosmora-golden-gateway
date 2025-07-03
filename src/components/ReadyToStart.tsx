
import { ArrowRight, Star, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ReadyToStart = () => {
  const highlights = [
    {
      icon: Star,
      text: "Premium Service"
    },
    {
      icon: Shield,
      text: "100% Success Rate"
    },
    {
      icon: Clock,
      text: "Fast Processing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-600 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
            Take the first step towards securing your UAE Golden Visa with our expert guidance and premium service.
          </p>

          {/* Highlights */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center text-white animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-yellow-400 p-2 rounded-full mr-3">
                  <highlight.icon className="h-5 w-5 text-slate-900" />
                </div>
                <span className="text-lg font-semibold">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-delayed">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-lg text-xl font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              Get Started Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="mt-8 text-slate-300 text-lg">
            <p>Free consultation • No hidden fees • Expert guidance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
