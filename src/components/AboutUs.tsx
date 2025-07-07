
import { Users, Award, Shield, Clock } from "lucide-react";

const AboutUs = () => {
  const highlights = [
    {
      icon: Users,
      title: "Client-First Approach",
      description: "Personalized guidance for every application"
    },
    {
      icon: Shield,
      title: "Trusted Advisory",
      description: "Deep regulatory expertise you can rely on"
    },
    {
      icon: Clock,
      title: "Streamlined Process",
      description: "Complex procedures made seamless"
    },
    {
      icon: Award,
      title: "Success Oriented",
      description: "Every application positioned for approval"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Us
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Cosmora is a trusted advisory firm specializing in UAE Golden Visa services, empowering investors, professionals, entrepreneurs, and families to secure long-term residency in Dubai and across the Emirates. With a commitment to transparency, speed, and personalized guidance, Cosmora streamlines the complex Golden Visa process into a seamless experience – from eligibility assessment to final approval. Our team combines deep regulatory expertise with a client-first approach to ensure every application is positioned for success, helping you unlock the limitless opportunities of UAE residency with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-navy-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-500 transform group-hover:scale-110">
                  <highlight.icon className="h-8 w-8 text-white group-hover:text-slate-900 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-navy-600 transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
