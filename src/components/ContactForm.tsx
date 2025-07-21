
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email_from: '',
    phone: '',
    annual_income: '',
    reasons: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reasonOptions = [
    'Attractive Tax Benefits',
    'Long-Term Residency',
    'Real Estate Investment Opportunities',
    'Family Security and Quality Education',
    'Business and Entrepreneurship Opportunities',
    'Global Access and Travel Flexibility',
    'High Standard of Living and Infrastructure',
    'Residency Backup and Plan B',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email_from || !formData.phone || 
        !formData.annual_income || formData.reasons.length === 0) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Transform data for webhook
      const webhookData = {
        name: formData.name,
        email_from: formData.email_from,
        phone: formData.phone,
        x_studio_itr: formData.annual_income,
        x_studio_reason_for_applying_for_golden_visa: formData.reasons.join(', ')
      };
      
      console.log('Submitting form data:', webhookData);
      
      const { data, error } = await supabase.functions.invoke('submit-eligibility', {
        body: webhookData
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
        annual_income: '',
        reasons: []
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

  const handleReasonChange = (reason: string) => {
    const newReasons = formData.reasons.includes(reason)
      ? formData.reasons.filter(r => r !== reason)
      : [...formData.reasons, reason];
    
    setFormData({
      ...formData,
      reasons: newReasons
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl" id="contact-section">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        Contact Us
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
          <label htmlFor="annual_income" className="block text-sm font-semibold text-slate-700 mb-2">
            Annual Income *
          </label>
          <select
            id="annual_income"
            name="annual_income"
            value={formData.annual_income}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
            disabled={isSubmitting}
          >
            <option value="">Select income range</option>
            <option value="greater than 1 crore">Greater than 100,000 USD</option>
            <option value="lesser than 1 crore">Less than 100,000 USD</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Reason for Applying for Golden Visa * (Select all that apply)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {reasonOptions.map((reason) => (
              <label
                key={reason}
                className="flex items-center p-3 border border-slate-200 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.reasons.includes(reason)}
                  onChange={() => handleReasonChange(reason)}
                  className="mr-3 h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-slate-300 rounded"
                  disabled={isSubmitting}
                />
                <span className="text-sm text-slate-700">{reason}</span>
              </label>
            ))}
          </div>
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
