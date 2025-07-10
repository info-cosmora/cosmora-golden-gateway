
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
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all major sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(section);
    });

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
