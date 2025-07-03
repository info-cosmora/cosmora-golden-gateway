
import { CheckCircle, Clock, FileText, UserCheck, Award } from "lucide-react";

const ApplicationTimeline = () => {
  const steps = [
    {
      icon: FileText,
      title: "Document Preparation",
      description: "Gather and prepare all required documents",
      duration: "1-2 weeks",
      details: ["Passport copies", "Educational certificates", "Investment proof", "Medical certificates"]
    },
    {
      icon: UserCheck,
      title: "Initial Assessment",
      description: "Our experts review your eligibility",
      duration: "3-5 days",
      details: ["Profile evaluation", "Category determination", "Document verification", "Initial consultation"]
    },
    {
      icon: Clock,
      title: "Application Submission",
      description: "Submit application to UAE authorities",
      duration: "1-2 days",
      details: ["Online application", "Fee payment", "Document upload", "Biometric appointment"]
    },
    {
      icon: CheckCircle,
      title: "Processing & Review",
      description: "Government review and background checks",
      duration: "30-60 days",
      details: ["Security clearance", "Document verification", "Investment confirmation", "Final assessment"]
    },
    {
      icon: Award,
      title: "Visa Issuance",
      description: "Golden Visa approval and issuance",
      duration: "5-10 days",
      details: ["Approval notification", "Visa printing", "Emirates ID application", "Welcome package"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Application Process Timeline
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your journey to UAE Golden Visa in 5 simple steps
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start mb-12 last:mb-0 animate-slide-in-right"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline line */}
              <div className="flex flex-col items-center mr-8">
                <div className="bg-navy-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 transition-all duration-500 group">
                  <step.icon className="h-6 w-6 text-white group-hover:text-slate-900 transition-colors duration-300" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-24 bg-slate-200"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 md:mb-0">
                    {step.title}
                  </h3>
                  <span className="bg-navy-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {step.duration}
                  </span>
                </div>
                <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="grid md:grid-cols-2 gap-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-slate-500 text-sm">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationTimeline;
