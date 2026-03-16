export default function Hero() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <img src="./img/fundo site mobile.jpg" width="5376" height="3072" alt="Fundo Logística Avapex" className="absolute inset-0 w-full h-full object-cover z-0 md:hidden" fetchPriority="high" />
        <video autoPlay muted loop playsInline preload="auto" poster="./img/caminhão.webp" className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block" aria-hidden="true">
          <source src="./img/videoSITE.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#0f172a]/80 z-10"></div>

        <div className="container mx-auto px-6 relative z-20 text-center md:text-left text-white mt-16" data-aos="fade-up" data-aos-duration="1000">
          <div className="inline-flex items-center gap-2 bg-transparent border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full text-xs font-bold uppercase mb-6 tracking-wider">
            Soluções Logísticas Integradas
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-2xl">
            Transporte e <br className="hidden md:block" />
            Movimentação com <br className="hidden md:block" />
            <span className="text-yellow-400">Excelência</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium">
            Há mais de 18 anos, conectando empresas e impulsionando negócios em todo o Brasil, oferecendo soluções logísticas com eficiência, segurança e alto desempenho.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-4 justify-center md:justify-start">
            <a href="#orcamento" className="bg-yellow-400 text-[#0f172a] px-8 py-4 rounded-full font-extrabold text-center shadow-xl hover:bg-yellow-500 hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg w-full sm:w-auto">
              Solicitar Orçamento
            </a>
            <a href="#servicos" className="bg-transparent border-2 border-slate-500 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 hover:border-white transition-all text-lg flex items-center justify-center w-full sm:w-auto">
              Nossos Serviços
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <section className="py-12 bg-white relative z-30 -mt-12 mx-6 md:mx-auto max-w-6xl rounded-2xl shadow-2xl border border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="p-4" data-aos="fade-up" data-aos-delay="0">
              <span className="block text-4xl font-extrabold text-[#0f172a] mb-1">18</span>
              <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">Anos de Experiência</span>
            </div>
            <div className="p-4 pt-8 md:pt-4" data-aos="fade-up" data-aos-delay="100">
              <span className="block text-4xl font-extrabold text-[#0f172a] mb-1">9001</span>
              <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">ISO de Qualidade</span>
            </div>
            <div className="p-4 pt-8 md:pt-4" data-aos="fade-up" data-aos-delay="200">
              <span className="block text-4xl font-extrabold text-[#0f172a] mb-1">24/7</span>
              <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">Suporte Operacional</span>
            </div>
            <div className="p-4 pt-8 md:pt-4" data-aos="fade-up" data-aos-delay="300">
              <span className="block text-4xl font-extrabold text-yellow-500 mb-1">100%</span>
              <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">Foco em Segurança</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
