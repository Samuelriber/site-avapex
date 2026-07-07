import { WHATSAPP_TAIS } from '../../../constants/contact'
import { buildWhatsappHref } from '../utils/whatsapp'

const EQUIPMENT = [
  {
    id: '01',
    name: 'Empilhadeira Diesel 16T',
    role: 'Carga Pesada / Força Máxima',
    img: '/lp/equipamentos-estrategicos/empilhadeira16.webp',
    fit: 'object-cover',
  },
  {
    id: '02',
    name: 'Empilhadeira Diesel 7T',
    role: 'Versatilidade / Agilidade',
    img: '/lp/equipamentos-estrategicos/empilhadeira7t.webp',
    fit: 'object-contain',
  },
  {
    id: '03',
    name: 'Empilhadeira Diesel 10T',
    role: 'Movimentação / Estabilidade',
    img: '/lp/equipamentos-estrategicos/empilhadeira10t.webp',
    fit: 'object-cover',
  },
  {
    id: '04',
    name: 'Caminhão 3/4 Carroceria',
    role: 'Transporte / Alcance',
    img: '/lp/equipamentos-estrategicos/caminhao-3x4.webp',
    fit: 'object-contain',
  },
]

function EquipmentCard({ id, name, role, img, fit }) {
  return (
    <div className="flex flex-col relative overflow-hidden group p-4 bg-eqp-panel-sunken border industrial-border card-hover">
      {/* número decorativo */}
      <div className="absolute top-0 right-0 p-3 select-none opacity-25 z-20 pointer-events-none">
        <span className="eqp-h1 text-eqp-caution leading-none">{id}</span>
      </div>

      {/* imagem */}
      <div className="h-40 md:h-48 w-full mb-4 relative z-10 overflow-hidden bg-eqp-ink-deep rounded-sm">
        <img
          alt={name}
          loading="lazy"
          decoding="async"
          className={`w-full h-full ${fit} transform group-hover:scale-105 transition-transform duration-500`}
          src={img}
        />
      </div>

      {/* nome */}
      <h3 className="eqp-h2 text-eqp-chalk mb-1 line-clamp-2">{name}</h3>

      {/* especialidade */}
      <div className="eqp-label-caps uppercase text-eqp-caution mb-4 mt-auto">{role}</div>

      {/* CTA */}
      <a
        href={buildWhatsappHref(WHATSAPP_TAIS, name)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full text-center"
      >
        Solicitar Orçamento
      </a>
    </div>
  )
}

export default function EstrRoster() {
  return (
    <section className="py-16 md:py-24 bg-eqp-ink">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="eqp-h2 text-eqp-chalk whitespace-nowrap">Equipamentos Estratégicos</h2>
          <div className="h-1 flex-grow bg-eqp-caution/60" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EQUIPMENT.map(item => (
            <EquipmentCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
