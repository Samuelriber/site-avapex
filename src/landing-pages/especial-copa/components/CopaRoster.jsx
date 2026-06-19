import { WHATSAPP_TAIS } from '../../../constants/contact'

const EQUIPMENT = [
  {
    id: '01',
    name: 'EMPILHADEIRA DIESEL 16T',
    role: 'ATAQUE / FORÇA BRUTA',
    img: '/lp/especial-copa/empilhadeira16.webp',
    fit: 'object-cover',
  },
  {
    id: '02',
    name: 'EMPILHADEIRA DIESEL 7T',
    role: 'MEIO-CAMPO / AGILIDADE',
    img: '/lp/especial-copa/empilhadeira7t.webp',
    fit: 'object-contain',
  },
  {
    id: '03',
    name: 'EMPILHADEIRA DIESEL 10T',
    role: 'MEIO-CAMPO / ESTABILIDADE',
    img: '/lp/especial-copa/empilhadeira10t.webp',
    fit: 'object-cover',
  },
  {
    id: '04',
    name: 'CAMINHÃO 3/4 CARROCERIA',
    role: 'DEFESA / ALCANCE',
    img: '/lp/especial-copa/caminhao-3x4.webp',
    fit: 'object-contain',
  },
]

function EquipmentCard({ id, name, role, img, fit }) {
  return (
    <div
      className="flex flex-col relative overflow-hidden group p-4 rounded-lg border transition-colors duration-300"
      style={{
        background: 'rgba(17,20,21,0.6)',
        backdropFilter: 'blur(4px)',
        borderColor: 'rgba(243,190,85,0.2)',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = '#009B3A')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(243,190,85,0.2)')}
    >
      {/* número decorativo */}
      <div className="absolute top-0 right-0 p-3 select-none opacity-20 z-20 pointer-events-none">
        <span className="text-5xl font-bold leading-none" style={{ color: '#F3BE55' }}>
          {id}
        </span>
      </div>

      {/* imagem */}
      <div
        className="h-40 md:h-48 w-full mb-4 relative z-10 overflow-hidden rounded"
        style={{ background: 'rgba(17,20,21,0.4)' }}
      >
        <img
          alt={name}
          loading="lazy"
          decoding="async"
          className={`w-full h-full ${fit} transform group-hover:scale-105 transition-transform duration-500`}
          src={img}
        />
      </div>

      {/* nome */}
      <h3 className="text-white text-2xl uppercase mb-1 line-clamp-2">{name}</h3>

      {/* posição */}
      <div
        className="text-xs font-bold uppercase tracking-widest mb-4 mt-auto"
        style={{ color: '#F3BE55', fontFamily: 'Hanken Grotesk, sans-serif' }}
      >
        {role}
      </div>

      {/* CTA */}
      <a
        href={WHATSAPP_TAIS}
        target="_blank"
        rel="noopener noreferrer"
        className="copa-card-btn w-full text-center text-lg uppercase py-2 rounded font-bold inline-flex items-center justify-center"
      >
        ESCALE AGORA
      </a>
    </div>
  )
}

export default function CopaRoster() {
  return (
    <section className="py-16 px-6 md:px-20 relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <h2
          className="text-4xl md:text-5xl uppercase whitespace-nowrap"
          style={{
            color: '#F3BE55',
            textShadow: '0 2px 10px rgba(0,0,0,0.95), 0 0 4px rgba(0,0,0,0.8)',
          }}
        >
          Escalação Principal
        </h2>
        <div className="h-[2px] flex-grow" style={{ background: 'rgba(243,190,85,0.7)' }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {EQUIPMENT.map(item => (
          <EquipmentCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
