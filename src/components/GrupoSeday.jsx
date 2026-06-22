import { useEffect, useRef, useState } from 'react'
import { LOGO_COLOR } from '../styles/logoStyles'

const empresas = [
  {
    logo: '/img/img/Logos/logo-avapex-transportes-v1.svg',
    alt: 'Avapex Transportes',
    logoHref: '#home',
    logoHeight: '72px',
    label: 'Início',
  },
  {
    logo: '/img/img/Logos/seday-logo-gps.svg',
    alt: 'Seday Equipamentos',
    logoHref: 'https://seday.com.br/',
    logoHeight: '110px',
    label: 'Visitar site',
  },
  {
    logo: '/img/img/Logos/logo-innomach-equipamentos-branco.svg',
    alt: 'Innomach Equipamentos e Peças',
    logoHref: 'https://www.innomach.com.br/',
    logoHeight: '72px',
    label: 'Visitar site',
  },
]

export default function GrupoSeday() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="grupo-seday" className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">

        {/* Título da seção */}
        <p className="text-slate-500 text-base md:text-lg text-center max-w-2xl leading-relaxed">
          Movendo negócios, entregando resultados.{' '}
          <span className="text-brand-navy font-bold">Descubra a força do Grupo Seday.</span>
        </p>

        {/* Logo Grupo Seday */}
        <img
          src="/img/img/Logos/grupo-seday-topo.png"
          alt="Grupo Seday"
          className="w-full max-w-4xl h-auto"
        />

        {/* Logos das empresas em linha */}
        <div ref={ref} className="flex flex-wrap items-center justify-center gap-10">
          {empresas.map((empresa, i) => (
            <a
              key={empresa.alt}
              href={empresa.logoHref}
              target={empresa.logoHref.startsWith('http') ? '_blank' : '_self'}
              rel={empresa.logoHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={`Ir para ${empresa.alt}`}
              className="flex flex-col items-center gap-2 group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 150}ms, transform 0.5s ease ${i * 150}ms`,
              }}
            >
              <img
                src={empresa.logo}
                alt={empresa.alt}
                style={{ ...LOGO_COLOR, height: empresa.logoHeight }}
                className="transition-all duration-300 group-hover:opacity-60 group-hover:scale-105"
              />

              {/* Underline hover */}
              <span className="h-[2px] bg-brand-yellow w-0 group-hover:w-full transition-all duration-300 rounded" />

              {/* Indicador animado — abaixo da logo */}
              <span
                className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow flex items-center gap-1"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(8px)',
                  transition: `opacity 0.5s ease ${i * 150 + 300}ms, transform 0.5s ease ${i * 150 + 300}ms`,
                }}
              >
                {empresa.label}
                <svg
                  width="10" height="10" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" aria-hidden="true"
                  className="animate-bounce"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
