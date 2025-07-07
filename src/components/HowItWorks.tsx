
import { Link } from "react-router-dom";
import { ArrowRight, Search, FileText, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Check Your Eligibility",
      description: "Submit your details to check your eligibility."
    },
    {
      number: "02",
      icon: FileText,
      title: "Documentation Submission",
      description: "If eligible, share your documents for submission."
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Get Your Visa",
      description: "Post approval, complete medical & biometrics to avail your visa."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How It Works?
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:bg-navy-600 transition-all duration-300">
                    <step.icon className="h-10 w-10 text-slate-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-navy-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-navy-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Application
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
