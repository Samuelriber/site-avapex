import { useState } from 'react'
import SectionHeader from './SectionHeader'

const logos = [
  { src: 'img/img/Empresas/GPS.svg',       name: 'Grupo GPS',    href: 'https://gpssa.com.br/' },
  { src: 'img/img/Empresas/USIMINAS.svg',  name: 'Usiminas',     href: 'https://www.usiminas.com/' },
  { src: 'img/img/Empresas/MRS.svg',       name: 'MRS Logística',href: 'https://www.mrs.com.br/' },
  { src: 'img/img/Empresas/MAGNESITA.svg', name: 'RHI Magnesita',href: 'https://www.rhimagnesita.com/pt/' },
  { src: 'img/img/Empresas/VALE.svg',      name: 'Vale',         href: 'https://vale.com/pt' },
  { src: 'img/img/Empresas/VLI.svg',       name: 'VLI',          href: 'https://www.vli-logistica.com.br/' },
  { src: 'img/img/Empresas/MIP.svg',       name: 'MIP Engenharia',href: 'https://mipengenharia.com.br/' },
  { src: 'img/img/Empresas/MILPLAN.svg',   name: 'Milplan',      href: 'https://sustentabilidade.milplan.com.br/' },
  { src: 'img/img/Empresas/TIMKEN.svg',    name: 'Timken',       href: 'https://www.timkenstorebrasil.com.br/' },
  { src: 'img/img/Empresas/ATERPA.svg',    name: 'Aterpa',       href: 'https://www.grupoaterpa.com.br/' },
  { src: 'img/img/Empresas/REFRAMAX.svg',  name: 'Reframax',     href: 'https://reframax.com.br/portal/' },
  { src: 'img/img/Empresas/TERRAÇO.svg',   name: 'Terraço',      href: 'https://construtoraterraco.com.br/' },
]

const row1 = logos.slice(0, 6)
const row2 = logos.slice(6)

function LogoImg({ src, name }) {
  const [hovered, setHovered] = useState(false)
  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      style={{
        maxHeight: '100px',
        minHeight: '72px',
        maxWidth: '100%',
        width: 'auto',
        objectFit: 'contain',
        opacity: hovered ? 1 : 0.85,
        transition: 'opacity 0.3s',
        imageRendering: 'auto',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  )
}

function CarouselLogo({ src, name, href }) {
  const inner = (
    <div className="flex items-center justify-center px-6 shrink-0">
      <LogoImg src={src} name={name} />
    </div>
  )

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar site ${name}`}
    >
      {inner}
    </a>
  ) : inner
}

export default function ClientsCarousel() {
  return (
    <section id="credibilidade" className="py-16 bg-white border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <SectionHeader
          title="Clientes que confiam na Avapex"
          subtitle="Atendemos empresas de referência nos setores de mineração, siderurgia e ferrovia."
          className="mb-0"
        />
      </div>

      {/* Desktop: carrossel animado em 2 filas */}
      <div className="hidden md:block" data-aos="fade-up" data-aos-delay="100">
        <div className="logo-carousel">
          <div className="logo-track row-1 hardware-accel">
            <div className="logo-set">
              {row1.map((l) => <CarouselLogo key={l.name} src={l.src} name={l.name} href={l.href} />)}
            </div>
            <div className="logo-set" aria-hidden="true">
              {row1.map((l) => <CarouselLogo key={l.name + '-dup'} src={l.src} name={l.name} href={l.href} />)}
            </div>
          </div>
          <div className="logo-track row-2 hardware-accel">
            <div className="logo-set">
              {row2.map((l) => <CarouselLogo key={l.name} src={l.src} name={l.name} href={l.href} />)}
            </div>
            <div className="logo-set" aria-hidden="true">
              {row2.map((l) => <CarouselLogo key={l.name + '-dup'} src={l.src} name={l.name} href={l.href} />)}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: grid estático 2 colunas */}
      <div className="md:hidden grid grid-cols-2 gap-8 px-8">
        {logos.map((logo) => (
          <div key={logo.name} className="flex items-center justify-center py-2">
            <CarouselLogo src={logo.src} name={logo.name} href={logo.href} />
          </div>
        ))}
      </div>
    </section>
  )
}
