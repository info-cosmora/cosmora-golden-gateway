
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email_from: '',
    phone: '',
    x_studio_itr: '',
    x_studio_reason_for_applying_for_golden_visa: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reasonOptions = [
    'Investment in Real Estate',
    'Business or Startup Ownership',
    'Long-Term Residency',
    'Employment in a Specialized Field',
    'Retirement in UAE',
    'Education Purposes',
    'Family Reunification',
    'High Net Worth Individual Status',
    'Remote Work / Digital Nomad Residency',
    'Access to Healthcare and Social Benefits',
    'Frequent Travel Convenience',
    'Tax Optimization',
    'Pathway to Citizenship',
    'Lifestyle and Quality of Life',
    'Security and Political Stability',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email_from || !formData.phone || 
        !formData.x_studio_itr || !formData.x_studio_reason_for_applying_for_golden_visa) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);
      
      const { data, error } = await supabase.functions.invoke('submit-eligibility', {
        body: formData
      });

      console.log('Supabase response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      toast({
        title: "Application Submitted Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email_from: '',
        phone: '',
        x_studio_itr: '',
        x_studio_reason_for_applying_for_golden_visa: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
            placeholder="Enter your full name"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="email_from" className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email_from"
            name="email_from"
            value={formData.email_from}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
            Contact Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
            placeholder="Enter your contact number"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="x_studio_itr" className="block text-sm font-semibold text-slate-700 mb-2">
            Current ITR *
          </label>
          <select
            id="x_studio_itr"
            name="x_studio_itr"
            value={formData.x_studio_itr}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
            disabled={isSubmitting}
          >
            <option value="">Select ITR range</option>
            <option value="greater than 1 crore">Greater than 1 crore</option>
            <option value="lesser than 1 crore">Lesser than 1 crore</option>
          </select>
        </div>

        <div>
          <label htmlFor="x_studio_reason_for_applying_for_golden_visa" className="block text-sm font-semibold text-slate-700 mb-2">
            Reason for Applying for Golden Visa *
          </label>
          <select
            id="x_studio_reason_for_applying_for_golden_visa"
            name="x_studio_reason_for_applying_for_golden_visa"
            value={formData.x_studio_reason_for_applying_for_golden_visa}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
            disabled={isSubmitting}
          >
            <option value="">Select reason</option>
            {reasonOptions.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <Send className="h-5 w-5" />
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
