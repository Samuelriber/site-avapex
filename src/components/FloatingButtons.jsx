import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  // IntersectionObserver: show back-to-top button after the #backtotop-trigger
  // sentinel (placed 400px down in Hero.jsx) leaves the viewport.
  useEffect(() => {
    const trigger = document.getElementById('backtotop-trigger')
    if (!trigger) return

    const observer = new IntersectionObserver(([entry]) => {
      setShowBackToTop(!entry.isIntersecting)
    })

    observer.observe(trigger)
    return () => observer.disconnect()
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Back to Top */}
      <button
        id="backToTop"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`fixed bottom-6 left-6 z-50 bg-[#0f172a] text-white p-3 rounded-full shadow-2xl hover:bg-yellow-400 hover:text-[#0f172a] transition-all duration-300 border border-slate-700 hover:scale-110 ${
          showBackToTop
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none translate-y-10'
        }`}
      >
        <ChevronUp className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/553184657066"
        target="_blank"
        rel="noopener noreferrer"
        title="Fale com a Avapex no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all flex items-center justify-center group hover:scale-110 border-2 border-white/20"
      >
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold shadow-lg">
          Fale com um Especialista
          <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-slate-800" />
        </span>
        <img
          src="img/whatsapp.png"
          alt="Logotipo WhatsApp"
          width="40"
          height="40"
          fetchpriority="high"
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
        />
      </a>
    </>
  )
}
