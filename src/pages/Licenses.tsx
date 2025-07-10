
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Licenses = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
              Licenses & Certifications
            </h1>
            
            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Error 404</h2>
              <p className="text-slate-600 mb-6">
                If not accessible then contact via our mobile number: +91 8287344367 or +91 884 748 6673 or email id: info@cosmora.global
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Licenses;
