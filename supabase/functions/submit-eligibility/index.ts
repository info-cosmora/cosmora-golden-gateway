
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EligibilitySubmission {
  full_name: string;
  email: string;
  contact_number: string;
  current_itr: string;
  reason_for_applying: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log('Eligibility submission request received');

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const resendApiKey = Deno.env.get('RESEND_API_KEY')!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const resend = new Resend(resendApiKey);

    const submissionData: EligibilitySubmission = await req.json();
    console.log('Submission data received:', submissionData);

    // Validate required fields
    if (!submissionData.full_name || !submissionData.email || !submissionData.contact_number || 
        !submissionData.current_itr || !submissionData.reason_for_applying) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Insert into Supabase
    const { data, error: dbError } = await supabase
      .from('eligibility_submissions')
      .insert([submissionData])
      .select();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(JSON.stringify({ error: 'Failed to save submission' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    console.log('Data saved to database:', data);

    // Send confirmation email
    try {
      const emailResponse = await resend.emails.send({
        from: 'Terra-Nova <info@terranova.global>',
        to: [submissionData.email],
        subject: 'Thank you for submitting your details to Terra-Nova',
        html: `
          <div style="font-family: sans-serif; padding: 24px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: navy;">Thank You for Reaching Out!</h2>
            <p>Hi <strong>${submissionData.full_name}</strong>,</p>
            <p>We've successfully received your eligibility form. Our team is reviewing your information and will get in touch with you shortly.</p>
            <p>Meanwhile, if you have any urgent queries, feel free to contact us at:</p>
            <ul>
              <li>Email: <a href="mailto:info@terranova.global">info@terranova.global</a></li>
              <li>Phone: +91 8287344367 / +91 884 748 6673</li>
            </ul>
            <br/>
            <p>Warm regards,</p>
            <p><strong>The Terra-Nova Team</strong></p>
          </div>
        `
      });

      console.log('Email sent successfully:', emailResponse);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails, but log it
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Submission received successfully',
      data: data 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error) {
    console.error('Error in submit-eligibility function:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      details: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

serve(handler);
