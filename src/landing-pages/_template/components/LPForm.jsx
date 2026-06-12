// Formulário de conversão. Layout split: argumento final à esquerda, form à direita.
// Checkmarks de credibilidade reforçam a decisão no momento do preenchimento.

import { useState } from 'react'
import { useLeadForm } from '../hooks/useLeadForm'

const LABELS = {
  nome:      'Nome completo',
  empresa:   'Empresa',
  telefone:  'Telefone / WhatsApp',
  email:     'E-mail',
  mensagem:  'Mensagem (opcional)',
}

const CREDIBILIDADE = [
  'Resposta em até 2 horas úteis',
  'Proposta personalizada para sua operação',
  'Sem compromisso de contratação',
  'Atendimento por especialista, não por robô',
]

const inputStyle = {
  padding: '12px',
  border: '1px solid #e2e8f0',
  fontSize: '0.9rem',
  fontFamily: 'DM Sans, sans-serif',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
}

export default function LPForm({ config = {} }) {
  const { titulo, subtitulo, campos = [], cta_label, destino, utm_campaign, garantia } = config
  const { status, enviar } = useLeadForm({ destino, utm_campaign })
  const [form, setForm] = useState(Object.fromEntries(campos.map(c => [c, ''])))

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await enviar(form)
  }

  return (
    <section id="formulario" className="lp-dark lp-section">
      <div className="lp-container">
        <div className="lp-grid-2" style={{ gap: '4rem', alignItems: 'center' }}>

          {/* Esquerda: argumento final antes do formulário */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', marginBottom: '1rem' }}>
              {titulo}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {subtitulo}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CREDIBILIDADE.map((item, i) => (
                <div key={i} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--lp-yellow)', flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direita: formulário */}
          <div style={{ background: '#fff', padding: '2.5rem' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--lp-navy)', marginBottom: '1.5rem' }}>
              Preencha e receba sua proposta
            </p>

            {status === 'success' ? (
              <p style={{ color: 'green', textAlign: 'center', fontSize: '0.95rem', padding: '2rem 0' }}>
                ✓ Recebemos! Retornamos em até 2 horas úteis.
              </p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {campos.map((campo) => (
                  campo === 'mensagem' ? (
                    <textarea
                      key={campo}
                      name={campo}
                      placeholder={LABELS[campo] || campo}
                      rows={4}
                      value={form[campo] || ''}
                      onChange={handleChange}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  ) : (
                    <input
                      key={campo}
                      type={campo === 'email' ? 'email' : campo === 'telefone' ? 'tel' : 'text'}
                      name={campo}
                      required={campo !== 'mensagem'}
                      placeholder={LABELS[campo] || campo}
                      value={form[campo] || ''}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  )
                ))}

                <button
                  type="submit"
                  className="lp-btn-primary"
                  style={{ fontSize: '1rem', padding: '16px', width: '100%', border: 'none', cursor: 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Enviando...' : cta_label}
                </button>

                {status === 'error' && (
                  <p style={{ color: 'red', textAlign: 'center', fontSize: '0.9rem', margin: 0 }}>
                    Erro ao enviar. Tente novamente ou ligue: (31) 98465-7066
                  </p>
                )}
              </form>
            )}

            <p style={{ fontSize: '0.75rem', color: '#999', textAlign: 'center', marginTop: '1rem', marginBottom: 0 }}>
              🔒 {garantia}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
