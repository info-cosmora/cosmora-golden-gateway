
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    permanentAddress: '',
    currentAddress: '',
    currentITR: '',
    currentITRValue: '',
    reasonForApplying: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.permanentAddress || !formData.currentAddress || !formData.currentITR || !formData.reasonForApplying) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      permanentAddress: '',
      currentAddress: '',
      currentITR: '',
      currentITRValue: '',
      reasonForApplying: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        Check Your Eligibility
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="permanentAddress" className="block text-sm font-semibold text-slate-700 mb-2">
            Permanent Address *
          </label>
          <textarea
            id="permanentAddress"
            name="permanentAddress"
            rows={3}
            value={formData.permanentAddress}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300 resize-vertical"
            placeholder="Enter your permanent address"
          />
        </div>

        <div>
          <label htmlFor="currentAddress" className="block text-sm font-semibold text-slate-700 mb-2">
            Current Address *
          </label>
          <textarea
            id="currentAddress"
            name="currentAddress"
            rows={3}
            value={formData.currentAddress}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300 resize-vertical"
            placeholder="Enter your current address"
          />
        </div>

        <div>
          <label htmlFor="currentITR" className="block text-sm font-semibold text-slate-700 mb-2">
            Current ITR *
          </label>
          <select
            id="currentITR"
            name="currentITR"
            value={formData.currentITR}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
          >
            <option value="">Select ITR range</option>
            <option value="greater-than-1-crore">Greater than 1 crore</option>
            <option value="less-than-1-crore">Less than 1 crore</option>
          </select>
        </div>

        <div>
          <label htmlFor="currentITRValue" className="block text-sm font-semibold text-slate-700 mb-2">
            Current ITR Value
          </label>
          <input
            type="text"
            id="currentITRValue"
            name="currentITRValue"
            value={formData.currentITRValue}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
            placeholder="Enter your ITR value"
          />
        </div>

        <div>
          <label htmlFor="reasonForApplying" className="block text-sm font-semibold text-slate-700 mb-2">
            Reason for Applying for Golden Visa *
          </label>
          <select
            id="reasonForApplying"
            name="reasonForApplying"
            value={formData.reasonForApplying}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
          >
            <option value="">Select reason</option>
            <option value="family-reasons">Family Reasons</option>
            <option value="business-reasons">Business Reasons</option>
            <option value="settlement-reasons">Settlement Reasons</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <Send className="h-5 w-5" />
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
