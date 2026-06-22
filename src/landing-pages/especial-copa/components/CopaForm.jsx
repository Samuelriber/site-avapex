import { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { sendContactEmail } from '../../../services/emailApi'
import { PHONE_TAIS, PHONE_JOICE, WHATSAPP_TAIS, WHATSAPP_JOICE, EMAIL, ADDRESS } from '../../../constants/contact'

const SERVICE_OPTIONS = [
  'Locação de Empilhadeira Diesel',
  'Locação de Caminhão Munck / Guindauto',
  'Locação de Equipamentos Linha Amarela',
  'Transporte Rodoviário / Frota',
  'Outra Necessidade',
]

const LABEL = 'block text-xs font-bold uppercase tracking-widest mb-2'
const INPUT =
  'w-full px-4 py-3 rounded bg-black/30 border border-[rgba(243,190,85,0.25)] text-white placeholder-white/30 outline-none transition-all focus:border-[#F3BE55] focus:ring-1 focus:ring-[rgba(243,190,85,0.4)]'

export default function CopaForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = { ...Object.fromEntries(new FormData(e.target).entries()), origem: 'LP Copa' }
    try {
      await sendContactEmail(data)
      setStatus('success')
      e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="orcamento"
      className="py-16 md:py-24 px-6 md:px-20 relative"
      style={{ background: 'rgba(17,20,21,0.75)', backdropFilter: 'blur(14px)' }}
    >
      {/* título da seção */}
      <div className="max-w-7xl mx-auto mb-12 flex items-center gap-4">
        <h2
          className="text-4xl md:text-5xl uppercase whitespace-nowrap"
          style={{
            color: '#F3BE55',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          }}
        >
          Solicite um Orçamento
        </h2>
        <div className="h-[2px] flex-grow" style={{ background: 'rgba(243,190,85,0.4)' }} />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* ── Coluna esquerda: info + mapa ── */}
        <div className="flex flex-col gap-6">
          <p className="text-white/70 text-base leading-relaxed">
            Nossa equipe comercial está pronta para analisar sua demanda e apresentar as{' '}
            <span style={{ color: '#F3BE55' }} className="font-bold">
              condições especiais da Copa
            </span>{' '}
            com o melhor custo-benefício.
          </p>

          {/* cards de contato */}
          <div
            className="flex flex-col gap-4 p-6 rounded-lg border"
            style={{ background: 'rgba(17,20,21,0.6)', borderColor: 'rgba(243,190,85,0.15)' }}
          >
            <div className="flex items-center gap-4">
              <div
                className="p-3 rounded-lg shrink-0"
                style={{ background: '#F3BE55' }}
              >
                <Phone className="w-5 h-5 text-[#111415]" />
              </div>
              <div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                  Central de Atendimento
                </p>
                <a href={WHATSAPP_TAIS} className="font-bold text-base block hover:opacity-80 transition-opacity" style={{ color: '#F3BE55' }}>
                  Taís · {PHONE_TAIS}
                </a>
                <a href={WHATSAPP_JOICE} className="font-bold text-base block hover:opacity-80 transition-opacity" style={{ color: '#F3BE55' }}>
                  Joice · {PHONE_JOICE}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="p-3 rounded-lg shrink-0 border"
                style={{ background: 'rgba(243,190,85,0.1)', borderColor: 'rgba(243,190,85,0.3)' }}
              >
                <Mail className="w-5 h-5" style={{ color: '#F3BE55' }} />
              </div>
              <div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                  E-mail Corporativo
                </p>
                <a href="mailto:comercial@avapex.com.br" className="text-white/80 text-sm block hover:text-[#F3BE55] transition-colors">comercial@avapex.com.br</a>
                <a href="mailto:comercial3@avapex.com.br" className="text-white/80 text-sm block hover:text-[#F3BE55] transition-colors">comercial3@avapex.com.br</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="p-3 rounded-lg shrink-0 border"
                style={{ background: 'rgba(243,190,85,0.1)', borderColor: 'rgba(243,190,85,0.3)' }}
              >
                <MapPin className="w-5 h-5" style={{ color: '#F3BE55' }} />
              </div>
              <div>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Matriz</p>
                <p className="text-white/80 text-sm">{ADDRESS}</p>
              </div>
            </div>
          </div>

          {/* mapa */}
          <div className="overflow-hidden rounded-lg border h-64" style={{ borderColor: 'rgba(243,190,85,0.2)' }}>
            <iframe
              className="w-full h-full"
              title="Mapa de Localização Avapex Transportes"
              src="https://maps.google.com/maps?q=Rodovia%20BR040,%2022750,%20Barreira%20-%20Conselheiro%20Lafaiete%20/%20MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ── Coluna direita: formulário ── */}
        <div
          className="p-8 md:p-10 rounded-lg border"
          style={{
            background: 'rgba(17,20,21,0.8)',
            backdropFilter: 'blur(8px)',
            borderColor: 'rgba(243,190,85,0.2)',
          }}
        >
          <h3
            className="text-2xl md:text-3xl uppercase font-bold mb-8"
            style={{ color: '#F3BE55' }}
          >
            Escale o Equipamento Certo
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="copa_nome" className={LABEL} style={{ color: '#F3BE55' }}>
                  Nome do Responsável *
                </label>
                <input
                  type="text"
                  id="copa_nome"
                  name="nome"
                  required
                  placeholder="Seu nome"
                  className={INPUT}
                />
              </div>
              <div>
                <label htmlFor="copa_empresa" className={LABEL} style={{ color: '#F3BE55' }}>
                  Empresa *
                </label>
                <input
                  type="text"
                  id="copa_empresa"
                  name="empresa"
                  required
                  placeholder="Razão social"
                  className={INPUT}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="copa_email" className={LABEL} style={{ color: '#F3BE55' }}>
                  E-mail Profissional *
                </label>
                <input
                  type="email"
                  id="copa_email"
                  name="email"
                  required
                  placeholder="email@empresa.com"
                  className={INPUT}
                />
              </div>
              <div>
                <label htmlFor="copa_telefone" className={LABEL} style={{ color: '#F3BE55' }}>
                  WhatsApp / Telefone *
                </label>
                <input
                  type="tel"
                  id="copa_telefone"
                  name="telefone"
                  required
                  placeholder="(31) 9 9999-9999"
                  className={INPUT}
                />
              </div>
            </div>

            <div>
              <label htmlFor="copa_servico" className={LABEL} style={{ color: '#F3BE55' }}>
                Equipamento / Serviço *
              </label>
              <select
                id="copa_servico"
                name="servico"
                required
                defaultValue=""
                className={INPUT}
                style={{ cursor: 'pointer' }}
              >
                <option value="" disabled className="text-black">
                  Selecione uma opção...
                </option>
                {SERVICE_OPTIONS.map(opt => (
                  <option key={opt} value={opt} className="text-black bg-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="copa_mensagem" className={LABEL} style={{ color: '#F3BE55' }}>
                Detalhes da Demanda
              </label>
              <textarea
                id="copa_mensagem"
                name="mensagem"
                rows={3}
                placeholder="Descreva sua necessidade, prazo, local de entrega..."
                className={`${INPUT} resize-none`}
              />
            </div>

            {status === 'success' && (
              <p className="text-green-400 font-bold text-sm text-center">
                ✓ Solicitação enviada! Nossa equipe entrará em contato em breve.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 font-bold text-sm text-center">
                Ocorreu um erro. Por favor, tente novamente.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-5 rounded font-bold text-lg uppercase flex items-center justify-center gap-3 transition-all group disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: '#009B3A', color: '#fff' }}
              onMouseEnter={e => status !== 'sending' && (e.currentTarget.style.background = '#007a2e')}
              onMouseLeave={e => (e.currentTarget.style.background = '#009B3A')}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Solicitação'}
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
