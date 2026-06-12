// Prova verificável. REGRA ABSOLUTA: foto + nome + cargo + empresa visíveis.
// Depoimento anônimo tem peso zero — fallback exibe iniciais em círculo navy.

export default function LPTestimonials({ items = [] }) {
  return (
    <section id="prova-social" className="lp-dust lp-section">
      <div className="lp-container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
            Quem já parou de se preocupar com logística
          </h2>
          <p style={{ color: '#666' }}>Resultados reais de quem escolheu a Avapex.</p>
        </div>

        <div className="lp-grid-3" style={{ gap: '1.5rem' }}>
          {items.map((item, i) => (
            <div key={i} className="lp-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Aspas decorativas */}
              <div style={{ color: 'var(--lp-yellow)', fontSize: '3rem', lineHeight: 1, fontFamily: 'Georgia, serif' }}>"</div>

              {/* Depoimento primeiro — maior peso de escaneabilidade */}
              <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.7, margin: 0, flex: 1 }}>
                {item.depoimento}
              </p>

              {/* Identidade verificável — OBRIGATÓRIO */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                {item.foto ? (
                  <img src={item.foto} alt={item.nome}
                       style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                ) : (
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'var(--lp-navy)', color: 'var(--lp-yellow)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '1rem', flexShrink: 0,
                  }}>
                    {item.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                )}
                <div>
                  <strong style={{ fontSize: '0.9rem', display: 'block' }}>{item.nome}</strong>
                  <span style={{ fontSize: '0.8rem', color: '#666' }}>{item.cargo} · {item.empresa}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
