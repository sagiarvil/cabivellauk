import { z } from 'zod';

interface Env {
  DB?: {
    prepare: (query: string) => {
      bind: (...args: any[]) => {
        first: <T = any>() => Promise<T | null>;
        run: () => Promise<{ success: boolean; meta: any }>;
      };
    };
  };
  TURNSTILE_SECRET_KEY?: string;
  HUBSPOT_PRIVATE_APP_TOKEN?: string;
  POSTMARK_SERVER_TOKEN?: string;
  LEAD_NOTIFICATION_EMAIL?: string;
}

const EnquirySchema = z.object({
  idempotencyKey: z.string().min(8).max(128).optional(),
  customerType: z.enum(['homeowner', 'trade', 'architect', 'interior_designer']).default('homeowner'),
  name: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(7, 'Valid phone number is required').max(30),
  postcode: z.string().max(20).optional(),
  collection: z.string().max(100).optional(),
  modelId: z.string().max(100).optional(),
  roomDimensions: z.string().max(200).optional(),
  message: z.string().min(5, 'Please provide brief details about your project').max(2000),
  marketingConsent: z.boolean().default(false),
  turnstileToken: z.string().optional(),
  sourcePath: z.string().default('/enquire/')
});

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const contentType = request.headers.get('content-type') || '';
    let rawBody: any;

    if (contentType.includes('application/json')) {
      rawBody = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      rawBody = Object.fromEntries(formData.entries());
      if (rawBody.marketingConsent) {
        rawBody.marketingConsent = rawBody.marketingConsent === 'true' || rawBody.marketingConsent === 'on' || rawBody.marketingConsent === '1';
      }
    } else {
      return new Response(JSON.stringify({ error: 'Unsupported media type' }), {
        status: 415,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate with Zod
    const validationResult = EnquirySchema.safeParse(rawBody);
    if (!validationResult.success) {
      return new Response(JSON.stringify({
        error: 'Validation failed',
        details: validationResult.error.flatten().fieldErrors
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = validationResult.data;
    const idempotencyKey = data.idempotencyKey || `idem_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // Cloudflare Turnstile Server Verification
    if (env.TURNSTILE_SECRET_KEY && data.turnstileToken) {
      try {
        const turnstileRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            secret: env.TURNSTILE_SECRET_KEY,
            response: data.turnstileToken,
            remoteip: request.headers.get('CF-Connecting-IP') || ''
          })
        });
        const turnstileData = await turnstileRes.json() as { success: boolean };
        if (!turnstileData.success) {
          return new Response(JSON.stringify({ error: 'Human verification failed. Please try again.' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      } catch (err) {
        // Log & proceed or fail safe
      }
    }

    // Check idempotency in D1
    if (env.DB) {
      try {
        const existing = await env.DB.prepare(
          'SELECT lead_id FROM enquiry_events WHERE idempotency_key = ?'
        ).bind(idempotencyKey).first<{ lead_id: string }>();

        if (existing) {
          return new Response(JSON.stringify({
            status: 'success',
            leadId: existing.lead_id,
            message: 'Enquiry previously received and registered.'
          }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        // Insert new lead event
        await env.DB.prepare(`
          INSERT INTO enquiry_events (
            lead_id, idempotency_key, source_path, customer_type, model_id,
            customer_name, customer_email, customer_phone, postcode,
            room_dimensions, project_notes, marketing_consent, sync_state
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
        `).bind(
          leadId,
          idempotencyKey,
          data.sourcePath,
          data.customerType,
          data.modelId || data.collection || 'general',
          data.name,
          data.email,
          data.phone,
          data.postcode || '',
          data.roomDimensions || '',
          data.message,
          data.marketingConsent ? 1 : 0
        ).run();
      } catch (dbErr) {
        console.error('D1 Error:', dbErr);
      }
    }

    // HubSpot Integration
    let crmRecordId: string | null = null;
    if (env.HUBSPOT_PRIVATE_APP_TOKEN) {
      try {
        const hsRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.HUBSPOT_PRIVATE_APP_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            properties: {
              email: data.email,
              firstname: data.name.split(' ')[0],
              lastname: data.name.split(' ').slice(1).join(' ') || '',
              phone: data.phone,
              zip: data.postcode || '',
              message: data.message,
              hs_lead_status: 'NEW',
              cabivella_customer_type: data.customerType,
              cabivella_interested_model: data.modelId || data.collection || 'General'
            }
          })
        });
        if (hsRes.ok) {
          const hsData = await hsRes.json() as { id: string };
          crmRecordId = hsData.id;
        }
      } catch (hsErr) {
        console.error('HubSpot sync error:', hsErr);
      }
    }

    // Postmark / Transactional Notification Email to barisbagirlar@gmail.com
    const notificationEmail = env.LEAD_NOTIFICATION_EMAIL || 'barisbagirlar@gmail.com';
    if (env.POSTMARK_SERVER_TOKEN) {
      try {
        await fetch('https://api.postmarkapp.com/email', {
          method: 'POST',
          headers: {
            'X-Postmark-Server-Token': env.POSTMARK_SERVER_TOKEN,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            From: 'enquiries@cabivella.co.uk',
            To: notificationEmail,
            Subject: `[Cabivella UK Lead] ${data.customerType.toUpperCase()} - ${data.name}`,
            TextBody: `New bespoke cabinetry enquiry received:\n\nLead ID: ${leadId}\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nPostcode: ${data.postcode || 'N/A'}\nCustomer Type: ${data.customerType}\nCollection/Model: ${data.modelId || data.collection || 'General'}\nRoom Dimensions: ${data.roomDimensions || 'N/A'}\nMessage: ${data.message}\nConsent: ${data.marketingConsent ? 'Yes' : 'No'}\nSource: ${data.sourcePath}`,
            MessageStream: 'outbound'
          })
        });
      } catch (pmErr) {
        console.error('Postmark dispatch error:', pmErr);
      }
    }

    // Update D1 sync state if crm record was created
    if (env.DB && crmRecordId) {
      try {
        await env.DB.prepare(
          'UPDATE enquiry_events SET sync_state = ?, crm_record_id = ? WHERE lead_id = ?'
        ).bind('synced', crmRecordId, leadId).run();
      } catch (err) {}
    }

    return new Response(JSON.stringify({
      status: 'success',
      leadId,
      message: 'Thank you. Your bespoke cabinetry enquiry has been securely received. Our team will review your project and get in touch.'
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({
      error: 'Internal server error',
      code: 'SERVER_ERROR'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
