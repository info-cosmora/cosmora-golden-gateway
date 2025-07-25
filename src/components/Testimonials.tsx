import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const testimonials = [
    {
      name: "Elena R.",
      title: "Tech Entrepreneur",
      location: "Mumbai, India",
      content: "Got my 10-year visa in just 21 days – Helped relocate my family with zero hassle. Investment + visa guided with clarity.",
      rating: 5
    },
    {
      name: "Sarah M.",
      title: "Investment Banker",
      location: "Delhi, India",
      content: "The team at Terra-Nova provided exceptional guidance throughout my application. Their expertise and professionalism made what seemed like a complex process remarkably straightforward.",
      rating: 5
    },
    {
      name: "Raj S.",
      title: "Real Estate Investor",
      location: "London, UK",
      content: "Outstanding service from start to finish. Terra-Nova's team handled every detail with precision and kept me informed at every step. Highly recommend their services.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Terra-Nova Global has helped hundreds of clients achieve their UAE Golden Visa dreams with our premium service.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Testimonial Card */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 overflow-hidden">
            <div className="flex justify-center mb-6">
              <Quote className="h-12 w-12 text-yellow-500" fill="currentColor" />
            </div>
            
            <div className="text-center mb-8">
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
                }`}
              >
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Client Info */}
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-slate-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-slate-600">
                    {testimonials[currentIndex].title}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-navy-600 hover:text-white group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-navy-600 hover:text-white group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 scale-125'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
