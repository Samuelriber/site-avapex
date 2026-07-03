const SECTORS = [
  {
    titulo: 'Mineração',
    texto: 'Equipamentos homologados para as condições extremas do setor de mineração.',
    img: '/img/img/fundos/cards lps/lp-empilhadeira-eletrica-minerção.jpg',
    alt: 'Mina a céu aberto em operação',
  },
  {
    titulo: 'Indústria',
    texto: 'Soluções eficientes para linhas de produção e movimentação de materiais pesados.',
    img: '/img/img/fundos/cards lps/lp-empilhadeira-eletrica-indutria.jpg',
    alt: 'Planta industrial iluminada à noite',
  },
  {
    titulo: 'Logística',
    texto: 'Agilidade e alta disponibilidade para centros de distribuição e armazéns operando 24/7.',
    img: '/img/img/fundos/cards lps/lp-empilhadeira-eletrica-logistica.jpg',
    alt: 'Centro de distribuição com estruturas porta-paletes',
  },
]

export default function EqpSectors() {
  return (
    <section className="py-16 md:py-24 bg-eqp-ink-deep border-y border-eqp-seam">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="eqp-h2 text-eqp-chalk mb-4">Setores de Atuação</h2>
          <p className="text-eqp-fog">Equipamentos robustos preparados para as demandas mais exigentes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECTORS.map(({ titulo, texto, img, alt }) => (
            <a key={titulo} href="#orcamento" className="group relative overflow-hidden border industrial-border bg-eqp-ink block">
              <div className="h-72 overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl uppercase mb-2 text-eqp-chalk">{titulo}</h3>
                <p className="text-sm text-eqp-fog mb-4">{texto}</p>
                <span className="text-eqp-caution font-bold text-sm uppercase tracking-wider group-hover:underline">
                  Ver Soluções →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
