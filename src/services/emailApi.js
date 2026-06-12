export async function sendContactEmail(data) {
  const response = await fetch('/send-email.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.message || 'Erro ao enviar e-mail.')
  }

  return response.json()
}
