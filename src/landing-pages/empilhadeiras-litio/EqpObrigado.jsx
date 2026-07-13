import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { MessageCircle } from 'lucide-react'
import EqpHeader from './components/EqpHeader'
import EqpFooter from './components/EqpFooter'
import { WHATSAPP_TAIS } from '../../constants/contact'
import { buildWhatsappHref } from './utils/whatsapp'
import './styles/equip.css'

const REDIRECT_DELAY_MS = 3000

export default function EqpObrigado() {
  const location = useLocation()
  const setor = location.state?.setor || ''
  const whatsappHref = buildWhatsappHref(WHATSAPP_TAIS, setor)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion')
    }
    const timer = setTimeout(() => {
      window.location.href = whatsappHref
    }, REDIRECT_DELAY_MS)
    return () => clearTimeout(timer)
  }, [whatsappHref])

  return (
    <HelmetProvider>
      <Helmet>
        <title>Obrigado — Avapex Empilhadeiras Elétricas a Lítio</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="eqp-page eqp-litio">
        <EqpHeader />
        <main className="pt-20 min-h-screen flex items-center justify-center px-4 md:px-6 py-24 bg-eqp-ink bg-pattern">
          <div className="eqp-blueprint-corners text-center max-w-xl mx-auto px-8 md:px-10 py-12 bg-eqp-panel-sunken border border-eqp-seam">
            <span className="eqp-corner-br" aria-hidden="true"></span>
            <span className="eqp-corner-bl" aria-hidden="true"></span>

            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#11A028] mb-8 mx-auto animate-pulse">
              <MessageCircle size={40} className="text-white" aria-hidden="true" />
            </div>

            <h1 className="eqp-h1 text-eqp-chalk mb-4">Obrigado!</h1>
            <p className="text-eqp-fog text-base leading-relaxed mb-6">
              Estamos te encaminhando para um consultor. Você já vai ser direcionado para o WhatsApp...
            </p>

            <div className="h-1.5 rounded-full bg-[#11A028]/15 border border-[#11A028]/30 overflow-hidden mb-10">
              <motion.div
                className="h-full bg-[#11A028]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: REDIRECT_DELAY_MS / 1000, ease: 'linear' }}
              />
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tertiary inline-flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Ir para o WhatsApp agora
            </a>
          </div>
        </main>
        <EqpFooter />
      </div>
    </HelmetProvider>
  )
}
