import { useEffect } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react'
import EqpHeader from './components/EqpHeader'
import EqpFooter from './components/EqpFooter'
import { WHATSAPP_TAIS } from '../../constants/contact'
import './styles/equip.css'

export default function EqpObrigado() {
  useEffect(() => {
    window.scrollTo(0, 0)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion')
    }
  }, [])

  return (
    <HelmetProvider>
      <Helmet>
        <title>Solicitação Recebida — Avapex Empilhadeiras Elétricas a Lítio</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="eqp-page">
        <EqpHeader />
        <main className="pt-20 min-h-screen flex items-center justify-center px-4 md:px-6 py-24 bg-eqp-ink bg-pattern">
          <div className="eqp-blueprint-corners text-center max-w-xl mx-auto px-8 md:px-10 py-12 bg-eqp-panel-sunken border border-eqp-seam">
            <span className="eqp-corner-br" aria-hidden="true"></span>
            <span className="eqp-corner-bl" aria-hidden="true"></span>

            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-eqp-caution mb-8 mx-auto">
              <CheckCircle size={40} className="text-eqp-caution-ink" aria-hidden="true" />
            </div>

            <h1 className="eqp-h1 text-eqp-chalk mb-4">Solicitação Recebida!</h1>
            <p className="text-eqp-fog text-base leading-relaxed mb-10">
              Nossos especialistas vão analisar sua demanda e entrar em contato com a melhor solução em empilhadeiras elétricas a lítio para a sua operação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_TAIS}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tertiary inline-flex items-center justify-center gap-3"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Falar no WhatsApp
              </a>
              <a
                href="/lp/empilhadeiras-litio"
                className="btn-secondary inline-flex items-center justify-center gap-3"
              >
                <ArrowLeft size={20} aria-hidden="true" />
                Voltar à página
              </a>
            </div>
          </div>
        </main>
        <EqpFooter />
      </div>
    </HelmetProvider>
  )
}
