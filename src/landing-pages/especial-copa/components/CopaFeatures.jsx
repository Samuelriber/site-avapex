import { Truck, Wrench, Headphones } from 'lucide-react'

const FEATURES = [
  {
    Icon: Truck,
    title: 'Entrega Rápida',
    text: 'Logística otimizada para colocar o equipamento na sua obra em tempo recorde.',
  },
  {
    Icon: Wrench,
    title: 'Frota Revisada',
    text: 'Manutenção em dia garantindo performance máxima sem paradas imprevistas.',
  },
  {
    Icon: Headphones,
    title: 'Suporte 24/7',
    text: 'Nossa equipe joga junto com você o tempo todo. Assistência a qualquer hora.',
  },
]

function FeatureItem({ Icon, title, text }) {
  return (
    <div className="flex items-start gap-6">
      <div
        className="copa-icon-box w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center shrink-0 border shadow-lg"
        style={{ background: 'rgba(17,20,21,0.8)', borderColor: 'rgba(243,190,85,0.5)' }}
      >
        <Icon className="copa-icon w-8 h-8 md:w-9 md:h-9" style={{ color: '#F3BE55' }} />
      </div>
      <div>
        <h4 className="text-2xl md:text-[28px] text-white font-bold mb-2">{title}</h4>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: 'rgba(243,190,85,0.75)' }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

export default function CopaFeatures() {
  return (
    <section
      className="py-16 md:py-24 px-6 md:px-20 relative overflow-hidden"
      style={{ background: 'rgba(17,20,21,0.65)', backdropFilter: 'blur(12px)' }}
    >
      {/* glow decorativo */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: 'rgba(243,190,85,0.08)' }}
      />

      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        {/* headline */}
        <div className="md:w-1/2 text-center">
          <h2
            className="text-[48px] md:text-[110px] md:leading-[115px] uppercase leading-tight tracking-tight drop-shadow-md"
            style={{ color: '#F3BE55' }}
          >
            ENTRE EM CAMPO
            <br />
            COM A{' '}
            <span style={{ color: '#009B3A' }}>AVAPEX</span>
          </h2>
        </div>

        {/* lista de diferenciais */}
        <div className="flex flex-col gap-8 md:w-1/2">
          {FEATURES.map(item => (
            <FeatureItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
