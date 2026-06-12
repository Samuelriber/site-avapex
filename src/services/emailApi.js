/**
 * Envia os dados do formulário para a Cloudflare Function /api/send-email,
 * que repassa para a Resend API com a chave protegida no servidor.
 */
export async function sendContactEmail(data) {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.error || 'Erro ao enviar e-mail.')
  }

  return response.json()
}
