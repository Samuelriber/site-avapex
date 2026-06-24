import { useEffect } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { MessageCircle, ArrowLeft, Globe } from 'lucide-react'
import bolaObrigado from './componentes/img/bola-obrigado.png'
import CopaBackground from './components/CopaBackground'
import CopaHeader from './components/CopaHeader'
import CopaFooter from './components/CopaFooter'
import { WHATSAPP_TAIS } from '../../constants/contact'
import './styles/copa.css'

export default function CopaObrigado() {
  useEffect(() => {
    window.scrollTo(0, 0)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion')
    }
  }, [])

  return (
    <HelmetProvider>
      <Helmet>
        <title>Solicitação Recebida — Avapex Especial Copa</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="copa-root">
        <CopaBackground />
        <CopaHeader />

        <main className="pt-20 min-h-screen flex items-center justify-center px-6 py-24">
          <div
            className="text-center max-w-xl mx-auto px-10 py-12 rounded-none-2xl border"
            style={{
              background: 'rgba(17,20,21,0.75)',
              backdropFilter: 'blur(14px)',
              borderColor: 'rgba(243,190,85,0.2)',
            }}
          >
            <div className="flex justify-center mb-6">
              <img src={bolaObrigado} alt="Bola de futebol" width={80} height={80} />
            </div>
            <h1
              className="text-5xl md:text-6xl uppercase mb-4"
              style={{ color: '#F3BE55' }}
            >
              Gol de Placa!
            </h1>
            <p className="text-white/80 text-lg mb-3">
              Solicitação recebida com sucesso.
            </p>
            <p className="text-white/60 text-base mb-10 leading-relaxed">
              Nossa equipe comercial analisará sua demanda e entrará em contato com as condições especiais da Copa.
            </p>
            <div className="flex flex-col gap-4 justify-center">
              <a
                href={WHATSAPP_TAIS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 font-bold py-4 px-8 rounded-none text-base text-white transition-all"
                style={{ background: '#009B3A' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#007a2e')}
                onMouseLeave={e => (e.currentTarget.style.background = '#009B3A')}
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp agora
              </a>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/lp/especial-copa"
                  className="flex flex-1 items-center justify-center gap-3 font-bold py-4 px-8 rounded-none text-base border transition-all"
                  style={{ borderColor: 'rgba(243,190,85,0.4)', color: '#F3BE55' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#F3BE55')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(243,190,85,0.4)')}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Voltar à página
                </a>
                <a
                  href="https://www.avapex.com.br"
                  className="flex flex-1 items-center justify-center gap-3 font-bold py-4 px-8 rounded-none text-base border transition-all"
                  style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
                >
                  <Globe className="w-5 h-5" />
                  Site institucional
                </a>
              </div>
            </div>
          </div>
        </main>

        <CopaFooter />
      </div>
    </HelmetProvider>
  )
}
