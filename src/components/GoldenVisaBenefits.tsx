
import { Shield, Clock, Users, Plane, GraduationCap, Building2, Heart, Star } from "lucide-react";

const GoldenVisaBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Long-term Residency",
      description: "5 or 10-year renewable visa with no sponsor required"
    },
    {
      icon: Users,
      title: "Family Inclusion",
      description: "Spouse, children, and parents can be included in the visa"
    },
    {
      icon: Plane,
      title: "Travel Freedom",
      description: "Multiple entry visa with no restrictions on travel"
    },
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "Children can study in UAE schools and universities"
    },
    {
      icon: Heart,
      title: "Healthcare Benefits",
      description: "Access to world-class healthcare facilities"
    },
    {
      icon: Building2,
      title: "Business Opportunities",
      description: "100% business ownership in most sectors"
    },
    {
      icon: Clock,
      title: "No Minimum Stay",
      description: "No requirement to spend minimum days in UAE"
    },
    {
      icon: Star,
      title: "Path to Citizenship",
      description: "Eligibility to apply for UAE citizenship in the future"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Golden Visa Benefits
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Unlock exclusive advantages and opportunities with your UAE Golden Visa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group animate-slide-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="bg-navy-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-500">
                <benefit.icon className="h-6 w-6 text-white group-hover:text-slate-900 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-navy-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaBenefits;
