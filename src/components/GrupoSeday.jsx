import { LOGO_COLOR } from '../styles/logoStyles'

const empresas = [
  {
    logo: '/img/img/Logos/logo-avapex-transportes-v1.svg',
    alt: 'Avapex Transportes',
    tagline: 'Transporte rodoviário de cargas',
    descricao: 'Especialistas em transporte pesado, movimentação industrial e locação de equipamentos em todo o Brasil.',
    href: '#home',
    cta: 'Você está aqui',
    logoHref: '#home',
    logoHeight: '72px',
  },
  {
    logo: '/img/img/Logos/seday-logo-gps.svg',
    alt: 'Seday Equipamentos',
    tagline: 'Locação de máquinas e equipamentos',
    descricao: 'Frota de linha amarela e equipamentos de movimentação para os mais exigentes canteiros de obra.',
    href: 'https://seday.com.br/',
    cta: 'Visitar site',
    logoHref: 'https://seday.com.br/',
    logoHeight: '110px',
  },
  {
    logo: '/img/img/Logos/logo-innomach-equipamentos-branco.svg',
    alt: 'Innomach Equipamentos e Peças',
    tagline: 'Equipamentos e peças industriais',
    descricao: 'Soluções em equipamentos e peças para operações industriais de alta demanda e precisão.',
    href: 'https://www.innomach.com.br/',
    cta: 'Visitar site',
    logoHref: 'https://www.innomach.com.br/',
    logoHeight: '72px',
  },
]

export default function GrupoSeday() {
  return (
    <section id="grupo-seday" className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">

        {/* Cabeçalho com logo SVG */}
        <div className="flex justify-center mb-6">
          <img
            src="/img/img/Logos/grupo-seday-topo.png"
            alt="Grupo Seday — Ecossistema de Soluções"
            className="w-full max-w-6xl h-auto"
          />
        </div>

        {/* Cards das empresas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
          {empresas.map((empresa) => (
            <div
              key={empresa.alt}
              className="bg-white p-8 flex flex-col gap-6 items-center text-center hover:bg-slate-50 transition-colors group"
            >
              {/* Logo */}
              <div className="h-32 flex items-center justify-center">
                <a
                  href={empresa.logoHref}
                  target={empresa.logoHref.startsWith('http') ? '_blank' : '_self'}
                  rel={empresa.logoHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`Ir para ${empresa.alt}`}
                  className="hover:opacity-70 transition-opacity"
                >
                  <img
                    src={empresa.logo}
                    alt={empresa.alt}
                    style={{ ...LOGO_COLOR, height: empresa.logoHeight }}
                  />
                </a>
              </div>

              {/* Divisor amarelo */}
              <div className="w-8 h-0.5 bg-brand-yellow" />

              {/* Tagline */}
              <p className="text-brand-yellow text-xs font-bold uppercase tracking-widest">
                {empresa.tagline}
              </p>

              {/* Descrição */}
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                {empresa.descricao}
              </p>

              {/* CTA */}
              <a
                href={empresa.href}
                target={empresa.href.startsWith('http') ? '_blank' : '_self'}
                rel={empresa.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-brand-navy text-xs font-bold
                           uppercase tracking-widest border-b border-slate-300
                           hover:border-brand-yellow hover:text-brand-yellow
                           transition-colors pb-1"
              >
                {empresa.cta}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Rodapé da seção */}
        <p className="text-center text-slate-400 text-xs uppercase tracking-widest mt-10">
          Sinergia estratégica para garantir capacidade de atendimento completa
        </p>

      </div>
    </section>
  )
}
