
import { FileText, CreditCard, GraduationCap, Heart } from "lucide-react";

const DocumentsRequired = () => {
  const requiredDocuments = [
    "Passport copy",
    "Current UAE visa (if applicable)",
    "Emirates ID (if applicable)", 
    "Recent passport-size photograph",
    "Proof of income (salary slips, bank statements, or company ownership documents)",
    "Academic or professional certifications (if applicable)",
    "Company trade license or shareholder certificate (for business owners)",
    "Letter of employment or offer letter (for professionals)",
    "CV/resume (for professionals or academics)"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Documents Required
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-navy-600 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 ml-4">
                Required Documents Checklist
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocuments.map((document, index) => (
                <div key={index} className="flex items-start p-4 border border-slate-200 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700 leading-relaxed">{document}</span>
                </div>
              ))}
            </div>
          </div>
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
