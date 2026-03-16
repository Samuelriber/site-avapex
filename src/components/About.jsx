export default function About() {
  const row1 = [
    { src: './img/cliente-gps.png',       alt: 'Logotipo Cliente Grupo GPS',    w: 300,  h: 139,  cls: 'h-16' },
    { src: './img/cliente-usiminas.png',  alt: 'Logotipo Cliente Usiminas',     w: 500,  h: 139,  cls: 'h-16' },
    { src: './img/cliente-mrs.png',       alt: 'Logotipo Cliente MRS',          w: 2560, h: 1199, cls: 'h-16' },
    { src: './img/cliente-magnesita.png', alt: 'Logotipo Cliente RHI Magnesita',w: 3840, h: 2318, cls: 'h-16' },
    { src: './img/cliente-vale.png',      alt: 'Logotipo Cliente Vale',         w: 960,  h: 375,  cls: 'h-14' },
    { src: './img/cliente-vli.png',       alt: 'Logotipo Cliente VLI',          w: 512,  h: 512,  cls: 'h-16' },
  ]
  const row2 = [
    { src: './img/cliente-mip.png',       alt: 'Logotipo Cliente MIP Engenharia',w: 521, h: 195, cls: 'h-16' },
    { src: './img/cliente-milplan.png',   alt: 'Logotipo Cliente Milplan',       w: 500, h: 393, cls: 'h-16' },
    { src: './img/cliente-timken.png',    alt: 'Logotipo Cliente Timken',        w: 708, h: 145, cls: 'h-14' },
    { src: './img/cliente-aterpa.png',    alt: 'Logotipo Cliente Aterpa',        w: 1727,h: 559, cls: 'h-16' },
    { src: './img/cliente-reframax.webp', alt: 'Logotipo Cliente Reframax',      w: 458, h: 122, cls: 'h-14' },
    { src: './img/cliente-terraco.png',   alt: 'Logotipo Cliente Terraço',       w: 213, h: 40,  cls: 'h-16' },
  ]

  /* Each logo-set repeats logos twice; track has two identical sets → seamless -50% loop */
  const LogoSet = ({ logos, hidden }) => (
    <div className="logo-set" aria-hidden={hidden || undefined}>
      {[...logos, ...logos].map(({ src, alt, w, h, cls }, i) => (
        <img key={i} src={src} width={w} height={h} alt={hidden ? '' : alt} loading="lazy" decoding="async" className={`client-logo ${cls} w-auto object-contain shrink-0`} />
      ))}
    </div>
  )

  return (
    <>
      {/* ── Credibilidade ───────────────────────────────────── */}
      <section id="credibilidade" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-[#0f172a] text-3xl md:text-4xl font-extrabold mb-4">Empresas que confiam na Avapex</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A sua carga tratada com o mesmo padrão de exigência das maiores indústrias do país.</p>
          </div>

          <div className="logo-carousel" aria-label="Principais clientes" data-aos="zoom-in">
            <div className="logo-track row-1">
              <LogoSet logos={row1} />
              <LogoSet logos={row1} hidden />
            </div>
            <div className="logo-track row-2">
              <LogoSet logos={row2} />
              <LogoSet logos={row2} hidden />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quem Somos ──────────────────────────────────────── */}
      <section id="quem-somos" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-3 block">Nossa História</span>
              <h2 className="text-[#0f172a] text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Mais de 18 Anos de <br />Excelência Operacional</h2>

              <p className="text-slate-600 text-base leading-relaxed mb-4">
                A <strong>Avapex Transportes</strong> consolida-se pela credibilidade e forte compromisso com os resultados de cada cliente. Somos especialistas em transporte rodoviário, movimentação de cargas pesadas e locação de máquinas e equipamentos (oferecidos com ou sem mão de obra), atendendo principalmente aos exigentes setores da mineração, indústria e ferrovia.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Para otimizar a sua cadeia de suprimentos, contamos com uma capilaridade estratégica: nossa matriz está localizada às margens da BR-040 em Conselheiro Lafaiete/MG. Possuímos também um posto avançado em Belo Horizonte/MG, filiais operacionais nos estados de São Paulo e Rio de Janeiro, além de unidades táticas de apoio em Juatuba/MG e Ipatinga/MG.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-yellow-500 mt-1 bg-yellow-50 p-2 rounded-lg"><i data-lucide="award" className="w-6 h-6" aria-hidden="true"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-sm">Certificação ISO 9001</h4>
                    <p className="text-xs text-slate-500 mt-1">Garantia de máxima qualidade e padronização operacional.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-yellow-500 mt-1 bg-yellow-50 p-2 rounded-lg"><i data-lucide="map" className="w-6 h-6" aria-hidden="true"></i></div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-sm">Cobertura Estratégica</h4>
                    <p className="text-xs text-slate-500 mt-1">Bases em MG, SP e RJ para pronto atendimento.</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="relative mt-10 lg:mt-0 lg:h-full min-h-[400px] md:min-h-[500px]">
              <div className="bg-[#f8fafc] rounded-[2rem] w-full relative shadow-lg border border-slate-200" style={{ minHeight: '400px' }}>
                <div className="absolute inset-0 bg-yellow-400 rounded-[2rem] transform rotate-2 opacity-30 -z-10"></div>
                <img src="./img/caminhão.webp" width="1360" height="907" alt="Foto Institucional de Caminhão Avapex Transportes" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover rounded-[2rem] z-10" />
                <div className="absolute bottom-4 left-4 md:bottom-8 md:-left-8 bg-white py-5 px-8 rounded-2xl flex flex-col items-center justify-center z-20 shadow-2xl border border-slate-100">
                  <span className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-none">18</span>
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest mt-2 text-center">Anos de<br />Experiência</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
