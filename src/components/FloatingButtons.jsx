import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { WHATSAPP_TAIS, PHONE_TAIS } from '../constants/contact'

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const trigger = document.getElementById('backtotop-trigger')
    if (!trigger) return
    const observer = new IntersectionObserver(
      ([entry]) => setShowBackToTop(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(trigger)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* WhatsApp */}
      <a
        href={WHATSAPP_TAIS}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp — Taís ${PHONE_TAIS}`}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3
                   bg-[#25D366] hover:bg-[#20BA5A] transition-all duration-300
                   shadow-lg group"
        style={{ padding: '10px 16px' }}
      >
        <img
          src="/img/img/Logos/icon-whatsapp.svg"
          alt=""
          aria-hidden="true"
          style={{
            height: '24px',
            width: '24px',
            display: 'block',
            objectFit: 'contain',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <span className="text-white text-xs font-bold tracking-wide hidden sm:inline">
          {PHONE_TAIS}
        </span>
      </a>

      {/* Back to top */}
      {showBackToTop && (
        <a
          href="#home"
          aria-label="Voltar ao topo"
          className="fixed bottom-20 right-6 z-50 bg-brand-navy border border-slate-700
                     text-white p-3 shadow-lg hover:bg-brand-steel transition-all duration-300"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </a>
      )}
    </>
  )
}
