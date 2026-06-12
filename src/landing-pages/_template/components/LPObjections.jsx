// Elimina objeções antes que o visitante pense nelas.
// Ícone com fundo amarelo + título que já entrega a resposta (REGRA 20/80).

import { ShieldCheck, Clock, FileCheck, MapPin, Truck, Users, Award, Zap, CheckCircle, Star } from 'lucide-react'

const ICON_MAP = {
  'shield-check': ShieldCheck,
  'clock':        Clock,
  'file-check':   FileCheck,
  'map-pin':      MapPin,
  'truck':        Truck,
  'users':        Users,
  'award':        Award,
  'zap':          Zap,
  'check-circle': CheckCircle,
  'star':         Star,
}

function DynamicIcon({ name, size, color }) {
  const Icon = ICON_MAP[name] || ShieldCheck
  return <Icon size={size} color={color} aria-hidden="true" />
}

export default function LPObjections({ items = [] }) {
  return (
    <section className="lp-dust lp-section">
      <div className="lp-container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
            Suas dúvidas respondidas antes de você perguntar
          </h2>
          <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto' }}>
            18 anos de operação ensinaram quais são as preocupações reais de quem contrata logística pesada.
          </p>
        </div>

        <div className="lp-grid-2" style={{ gap: '1.5rem' }}>
          {items.map((item, i) => (
            <div key={i} className="lp-card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              {/* Ícone com fundo amarelo */}
              <div style={{ background: 'var(--lp-yellow)', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DynamicIcon name={item.icone} size={20} color="var(--lp-navy)" />
              </div>
              <div>
                {/* Título DO card já entrega a resposta (REGRA 20/80) */}
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                  {item.titulo}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, margin: 0 }}>
                  {item.texto}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA após remover objeções */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#formulario" className="lp-btn-primary">Estou convencido — quero uma proposta</a>
        </div>
      </div>
    </section>
  )
}
