import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { sendContactEmail } from '../../../services/emailApi'
import { PHONE_TAIS, PHONE_JOICE, WHATSAPP_TAIS, WHATSAPP_JOICE, ADDRESS } from '../../../constants/contact'

const SETOR_OPTIONS = ['Mineração', 'Indústria', 'Logística']

const INPUT_CLASS = 'w-full bg-eqp-ink border border-eqp-seam p-3 focus:ring-0 text-eqp-chalk industrial-focus text-sm'
const LABEL_CLASS = 'eqp-label-caps text-eqp-fog'

export default function EqpForm() {
  const [status, setStatus] = useState('idle')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = { ...Object.fromEntries(new FormData(e.target).entries()), origem: 'LP Empilhadeiras Lítio' }
    try {
      await sendContactEmail(data)
      navigate('/obrigado')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-eqp-ink bg-pattern relative" id="orcamento">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col h-full">
          <h2 className="eqp-h1 text-eqp-chalk mb-6">Pronto para modernizar sua frota?</h2>
          <p className="eqp-body-lg text-eqp-fog mb-8">
            Nossos especialistas estão prontos para dimensionar a solução ideal de empilhadeiras a lítio para a sua operação, focando em redução de custos e aumento de produtividade.
          </p>

          <div className="space-y-4 bg-eqp-panel-sunken p-6 border border-eqp-seam mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-eqp-caution p-3 rounded-sm shrink-0">
                <Phone size={22} className="text-eqp-caution-ink" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-eqp-chalk text-sm">Central de Atendimento</p>
                <a href={WHATSAPP_TAIS} target="_blank" rel="noopener noreferrer" className="text-eqp-caution text-base font-bold block hover:opacity-80 transition-opacity">
                  Taís · {PHONE_TAIS}
                </a>
                <a href={WHATSAPP_JOICE} target="_blank" rel="noopener noreferrer" className="text-eqp-caution text-base font-bold block hover:opacity-80 transition-opacity">
                  Joice · {PHONE_JOICE}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-eqp-panel p-3 rounded-sm shrink-0">
                <Mail size={22} className="text-eqp-caution" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-eqp-chalk text-sm">E-mail Corporativo</p>
                <a href="mailto:comercial@avapex.com.br" className="text-eqp-fog text-sm block hover:text-eqp-caution transition-colors">comercial@avapex.com.br</a>
                <a href="mailto:comercial3@avapex.com.br" className="text-eqp-fog text-sm block hover:text-eqp-caution transition-colors">comercial3@avapex.com.br</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-eqp-panel p-3 rounded-sm shrink-0">
                <MapPin size={22} className="text-eqp-caution" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-eqp-chalk text-sm">Matriz</p>
                <p className="text-eqp-fog text-sm">{ADDRESS}</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden flex-1 min-h-[320px] border border-eqp-seam relative w-full">
            <iframe
              className="w-full h-full grayscale-[40%] contrast-[1.1]"
              title="Mapa de Localização Avapex Transportes"
              src="https://maps.google.com/maps?q=Rodovia%20BR040,%2022750,%20Barreira%20-%20Conselheiro%20Lafaiete%20/%20MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="eqp-blueprint-corners bg-eqp-panel-sunken p-8 border border-eqp-seam shadow-sm relative flex flex-col h-full">
          <span className="eqp-corner-br" aria-hidden="true"></span>
          <span className="eqp-corner-bl" aria-hidden="true"></span>
          <h3 className="eqp-h2 mb-6 text-eqp-chalk">Solicite seu orçamento agora</h3>
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="eqp_nome" className={LABEL_CLASS}>Nome Completo</label>
                <input id="eqp_nome" name="nome" type="text" required placeholder="Seu nome" className={INPUT_CLASS} />
              </div>
              <div className="space-y-1">
                <label htmlFor="eqp_empresa" className={LABEL_CLASS}>Empresa</label>
                <input id="eqp_empresa" name="empresa" type="text" required placeholder="Nome da empresa" className={INPUT_CLASS} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="eqp_telefone" className={LABEL_CLASS}>Telefone / WhatsApp</label>
                <input id="eqp_telefone" name="telefone" type="tel" required placeholder="(00) 00000-0000" className={INPUT_CLASS} />
              </div>
              <div className="space-y-1">
                <label htmlFor="eqp_email" className={LABEL_CLASS}>E-mail Corporativo</label>
                <input id="eqp_email" name="email" type="email" required placeholder="email@empresa.com.br" className={INPUT_CLASS} />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="eqp_setor" className={LABEL_CLASS}>Setor de Atuação</label>
              <select id="eqp_setor" name="setor" required defaultValue="" className={INPUT_CLASS}>
                <option value="" disabled>Selecione uma opção...</option>
                {SETOR_OPTIONS.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1 flex-1 flex flex-col">
              <label htmlFor="eqp_mensagem" className={LABEL_CLASS}>Detalhes da Demanda</label>
              <textarea
                id="eqp_mensagem"
                name="mensagem"
                placeholder="Descreva sua necessidade, prazo, local de entrega..."
                className={`${INPUT_CLASS} resize-none flex-1 min-h-[96px]`}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 font-bold text-sm text-center">
                Ocorreu um erro ao enviar. Por favor, tente novamente.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full btn-tertiary mt-4 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Enviando...' : 'Quero Receber um Orçamento'}
              <Send size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
            <p className="text-xs text-center text-eqp-fog mt-4">
              Ao enviar, você concorda em receber contatos da nossa equipe comercial.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
