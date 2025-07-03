
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the UAE Golden Visa?",
      answer: "The UAE Golden Visa is a long-term residency visa program that allows investors, entrepreneurs, talented individuals, and their families to live, work, and study in the UAE for extended periods, typically 5-10 years, with the possibility of renewal."
    },
    {
      question: "Who is eligible for the Golden Visa?",
      answer: "Eligibility includes investors with minimum investments of AED 2 million in real estate or AED 10 million in other sectors, entrepreneurs with innovative projects, skilled professionals in medicine, engineering, science, and other specialized fields, and outstanding students."
    },
    {
      question: "How long does the application process take?",
      answer: "The typical processing time ranges from 30-90 days, depending on the visa category and completeness of documentation. Our premium service often expedites this timeline through proper preparation and strategic submission."
    },
    {
      question: "Can I include my family members?",
      answer: "Yes, Golden Visa holders can sponsor their spouse, children (regardless of age), and in some cases, parents and domestic helpers. Family members receive the same visa duration as the primary applicant."
    },
    {
      question: "What are the investment requirements?",
      answer: "Investment requirements vary by category: AED 2 million for real estate (with specific conditions), AED 10 million for other investments, or meeting specific criteria for skilled professionals, entrepreneurs, and exceptional talents."
    },
    {
      question: "Do I need to maintain continuous residency?",
      answer: "No, unlike other UAE visas, Golden Visa holders are not required to spend a minimum number of days in the UAE annually. However, you must visit at least once every 180 days to maintain the visa validity."
    },
    {
      question: "What services does Cosmora provide?",
      answer: "We offer comprehensive Golden Visa services including eligibility assessment, investment advisory, document preparation and attestation, application submission, liaison with government authorities, and ongoing support throughout the process."
    },
    {
      question: "Are there any restrictions on the Golden Visa?",
      answer: "Golden Visa holders enjoy most rights of UAE residents, including opening bank accounts, purchasing property, starting businesses, and accessing healthcare and education. Some government positions may still require UAE citizenship."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about UAE Golden Visa and our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-navy-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <div className="border-t border-slate-200 pt-6">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
