/**
 * Hook reutilizável para formulários de lead em landing pages.
 * Envia para send-email.php e captura UTMs da URL automaticamente.
 */
import { useState } from 'react'

export function useLeadForm({ destino, utm_campaign }) {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [erro, setErro] = useState('')

  const getUTMs = () => {
    const params = new URLSearchParams(window.location.search)
    return {
      utm_source:   params.get('utm_source')   || 'direto',
      utm_medium:   params.get('utm_medium')   || '',
      utm_campaign: params.get('utm_campaign') || utm_campaign,
      utm_content:  params.get('utm_content')  || '',
    }
  }

  const enviar = async (dados) => {
    setStatus('loading')
    setErro('')

    try {
      const payload = { ...dados, ...getUTMs(), destino }

      const res = await fetch('/send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = await res.json()

      if (json.success) {
        setStatus('success')
      } else {
        throw new Error(json.message || 'Erro ao enviar')
      }
    } catch (err) {
      setStatus('error')
      setErro(err.message)
    }
  }

  return { status, erro, enviar }
}
