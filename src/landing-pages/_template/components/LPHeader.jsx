// Header sticky com border-bottom amarela — CTA sempre visível em todo scroll.

export default function LPHeader({ config = {} }) {
  return (
    <header style={{
      background: 'var(--lp-navy)',
      borderBottom: '2px solid var(--lp-yellow)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div className="lp-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <img
          src={config.logo}
          alt="Avapex Transportes"
          style={{ height: '44px', width: 'auto', filter: 'brightness(0) invert(1)' }}
        />
        <a href={config.cta_anchor} className="lp-btn-primary" style={{ fontSize: '0.85rem', padding: '12px 28px' }}>
          {config.cta_label}
        </a>
      </div>
    </header>
  )
}
