import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EligibilitySubmission {
  name: string;
  email_from: string;
  phone: string;
  x_studio_itr: string;
  x_studio_reason_for_applying_for_golden_visa: string;
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
    const webhookUrl = Deno.env.get('WEBHOOK_URL');
    if (!webhookUrl) {
      console.error('WEBHOOK_URL environment variable not set');
      return new Response(JSON.stringify({ error: 'Configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const submissionData: EligibilitySubmission = await req.json();
    console.log('Submission data received:', submissionData);

    // Validate required fields
    if (!submissionData.name || !submissionData.email_from || !submissionData.phone || 
        !submissionData.x_studio_itr || !submissionData.x_studio_reason_for_applying_for_golden_visa) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Validate ITR values
    const validItrValues = ['greater than 1 crore', 'lesser than 1 crore'];
    if (!validItrValues.includes(submissionData.x_studio_itr)) {
      return new Response(JSON.stringify({ error: 'Invalid ITR value' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Send to webhook
    console.log('Sending to webhook:', webhookUrl);
    
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (!webhookResponse.ok) {
      console.error('Webhook request failed:', webhookResponse.status, webhookResponse.statusText);
      return new Response(JSON.stringify({ error: 'Failed to submit to webhook' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const webhookResponseData = await webhookResponse.text();
    console.log('Webhook response:', webhookResponseData);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Submission sent successfully',
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