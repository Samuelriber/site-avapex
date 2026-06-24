import { useEffect } from 'react'
import { CheckCircle, MessageCircle, Home } from 'lucide-react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import GrupoSeday from '../components/GrupoSeday.jsx'
import { WHATSAPP_TAIS } from '../constants/contact.js'

export default function Obrigado() {
  useEffect(() => {
    window.scrollTo(0, 0)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion')
    }
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-navy flex items-center justify-center py-24 px-6">
        <div className="text-center max-w-xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400 mb-8 mx-auto">
            <CheckCircle className="w-10 h-10 text-brand-navy" />
          </div>
          <h1 className="text-5xl font-extrabold font-barlow text-white mb-4 leading-tight">
            Solicitação Recebida!
          </h1>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            Nossa equipe comercial analisará sua demanda e entrará em contato em breve com uma proposta personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_TAIS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-sm transition-all text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-3 border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 font-bold py-4 px-8 rounded-sm transition-all text-base"
            >
              <Home className="w-5 h-5" />
              Voltar ao site
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center gap-2">
            <p className="text-slate-400 text-sm uppercase tracking-widest">Conheça o Grupo Seday</p>
            <svg
              className="text-yellow-400 animate-bounce"
              width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </main>
      <GrupoSeday />
      <Footer />
    </>
  )
}
