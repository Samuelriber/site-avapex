// Footer minimalista — logo, copyright, link de volta ao site principal.

export default function LPFooter() {
  return (
    <footer className="lp-dark" style={{ padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="lp-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <img
          src="/img/img/Logos/logo-avapex-transportes-v1.svg"
          alt="Avapex Transportes"
          style={{ height: '36px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.6 }}
        />
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
          © 2026 Avapex Transportes
        </span>
        <a href="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}>
          ← Voltar ao site principal
        </a>
      </div>
    </footer>
  )
}
