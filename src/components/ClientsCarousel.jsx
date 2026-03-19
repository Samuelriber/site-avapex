// ClientsCarousel.jsx
// The infinite scroll animation is kept in CSS (src/index.css) using translate3d
// for GPU-accelerated performance — identical to the original implementation.

const row1Logos = [
  { src: 'img/cliente-gps.png', alt: 'Logotipo Cliente Grupo GPS', width: 300, height: 139, className: 'h-16' },
  { src: 'img/cliente-usiminas.png', alt: 'Logotipo Cliente Usiminas', width: 500, height: 139, className: 'h-16' },
  { src: 'img/cliente-mrs.png', alt: 'Logotipo Cliente MRS', width: 2560, height: 1199, className: 'h-16' },
  { src: 'img/cliente-magnesita.png', alt: 'Logotipo Cliente RHI Magnesita', width: 3840, height: 2318, className: 'h-16' },
  { src: 'img/cliente-vale.png', alt: 'Logotipo Cliente Vale', width: 960, height: 375, className: 'h-14' },
  { src: 'img/cliente-vli.png', alt: 'Logotipo Cliente VLI', width: 512, height: 512, className: 'h-16' },
]

const row2Logos = [
  { src: 'img/cliente-mip.png', alt: 'Logotipo Cliente MIP Engenharia', width: 521, height: 195, className: 'h-16' },
  { src: 'img/cliente-milplan.png', alt: 'Logotipo Cliente Milplan', width: 500, height: 393, className: 'h-16' },
  { src: 'img/cliente-timken.png', alt: 'Logotipo Cliente Timken', width: 708, height: 145, className: 'h-14' },
  { src: 'img/cliente-aterpa.png', alt: 'Logotipo Cliente Aterpa', width: 1727, height: 559, className: 'h-16' },
  { src: 'img/cliente-reframax.webp', alt: 'Logotipo Cliente Reframax', width: 458, height: 122, className: 'h-14' },
  { src: 'img/cliente-terraco.png', alt: 'Logotipo Cliente Terraço', width: 213, height: 40, className: 'h-16' },
]

// Each track needs two copies of the logo-set to create the seamless loop
function LogoSet({ logos, hidden = false }) {
  return (
    <div className="logo-set" aria-hidden={hidden || undefined}>
      {logos.map(({ src, alt, width, height, className }) => (
        <img
          key={src + (hidden ? '-dup' : '')}
          src={src}
          width={width}
          height={height}
          alt={hidden ? '' : alt}
          loading="lazy"
          decoding="async"
          className={`client-logo ${className} w-auto object-contain shrink-0`}
        />
      ))}
    </div>
  )
}

export default function ClientsCarousel() {
  return (
    <section id="credibilidade" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0f172a] text-3xl md:text-4xl font-extrabold mb-4">
            Empresas que confiam na Avapex
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A sua carga tratada com o mesmo padrão de exigência das maiores indústrias do país.
          </p>
        </div>

        <div className="logo-carousel" aria-label="Principais clientes" data-aos="zoom-in">
          {/* Row 1 — scrolls left */}
          <div className="logo-track row-1">
            <LogoSet logos={row1Logos} />
            <LogoSet logos={row1Logos} />
            {/* Duplicate sets for seamless loop */}
            <LogoSet logos={row1Logos} hidden />
            <LogoSet logos={row1Logos} hidden />
          </div>

          {/* Row 2 — scrolls right */}
          <div className="logo-track row-2">
            <LogoSet logos={row2Logos} />
            <LogoSet logos={row2Logos} />
            <LogoSet logos={row2Logos} hidden />
            <LogoSet logos={row2Logos} hidden />
          </div>
        </div>
      </div>
    </section>
  )
}
