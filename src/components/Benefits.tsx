
import { Shield, Clock, Trophy, Users, Globe, Star } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Government-backed program ensuring long-term residency security"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Streamlined application process with expedited review"
    },
    {
      icon: Trophy,
      title: "Premium Service",
      description: "White-glove assistance from application to approval"
    },
    {
      icon: Users,
      title: "Family Inclusion",
      description: "Extend visa benefits to spouse and children"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Visa-free travel to 180+ countries worldwide"
    },
    {
      icon: Star,
      title: "Exclusive Benefits",
      description: "Access to premium healthcare, education, and business opportunities"
    }
  ];

  return (
    <section id="golden-visa" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose UAE Golden Visa?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled advantages with the UAE's most prestigious residency program, designed for global leaders and visionaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      </div>
    </section>
  );
};

export default Benefits;
