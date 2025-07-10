
import { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import WhyDubai from "@/components/WhyDubai";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import DocumentsRequired from "@/components/DocumentsRequired";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  useEffect(() => {
    // Add scroll-triggered animations with improved timing
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('animate-fade-in');
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all major sections with improved timing
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      const htmlSection = section as HTMLElement;
      // Start with elements hidden
      htmlSection.style.opacity = '0';
      htmlSection.style.transform = 'translateY(50px)';
      htmlSection.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
      htmlSection.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(section);
    });

    // Handle hash navigation on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutUs />
      <WhyDubai />
      <Benefits />
      <HowItWorks />
      <DocumentsRequired />
      <Testimonials />
      <FAQ />
      <Footer />
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Index;
