// emailApi.js
// Central service for all contact form email sending.
// The function signature is intentionally stable so that swapping providers
// (EmailJS → Resend → SendGrid) requires changes only in this file.
//
// ─── HOW TO INTEGRATE ────────────────────────────────────────────────────────
//
// OPTION A — EmailJS (no backend required, free tier available)
// 1. npm install @emailjs/browser
// 2. Create account at https://www.emailjs.com/
// 3. Create a Service, a Template, and copy the Public Key.
// 4. Add to .env.local (NEVER commit this file):
//      VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//      VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//      VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
// 5. Replace the stub below with:
//
//    import emailjs from '@emailjs/browser'
//    export const sendContactEmail = (data) =>
//      emailjs.send(
//        import.meta.env.VITE_EMAILJS_SERVICE_ID,
//        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//        {
//          from_name:    data.nome,
//          from_company: data.empresa,
//          reply_to:     data.email,
//          from_phone:   data.telefone,
//          service_type: data.servico,
//          message:      data.mensagem,
//        },
//        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
//      )
//
// OPTION B — Resend / SendGrid (requires a small backend function or edge route)
// 1. Create an API route (e.g., Vercel Function at /api/contact.js).
// 2. In that function, use the Resend or SendGrid SDK with the API key stored
//    as a SERVER-SIDE environment variable (not VITE_ prefixed — those are public).
// 3. Replace the stub below with a fetch call:
//
//    export const sendContactEmail = (data) =>
//      fetch('/api/contact', {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify(data),
//      }).then((res) => {
//        if (!res.ok) throw new Error('Send failed')
//        return res.json()
//      })
//
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Sends the contact form data via the configured email provider.
 * @param {Object} data - Form fields: nome, empresa, email, telefone, servico, mensagem
 * @returns {Promise<void>}
 */
export const sendContactEmail = async (data) => {
  // TODO: Replace this stub with a real email provider (see comments above).
  // For now, log the payload so you can verify the form is wired correctly.
  console.log('[sendContactEmail] payload:', data)
  throw new Error('Email provider not configured. See src/services/emailApi.js for setup instructions.')
}
