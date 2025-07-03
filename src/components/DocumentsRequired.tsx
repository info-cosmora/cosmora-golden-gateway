
import { FileText, CreditCard, Home, Briefcase, GraduationCap, Heart } from "lucide-react";

const DocumentsRequired = () => {
  const documentCategories = [
    {
      icon: FileText,
      title: "Identity Documents",
      documents: [
        "Valid passport with minimum 6 months validity",
        "Recent passport-sized photographs",
        "Emirates ID (if applicable)",
        "Birth certificate (attested)"
      ]
    },
    {
      icon: CreditCard,
      title: "Financial Documents",
      documents: [
        "Bank statements (last 6 months)",
        "Salary certificates or employment letter",
        "Investment portfolio statements",
        "Property ownership documents"
      ]
    },
    {
      icon: GraduationCap,
      title: "Educational & Professional",
      documents: [
        "Educational certificates (attested)",
        "Professional qualifications",
        "Experience certificates",
        "License certifications (if applicable)"
      ]
    },
    {
      icon: Heart,
      title: "Medical & Personal",
      documents: [
        "Medical fitness certificate",
        "Police clearance certificate",
        "Marriage certificate (if applicable)",
        "Health insurance documents"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Documents Required
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive checklist ensures you have all necessary documentation for a smooth application process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {documentCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-navy-600 p-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-300">
                  <category.icon className="h-6 w-6 text-white group-hover:text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 ml-4">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.documents.map((document, docIndex) => (
                  <li key={docIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600 leading-relaxed">{document}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
            <p className="text-slate-700 font-medium">
              <span className="text-navy-600 font-bold">Note:</span> All foreign documents must be attested by relevant authorities. 
              Our team will guide you through the attestation process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsRequired;
