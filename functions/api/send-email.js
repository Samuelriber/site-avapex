/**
 * Cloudflare Pages Function — POST /api/send-email
 *
 * Recebe os dados do formulário de contato e encaminha via Resend API.
 * A chave da API fica protegida em context.env (variável de ambiente do servidor),
 * nunca exposta no bundle do frontend.
 *
 * Configure RESEND_API_KEY em:
 *   - Local: arquivo .dev.vars (não commitado)
 *   - Produção: Cloudflare Pages → Settings → Environment variables
 */
export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  try {
    const apiKey = context.env.RESEND_API_KEY
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Configuração de e-mail ausente no servidor.' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      )
    }

    const body = await context.request.json()
    const { nome, empresa, email, telefone, servico, mensagem } = body

    if (!nome || !empresa || !email || !telefone || !servico) {
      return new Response(
        JSON.stringify({ error: 'Campos obrigatórios ausentes.' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      )
    }

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:32px;border-radius:12px;">
        <div style="background:#0B1121;padding:24px 32px;border-radius:8px 8px 0 0;margin-bottom:0;">
          <h1 style="color:#facc15;margin:0;font-size:22px;">Nova Solicitação de Orçamento</h1>
          <p style="color:#94a3b8;margin:6px 0 0;font-size:14px;">Recebida pelo site avapex.com.br</p>
        </div>
        <div style="background:#ffffff;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e2e8f0;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;width:40%;">
                <strong style="color:#64748b;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Nome</strong>
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-weight:600;">${nome}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                <strong style="color:#64748b;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Empresa</strong>
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;font-weight:600;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                <strong style="color:#64748b;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">E-mail</strong>
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                <a href="mailto:${email}" style="color:#2563eb;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                <strong style="color:#64748b;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Telefone</strong>
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;">${telefone}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                <strong style="color:#64748b;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Serviço</strong>
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;color:#0f172a;">${servico}</td>
            </tr>
            ${mensagem ? `
            <tr>
              <td style="padding:12px 0;vertical-align:top;">
                <strong style="color:#64748b;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Mensagem</strong>
              </td>
              <td style="padding:12px 0;color:#0f172a;white-space:pre-wrap;">${mensagem}</td>
            </tr>` : ''}
          </table>
          <div style="margin-top:24px;padding:16px;background:#fefce8;border-left:4px solid #facc15;border-radius:4px;">
            <p style="margin:0;color:#854d0e;font-size:13px;">
              Responda diretamente para <strong>${email}</strong> ou ligue para <strong>${telefone}</strong>.
            </p>
          </div>
        </div>
      </div>
    `

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Site Avapex <noreply@avapex.com.br>',
        to: ['comercial@avapex.com.br'],
        reply_to: email,
        subject: `[Orçamento] ${servico} — ${empresa}`,
        html,
      }),
    })

    if (!resendResponse.ok) {
      const err = await resendResponse.text()
      console.error('Resend error:', err)
      return new Response(
        JSON.stringify({ error: 'Falha ao enviar e-mail. Tente novamente.' }),
        { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    )
  } catch (err) {
    console.error('Function error:', err)
    return new Response(
      JSON.stringify({ error: 'Erro interno no servidor.' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    )
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
