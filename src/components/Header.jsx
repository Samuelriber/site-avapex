import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

// v2 = branca (header transparente no topo)
// v1 = escura/preta (header sólido ao rolar)
const LOGO_TOP      = 'img/img/Logos/logo-avapex-transportes-v2.svg'
const LOGO_SCROLLED = 'img/img/Logos/logo-avapex-transportes-v1.svg'

const navLinkDark  = 'text-white font-semibold hover:text-brand-yellow transition-colors text-sm'
const navLinkLight = 'text-brand-navy font-semibold hover:text-brand-yellow transition-colors text-sm'

const ctaDark  = 'border border-white text-white px-5 py-2 text-sm font-bold hover:bg-white hover:text-brand-navy transition-all rounded-sm'
const ctaLight = 'bg-brand-yellow text-brand-navy px-5 py-2 text-sm font-bold hover:bg-yellow-400 transition-all rounded-sm'

const navLinks = [
  { href: '/',               label: 'Início' },
  { href: '/#servicos',      label: 'Serviços' },
  { href: '/#diferenciais',  label: 'Diferenciais' },
  { href: '/#equipamentos',  label: 'Frota' },
  { href: '/#credibilidade', label: 'Clientes' },
  { href: '/#quem-somos',    label: 'Quem Somos' },
  { href: 'https://avapextransportes.vagas.solides.com.br/', label: 'Trabalhe Conosco', external: true },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const handler = (e) => setIsMobile(e.matches)
    setIsMobile(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const trigger = document.getElementById('header-trigger')
    if (!trigger) {
      setScrolled(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(trigger)
    return () => observer.disconnect()
  }, [])

  const isDark = !isMobile && !scrolled

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? 'bg-transparent'
          : 'bg-white shadow-sm border-b border-slate-200'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo — crossfade com scale entre versão branca (topo) e escura (scroll) */}
          <a
            href="/"
            className="shrink-0"
            style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
            aria-label="Avapex Transportes — Voltar ao topo"
          >
            {/* Logo escura — em fluxo normal (define largura do container) */}
            <img
              src={LOGO_SCROLLED}
              alt="Avapex Transportes"
              style={{
                height: '52px',
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
                transition: 'opacity 0.45s ease, transform 0.45s ease',
                opacity: isDark ? 0 : 1,
                transform: isDark ? 'scale(0.92)' : 'scale(1)',
              }}
            />
            {/* Logo branca — sobreposta, visível no topo */}
            <img
              src={LOGO_TOP}
              alt=""
              aria-hidden="true"
              style={{
                height: '52px',
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: isDark ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.92)',
                transition: 'opacity 0.45s ease, transform 0.45s ease',
                opacity: isDark ? 1 : 0,
              }}
            />
          </a>

          {/* Desktop nav */}
          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-4">
            {navLinks.map(({ href, label, external }) => (
              <a
                key={href}
                href={href}
                className={`${isDark ? navLinkDark : navLinkLight}${external ? ' nav-trabalhe' : ''}`}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/#orcamento"
              className={`hidden md:inline-flex ${isDark ? ctaDark : ctaLight}`}
            >
              Solicitar Orçamento
            </a>
            <button
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden p-1 transition-colors ${isDark ? 'text-white' : 'text-brand-navy'}`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          aria-label="Menu mobile"
          className="md:hidden bg-brand-navy border-t border-slate-800 px-6 py-5 flex flex-col gap-4"
        >
          {navLinks.map(({ href, label, external }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-brand-yellow font-semibold text-sm"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {label}
            </a>
          ))}
          <a
            href="/#orcamento"
            onClick={() => setMenuOpen(false)}
            className="bg-brand-yellow text-brand-navy px-5 py-3 rounded-none font-extrabold text-sm text-center mt-2"
          >
            Solicitar Orçamento
          </a>
        </nav>
      )}
    </header>
  )
}
