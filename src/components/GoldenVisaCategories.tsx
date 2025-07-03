
import { Briefcase, Users, Award, Building, Brain, Heart } from "lucide-react";

const GoldenVisaCategories = () => {
  const categories = [
    {
      icon: Briefcase,
      title: "Investors",
      description: "Real estate investment of AED 2 million or more, or investment in a company with a capital of AED 500,000 or more",
      minAmount: "AED 2M+"
    },
    {
      icon: Users,
      title: "Entrepreneurs",
      description: "Business owners with innovative projects, proven track record, or approval from UAE incubators",
      minAmount: "Varies"
    },
    {
      icon: Award,
      title: "Specialized Talents",
      description: "Professionals in medicine, engineering, science, arts, culture, and other specialized fields",
      minAmount: "N/A"
    },
    {
      icon: Building,
      title: "Real Estate Investors",
      description: "Property investment of AED 2 million in residential real estate or AED 750,000 in off-plan projects",
      minAmount: "AED 750K+"
    },
    {
      icon: Brain,
      title: "Scientists & Researchers",
      description: "PhD holders, researchers, and scientists in priority fields with proven expertise",
      minAmount: "N/A"
    },
    {
      icon: Heart,
      title: "Healthcare Workers",
      description: "Doctors, nurses, and healthcare professionals in specialized fields contributing to UAE's healthcare sector",
      minAmount: "N/A"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Golden Visa Categories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose the pathway that best matches your profile and investment capacity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-navy-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-500">
                <category.icon className="h-8 w-8 text-white group-hover:text-slate-900 transition-colors duration-300" />
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-navy-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <span className="text-sm font-semibold text-navy-600 bg-navy-100 px-3 py-1 rounded-full">
                  {category.minAmount}
                </span>
              </div>
              
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaCategories;
