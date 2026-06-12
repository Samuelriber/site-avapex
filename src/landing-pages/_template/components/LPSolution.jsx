// Solução concreta em 3 passos. Número decorativo + border-top amarela por bloco.
// CTA após demonstrar o que o cliente recebe.

export default function LPSolution({ config = {} }) {
  return (
    <section className="lp-section" style={{ background: '#fff' }}>
      <div className="lp-container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
            {config.titulo}
          </h2>
          <div className="lp-accent-line" style={{ margin: '1rem auto' }} />
        </div>

        <div className="lp-grid-3">
          {config.itens?.map((item, i) => (
            <div key={i} style={{ position: 'relative', padding: '2rem', borderTop: '4px solid var(--lp-yellow)' }}>
              {/* Número decorativo de fundo */}
              <div style={{
                position: 'absolute', top: '0.5rem', right: '1rem',
                fontSize: '5rem', fontWeight: 800, color: 'rgba(245,197,24,0.08)',
                fontFamily: 'Barlow Condensed, sans-serif', lineHeight: 1,
                pointerEvents: 'none', userSelect: 'none',
              }}>
                {item.numero}
              </div>
              {/* Número visível */}
              <div style={{
                background: 'var(--lp-yellow)', color: 'var(--lp-navy)',
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                padding: '3px 10px', display: 'inline-block', marginBottom: '1rem',
              }}>
                {item.numero}
              </div>
              {/* Título = benefício, não descrição */}
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                {item.titulo}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
                {item.texto}
              </p>
            </div>
          ))}
        </div>

        {/* CTA após demonstrar a solução */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#formulario" className="lp-btn-primary" style={{ fontSize: '1rem', padding: '16px 40px' }}>
            Quero essa solução para minha operação
          </a>
        </div>
      </div>
    </section>
  )
}
