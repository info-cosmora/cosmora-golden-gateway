
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
    // Add scroll-triggered animations with better timing
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('animate-slide-up');
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all major sections with staggered animation
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      const htmlSection = section as HTMLElement;
      // Start with elements hidden for better animation visibility
      htmlSection.style.opacity = '0';
      htmlSection.style.transform = 'translateY(60px)';
      htmlSection.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
      htmlSection.style.transitionDelay = `${index * 0.2}s`;
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
      }, 1000);
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
    </div>
  );
};

export default Index;
