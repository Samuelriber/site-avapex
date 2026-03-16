import { useState, useEffect } from 'react'

export default function Footer() {
  const [cookieVisible, setCookieVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookiesAccepted')) {
      setCookieVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', '1')
    setCookieVisible(false)
  }

  return (
    <>
      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-[#0f172a] pt-12 pb-8 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <img src="./img/AVAPEX OFICIAL 02 branca e amarela.png" width="3040" height="859" alt="Logotipo Avapex Transportes" loading="lazy" decoding="async" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <p className="mb-2 text-sm">© 2026 Avapex Transportes. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* ── Cookie Banner ────────────────────────────────────── */}
      <div
        id="cookieBanner"
        className={`fixed bottom-0 left-0 w-full bg-[#0f172a] text-white p-6 z-[60] flex flex-col md:flex-row justify-between items-center gap-4 transition-transform duration-500 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border-t border-slate-700 border-b-4 border-b-yellow-400${cookieVisible ? '' : ' translate-y-full'}`}
      >
        <div className="text-sm text-slate-300 md:max-w-4xl text-center md:text-left">
          Utilizamos cookies para oferecer a melhor experiência, analisar o tráfego e personalizar conteúdo. Ao continuar navegando, você concorda com nossas políticas de privacidade e segurança de dados operacionais.
        </div>
        <button
          id="acceptCookies"
          onClick={acceptCookies}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#0f172a] font-bold py-3 px-8 rounded-lg whitespace-nowrap transition-colors shadow-lg active:scale-95"
        >
          Aceitar e Fechar
        </button>
      </div>
    </>
  )
}
