import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { sendContactEmail } from '../services/emailApi.js'
import { useState } from 'react'
import { PHONE_TAIS, PHONE_JOICE, WHATSAPP_TAIS, WHATSAPP_JOICE, EMAIL, ADDRESS } from '../constants/contact'

const INPUT_CLASS = 'w-full p-4 rounded-sm border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all bg-slate-50'
const LABEL_CLASS = 'block text-sm font-bold text-slate-700 mb-2'

const serviceOptions = [
  'Locação de Máquinas Linha Amarela',
  'Transporte Rodoviário / Frota',
  'Operação de Intralogística',
  'Movimentação de Carga Pesada',
  'Outra Necessidade',
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    try {
      await sendContactEmail(data)
      setStatus('success')
      e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="orcamento" className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left column — contact info + map */}
          <div data-aos="fade-right" className="flex flex-col h-full">
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-3 block">
              CONTATO DIRETO
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Receba uma Proposta Comercial
            </h2>
            <p className="text-slate-300 mb-8 text-base leading-relaxed">
              Nossa equipe de engenharia logística está pronta para analisar sua demanda e desenhar a operação
              com o melhor custo-benefício.
            </p>

            <div className="space-y-4 bg-[#141E30] p-6 border border-slate-700/50 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 p-3 rounded-sm text-[#0f172a] shadow-md flex-shrink-0">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Central de Atendimento</p>
                  <a href={WHATSAPP_TAIS} className="text-yellow-400 text-base font-bold block hover:opacity-80 transition-opacity">
                    Taís · {PHONE_TAIS}
                  </a>
                  <a href={WHATSAPP_JOICE} className="text-yellow-400 text-base font-bold block hover:opacity-80 transition-opacity">
                    Joice · {PHONE_JOICE}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#2A3447] p-3 rounded-sm text-yellow-400 shadow-md flex-shrink-0">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">E-mail Corporativo</p>
                  <a href="mailto:comercial@avapex.com.br" className="text-slate-400 text-sm block hover:text-yellow-400 transition-colors">comercial@avapex.com.br</a>
                  <a href="mailto:comercial3@avapex.com.br" className="text-slate-400 text-sm block hover:text-yellow-400 transition-colors">comercial3@avapex.com.br</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#2A3447] p-3 rounded-sm text-yellow-400 shadow-md flex-shrink-0">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Matriz</p>
                  <p className="text-slate-400 text-sm">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden h-64 border border-slate-700 shadow-lg relative w-full mt-auto flex-grow max-h-[300px]">
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

          {/* Right column — form */}
          <div
            className="bg-white text-slate-900 p-8 md:p-10 rounded-sm shadow-2xl relative"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#0f172a]">Solicite um Orçamento</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="form_nome" className={LABEL_CLASS}>
                    Nome do Responsável *
                  </label>
                  <input
                    type="text"
                    id="form_nome"
                    name="nome"
                    required
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="form_empresa" className={LABEL_CLASS}>
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="form_empresa"
                    name="empresa"
                    required
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="form_email" className={LABEL_CLASS}>
                    E-mail Profissional *
                  </label>
                  <input
                    type="email"
                    id="form_email"
                    name="email"
                    required
                    className={INPUT_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="form_telefone" className={LABEL_CLASS}>
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="form_telefone"
                    name="telefone"
                    required
                    className={INPUT_CLASS}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form_servico" className={LABEL_CLASS}>
                  Em qual área podemos ajudar? *
                </label>
                <select
                  id="form_servico"
                  name="servico"
                  required
                  defaultValue=""
                  className="w-full p-4 rounded-sm border border-slate-300 bg-slate-50 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all font-medium cursor-pointer"
                >
                  <option value="" disabled>Selecione uma opção...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="form_mensagem" className={LABEL_CLASS}>
                  Detalhes da Demanda
                </label>
                <textarea
                  id="form_mensagem"
                  name="mensagem"
                  rows="3"
                  className={`${INPUT_CLASS} resize-none`}
                />
              </div>

              {status === 'success' && (
                <p className="text-green-600 font-bold text-sm text-center">
                  Solicitação enviada com sucesso! Entraremos em contato em breve.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 font-bold text-sm text-center">
                  Ocorreu um erro. Por favor, tente novamente.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                aria-label="Enviar formulário de solicitação de orçamento"
                className="w-full bg-yellow-400 text-[#0f172a] font-extrabold py-5 shadow-lg hover:bg-yellow-500 transition-all flex items-center justify-center gap-3 text-lg group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Solicitação'}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
