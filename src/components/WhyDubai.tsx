
import { Globe, TrendingUp, Building2, Shield, Lightbulb, Star } from "lucide-react";

const WhyDubai = () => {
  const reasons = [
    {
      icon: Globe,
      title: "Strategic Global Location",
      description: "Unmatched connectivity with direct flights worldwide"
    },
    {
      icon: TrendingUp,
      title: "Tax-Free Economy",
      description: "Maximize financial growth with zero personal income tax"
    },
    {
      icon: Building2,
      title: "World-Class Infrastructure",
      description: "Exceptional healthcare, luxury real estate, smart city tech"
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Ranked among the world's safest cities for families"
    },
    {
      icon: Lightbulb,
      title: "Business & Innovation Hub",
      description: "Thriving ecosystem for global investors and entrepreneurs"
    },
    {
      icon: Star,
      title: "Premium Lifestyle & Diversity",
      description: "Cosmopolitan living with luxury shopping, fine dining, and diverse cultures"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Dubai?
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Dubai isn't just a city; it's a global hub for opportunity, innovation, and quality living. Dubai is where ambition meets reality – the perfect destination to live, invest, and thrive. Here's why thousands choose Dubai as their second home:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="bg-navy-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                <reason.icon className="h-8 w-8 text-white group-hover:text-slate-900 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-navy-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDubai;
