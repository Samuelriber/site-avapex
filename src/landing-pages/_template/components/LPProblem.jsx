// Visitante se reconhece na dor. Border-left vermelha = sinal visual de risco.
// Transição amarela quebra o padrão e anuncia a solução.

export default function LPProblem({ config = {} }) {
  return (
    <section className="lp-dark lp-section">
      <div className="lp-container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', marginBottom: '0.75rem' }}>
            {config.titulo}
          </h2>
        </div>

        <div className="lp-grid-2" style={{ gap: '1rem', marginBottom: '3rem' }}>
          {config.itens?.map((item, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,0,0,0.2)',
              borderLeft: '4px solid #ef4444',
              padding: '1.25rem 1.5rem',
              display: 'flex', flexDirection: 'column', gap: '0.5rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.2rem' }}>{item.emoji}</span>
                {/* A dor está no título — não enterrada no parágrafo */}
                <strong style={{ color: '#fff', fontSize: '0.95rem' }}>{item.dor}</strong>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: 0, paddingLeft: '2rem' }}>
                → {item.impacto}
              </p>
            </div>
          ))}
        </div>

        {/* Transição para solução — bloco amarelo quebra o padrão visual */}
        {config.transicao && (
          <div style={{ background: 'var(--lp-yellow)', padding: '1.5rem 2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--lp-navy)', fontWeight: 700, fontSize: '1.1rem', margin: 0, fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.02em' }}>
              {config.transicao}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
