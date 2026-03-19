// Hero.jsx
// Contains #header-trigger sentinel (invisible 1px div) observed by Header.jsx
// to switch between transparent-dark and white header styles.
// Also contains #backtotop-trigger sentinel observed by FloatingButtons.jsx.

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

      {/* Mobile background image */}
      <img
        src="img/fundo site mobile.jpg"
        width="5376"
        height="3072"
        alt="Fundo Logística Avapex"
        className="absolute inset-0 w-full h-full object-cover z-0 md:hidden"
        fetchpriority="high"
      />

      {/* Desktop background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="img/caminhão.webp"
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        aria-hidden="true"
      >
        <source src="img/videoSITE.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/80 z-10" />

      {/* Content */}
      <div
        className="container mx-auto px-6 relative z-20 text-center md:text-left text-white mt-16"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="inline-flex items-center gap-2 bg-transparent border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full text-xs font-bold uppercase mb-6 tracking-wider">
          Soluções Logísticas Integradas
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl">
          Transporte e <br className="hidden md:block" />
          Movimentação com <br className="hidden md:block" />
          <span className="text-yellow-400">Excelência</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium">
          Há mais de 18 anos, conectando empresas e impulsionando negócios em todo o Brasil, oferecendo
          soluções logísticas com eficiência, segurança e alto desempenho.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-4 justify-center md:justify-start">
          <a
            href="#orcamento"
            className="bg-yellow-400 text-[#0f172a] px-8 py-4 rounded-full font-extrabold text-center shadow-xl hover:bg-yellow-500 hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg w-full sm:w-auto"
          >
            Solicitar Orçamento
          </a>

          <a
            href="#servicos"
            className="bg-transparent border-2 border-slate-500 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 hover:border-white transition-all text-lg flex items-center justify-center w-full sm:w-auto"
          >
            Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  )
}
