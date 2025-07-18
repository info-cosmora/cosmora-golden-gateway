
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Licenses = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
              Licenses & Certifications
            </h1>
            
            <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Error 404</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  If not accessible then contact via our mobile number: 
                  <span className="font-semibold text-navy-600"> +91 8287344367</span> or 
                  <span className="font-semibold text-navy-600"> +91 884 748 6673</span> or 
                  email id: <span className="font-semibold text-navy-600">info@terranova.global</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Licenses;
