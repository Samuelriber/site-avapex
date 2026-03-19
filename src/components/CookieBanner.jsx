import { useState, useEffect } from 'react'

const COOKIE_KEY = 'avapex_cookies_accepted'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show banner only if user hasn't accepted yet
    if (!localStorage.getItem(COOKIE_KEY)) {
      // Small delay matches the original translate-y slide-in transition
      const timer = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'true')
    setVisible(false)
  }

  return (
    <div
      id="cookieBanner"
      className={`fixed bottom-0 left-0 w-full bg-[#0f172a] text-white p-6 z-[60] flex flex-col md:flex-row justify-between items-center gap-4 transition-transform duration-500 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border-t border-slate-700 border-b-4 border-b-yellow-400 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="text-sm text-slate-300 md:max-w-4xl text-center md:text-left">
        Utilizamos cookies para oferecer a melhor experiência, analisar o tráfego e personalizar conteúdo.
        Ao continuar navegando, você concorda com nossas políticas de privacidade e segurança de dados operacionais.
      </div>
      <button
        id="acceptCookies"
        aria-label="Aceitar uso de Cookies"
        onClick={accept}
        className="bg-yellow-400 hover:bg-yellow-500 text-[#0f172a] font-bold py-3 px-8 rounded-lg whitespace-nowrap transition-colors shadow-lg active:scale-95"
      >
        Aceitar e Fechar
      </button>
    </div>
  )
}
