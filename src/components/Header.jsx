import { useState, useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen]       = useState(false)
  const [scrolled, setScrolled]       = useState(false)
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      setShowBackTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(v => !v)
  const closeMenu  = () => setMenuOpen(false)
  const scrollTop  = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* ── Back-to-top ─────────────────────────────────────── */}
      <button
        id="backToTop"
        onClick={scrollTop}
        className={`fixed bottom-6 left-6 z-50 bg-[#0f172a] text-white p-3 rounded-full shadow-2xl hover:bg-yellow-400 hover:text-[#0f172a] transition-all duration-300 border border-slate-700 hover:scale-110${showBackTop ? '' : ' opacity-0 pointer-events-none translate-y-10'}`}
        aria-label="Voltar ao topo"
      >
        <i data-lucide="chevron-up" className="w-6 h-6" aria-hidden="true"></i>
      </button>

      {/* ── WhatsApp float ──────────────────────────────────── */}
      <a
        href="https://wa.me/553184657066"
        target="_blank"
        rel="noopener noreferrer"
        title="Fale com a Avapex no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-all flex items-center justify-center group hover:scale-110 border-2 border-white/20"
      >
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold shadow-lg">
          Fale com um Especialista
          <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-slate-800"></span>
        </span>
        <img src="./img/whatsapp.png" alt="Logotipo WhatsApp" width="40" height="40" fetchPriority="high" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      </a>

      {/* ── Main header ─────────────────────────────────────── */}
      <header
        id="main-header"
        className={`fixed w-full z-40 bg-[#0f172a]/95 backdrop-blur-sm border-b border-slate-700 transition-all duration-300 py-4${scrolled ? ' scrolled' : ''}`}
      >
        <nav className="container mx-auto px-6 md:px-10 flex justify-between items-center">
          <a href="#home" className="flex items-center" aria-label="Página Inicial Avapex">
            <img id="logo-white" src="./img/AVAPEX OFICIAL 02 branca e amarela.png" width="3040" height="859" fetchPriority="high" alt="Logotipo Avapex Transportes Branca" className="h-10 md:h-12 w-auto object-contain transition-all duration-300" />
            <img id="logo-dark"  src="./img/AVAPEX OFICIAL 01.png"                   width="3182" height="900" alt="Logotipo Avapex Transportes Escura"  className="h-10 md:h-12 w-auto object-contain transition-all duration-300 hidden" />
          </a>

          <div id="desktop-menu" className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-300 transition-colors duration-300">
            <a href="#home"          className="hover:text-yellow-400 transition-colors">Início</a>
            <a href="#servicos"      className="hover:text-yellow-400 transition-colors">Serviços</a>
            <a href="#equipamentos"  className="hover:text-yellow-400 transition-colors">Nossa Frota</a>
            <a href="#mvv"           className="hover:text-yellow-400 transition-colors">MVV</a>
            <a href="#credibilidade" className="hover:text-yellow-400 transition-colors">Clientes</a>
            <a href="#faq"           className="hover:text-yellow-400 transition-colors">FAQ</a>
            <a href="#quem-somos"    className="hover:text-yellow-400 transition-colors">Quem Somos</a>
            <a href="https://avapextransportes.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Trabalhe Conosco</a>
            <a href="#orcamento" className="bg-yellow-400 text-[#0f172a] px-6 py-2.5 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all font-extrabold flex items-center gap-2">
              Contato
            </a>
          </div>

          <button
            className={`md:hidden flex items-center justify-center p-2 rounded-lg bg-slate-800/80 border border-slate-700 shadow-lg backdrop-blur-sm transition-all active:scale-90${scrolled ? ' text-[#0f172a]' : ' text-white'}`}
            id="menuBtn"
            onClick={toggleMenu}
            aria-label="Abrir menu principal"
          >
            <i data-lucide="menu" className="w-6 h-6" aria-hidden="true"></i>
          </button>
        </nav>
      </header>

      {/* ── Mobile menu overlay ─────────────────────────────── */}
      <div id="mobileMenu" className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 text-white bg-[#0f172a]${menuOpen ? '' : ' hidden'}`}>
        <button className="absolute top-6 right-6 p-2 text-white hover:text-yellow-400 transition-colors" id="closeBtn" onClick={closeMenu} aria-label="Fechar menu">
          <i data-lucide="x" className="w-10 h-10" aria-hidden="true"></i>
        </button>
        <a href="#home"          onClick={closeMenu} className="text-2xl font-bold hover:text-yellow-400">Início</a>
        <a href="#servicos"      onClick={closeMenu} className="text-2xl font-bold hover:text-yellow-400">Serviços</a>
        <a href="#equipamentos"  onClick={closeMenu} className="text-2xl font-bold hover:text-yellow-400">Nossa Frota</a>
        <a href="#mvv"           onClick={closeMenu} className="text-2xl font-bold hover:text-yellow-400">MVV</a>
        <a href="#credibilidade" onClick={closeMenu} className="text-2xl font-bold hover:text-yellow-400">Clientes</a>
        <a href="#faq"           onClick={closeMenu} className="text-2xl font-bold hover:text-yellow-400">FAQ</a>
        <a href="#quem-somos"    onClick={closeMenu} className="text-2xl font-bold hover:text-yellow-400">Quem Somos</a>
        <a href="https://avapextransportes.vagas.solides.com.br/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="text-2xl font-bold hover:text-yellow-400">Trabalhe Conosco</a>
        <a href="#orcamento" onClick={closeMenu} className="bg-yellow-400 text-[#0f172a] px-10 py-4 rounded-full font-extrabold shadow-2xl active:scale-95">Contato</a>
      </div>
    </>
  )
}
