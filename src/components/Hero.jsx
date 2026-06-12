import { COMPANY_YEARS_EXPERIENCE } from '../constants/company'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Sentinel: Header.jsx IntersectionObserver watches this.
          Placed ~60px from top so the header flips after a natural scroll. */}
      <div
        id="header-trigger"
        className="absolute top-[60px] left-0 w-full h-px pointer-events-none"
        aria-hidden="true"
      />

      {/* Sentinel: FloatingButtons.jsx shows back-to-top after this leaves viewport (~400px) */}
      <div
        id="backtotop-trigger"
        className="absolute top-[400px] left-0 w-full h-px pointer-events-none"
        aria-hidden="true"
      />

      {/* Mobile background image — foto horizontal, caminhão no lado direito.
          object-[70%_50%] desloca o enquadramento para mostrar a frente do caminhão
          no centro da tela. Ajuste fino visual: aumente % para ir mais à direita. */}
      <img
        src="img/hero-mobile.webp"
        alt="Caminhão com carreta em rodovia ao pôr do sol"
        className="absolute inset-0 w-full h-full object-cover object-[70%_50%] z-0 md:hidden"
        fetchpriority="high"
      />

      {/* Desktop background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        aria-hidden="true"
      >
        <source src="img/videoSITE.webm" type="video/webm" />
      </video>

      {/* Overlay desktop — camada única flat */}
      <div className="absolute inset-0 bg-[#0f172a]/80 z-10 hidden md:block" />

      {/* Overlay mobile — céu claro no topo e CTAs na base exigem escurecimento
          diferenciado: gradiente topo-pesado + base-pesada para garantir contraste. */}
      <div className="absolute inset-0 bg-[#0f172a]/60 z-10 md:hidden" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/95 via-[#0f172a]/50 to-[#0f172a]/85 z-10 md:hidden" />

      {/* Diagonal accent — subtle yellow polygon bottom-right */}
      <svg
        className="absolute bottom-0 right-0 z-10 w-72 h-72 pointer-events-none"
        viewBox="0 0 288 288"
        aria-hidden="true"
      >
        <polygon points="288,144 288,288 0,288" fill="#F5C518" opacity="0.05" />
      </svg>

      {/* Content */}
      <div
        className="container mx-auto px-6 relative z-20 text-center text-white mt-16 flex flex-col items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="inline-flex items-center gap-2 bg-transparent border border-brand-yellow text-brand-yellow px-5 py-2 rounded-none text-xs font-bold uppercase mb-6 tracking-wider">
          Soluções Logísticas Integradas
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl">
          Transporte e <br className="hidden md:block" />
          Movimentação com <br className="hidden md:block" />
          <span className="text-yellow-400">Excelência</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
          Há mais de {COMPANY_YEARS_EXPERIENCE} anos, conectando empresas e impulsionando negócios em todo o Brasil, oferecendo
          soluções logísticas com eficiência, segurança e alto desempenho.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-4 justify-center">
          <a
            href="#orcamento"
            className="bg-brand-yellow text-brand-navy px-8 py-4 rounded-none font-extrabold text-center shadow-xl hover:bg-yellow-500 hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg w-full sm:w-auto"
          >
            Solicitar Orçamento
          </a>

          <a
            href="#servicos"
            className="bg-transparent border-2 border-slate-500 backdrop-blur-sm text-white px-8 py-4 rounded-none font-bold text-center hover:bg-white/10 hover:border-white transition-all text-lg flex items-center justify-center w-full sm:w-auto"
          >
            Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  )
}
