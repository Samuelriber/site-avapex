// Hero: visitante entende a proposta em 3 segundos — H1 → prova social → CTA.

export default function LPHero({ config = {} }) {
  return (
    <section className="lp-dark" style={{ padding: '6rem 0 4rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="lp-container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>

        {/* Badge — contexto imediato */}
        <div className="lp-badge">{config.badge}</div>

        {/* H1 — benefício direto, não nome do serviço */}
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.05 }}>
          {config.titulo}
        </h1>

        {/* Subtítulo — diferencial único */}
        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          {config.subtitulo}
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="#formulario" className="lp-btn-primary" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
            {config.cta_primary}
          </a>
          <a href="#prova-social" className="lp-btn-secondary">
            {config.cta_secondary}
          </a>
        </div>

        {/* Prova social imediata — logos grandes */}
        {config.clientes_logos?.length > 0 && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              {config.clientes_label}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              {config.clientes_logos.map((logo, i) => (
                <img key={i} src={logo.src} alt={logo.alt}
                     style={{ height: '56px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.8 }} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
