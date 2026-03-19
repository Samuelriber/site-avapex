import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#equipamentos', label: 'Nossa Frota' },
  { href: '#mvv', label: 'MVV' },
  { href: '#credibilidade', label: 'Clientes' },
  { href: '#faq', label: 'FAQ' },
  { href: '#quem-somos', label: 'Quem Somos' },
  {
    href: 'https://avapextransportes.vagas.solides.com.br/',
    label: 'Trabalhe Conosco',
    external: true,
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Close mobile menu when a link is clicked
  const closeMenu = () => setMenuOpen(false)
  const toggleMenu = () => setMenuOpen((prev) => !prev)

  // IntersectionObserver: watch the #header-trigger sentinel inside Hero
  // Changes header appearance after the user scrolls past the top area
  useEffect(() => {
    const trigger = document.getElementById('header-trigger')
    if (!trigger) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the sentinel is no longer visible (scrolled past it) → apply scrolled style
        setIsScrolled(!entry.isIntersecting)
      },
      { threshold: 0 },
    )

    observer.observe(trigger)
    return () => observer.disconnect()
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        id="main-header"
        className={`fixed w-full z-40 border-b border-slate-700 transition-all duration-300 py-4 backdrop-blur-sm ${
          isScrolled
            ? 'scrolled bg-white/[.98] shadow-[0_4px_15px_rgba(0,0,0,0.05)]'
            : 'bg-[#0f172a]/95'
        }`}
      >
        <nav className="container mx-auto px-6 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center" aria-label="Página Inicial Avapex">
            <img
              src={
                isScrolled
                  ? 'img/AVAPEX OFICIAL 01.png'
                  : 'img/AVAPEX OFICIAL 02 branca e amarela.png'
              }
              width={isScrolled ? 3182 : 3040}
              height={isScrolled ? 900 : 859}
              fetchpriority="high"
              alt="Logotipo Avapex Transportes"
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop menu */}
          <div
            id="desktop-menu"
            className={`hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-[#0f172a]' : 'text-slate-300'
            }`}
          >
            {navLinks.map(({ href, label, external }) => (
              <a
                key={href}
                href={href}
                className="hover:text-yellow-400 transition-colors"
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {label}
              </a>
            ))}
            <a
              href="#orcamento"
              className="bg-yellow-400 text-[#0f172a] px-6 py-2.5 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all font-extrabold flex items-center gap-2"
            >
              Contato
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            className={`md:hidden flex items-center justify-center p-2 rounded-lg bg-slate-800/80 border border-slate-700 shadow-lg backdrop-blur-sm transition-all active:scale-90 ${
              isScrolled ? 'text-[#0f172a]' : 'text-white'
            }`}
            id="menuBtn"
            aria-label="Abrir menu principal"
            onClick={toggleMenu}
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen overlay menu */}
      <div
        id="mobileMenu"
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 text-white bg-[#0f172a] ${
          menuOpen ? '' : 'hidden'
        }`}
      >
        <button
          className="absolute top-6 right-6 p-2 text-white hover:text-yellow-400 transition-colors"
          id="closeBtn"
          aria-label="Fechar menu"
          onClick={closeMenu}
        >
          <X className="w-10 h-10" aria-hidden="true" />
        </button>

        {navLinks.map(({ href, label, external }) => (
          <a
            key={href}
            href={href}
            className="text-2xl font-bold hover:text-yellow-400"
            onClick={closeMenu}
            {...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {label}
          </a>
        ))}
        <a
          href="#orcamento"
          className="bg-yellow-400 text-[#0f172a] px-10 py-4 rounded-full font-extrabold shadow-2xl active:scale-95"
          onClick={closeMenu}
        >
          Contato
        </a>
      </div>
    </>
  )
}
