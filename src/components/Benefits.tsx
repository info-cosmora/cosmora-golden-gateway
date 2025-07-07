
import { Shield, Clock, Trophy, Users, Globe, Star } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Long-Term Residency",
      description: "Stay 5–10 years without needing a sponsor"
    },
    {
      icon: Users,
      title: "Family Sponsorship",
      description: "Include spouse, children, and domestic staff"
    },
    {
      icon: Trophy,
      title: "Business & Investment Opportunities",
      description: "Own 100% of your business and invest freely"
    },
    {
      icon: Globe,
      title: "Multiple Entry & Re-Entry",
      description: "Travel flexibly without losing residency"
    },
    {
      icon: Clock,
      title: "Tax-Free Income",
      description: "Zero personal income tax"
    },
    {
      icon: Star,
      title: "Premium Lifestyle & Stability",
      description: "Enjoy Dubai's world-class amenities"
    }
  ];

  return (
    <section id="golden-visa-benefits" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Makes the Dubai Golden Visa So Powerful?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-navy-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                <benefit.icon className="h-8 w-8 text-white group-hover:text-slate-900 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-navy-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-navy-600 to-slate-800 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              Live in Dubai or just hold your residency — it's your choice.
            </p>
            <p className="text-xl text-slate-200 mt-4 font-semibold">
              No Minimum Stay required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
