import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I have to live in the UAE to keep the visa?",
      answer: "No. Golden Visa holders can live outside the UAE without cancellation. Maintaining UAE ties through investments or periodic visits is recommended."
    },
    {
      question: "What's the difference between a Golden Visa and a Blue Visa?",
      answer: "• Golden Visa: 5–10 year residency for investors, professionals, creatives, students.\n• Blue Visa: 10-year residency for significant contributors to sustainability efforts."
    },
    {
      question: "Can I include my kids or domestic helper in my visa application?",
      answer: "Yes. You can sponsor spouse, children of any age, and domestic staff."
    },
    {
      question: "How long does the process take?",
      answer: "Typically 2–4 weeks:\n• Eligibility assessment: 1–2 days\n• Documentation: 5–10 days\n• Government processing: 5–15 days"
    },
    {
      question: "What if my application is rejected?",
      answer: "We'll help you understand the reason, reapply, or explore alternatives. Pre-screening is provided to reduce rejection risk."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about UAE Golden Visa and our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out hover:shadow-xl transform hover:-translate-y-1"
                style={{ 
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-all duration-500 ease-in-out group"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4 group-hover:text-navy-600 transition-colors duration-500 ease-in-out">
                    {faq.question}
                  </h3>
                  <div className="transform transition-all duration-700 ease-in-out">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-navy-600 flex-shrink-0 transform rotate-180 transition-all duration-700 ease-in-out" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-slate-400 flex-shrink-0 group-hover:text-navy-600 transition-all duration-500 ease-in-out" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="border-t border-slate-200 pt-6">
                      <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Consultation CTA - Moved below FAQ */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-navy-600 to-slate-800 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
